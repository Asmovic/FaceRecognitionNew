import React from 'react';

const Rank = ({name, entries}) =>{
    return(
        <div>
            <div className='f2'>
                {`${name}, your current Rank is...`}
            </div>
            <div className='f3'>
                {`#${entries}`}
            </div>
        </div>
    );
}

export default Rank;