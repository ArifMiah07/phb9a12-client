import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import logo from '../../../../public/logo.png'
import logo2 from '../../../../public/logo2.png'
// import logo3 from '../../../../public/logo3.png'
// import logo4 from '../../../../public/logo4.png'
// import logo5 from '../../../../public/logo5.png'


const NavBar = () => {

    const [scrolled, setScrolled] = useState(false);


    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 50){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return ()=> {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const navLink = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/features'}>Features</Link></li>
        <li><Link to={'/product'}>Product</Link></li>
        <li><Link to={'/Feedback'}>Feedback</Link></li>
        <li><Link to={'/pricing'}>Pricing</Link></li>
    </>

  return (
    <nav className={`fixed z-10 w-full top-0 left-0 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}  navbar bg-base-100`}>
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navLink}
            </ul>
            </div>
            <a className={` btn btn-ghost text-2xl font-bold transition-all duration-300 ${scrolled ? 'text-4xl w-[220px] ' : 'w-[250px] text-2xl'}`}> <img className=" " src={logo2} alt="" /> </a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            {navLink}
            </ul>
        </div>
        <div className="navbar-end">
            <Link to={'/login'}><button className="btn btn-outline btn-primary">Login</button></Link>
        </div>
    </nav>
  );
};

export default NavBar;

