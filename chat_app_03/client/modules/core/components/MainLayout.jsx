import React from 'react';

const Layout = ({content}) => (
    <div>
        <main>
            {content()}
        </main>
    </div>
);
export default Layout;