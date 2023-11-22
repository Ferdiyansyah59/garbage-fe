//import { Carousel,Typography,Button } from "@material-tailwind/react";

//import { Carousel } from "@material-tailwind/react";

// export function CarouselCustomNavigation() {
//   return (
//     <Carousel
//       className="rounded-xl"
//       navigation={({ setActiveIndex, activeIndex, length }) => (
//         <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
//           {new Array(length).fill("").map((_, i) => (
//             <span
//               key={i}
//               className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
//                 activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
//               }`}
//               onClick={() => setActiveIndex(i)}
//             />
//           ))}
//         </div>
//       )}
//     >
//       <img
//         src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
//         alt="image 1"
//         className="h-full w-full object-cover"
//       />
//       <img
//         src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
//         alt="image 2"
//         className="h-full w-full object-cover"
//       />
//       <img
//         src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
//         alt="image 3"
//         className="h-full w-full object-cover"
//       />
//     </Carousel>
//   );
// }


// import {Carousel, IconButton } from "@material-tailwind/react";
// import 'react-multi-carousel/lib/styles.css';
// function Type() {
//   const responsive = {
//         superLargeDesktop: {
//           // the naming can be any, depends on you.
//           breakpoint: { max: 4000, min: 3000 },
//           items: 5
//         },
//         desktop: {
//           breakpoint: { max: 3000, min: 1024 },
//           items: 3
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 464 },
//           items: 2
//         },
//         mobile: {
//           breakpoint: { max: 464, min: 0 },
//           items: 1
//         }
//       };
//   return (
//     <section className="bg-primary h-max place-content-center pb-8">
//       <h1 className="text-white font-bold text-center text-5xl py-8">JENIS SAMPAH</h1>
//       <Carousel responsive={responsive}>
//       <div className='grid grid-cols-3 grid-flow-col m-auto justify-center mx-96'>
//         <div className="bg-battery/60 h-[400px] w-[300px] rounded-2xl p-4 my-3 justify-self-center">
//           <div className='h-max'>
//           <img src={require('./icon1.png')} alt="Plastik" className='m-auto justify-center w-[100px]'></img>
//           </div>
//           <h1 className="text-[#E6E6E6] font-bold text-center text-3xl py-7">Plastik</h1>
//           <p className="text-[#E6E6E6] text-justify text-xl">Semua barang bekas atau tidak terpakai yang materialnya diproduksi dari bahan kimia tak terbarukan.</p>
//         </div>
//         <div className="bg-battery/60 h-[400px] w-[300px] rounded-2xl p-4 my-3 justify-self-center">
//         <div className='h-max'>
//           <img src={require('./icon2.png')} alt="Plastik" className='m-auto justify-center w-[100px]'></img>
//         </div>
//           <h1 className="text-[#E6E6E6] font-bold text-center text-3xl py-7">Kayu</h1>
//           <p className="text-[#E6E6E6] text-justify text-xl">Buangan dari proses produksi kayu yang dapat berupa serpihan atau sisa potongan kayu.</p>
//         </div>
//         <div className="bg-battery/60 h-[400px] w-[300px] rounded-2xl p-4 my-3 justify-self-center">
//         <div className='h-max'>
//           <img src={require('./icon3.png')} alt="Plastik" className='m-auto justify-center w-[100px]'></img>
//           </div>
//           <h1 className="text-[#E6E6E6] font-bold text-center text-3xl py-7">Baterai</h1>
//           <p className="text-[#E6E6E6] text-justify text-xl">Sampah B3 karena mengandung berbagai logam berat, seperti merkuri, mangan, timbal, cadmium, nikel dan lithium.</p>
//         </div>
//       </div>
//       </Carousel>
//     </section>
//   );
// }


 


import {Carousel, IconButton } from "@material-tailwind/react";
import 'react-multi-carousel/lib/styles.css';
function Type() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1024, min: 760 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 760, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (

    <section>
        <div className="bg-primary h-max place-content-center pb-8 ">
          <h1 className="text-white font-bold text-center text-5xl py-8">JENIS SAMPAH</h1>
        <div className='w-[1280px] m-9 place-items-center align-items-center'>
        <Carousel responsive={responsive} className="rounded-xl" 
      loop="True"
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}>
            <div className="bg-battery/60 h-[400px] w-[300px] rounded-2xl p-4 my-3 justify-self-center">
        <div className='h-max'>
         <img src={require('./icon1.png')} alt="Plastik" className='m-auto justify-center w-[100px]'></img>
          </div>
          <h1 className="text-[#E6E6E6] font-bold text-center text-3xl py-7">Plastik</h1>
          <p className="text-[#E6E6E6] text-justify text-xl">Semua barang bekas atau tidak terpakai yang materialnya diproduksi dari bahan kimia tak terbarukan.</p>
            </div>
            <div className="bg-battery/60 h-[400px] w-[300px] rounded-2xl p-4 my-3 justify-self-center">
         <div className='h-max'>
          <img src={require('./icon2.png')} alt="Plastik" className='m-auto justify-center w-[100px]'></img>
       </div>
         <h1 className="text-[#E6E6E6] font-bold text-center text-3xl py-7">Kayu</h1>
         <p className="text-[#E6E6E6] text-justify text-xl">Buangan dari proses produksi kayu yang dapat berupa serpihan atau sisa potongan kayu.</p>
       </div>
       <div className="bg-battery/60 h-[400px] w-[300px] rounded-2xl p-4 my-3 justify-self-center">
         <div className='h-max'>
          <img src={require('./icon3.png')} alt="Plastik" className='m-auto justify-center w-[100px]'></img>
          </div>
          <h1 className="text-[#E6E6E6] font-bold text-center text-3xl py-7">Baterai</h1>
          <p className="text-[#E6E6E6] text-justify text-xl">Sampah B3 karena mengandung berbagai logam berat, seperti merkuri, mangan, timbal, cadmium, nikel dan lithium.</p>
        </div>
        <div className="bg-battery/60 h-[400px] w-[300px] rounded-2xl p-4 my-3 justify-self-center">
      <div className='h-max'>
         <img src={require('./icon3.png')} alt="Plastik" className='m-auto justify-center w-[100px]'></img>
         </div>
         <h1 className="text-[#E6E6E6] font-bold text-center text-3xl py-7">Baterai</h1>
         <p className="text-[#E6E6E6] text-justify text-xl">Sampah B3 karena mengandung berbagai logam berat, seperti merkuri, mangan, timbal, cadmium, nikel dan lithium.</p>
        </div>
        </Carousel>
        </div>
        </div>
    </section>
  );
}

export default Type;


