import React from 'react';
import brandData from '../data/brand.json'

function HeroSection({pagename}) {

    let heroContent = (pagename) => {
        if(pagename){
            let keys = Object.keys(brandData)
            let result = keys.map((item)=>{
                if(pagename === item){
                    return(
                        <div key={pagename}>
                            {(brandData[pagename].logo)?
                            <img src={brandData[pagename].logo} alt={pagename} />
                            :
                            <h1>{pagename}</h1>
                            }
                            <p>{brandData[pagename].description}</p>
                        </div>
                    )
                }
                return null
            })
            return result
        }
        else {
            return(
                <>
                <h1>New arrivals for summer</h1>
                <button>Show now</button>
                </>
            )
        }
    }
            
    return (
        <div
        className={(pagename)?'brandHeroContentsContainer':'heroContentsContainer'}

        style={{
            backgroundImage: (pagename)? `url(${brandData[pagename].backgroundImage})`: null
        }}
        >
            <div className='heroContents'>
                {heroContent(pagename)}
            </div>
        </div>
    );
}

export default HeroSection;