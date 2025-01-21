import type { FetchOptions } from 'ofetch'

const config = useRuntimeConfig()

export const ghFetch: <T = any>(
  path: string,
  opts?: FetchOptions
) => Promise<T> = cachedFunction(
  <T = any>(path: string, opts: FetchOptions = {}) => {
    return $fetch<T>(path, {
      baseURL: 'https://api.github.com',
      method: (opts.method || 'GET') as any,
      headers: {
        Authorization: `Bearer ${config.github.token}`,
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'gitfirst.dev',
        Accept: 'application/vnd.github+json',
        ...opts.headers
      },
      query: opts.query
    })
  },
  {
    name: 'api',
    group: 'gh',
    maxAge: 60 * 60 * 6,
    staleMaxAge: 60 * 60 * 12
  }
)
