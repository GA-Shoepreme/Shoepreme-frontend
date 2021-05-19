import React from 'react';

function LeftArrow({size,color}) {
    return (
        <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M45.2 9.80001L25.3 29.6L45.1 49.4L39.5 55.1L14 29.6L39.5 4.10001L45.2 9.80001Z" fill={(color)?color:'rgb(150, 150, 150)'}/>
</svg>
    );
}

export default LeftArrow;