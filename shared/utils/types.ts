interface CommitAuthor {
  date: string
  name: string
  email: string
}

interface ItemCommit {
  url: string
  author: CommitAuthor
  committer: CommitAuthor
  message: string
  tree: {
    url: string
    sha: string
  }
  comment_count: number
}

interface ItemAuthor {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  user_view_type: string
  site_admin: boolean
}

interface ItemRepository {
  id: number
  node_id: string
  name: string
  full_name: string
  private: boolean
  owner: ItemAuthor
  html_url: string
  description: string | null
  fork: boolean
  url: string
  forks_url: string
  keys_url: string
  collaborators_url: string
  teams_url: string
  hooks_url: string
  issue_events_url: string
  events_url: string
  assignees_url: string
  branches_url: string
  tags_url: string
  blobs_url: string
  git_tags_url: string
  git_refs_url: string
  trees_url: string
  statuses_url: string
  languages_url: string
  stargazers_url: string
  contributors_url: string
  subscribers_url: string
  subscription_url: string
  commits_url: string
  git_commits_url: string
  comments_url: string
  issue_comment_url: string
  contents_url: string
  compare_url: string
  merges_url: string
  archive_url: string
  downloads_url: string
  issues_url: string
  pulls_url: string
  milestones_url: string
  notifications_url: string
  labels_url: string
  releases_url: string
  deployments_url: string
}

interface CommitItem {
  url: string
  sha: string
  node_id: string
  html_url: string
  comments_url: string
  commit: ItemCommit
  author: ItemAuthor
  committer: ItemAuthor
  parents: []
  repository: ItemRepository
  score: number
}

export interface APIUser {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  user_view_type: string
  site_admin: boolean
  name: string | null
  company: string | null
  blog: string
  location: string | null
  email: string | null
  hireable: boolean | null
  bio: string | null
  twitter_username: string | null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

export interface APISearchCommits {
  total_count: number
  incomplete_results: boolean
  items: CommitItem[]
}

export interface FirstCommit {
  date: string
  link: string
  sha: string
  message: string
  author: {
    avatar: string
    name: string
    username: string
    link: string
  }
  committer: {
    avatar: string
    username: string
  }
  repository: {
    avatar: string
    full_name: string
    link: string
  }
}
