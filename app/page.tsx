import Link from 'next/link'

export default function Page() {
  return (
    <>
      <h1 className=" text-3xl font-bold underline bg-slate-500 text-blue-900">Hello, Next.js!</h1>

      <Link href="/blog">Link to Blog</Link>
    </>
  )
}
