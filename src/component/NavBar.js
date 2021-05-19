import React from 'react';
import SearchBar from './SearchBar'
import ShoppingBagIcon from './icons/ShoppingIcon'
import Logo from './icons/logo'
import SearchIcon from './icons/SearchIcon'
import LeftArrow from './icons/LeftArrow'
import {Link} from 'react-router-dom'
import { Sling as Hamburger } from 'hamburger-react'
import {useState} from 'react'
function NavBar({itemCounts}) {
    let menuLabel = ['Air Jordan', 'Nike', 'Adidas', 'Yeezy', 'More Sneakers', 'New Releases']
    
    let [isOpen, setIsOpen]= useState(false);
    let [isOpenSearch, setIsOpenSeacrh]= useState(false);

    const toggleMenu =()=>{
        let navMenu = document.querySelector('#navMenu')
        let navDisplay = window.getComputedStyle(navMenu).getPropertyValue('display')
        setIsOpen(!isOpen)
        if(navDisplay==='none'){
            navMenu.style.display = 'inline-flex'
        } else {
            navMenu.style.display = 'none'
        }
    }

    const toggleSearchBar =()=>{
        setIsOpenSeacrh(!isOpenSearch)
        const rightSideMenuItems = document.querySelector('.menuRightSide')
        const leftSideMenuItems = document.querySelector('.menuLeftSide')
        const searchNav = document.querySelector('.searchNav')
        if(isOpenSearch === false){
            rightSideMenuItems.style.display ='none'
            leftSideMenuItems.style.display ='none'
            searchNav.style.display = 'inline-flex'
        } else {
            rightSideMenuItems.style.display ='flex'
            leftSideMenuItems.style.display ='flex'
            searchNav.style.display = 'none'
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
                <div className="menuIcon" id="searchSmallIcon" onClick={toggleSearchBar}>
                        <SearchIcon size={24} color={'black'}/>
                </div>
                <div className="menuIcon">
                    <Link to='/my/checkout'>
                        <ShoppingBagIcon size={24}/>
                        {(itemCounts !==0)?<div className="itemCount">{(itemCounts>0)?itemCounts:null}</div>:null}
                    </Link>
                </div>
                <div className="menuButton" onClick={toggleMenu}>
                    <Hamburger size={24} toggled={isOpen}/>
                </div>
            </div>
            <div className="searchNav">
            <span onClick={toggleSearchBar}>
                <LeftArrow size={26} color={'black'}/>
            </span>
            <SearchBar/>
            </div>
        </nav>
    );
}

export default NavBar;