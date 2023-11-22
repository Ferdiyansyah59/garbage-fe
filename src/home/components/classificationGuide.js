function ClassificationGuide() {
  const container = {
    fontFamily: "'Poppins', sans-serif",
    color: "#323516",
    marginTop: "5vh",
    marginBottom: "15vh",
    alignItems: "center"
  };
  
  return (
    <section style={container} className='bg-primary h-max pb-7'>
      <h1 className="text-white font-extrabold text-center text-5xl py-7">CARA PENGGUNAAN</h1>
      <div className="grid grid-rows-1 grid-flow-row px-36 auto-rows-min gap-4 w-full text-center md:grid-flow-col md:text-left md:place-content-center">
        <div className="row-span-2 rounded-full bg-green-50/40 w-max p-5 m-auto justify-center">
          <img src={require('./1.png')} alt="1" style={{width:"80px"}}></img>
        </div>
        <div className='h-min w-[25rem]'>
          <h1 className='text-2xl text-white font-semibold my-1'>1. Pilih Gambar</h1>
          <p className=''>Pilih gambar yang diinginkan</p>
        </div>
        <div className="row-span-2 rounded-full bg-green-50/40 w-max p-4 m-auto justify-center">
          <img src={require('./2.png')} alt="2"></img>
        </div>
        <div className='h-min w-[25rem]'>
          <h1 className='text-2xl text-white font-semibold my-1'>2. Klasifikasian</h1>
          <p className=''>Machine Learning akan mengklasifikasikan sampah yang dipilih.</p>
        </div>
        <div className="row-span-2 rounded-full bg-green-50/40 w-max p-4 m-auto justify-center">
          <img src={require('./3.png')} alt="3"></img>
        </div>
        <div className='h-min w-[25rem]'>
          <h1 className='text-2xl text-white font-semibold my-1'>3. Hasil Klasifikasi</h1>
          <p className=''>Ditampilkan berupa jenis, cara membuang, cara mendaur ulang, dampak positif dan negatf dari sampah tersebut.</p>
        </div>
      </div>
    </section>
  );
}

export default ClassificationGuide;
