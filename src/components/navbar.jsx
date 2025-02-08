import { Link } from 'react-router-dom';
import './navbar.css';
import logo from './Youtube_logo.png';
import dp from './dp.jpg';

function Navbar({setSidebar,sidebar,setCategory}) {
    return (
        <div className="nav">
            <div className="navLeft">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height='30px' onClick={()=>{setSidebar(prev=>!prev);console.log(sidebar)}}><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" /></svg>
                <Link to={'/'} className="logo" onClick={()=>setCategory(0)}>
                    <img src={logo} alt="" />
                    <h2>Youtube</h2>
                </Link>
            </div>
            <div className="navMid">
                <input type="text" placeholder="Search" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height='20px' className='svgIcon'><path d="M507.3 460.7l-120.5-120.5C416.7 299.5 432 256.8 432 213 432 95.4 336.6 0 219 0S6 95.4 6 213s95.4 213 213 213c43.8 0 86.5-15.3 126.2-43.2l120.5 120.5c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.4-24.6 0-34zM219 362c-88.4 0-160-71.6-160-160S130.6 42 219 42s160 71.6 160 160-71.6 160-160 160z" /></svg>
            </div>
            <div className="navRight">
                <div className="create">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height='25px'><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" /></svg>
                    <h3>Create</h3>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height='25px'><path d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8l0-18.8c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" /></svg>
                <img src={dp} alt=""/>
            </div>
        </div>
    )
}
export default Navbar;