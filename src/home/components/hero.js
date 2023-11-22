import { Link } from "react-router-dom";

function Hero() {
  const logo = {fontFamily:"'Fjalla One', sans-serif"}
  const dangerImg = require('./HeroImage.png');

  return (
    
    <section>
      <div className="flex-wrap text-center bg-[#8B9E70] mx-auto">
      <h1 style={logo} className="md:text-8xl md:grid hidden p-16 text-white">DaurUlang.in</h1>
      </div >
      <div >
        <p className='text-center font-semibold text-s mt-5 md:text-xl '>
        Kurangi, Daur Ulang, dan Bangun Masa Depan yang Bersih.
        </p>
      </div> 
       <div className="justify-center flex mt-6 md:w-full">
        <Link style={{zIndex:"1"}} to="/klasifikasi"><button className="w-96 h-12 object-center bg-[#323516] text-white rounded-3xl text-2xl font-semibold ">KLASIFIKASI</button></Link>
        </div>
        <div className="max-w-[1440px] mx-auto justify-center grid md:grid-cols-1">
           <img src={dangerImg} style={{transform:"translateY(-3rem)",zIndex:"0"}} className="grid h-[80vh] object-cover"></img>
           </div>

     
    </section>
  );
}

export default Hero;
