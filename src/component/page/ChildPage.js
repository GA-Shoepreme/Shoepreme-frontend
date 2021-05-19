import React,{useEffect,useState} from 'react';
import axios from 'axios'
import HeroSection from '../HeroSection'
import ShoesGrid from '../ShoesGrid'

function ChildPage({pagename}) {

    let [shoesData, setShoesData] = useState([])

    useEffect(()=>{
        axios.get(`https://shoepreme-api.herokuapp.com/shoes/${pagename}`)
        .then(res=>res.data)
        .then(data=>setShoesData(data))
      },[])

    return (
        <div>
            {console.log(shoesData.length)}
            <HeroSection pagename={pagename}></HeroSection>
            <ShoesGrid count={shoesData.length} showPrice={false} showHeader={true} headerContent={null}
        shopButton={false} shoesData={shoesData}/>
        </div>
    );
}

export default ChildPage;