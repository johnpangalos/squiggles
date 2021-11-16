import { Router } from 'itty-router'

const router = Router()

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS,PUT',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept, Authentication',
  'Access-Control-Max-Age': '86400',
}

router.get('/', () => {
  return new Response(JSON.stringify({ message: 'Yay!' }))
})

// Include an options response
router.routes.push(['OPTIONS', /(.*)/, [() => new Response(null)]])

async function createSession(req: Request) {
  const auth = req.headers.get('Authentication')
  const result = await fetch(
    `https://oauth2.googleapis.com/tokeninfo?id_token=${auth?.substring(8)}`,
  )

  if (result.status >= 300) {
    console.log(await result.json())
    return new Response(null, { status: 400 })
  }
  return new Response(JSON.stringify({}))
}

router.post('/session', createSession)

function withCors(res: Response) {
  Object.entries(corsHeaders).forEach(([key, val]) => {
    res.headers.set(key, val)
  })
}

export default {
  fetch: async (req: Request): Promise<Response> => {
    const res = await router.handle(req)

    if (!(res instanceof Response))
      throw new Error('Expected router to return a response.')

    withCors(res)
    return res
  },
}
