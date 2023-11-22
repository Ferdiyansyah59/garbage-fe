function About() {
  const tentang = require('./tentang.png');
  return (
    <section>
      <div id='about' className='flex flex-wrap justify-center items-center mt-[-3rem] '>
        <div className='w-1/2 pl-96'>
        <h1 className='font-bold text-7xl mb-3 text-[#323516] object-cover'>TENTANG</h1>
        <p className='text-2xl'>DaurUlang.in merupakan website yang digunakan untuk memudahkan kita dalam mengklasifikasikan berbagai sampah.</p>
        </div>
        <div>
        <img src={tentang} className="grid h-[60vh] object-cover pr-60" ></img>
        </div>
      </div> 
    </section>
  );
}

export default About;
