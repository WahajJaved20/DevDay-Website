import React from 'react';

const HOC = (WrappedComponent) => {
    return (props) => {
        return <div className='my-16 mx-8'><WrappedComponent {...props} /></div>;
    };
};

export default HOC;