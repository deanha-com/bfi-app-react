import React from 'react'
import Filter from './Filter';


function Header({currPage}) {

    return (

        <header>
            <div id="logo"><a href="/">BFI.</a></div>
            <h1>{currPage}--</h1>
            <div id="menu">
                <nav>
                    <Filter />
                </nav>
            </div>
        </header>
    )
}

export default Header
