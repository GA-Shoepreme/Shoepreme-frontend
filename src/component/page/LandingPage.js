import React, {useState,useEffect} from 'react';
import HeroSection from '../HeroSection'
import ShoesGrid from '../ShoesGrid'
import axios from 'axios'

function LandingPage(props) {
    const [newReleaseData, setNewReleaseData] = useState([])
    const [jordanData, setJordanData] = useState([])
    const [adidasData, setAdidasData] = useState([])
    const [yeezyData, setYeezyData] = useState([])
    const [nikeData, setNikeData] = useState([])
    
    let shoeGridHeaderLabel = ['New releases', 'Air jordan', 'Adidas', 'Yeezy', 'Nike']

    useEffect(()=>{
      axios.get('https://shoepreme-api.herokuapp.com/shoes/filter?date=newest&limit=8')
      .then(res=>res.data)
      .then(data=>setNewReleaseData(data))
  
      axios.get(`https://shoepreme-api.herokuapp.com/shoes/filter?brand=air_jordan&limit=8&mktvalue=high`)
      .then(res=>res.data)
      .then(data=>setJordanData(data))

      axios.get(`https://shoepreme-api.herokuapp.com/shoes/filter?brand=adidas&limit=8&mktvalue=high`)
      .then(res=>res.data)
      .then(data=>setAdidasData(data))

      axios.get(`https://shoepreme-api.herokuapp.com/shoes/filter?brand=yeezy&limit=8&mktvalue=high`)
      .then(res=>res.data)
      .then(data=>setYeezyData(data))

      axios.get(`https://shoepreme-api.herokuapp.com/shoes/filter?brand=nike&limit=8&mktvalue=high`)
      .then(res=>res.data)
      .then(data=>setNikeData(data))
    },[])

    let shoesGrids = shoeGridHeaderLabel.map((label)=>{
      switch(label){
        case 'New releases':
          return(
            <ShoesGrid key={label} count={newReleaseData.length} showPrice={false} showHeader={true} headerContent={label}
            shopButton={false} shoesData={newReleaseData}/>
          )
        case 'Air jordan': 
          return(
            <ShoesGrid key={label} count={8} showPrice={false} showHeader={true} headerContent={label}
            shopButton={true} shoesData={jordanData}/>
          )
        case 'Adidas':
          return(
            <ShoesGrid key={label} count={8} showPrice={false} showHeader={true} headerContent={label}
            shopButton={true} shoesData={adidasData}/>
          )
        case 'Yeezy':
          return(
            <ShoesGrid key={label} count={8} showPrice={false} showHeader={true} headerContent={label}
            shopButton={true} shoesData={yeezyData}/>
          )
        default:
          return(
            <ShoesGrid key={label} count={8} showPrice={false} showHeader={true} headerContent={label}
            shopButton={true} shoesData={nikeData}/>
          )
      }
    })
  
    return (
        <div>
            <HeroSection></HeroSection>
            {shoesGrids}
        </div>
    );
}

export default LandingPage;