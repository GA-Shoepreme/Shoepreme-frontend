import React, {useState, useEffect} from 'react';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button'

function FilterBodyFromTo({shoesData, bodyType, filterShoes}) {
  const [priceRange, setPriceRange] = useState([0, 0]);
  const [yearRange, setYearRange] = useState([0, 0]);
  const [highestPrice, setHighestPrice] = useState(0);
  const [fixedYearRange, setFixedYearRange] = useState([0, 0]);

  useEffect(()=>{
      let highestPrice = 0;
      let oldest = 9999;
      let newest = 0;
      shoesData.forEach((shoe)=>{
        if(shoe.retailPrice>highestPrice){
            highestPrice = shoe.retailPrice
        }
        if(shoe.releaseYear<oldest){
            oldest = shoe.releaseYear
        }
        if(shoe.releaseYear>newest){
            newest = shoe.releaseYear
        }
      })
      setHighestPrice(highestPrice)
      setPriceRange([0,highestPrice])
      setYearRange([oldest,newest])
      setFixedYearRange([oldest,newest])
  },[shoesData])

  const handleChangePrice = (event, newValue) => {
    setPriceRange(newValue);
  };
  const handleChangeYear= (event, newValue) => {
    setYearRange(newValue);
  };

  const renderSlider =(bodyType)=>{
    if(bodyType ==='PRICE'){
        return(
        <>
            <p style={{
                marginLeft: '-0.5rem',
                marginBottom: '0.5rem',
            }}>
            {`See the shoes between $${priceRange[0]} and $${priceRange[1]}`}
            </p>
            <Slider
            value={priceRange}
            color="primary"
            min={0}
            max={highestPrice}
            onChange={handleChangePrice}
            valueLabelDisplay="auto"
            />
            <Button onClick={(e)=>filterShoes(e,bodyType,priceRange)}>
            Filter
            </Button>
        </>
        )
    }
    return(
        <>
            <p style={{
                marginLeft: '-0.5rem',
                marginBottom: '0.5rem',
            }}>
            {`See the shoes created between ${yearRange[0]} and ${yearRange[1]}`}
            </p>
            <Slider
            value={yearRange}
            color="primary"
            min={fixedYearRange[0]}
            max={fixedYearRange[1]}
            onChange={handleChangeYear}
            valueLabelDisplay="auto"
            />
            <Button onClick={(e)=>filterShoes(e,bodyType,yearRange)}>
            Filter
            </Button>
        </>
    )
  }


    return (
        <div style={{margin: '0 0.5rem'}}>
            {renderSlider(bodyType)}
      </div>
    );
}

export default FilterBodyFromTo;