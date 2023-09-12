import React,{useState,useRef} from 'react'
import '../Styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark,faCaretDown,faMagnifyingGlass,faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const [isSidebarOpen,setSidebarOpen] = useState(false)
    const [isMenuOneOpen, setMenuOneOpen] = useState(false);
    const [isMenuTwoOpen, setMenuTwoOpen] = useState(false);
    const [isMenuThreeOpen, setMenuThreeOpen] = useState(false);
    const [isSearchbarOpen, setSearchOpen] = useState(false);
    const [text,setText] = useState("")
    function clickHandler(){
        setSidebarOpen(true)
        setSearchOpen(false)
    }
    function clickHandler2(){
        setSidebarOpen(false)
        setMenuOneOpen(false)
        setMenuTwoOpen(false)
        setMenuThreeOpen(false)
    }
    function clickHandler3(){
        setMenuOneOpen(prev => !prev)
        setMenuTwoOpen(false)
        setMenuThreeOpen(false)
    }
    function clickHandler4(){
        setMenuTwoOpen(prev => !prev)
        setMenuOneOpen(false)
        setMenuThreeOpen(false)
    }
    function clickHandler5(){
        setMenuThreeOpen(prev => !prev)
        setMenuTwoOpen(false);
        setMenuOneOpen(false)
    }
    function clickHandler6(){
        setSearchOpen(prev => !prev)
    }
  return (
    <nav className={
            !isSidebarOpen && !isSearchbarOpen 
            ? "nav"
            :  !isSidebarOpen && isSearchbarOpen
            ? "nav openSearch"
            :  isSidebarOpen && isMenuOneOpen
            ? "nav openNav openDrop"
            :  isSidebarOpen && isMenuTwoOpen
            ? "nav openNav openDropTwo"
            : isSidebarOpen && isMenuThreeOpen
            ? "nav openNav openDropThree"
            : "nav openNav"}>
        <a href="#" className="logo"><span style={{color: "#3ac3d6"}}>af</span><span style={{color: "#015b7e"}}>ren</span></a>
        <div id="overflow">
            <ul className="nav-links">
                <FontAwesomeIcon icon={faXmark} onClick={clickHandler2} className="navCloseBtn" />
                {/* <i className="fa fa-times navCloseBtn"></i> */}
                <li><a href="">Find Talent</a></li>
                <li className="dropdown">
                    <p className="dropbtn" onClick={clickHandler3} id="droptn-one">Find Work 
                        {/* <i className="fas fa-caret-down"></i> */}
                        <FontAwesomeIcon icon={faCaretDown} />
                    </p>
                    <div className="dropdown-content" id="drp-cont-one">
                        <a href="#">list</a>
                        <a href="#">list</a>
                        <a href="#">list</a>
                    </div>
                </li>
                <li className="dropdown">
                    <p className="dropbtn" onClick={clickHandler4} id="droptn-two">Resources 
                        {/* <i className="fas fa-caret-down"></i> */}
                        <FontAwesomeIcon icon={faCaretDown} />
                    </p>
                    <div className="dropdown-content" id="drp-cont-two">
                        <a href="#">list</a>
                        <a href="#">list</a>
                        <a href="#">list</a>
                    </div>
                </li>
                <li className="dropdown">
                    <p className="dropbtn" onClick={clickHandler5} id="droptn-three">Services category 
                        {/* <i className="fas fa-caret-down"></i> */}
                        <FontAwesomeIcon icon={faCaretDown} />
                    </p>
                    <div className="dropdown-content" id="drp-cont-three">
                        <a href="#">list</a>
                        <a href="#">list</a>
                        <a href="#">list</a>
                    </div>
                </li>
                <li><a href="">About</a></li>
                <div id="drp-nav-but">
                    <a href="" id="drp-strt-butt" className="butt-in-nav">Get Started</a>
                    <a href="" id="drp-sign-butt" className="butt-in-nav">Sign in</a>
                </div>
                 {/* <li><a href="" className="butt-in-nav">Sign in</a></li>
                <li><a href="" className="butt-in-nav">Get Started</a></li> */}
            </ul>
        </div>
        <div id="nav-buttons">
            <a href="" id="si-innav">Sign in</a>
            <a href="" id="start-navbut">Get Started</a>
        </div>
        {/* <i className="fa fa-search search-icon" id="searchIcon"></i> */}
        <FontAwesomeIcon onClick={clickHandler6} icon={!isSearchbarOpen ? faMagnifyingGlass : faXmark} className='search-icon' id="searchIcon" />
        <div className="search-box">
            {/* <i className="fa fa-search search-icon"></i> */}
            <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
            <input 
                type="text" 
                placeholder="Search here..." 
                value={text}
                onChange={(e)=>setText(e.target.value)}    
            />
        </div>
        {/* <i className="fas fa-bars navOpenBtn"></i> */}
        <FontAwesomeIcon icon={faBars} onClick={clickHandler} className='navOpenBtn' />
    </nav>
  )
}
