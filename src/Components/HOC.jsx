import React from 'react';

const HOC = (WrappedComponent) => {
    return (props) => {
        return <div className='m-16'><WrappedComponent {...props} /></div>;
    };
};

export default HOC;