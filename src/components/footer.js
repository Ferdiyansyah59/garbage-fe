import { Link } from "react-router-dom";

function Footer() {
    const bodyfoot = {
      fontFamily: "'Poppins', sans-serif",
    display: "block",
    width: "100%",
    backgroundColor: "#8b9e70",
    paddingTop: "6vh",
    paddingBottom: "max-content",

    color: "white",
    margin: " 0 auto"
    };

    const toMid = {
    display: "table",
    borderCollapse: "separate",
    borderSpacing: "0 15px",
    alginItems: "space-between",
    textAlign: "center",
    width: "100%",
    paddingTop: "15px",
    paddingBottom: "15px",
    paddingLeft: "8vh",
    paddingRight: "8vh",
    cellSpacing: "0", 
    cellPadding: "0",
    marginLeft: "-9vh",
    };

    const container = {
      width: "100%",
      margin: "0 auto",
    };

    const line = {
    width: "100%",
    borderBottom: "1px solid white",
    paddingTop: "5vh",
    paddingLeft: "0",
    paddingRight: "0",
    margin: "0"
    };

    const footerLogo = {
      fontFamily: "'Fjalla One', sans-serif",
      padding: "4vh 5vh 4vh 8vh"
    }
    
  return (
    <footer style={bodyfoot}>
      <div style={container}>
        <table style={toMid}>
          <tr>
            <td className='text-l'><Link href="">Tentang</Link></td>
            <td className='text-l'><Link href="">Bahaya Sampah</Link></td>
            <td className='text-l'><Link href="">Dampak</Link></td>
          </tr>
          <tr>
            <td className='text-l'><Link href="">Cara Penggunaan</Link></td>
            <td className='text-l'><Link href="">Jenis Sampah</Link></td>
            <td className='text-l'><Link href="">Kontak Kami</Link></td>
          </tr>
        </table>
      </div>
      <div style={line}></div>
      <div style={footerLogo}>
      <h1 className='text-xl'>DaurUlang.in</h1>
      </div>

    </footer>
  );
}

export default Footer;