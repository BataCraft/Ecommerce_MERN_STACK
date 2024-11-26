import { Link, NavLink } from "react-router-dom"
import { IoCartOutline, IoClose, IoMenu, IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {

    const [visible, setvisible] = useState(false);
  return (
    <>
        <nav className="flex items-center justify-between font-medium py-5">
            
                <div id="Logo">
                    <NavLink to = '/'><h1 className="text-2xl font-medium ">Echo<span className="text-xl font-semibold text-green-700">Shop</span></h1></NavLink>
                </div>

                <ul className="hidden sm:flex text-gray-600 gap-5 text-sm">
                    
                    <NavLink 
                    to= '/'
                    className="flex flex-col items-center justify-between gap-1"> 
                        <p>Home</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
                    </NavLink>

                    <NavLink 
                    to= '/collection'
                    className="flex flex-col items-center justify-between gap-1"> 
                        <p>Collection</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
                    </NavLink>

                    <NavLink 
                    to= '/about'
                    className="flex flex-col items-center justify-between gap-1"> 
                        <p>About</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
                    </NavLink>

                    <NavLink 
                    to= '/contact'
                    className="flex flex-col items-center justify-between gap-1"> 
                        <p>Contact</p>
                        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"/>
                    </NavLink>

                    
                </ul>
          
          <div className="flex  items-center gap-6 ">

           <div className="cursor-pointer "> <IoSearchSharp className="text-xl"/></div>

            <div className="group relative ">
               <div className="cursor-pointer"> 
                <FaRegUser className="text-xl" />
                <div className="group-hover:block hidden absolute pt-0 right-0 dropdown-menu">

                    <div className="flex flex-col  gap-2 w-36  py-3 px-5  bg-slate-100 text-gray-700 rounded-lg">
                        <p className="cursor-pointer hover:text-black">My Profile</p>
                        <p className="cursor-pointer hover:text-black">Orders</p>
                        <p className="cursor-pointer hover:text-black">Logout</p>
                    </div>

                </div>
               
               
               </div>
            </div>

            <Link to='/cart'  className="relative">
            <IoCartOutline className="text-xl"/>
            <p className="absolute right-[-5px] bottom-[-5px] w-4 leading-4 text-center  bg-black text-white aspect-square rounded-full text-[8px]">10</p>
                </Link>


                <div 
                className="text-xl sm:hidden" 
                onClick={()=> setvisible(true)}
                
                >
                    <IoMenu />
                </div>
          </div>
          {/* Side bar menu for small Screen */}

          <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>

                <div className="flex flex-col text-gray-600 ">
                    <div className="flex items-center gap-4 p-3 cursor-pointer">
                        <IoClose className="absolute right-3 text-2xl top-2" onClick={()=> setvisible(false)}/>

                    </div>

                    <NavLink 
                    to= '/' 
                    onClick={()=>setvisible(false)}
                    className="py-2 pl-4"> 
                        <p>Home</p>
                        
                    </NavLink>

                    <NavLink 
                    to= '/collection' 
                    onClick={()=>setvisible(false)}
                    className="py-2 pl-4"> 
                        <p>Collection</p>
                        
                    </NavLink>

                    <NavLink 
                    to= '/about' 
                    onClick={()=>setvisible(false)}
                    className="py-2 pl-4"> 
                        <p>About</p>
                        
                    </NavLink>

                    <NavLink 
                    to= '/contact' 
                    onClick={()=>setvisible(false)}
                    className="py-2 pl-4"> 
                        <p>Contact</p>
                        
                    </NavLink>

                </div>
             
          </div>

        </nav>
    </>
  )
}

export default NavBar