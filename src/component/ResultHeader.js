import React from 'react';

function ResultHeader({count, toggleFilters}) {
    return (
    <div className="resultHeader">
        <div className="resultSmallHeader">
            <h4>Result</h4>
            <h5>{count}</h5>
        </div>
        <button onClick={toggleFilters} className="transparentButton">Add Filters</button>
    </div>
    );
}

export default ResultHeader;