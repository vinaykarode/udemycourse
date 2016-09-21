import React from 'react';

const Layout = ({content}) => (
    <div>
        <div className='container' id='container'>
            {content()}
        </div>
    </div>
);
export default Layout;