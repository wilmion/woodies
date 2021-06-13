import React from 'react'

import Header from '../components/Header';

const Layout:React.FC = (props) => {
    const { children: Childs } = props;
    return (<>
        <Header />
        {Childs}

    </>)
}

export default Layout
