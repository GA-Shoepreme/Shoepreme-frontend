import React from 'react';

function ResultHeader({count, toggleFilters,innerWidth}) {
    return (
    <div className="resultHeader">
        <div className="resultSmallHeader">
            <h4>Result</h4>
            <h5>{count}</h5>
        </div>
        {(innerWidth<=1024)?
        <button onClick={toggleFilters} className="transparentButton">Add Filters</button>
        :null}
    </div>
    );
}

export default ResultHeader;