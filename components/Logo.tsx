export default function Logo() {
  return (
    <span className="logo" style={{display:'inline-flex',alignItems:'center',gap:10,color:'var(--cream)',fontWeight:800}}>
      <span style={{filter:'drop-shadow(0 0 6px rgba(255,154,77,.8))'}}>
        <span aria-hidden="true" style={{display:'block',width:40,height:40,background:'#FF9A4D',
          WebkitMask:'url(/logo-white.png) center/contain no-repeat',mask:'url(/logo.png) center/contain no-repeat'}}/>
      </span>
      Online Prop Firm
    </span>
  );
}