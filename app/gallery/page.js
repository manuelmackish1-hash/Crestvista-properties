
export default function Page(){
  const images = ['/images/prop1.jpg','/images/prop2.jpg','/images/prop3.jpg','/images/prop4.jpg','/images/prop5.jpg','/images/prop6.jpg']
  return (
    <section style={{padding:24}}>
      <h2>Gallery</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,marginTop:12}}>
        {images.map((src,i)=>(<img key={i} src={src} style={{width:'100%',height:180,objectFit:'cover',borderRadius:8}}/>))}
      </div>
    </section>
  )
}
