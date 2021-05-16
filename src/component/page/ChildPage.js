import React from 'react';
import HeroSection from '../HeroSection'
import ShoesGrid from '../ShoesGrid'

function ChildPage({shoesData, pagename}) {
    return (
        <div>
            <HeroSection pagename={pagename}></HeroSection>
            <ShoesGrid count={20} showPrice={false} showHeader={true} headerContent={null}
        shopButton={false} shoesData={shoesData}/>
        </div>
    );
}

export default ChildPage;