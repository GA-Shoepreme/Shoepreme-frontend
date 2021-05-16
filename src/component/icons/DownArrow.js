import React from 'react';

function DownArrow({size, style}) {
    return (
        <div style={{display:(style)?'block':'none'}}>
            <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.7 14L29.5 33.9L49.3 14.1L55 19.7L29.5 45.2L4 19.7L9.7 14Z" fill="black"/>
            </svg>
        </div>
    );
}

export default DownArrow;