import React, {useState,useEffect} from 'react';
import HeroSection from '../HeroSection'
import ShoesGrid from '../ShoesGrid'
import axios from 'axios'

function LandingPage(props) {
    const [newReleaseData, setNewReleaseData] = useState([])
    const [shoesData, setShoesData] = useState([])
    let shoeGridHeaderLabel = ['New releases', 'Air jordan', 'Adidas', 'Yeezy']

    useEffect(()=>{
      axios.get('https://shoepreme-api.herokuapp.com/shoes/filter?date=newest&limit=8')
      .then(res=>res.data)
      .then(data=>setNewReleaseData(data))
    },[])

    let shoesGrids = shoeGridHeaderLabel.map((label)=>{
      switch(label){
        case 'New releases':
          return(
            <ShoesGrid key={label} count={newReleaseData.length} showPrice={false} showHeader={true} headerContent={label}
            shopButton={true} shoesData={newReleaseData}/>
          )
        case 'Air jordan': case 'Adidas': case 'Yeezy': default:
          return(
            <ShoesGrid key={label} count={shoesData.length} showPrice={false} showHeader={true} headerContent={label}
            shopButton={true} shoesData={shoesData}/>
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