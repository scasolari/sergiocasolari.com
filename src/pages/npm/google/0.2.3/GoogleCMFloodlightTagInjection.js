import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

class GoogleCMFloodlightTagInjection extends Component{
    constructor(props) {
        super(props);
        this.state = {
            jumbotron_title: 'Google CM Floodlight Tag Injection',
        };
    }
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return(
            <div className="mb-3 pb-5">
                <div id="jumbotron" className="jumbotron jumbotron-fluid pl-0">
                    <div className="container mb-4">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to={'/welcome'}>Welcome</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Google CM Floodlight Tag Injection</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="container d-flex justify-content-between">
                        <div>
                            <h3>{this.state.jumbotron_title}</h3>
                            <span className="badge badge-dark mr-2">#react</span>
                            <span className="badge badge-dark mr-2">#google-cm</span>
                            <span className="badge badge-dark mr-2">#injection</span>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="alert alert-warning mb-5" role="alert">
                        <p>This version will no longer available from the 1st of August.</p>
                        <p>Check the new version <Link className="alert-link" to={'/tools/google-cm-pixel-injection/0.2.4'}>0.2.4</Link>.</p>
                    </div>
                    <div className="mb-4"><h3>Installation and usage (0.2.3)</h3></div>
                    <div>
                        <p>The easiest way to use placedv-cm is to install it from npm and build it into your app with Webpack.</p>
                        <pre>
                            <code className="language-javascript">
                                {`npm i placedv-cm`}
                            </code>
                        </pre>
                    </div>
                    <div>
                        <p className="mt-4">Then use it in your app:</p>
                        <pre>
                            <code className="language-javascript">
                                {`import pdv_cm from 'placedv-cm'`}
                            </code>
                        </pre>
                        <p className="mt-4">Single tag:</p>
                        <pre>
                            <code className="language-javascript">
                                {`pdv_cm(src, 'type', 'cat')`}
                            </code>
                        </pre>
                        <p className="mt-4">Custom variable tag:</p>
                        <pre>
                            <code className="language-javascript">
                                {`pdv_cm(src, 'type', 'cat', {
    u1: 'custom_variable', 
    u2: 'custom_variable'
})`}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        )
    }
}

export default GoogleCMFloodlightTagInjection;
