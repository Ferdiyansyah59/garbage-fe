import { Link } from "react-router-dom";

function Nav() {
  const logo = {fontFamily:"'Fjalla One', sans-serif"}
  return (
    <div className='flex md:flex-row justify-between items-center h-24 mx-auto text-white'>
    <nav className='flex justify-between w-screen p-10 bg-[#8B9E70] md:flex-row'>
      <p style={logo} className='w-full text-3xl text-white  mt-6 mx-5'>DaurUlang.in</p>
        <ul className='md:flex hidden'>
          <li className='flex mt-8 mx-5 font-bold'><Link to="/">Beranda</Link></li>
          <li className='flex mt-8 mx-5 font-bold'><a href="/./#about">Tentang</a></li>
          <li className='flex mt-8 mx-5 font-bold'><Link to="/klasifikasi">Klasifikasi</Link></li>
          <li className='flex mt-8 mx-5 font-bold'><Link to="/">FAQ</Link></li>
        </ul>
    </nav>
    </div>
  );
}

export default Nav;