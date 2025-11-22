
import properties from '../../../data/properties.json'
import { notFound } from 'next/navigation'

export function generateStaticParams(){
  return properties.map(p=>({ id: p.id }))
}

export default function Page({ params }){
  const prop = properties.find(p=>p.id === params.id)
  if(!prop) return notFound()
  return (
    <section style={{padding:24, maxWidth:900, margin:'0 auto'}}>
      <h2>{prop.title}</h2>
      <div style={{display:'grid',gridTemplateColumns:'1fr 320px',gap:20,marginTop:12}}>
        <div>
          <img src={prop.image} style={{width:'100%',height:360,objectFit:'cover',borderRadius:8}}/>
          <p style={{marginTop:12}}>{prop.description}</p>
          <ul style={{marginTop:12}}>
            <li><strong>Size:</strong> {prop.size}</li>
            <li><strong>Beds:</strong> {prop.beds}</li>
            <li><strong>Baths:</strong> {prop.baths}</li>
          </ul>
        </div>
        <aside style={{background:'#fff',padding:16,borderRadius:8}}>
          <div style={{fontWeight:700,color:'#8b9b4a'}}>KES {prop.price.toLocaleString()}</div>
          <p style={{marginTop:8}}>{prop.location}</p>
          <p style={{marginTop:12}}>Contact us: 0758625209</p>
          <a href={'https://wa.me/254758625209'} className="cta" style={{display:'inline-block',marginTop:12}}>WhatsApp Agent</a>
        </aside>
      </div>
    </section>
  )
}
