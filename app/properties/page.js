
import Link from 'next/link'
import properties from '../../data/properties.json'

export default function Page(){
  return (
    <section style={{padding:24, maxWidth:1100, margin:'0 auto'}}>
      <h2>All Properties</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20, marginTop:18}}>
        {properties.map(p=>(
          <article key={p.id} style={{background:'#fff',borderRadius:12,padding:12,boxShadow:'0 6px 20px rgba(15,23,42,0.06)'}}>
            <img src={p.image} style={{width:'100%',height:140,objectFit:'cover'}}/>
            <h3 style={{marginTop:12}}>{p.title}</h3>
            <p style={{color:'#6b7280'}}>{p.location}</p>
            <div style={{marginTop:8,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div style={{fontWeight:700,color:'#8b9b4a'}}>KES {p.price.toLocaleString()}</div>
              <Link href={'/properties/'+p.id}>View</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
