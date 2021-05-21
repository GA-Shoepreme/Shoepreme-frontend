import React from 'react';
import SearchBar from './SearchBar'
import ShoppingBagIcon from './icons/ShoppingIcon'
import Logo from './icons/logo'
import SearchIcon from './icons/SearchIcon'
import LeftArrow from './icons/LeftArrow'
import {Link} from 'react-router-dom'
import { Sling as Hamburger } from 'hamburger-react'
import {useState, useEffect} from 'react'
function NavBar({itemCounts, setIsSearching, searchKeyword, changeSeachKeyword}) {
    let menuLabel = ['Air Jordan', 'Nike', 'Adidas', 'Yeezy', 'More Sneakers']
    
    let [isOpen, setIsOpen]= useState(false);
    let [isOpenSearch, setIsOpenSeacrh]= useState(false);
    let [currentURL, setCurrentURL] = useState(window.location.href);
    let [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', function(event) {
            setInnerWidth(window.innerWidth)
        }, true);
        
        // cleanup this component
        return () => {
            window.removeEventListener('resize', function(event) {
                setInnerWidth(window.innerWidth)
            }, true);
        };
      }, []);

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

    let menuListWithOutToggleMenu = menuLabel.map((label)=>{
        return(
            <Link key={label} to={`/${label.toLowerCase().replace(' ','_')}`}>{label}</Link>
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
                {(innerWidth>=1024)?
                <div className="menuItemLarge">
                    {menuListWithOutToggleMenu}
                </div>
                :null
                }
            </div>
            <div className="menuRightSide">
                <div id="navMenu">
                    {menuList}
                </div>
                {(innerWidth<=1024)?
                <div className="menuIcon" id="searchSmallIcon" onClick={toggleSearchBar}>
                        <SearchIcon size={24} color={'black'}/>
                        
                </div>:
                    <div>
                    <SearchBar searchKeyword={searchKeyword} setIsSearching={setIsSearching} changeSeachKeyword={changeSeachKeyword}/>
                    </div>
                }
                <div className="menuIcon" onClick={()=>{setCurrentURL(window.location.href)}}>
                    {(currentURL!=='http://localhost:3000/my/checkout')?<Link to='/my/checkout'>
                        <ShoppingBagIcon size={24}/>
                        {(itemCounts !==0)?<div className="itemCount">{(itemCounts>0)?itemCounts:null}</div>:null}
                    </Link>:<Link to='/'>
                        <ShoppingBagIcon size={24}/>
                        {(itemCounts !==0)?<div className="itemCount">{(itemCounts>0)?itemCounts:null}</div>:null}
                    </Link>}
                </div>
                {(innerWidth<=1024)?
                <div className="menuButton" onClick={toggleMenu}>
                    <Hamburger size={24} toggled={isOpen}/>
                </div>
                :null}
            </div>
            <div className="searchNav">
            <span onClick={toggleSearchBar}>
                <LeftArrow size={26} color={'black'}/>
            </span>
            <SearchBar searchKeyword={searchKeyword} setIsSearching={setIsSearching} changeSeachKeyword={changeSeachKeyword}/>
            </div>
        </nav>
    );
}

export default NavBar;