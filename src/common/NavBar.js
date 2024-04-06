import React from 'react';
import './common.css';
const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        {/* <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button> */}
                        <a className="navbar-brand" href="#"><h2>GamesKraft</h2></a>
                    </div>
                    <div id="navbar" >
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="/home">Home</a></li>
                            <li><a href="/game">Games</a></li>
                            <li><a href="/blog">Blogs</a></li>
                            <li><a href="#">Contact</a></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Another action</a></li>
                                    <li><a href="#">Something else here</a></li>
                                    <li role="separator" className="divider"></li>
                                    <li className="dropdown-header">Nav header</li>
                                    <li><a href="#">Separated link</a></li>
                                    <li><a href="#">One more separated link</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="active"><a href="./">Default <span className="sr-only">(current)</span></a></li>
                            <li><a href="../navbar-static-top/">Static top</a></li>
                            <li><a href="../navbar-fixed-top/">Fixed top</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <br />
            {/* <nav classNameName="navbar">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/games">Games</a></li>
                    <li><a href="/blogs">Blogs</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav> */}
        </>
    );
};

export default NavBar;