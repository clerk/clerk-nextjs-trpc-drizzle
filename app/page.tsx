import Link from 'next/link'
import Posts from './components/Posts'

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <Posts />
      <Link
        href="/posts/create"
        className="inline-block border-2 border-current text-current px-4 py-2 rounded-lg hover:scale-[0.98] transition-all"
      >
        Create New Post
      </Link>
    </div>
  )
}
