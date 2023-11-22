import { Carousel, IconButton } from "@material-tailwind/react";
 
export function CarouselDefault() {
  return (
    <Carousel 
      className="rounded-xl" 
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
      )}
    >
      <p className='text-xl'>Dampak membuang sampah sembarangan akan merusak pemandangan, mendatangkan bau yang tidak sedap, mendatangkan banjir level rendah sampai yang tinggi, mendatangkan berbagai penyakit dan dapat mencemari lingkungan.</p>
      <p className='text-xl'>Dampak membuang sampah sembarangan akan merusak pemandangan, mendatangkan bau yang tidak sedap, mendatangkan banjir level rendah sampai yang tinggi, mendatangkan berbagai penyakit dan dapat mencemari lingkungan.</p>
      <p className='text-xl'>Dampak membuang sampah sembarangan akan merusak pemandangan, mendatangkan bau yang tidak sedap, mendatangkan banjir level rendah sampai yang tinggi, mendatangkan berbagai penyakit dan dapat mencemari lingkungan.</p>
    </Carousel>
  );
}

function Impact() {
  const container = {
    fontFamily: "'Poppins', sans-serif",
    color: "#323516",
    marginTop: "5vh",
    marginBottom: "15vh",
    alignItems: "center",
    textAlign: "center",
  };

  const box = {
    backgroundColor: "#B5C1A3",
    margin: "5vh 28% 5vh 28%",
    textAlign: "justify",
    textJustify: "inter-word",
    padding:"5vh 5vh 5vh 5vh",
  };

  return (
    <section style={container}>
      <h1 className='text-5xl'><strong>DAMPAK</strong></h1>
      <div className='rounded-2xl' style={box}>
        <h1 className='text-3xl' style={{textAlign: "center",marginBottom:"5vh"}}><strong>Lingkungan</strong></h1>
        <CarouselDefault />
      </div>
      <div>
      </div>
    </section>
  );
}

export default Impact;