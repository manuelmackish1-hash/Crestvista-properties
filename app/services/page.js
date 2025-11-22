
export default function Page(){
  const services = [
    {title:'Property Sales & Marketing', desc:'We help clients buy and sell residential & commercial properties with modern marketing tools and deep market knowledge.'},
    {title:'Land Acquisition & Plot Sales', desc:'We offer verified plots, manage due diligence, and guide clients through the full purchase process.'},
    {title:'Real Estate Consultancy', desc:'Professional advice on property investment, valuation guidance, and market insights.'},
    {title:'Property Development & Project Management', desc:'From planning to handover, we coordinate construction, approvals, and site supervision.'},
    {title:'Property Management', desc:'We handle rent collection, tenant sourcing, maintenance, and full property administration.'},
    {title:'Investment Support', desc:'We help investors identify high-return opportunities, evaluate risks, and structure deals.'},
  ]
  return (
    <section style={{padding:24,maxWidth:1100,margin:'0 auto'}}>
      <h2>Our Services</h2>
      <p>We provide a full suite of real estate services designed to help buyers, sellers and investors.</p>
      <div className="services-grid">
        {services.map((s,i)=>(
          <div key={i} className="service-card">
            <h3 style={{color:'#1b4d2e'}}>{s.title}</h3>
            <p style={{color:'#374151'}}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
