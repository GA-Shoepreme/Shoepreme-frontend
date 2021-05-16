import React from 'react';
import SearchBar from './SearchBar'
import ShoppingBagIcon from './icons/ShoppingIcon'
import Logo from './icons/logo'
import SearchIcon from './icons/SearchIcon'
import {Link} from 'react-router-dom'
import { Sling as Hamburger } from 'hamburger-react'
import {useState} from 'react'
function NavBar({itemCounts}) {
    let menuLabel = ['Air Jordans', 'Nike', 'Adidas', 'Yeezy', 'More Sneakers', 'New Releases']
    
    let [isOpen, setIsOpen]= useState(false);

    const toggleMenu =()=>{
        let navMenu = document.querySelector('#navMenu')
        let navDisplay = window.getComputedStyle(navMenu).getPropertyValue('display')
        setIsOpen(!isOpen)
        if(navDisplay==='none'){
            navMenu.style.display = 'flex'
        } else {
            navMenu.style.display = 'none'
        }
    }
    
    let menuList = menuLabel.map((label)=>{
        return(
            <Link key={label} to={`/${label.toLowerCase().replace(' ','_')}`} onClick={toggleMenu}>{label}</Link>
        )
    })

    return (
        <nav className="navigationBar">
            <div className="menuLeftSide">
                <div className="logo">
                    <Link to='/'>
                        <Logo size={140}/>
                    </Link>
                </div>
            </div>
            <div className="menuRightSide">
                <div id="navMenu">
                    {menuList}
                </div>
                <div className="menuIcon">
                <SearchIcon size={24}/>
                </div>
                {/* <SearchBar/> */}
                <div className="menuIcon">
                    <Link to='/my/checkout'>
                        <ShoppingBagIcon size={24}/>
                        <div className="itemCount">{(itemCounts>0)?itemCounts:null}</div>
                    </Link>
                </div>
                <div className="menuButton" onClick={toggleMenu}>
                    <Hamburger size={24} toggled={isOpen}/>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;