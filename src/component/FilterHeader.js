import React from 'react';
import UpArrow from './icons/UpArrow'
import DownArrow from './icons/DownArrow'
function FilterHeader({filterType, isOpen, setIsOpen}) {
    return (
        <div className='filterHeader' onClick={()=>{setIsOpen(!isOpen)}}>
            <span>{filterType}</span>
            <button>
                <UpArrow size={16} style={isOpen}/>
                <DownArrow
                size={16}
                style={!isOpen}
                />
            </button>
        </div>
    );
}

export default FilterHeader;