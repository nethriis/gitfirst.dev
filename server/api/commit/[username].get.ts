export default defineEventHandler(async (event) => {
  const username = getRouterParam(event, 'username')

  if (!username || !username.match(/^[\w\-\d]+$/)) {
    throw createError({ message: 'Username is required' })
  }

  const [user, results] = await Promise.allSettled([
    ghFetch<APIUser>(`/users/${encodeURIComponent(username)}`),
    ghFetch<APISearchCommits>('/search/commits', {
      query: {
        q: `author:${encodeURIComponent(username)}`,
        order: 'asc',
        sort: 'committer-date',
        per_page: 1
      }
    })
  ])

  if (user.status === 'rejected') {
    throw createError({ statusCode: 404, message: 'User not found' })
  }
  if (results.status === 'rejected') {
    throw createError({ statusCode: 500, message: 'Github API error' })
  }

  const commits = results.value?.items

  if (!commits || commits.length === 0) {
    throw createError({ statusCode: 404, message: 'No commits found' })
  }

  return <FirstCommit>{
    date: commits[0].commit.author.date,
    link: commits[0].html_url,
    sha: commits[0].sha,
    message: commits[0].commit.message,
    author: {
      avatar: user.value?.avatar_url,
      name: user.value?.name,
      username: user.value?.login || commits[0].author.login,
      link: user.value?.html_url || commits[0].author.html_url
    },
    committer: {
      avatar: commits[0].committer.avatar_url,
      username: commits[0].committer.login
    },
    repository: {
      avatar: commits[0].repository.owner.avatar_url,
      full_name: commits[0].repository.full_name,
      link: commits[0].repository.html_url
    }
  }
})
