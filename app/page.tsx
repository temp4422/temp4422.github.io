import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold text-blue-900 underline bg-slate-500">Hello, Next.js!</h1>
      <div className="w-40 h-40 bg-blue-600 rounded-lg">styled with tailwindcss</div>
      <Link href="/blog">Link to Blog</Link>
    </>
  )
}
