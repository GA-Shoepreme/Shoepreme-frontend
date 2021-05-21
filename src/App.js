import './App.css';
import NavBar from './component/NavBar'
import LandingPage from './component/page/LandingPage'
import ChildPage from './component/page/ChildPage'
import ItemDetailPage from './component/page/ItemDetailPage'
import CheckOutPage from './component/page/CheckOutPage'
import Footer from './component/Footer'
import {Route, useHistory} from 'react-router-dom'
import {useState,useEffect} from 'react'
import SearchPage from './component/SearchPage'
import axios from 'axios';

function App() {
  
  const history = useHistory()

  const goBack = () => {
      history.goBack()
  }

  const [cart, setCart] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [searchKeyword, setSearchKeyword] = useState('')

  const putItemInTheCart=(item)=>{
    console.log(item)
    setCart([...cart,item])
  }

  const changeSeachKeyword=(e)=>{
    let inputValue = e.target.value
    setSearchKeyword(inputValue)
  }
  return (
    <div className="App">
      <NavBar itemCounts={cart.length} isSearching={isSearching} setIsSearching={setIsSearching} searchKeyword={searchKeyword} changeSeachKeyword={changeSeachKeyword}/>
      {(!isSearching)?
      <>
      <Route exact path='/' render={()=>
      <LandingPage/>
      }/>
      <Route exact path='/:pagename' render={(routerProps)=><ChildPage pagename={routerProps.match.params.pagename}/>}/>
      <Route exact path='/shoes/:id' render={(routerProps)=><ItemDetailPage shoeId={routerProps.match.params.id} putItemInTheCart={putItemInTheCart} goBack={goBack}/>}/>
      <Route exact path='/my/checkout' render={(routerProps)=><CheckOutPage itemCounts={cart.length} cart={cart}/>}/>
      </>:
      <SearchPage isSearching={isSearching} searchKeyword={searchKeyword}/>}
      <Footer/>
    </div>
  );
}

export default App;
