import React from 'react';
import BrowseForum from './BrowseForum.js'
import Header from './Header.js'
import Sidebar from './Sidebar.js'

export default class Index extends React.Component{


    constructor(props)
    {
        super(props);
        
    }

    render()
    {
        
        return(
            <div>
                <Header />
                <div className="row  adjustNavbarHeight">
                    <Sidebar />
                    <BrowseForum />
                </div>
            </div>
        );
    }

}