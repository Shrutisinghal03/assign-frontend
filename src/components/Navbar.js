import React, { useState } from 'react' 
import '../App.css' 

import logo from "../images/open-book.png"

const Navbar = () => { 
  return (
   <> 
   <header className='main-div'>
<div className='logo'>
    
  <img  className="logo" src={logo} alt="logoimg"/>
 
</div> 
<h2>PageTurners</h2>
<ul className='optn' >
    
  <a href="/">   <li>HOME</li></a>
     <li>ABOUT</li>
     

</ul>

   </header>
   
 
   </>
  )
}

export default Navbar