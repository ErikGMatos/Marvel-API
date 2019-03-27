import React, { Component,Fragment } from "react";
import M from 'materialize-css';

class Sidenav extends Component {

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems);
        });
    }

    render(){
        return(
            <Fragment>
                <ul id="slide-out" className="sidenav">
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img src="images/office.jpg" alt=""/>
                            </div>
                            <a href="#!">
                                <img className="circle" alt="" src="images/yuna.jpg" />
                            </a>
                            <a href="#!">
                                <span className="white-text name">John Doe</span>
                            </a>
                            <a href="#!">
                                <span className="white-text email">
                                    jdandturk@gmail.com
                                </span>
                            </a>
                        </div>
                    </li>
                    <li>
                        <a href="#!">
                            <i className="material-icons">cloud</i>First Link With Icon
                        </a>
                    </li>
                    <li>
                        <a href="#!">Second Link</a>
                    </li>
                    <li>
                        <div className="divider" />
                    </li>
                    <li>
                        <a href="#!" className="subheader">Subheader</a>
                    </li>
                    <li>
                        <a className="waves-effect" href="#!">
                            Third Link With Waves
                        </a>
                    </li>
                </ul>
                <a href="#!" data-target="slide-out" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </a>
            </Fragment>
        );
    }
}


export default Sidenav;
