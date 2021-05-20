import React,{useState,useEffect} from 'react';
import axios from 'axios'
import ShoesGrid from './ShoesGrid'
function SearchPage({isSearching,searchKeyword}) {
    let [searchResult,setSearchResult] = useState([])
    let [searchedKeyword,setSearchedKeyword] = useState('')

    useEffect(()=>{
        if(isSearching){
            axios.get('https://shoepreme-api.herokuapp.com/shoes')
            .then(res=>res.data)
            .then(data=>{
                const filteredData = data.filter((item)=>{
                    return item.name.toLowerCase().includes(searchKeyword)
                })
                return filteredData
            })
            .then(filteredData=>setSearchResult(filteredData))
            setSearchedKeyword(searchKeyword)
        }
    },[])

    
    return (
        <div className='SearchResult'>
            {(isSearching)?
                (searchResult.length>=1)?
                <ShoesGrid count={searchResult.length} showPrice={false} showHeader={true} headerContent={null}
                shopButton={false} shoesData={searchResult}/>:
                <div className="noSearchResult">
                    <h1>{`We could not find anything for "${searchedKeyword}"`}</h1>
                </div>
            :null}
        </div>
    );
}

export default SearchPage;