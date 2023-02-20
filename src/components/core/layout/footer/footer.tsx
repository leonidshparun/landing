import Link from 'next/link'

export const Footer = () => {
  return (
    <footer>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/main">Main</Link>
        <Link href="/prices">Prices</Link>
        <Link href="/services">Services</Link>
      </nav>
    </footer>
  )
}
