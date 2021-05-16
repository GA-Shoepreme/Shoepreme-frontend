import React from 'react';

function UpArrow({size, style}) {
    return (
        <div style={{display:(style)?'block':'none'}}>
            <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M49.3 45.2L29.5 25.3L9.7 45.1L4 39.5L29.5 14L55 39.5L49.3 45.2Z" fill="black"/>
            </svg>
        </div>
    );
}

export default UpArrow;