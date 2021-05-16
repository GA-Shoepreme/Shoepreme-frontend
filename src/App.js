import './App.css';
import NavBar from './component/NavBar'
import LandingPage from './component/page/LandingPage'
import ChildPage from './component/page/ChildPage'
import ItemDetailPage from './component/page/ItemDetailPage'
import CheckOutPage from './component/page/CheckOutPage'
import Footer from './component/Footer'
import {Route} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios';

function App() {
  const [shoesData, setShoesData] = useState([])
  const [cart, setCart] = useState([])

  const putItemInTheCart=(item)=>{
    setCart([...cart,item])
  }
  useEffect(()=>{
    axios.get('/home')
    .then(res=>res.data)
    .then(data=>setShoesData(data))
  },[])

  return (
    <div className="App">
      <NavBar itemCounts={cart.length}/>
      <Route exact path='/' render={()=>
      <LandingPage shoesData={shoesData}/>
      }/>
      <Route exact path='/:pagename' render={(routerProps)=><ChildPage shoesData={shoesData} pagename={routerProps.match.params.pagename}/>}/>
      <Route exact path='/shoes/:shoename' render={(routerProps)=><ItemDetailPage shoesData={shoesData} shoeName={routerProps.match.params.shoename} putItemInTheCart={putItemInTheCart}/>}/>
      <Route exact path='/my/checkout' render={(routerProps)=><CheckOutPage itemCounts={cart.length} cart={cart}/>}/>
    </div>
  );
}

export default App;
