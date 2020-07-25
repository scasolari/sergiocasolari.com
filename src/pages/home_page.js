import React, {Component} from 'react';
import { ExternalLink } from 'react-external-link';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import twitter from '../img/twitter.png';
import { Link } from "react-router-dom";

class HomePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            jumbotron_title: 'Hello world 👋',
            jumbotron_message: 'I\'m Sergio Casolari, software developer based in Italy with 5+ years of experience specialized in Backend architectures and JavaScript ecosystem how React and Node.js.',
            alert_message: 'Check the new release for Facebook Pixel Injection (version 0.1.0)'
        };
    }

    render() {
        return(
            <div className="mb-5 pb-5">
                <div className="jumbotron jumbotron-fluid pl-0">
                    <div className="container d-flex justify-content-between">
                        <div>
                            <h3>{this.state.jumbotron_title}</h3>
                            <p>{this.state.jumbotron_message} I'm currently working at <ExternalLink href="https://www.myntelligence.com">Myntellygence.com</ExternalLink>.</p>
                        </div>
                    </div>
                    <div className="container mt-4">
                        <ul className="nav">
                            <li className="nav-item">
                                <ExternalLink href="https://github.com/scasolari" className="nav-link">
                                    <img src={github} height={'20px'} alt={'Github'}/>
                                </ExternalLink>
                            </li>
                            <li className="nav-item">
                                <ExternalLink href="https://twitter.com/SergioCasolari2" className="nav-link">
                                    <img src={twitter} height={'20px'} alt={'Twitter'}/>
                                </ExternalLink>
                            </li>
                            <li className="nav-item">
                                <ExternalLink href="https://www.linkedin.com/in/sergio-casolari-787598a8/" className="nav-link">
                                    <img src={linkedin} height={'20px'} alt={'Linkedin'}/>
                                </ExternalLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <p>Latest developed tools</p>
                            <div className="mt-4">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <Link to={'/tools/facebook-pixel-injection/0.1.0'}>
                                            Facebook Pixel Injection
                                        </Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link to={'/tools/google-cm-pixel-injection/0.2.5'}>
                                            Google CM Floodlight Tag Injection
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;
