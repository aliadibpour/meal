import React from 'react';
import loading from './loadingdots2.gif';
const Loader = () => {
    return (
        <div>
            <img src={loading} alt='loading' width='350rem' style={{marginLeft:'30rem', marginTop:'10rem'}}/>
        </div>
    );
};

export default Loader;