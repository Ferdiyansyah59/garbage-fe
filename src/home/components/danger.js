function Danger() {
  const container = {
    fontFamily: "'Poppins', sans-serif",
    color: "#323516",
    marginTop: "5vh",
    marginBottom: "15vh",
    justifyItems: "center",
    textAlign: "center",
  };

  const dangerImg = require('./danger.png');

  const box = {
    backgroundColor: "#B5C1A3",
    margin: "1vh 0 5vh 0",
    textAlign: "justify",
    textJustify: "inter-word",
    padding:"5vh 3vh 5vh 3vh",
    zIndex: "1",
    width:"36vh",
  };

  return (
    <section style={container}>
      <div className="flex flex-col md:flex-row justify-center ">
        <img src={dangerImg} alt="Earth Waste Pollution" className="flex-initial object-cover w-1/2 md:w-auto" style={{zIndex: "0"}}></img>
        <div className="grid justify-center align-center m-0" style={{transform:"translateX(-5rem)"}}>
          <h1 className='text-5xl justify-self-center' ><strong>BAHAYA SAMPAH</strong></h1>
          <div className='rounded-2xl justify-self-center' style={box}>
            <p className='text-xl'>Sampah plastik sangat berbahaya bagi lingkungan. Sampah plastik dapat menyebabkan terjadinya pencemaran tanah karena sifatnya yang sulit terdekomposisi, sehingga sangat berbahay bagi makhluk hidup yang tinggal di sekitarnya</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Danger;