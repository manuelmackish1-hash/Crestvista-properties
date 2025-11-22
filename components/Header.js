
import Link from 'next/link'
export default function Header(){
  return (
    <header>
      <div className="container header-inner">
        <div className="brand">
          <img src="/logo.png" alt="logo"/>
          <div>
            <div style={{fontWeight:700,color:'#1b4d2e'}}>CRESTVISTA</div>
            <div style={{fontSize:12,color:'#6b7280'}}>Properties LTD</div>
          </div>
        </div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
