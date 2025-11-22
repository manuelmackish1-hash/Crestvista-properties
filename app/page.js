
import Link from 'next/link'
import properties from '../data/properties.json'

export default function Page(){
  const featured = properties.slice(0,3)
  return (
    <section>
      <div className="hero container">
        <div className="left">
          <h1>Find your perfect home with CRESTVISTA PROPERTIES LTD</h1>
          <p>Hand-picked properties across Nairobi. Trusted, professional service.</p>
          <Link href="/properties" className="cta">View Listings</Link>
        </div>
      </div>

      <h2 style={{marginTop:30}}>Featured Listings</h2>
      <div className="listings-grid">
        {featured.map(p=>(
          <article key={p.id} className="card">
            <img src={p.image} alt={p.title} />
            <div className="card-body">
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <h3 className="card-title">{p.title}</h3>
                <div className="price">KES {p.price.toLocaleString()}</div>
              </div>
              <p style={{color:'#6b7280'}}>{p.location}</p>
              <div style={{marginTop:12}}>
                <Link href={'/properties/'+p.id} style={{marginRight:12}}>View Property</Link>
                <a href={'https://wa.me/254758625209'} className="cta" style={{display:'inline-block'}}>WhatsApp</a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section style={{marginTop:40, padding:20, background:'#fafaf9', borderRadius:8}}>
        <h3>Need help finding a property?</h3>
        <p>Contact our team and we'll find the right home for you.</p>
        <a href="/contact" className="cta">Contact Us</a>
      </section>
    </section>
  )
}
