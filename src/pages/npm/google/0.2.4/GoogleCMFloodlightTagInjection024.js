import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

class GoogleCMFloodlightTagInjection024 extends Component{
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
                    <div className="mb-4"><h3>Installation and usage</h3></div>
                    <div>
                        <p>The easiest way to use google-fls is to install it from npm and build it into your app with Webpack.</p>
                        <pre>
                            <code className="language-javascript">
                                {`npm i google-fls`}
                            </code>
                        </pre>
                    </div>
                    <div>
                        <p className="mt-4">Then use it in your app:</p>
                        <pre>
                            <code className="language-javascript">
                                {`import google_fls from 'google-fls'`}
                            </code>
                        </pre>
                        <p className="mt-4">Paramaters to use:</p>
                        <pre>
                            <code className="language-javascript">
                                {`google_fls(src, 'type', 'cat', {variables})`}
                            </code>
                        </pre>
                        <div className="ol-menu">
                            <ul>
                                <li>
                                    <strong className="yellow">src</strong>: Identifies the advertiser that is the source of the Floodlight activity. The value of the src= key is the advertiser ID.
                                </li>
                                <li>
                                    <strong className="yellow">type</strong>: The group tag string, which identifies the activity group with which the Floodlight activity is associated in Campaign Manager. (The activity group is used for reporting purposes.) You can set your own value for the group tag string or use the default value. The default group tag string is based on the first five letters of the activity group name, plus a string of three random alphanumeric characters, underscores, and dashes. (If the activity group name has fewer than five characters, extra letters are appended before the alphanumeric characters so that there are still eight characters.) .
                                </li>
                                <li>
                                    <strong className="yellow">cat</strong>: The activity tag string, which identifies the Floodlight activity. You can set your own value for the activity tag string or use the default value. The default activity tag string is based on the first five letters of the activity name, plus a string of three random alphanumeric characters, underscores, and dashes. (If the activity group name has fewer than five characters, extra letters are appended before the alphanumeric characters so that there are still eight characters.).
                                </li>
                                <li>
                                    <strong className="yellow">variables</strong>: Custom Floodlight variables enable you to capture information beyond the basics (visits and revenue) that you can collect with standard parameters in your tags.
                                </li>
                            </ul>
                        </div>
                        <p className="mt-4">Single tag:</p>
                        <pre>
                            <code className="language-javascript">
                                {`google_fls(7336812, 'mynme1', 'testt5')`}
                            </code>
                        </pre>
                        <p className="mt-4">Custom variable tag:</p>
                        <pre>
                            <code className="language-javascript">
                                {`google_fls(7336812, 'mynme1', 'testt5', {
    u1: 'variable_1', 
    u2: 'variable_2'
})`}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        )
    }
}

export default GoogleCMFloodlightTagInjection024;
