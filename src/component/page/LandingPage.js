import React from 'react';
import HeroSection from '../HeroSection'
import ShoesGrid from '../ShoesGrid'

function LandingPage({shoesData}) {
    let shoeGridHeaderLabel = ['New relseases', 'Air jordans', 'Adidas', 'Yeezy']

    let shoesGrids = shoeGridHeaderLabel.map((label)=>{
      return(
        <ShoesGrid key={label} count={20} showPrice={false} showHeader={true} headerContent={label}
        shopButton={true} shoesData={shoesData}/>
      )
    })
  
    return (
        <div>
            <HeroSection></HeroSection>
            {shoesGrids}
        </div>
    );
}

export default LandingPage;