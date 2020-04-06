import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <p>i am to wait, though waiting be so hell</p>
      <Link href="/about">
        <a>about</a>
      </Link>
    </div>
  )
}
