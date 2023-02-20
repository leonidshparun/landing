import Link from "next/link";

export const Header = () => {
    return <header>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/main">Main</Link>
            <Link href="/prices">Prices</Link>
            <Link href="/services">Services</Link>
        </nav>
    </header>
}
