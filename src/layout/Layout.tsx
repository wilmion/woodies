import React from 'react'

import Header from '../components/Header';

import { setAnimation } from '../utils/setAnimation';

const Layout:React.FC = (props) => {
    const { children: Childs } = props;

    const toggleMenu = (open:boolean) => {
        const value:string = open ? '0%' : '-100%';

        setAnimation('transform' , `translateX(${value})` , document.getElementById('menu_mobile'))
    }

    return (<>
        <Header toggleMenu={toggleMenu} />
        {Childs}

    </>)
}

export default Layout
