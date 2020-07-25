import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { ExternalLink } from "react-external-link";
import github from "../../../img/github.png";

class FacebookPixelInjection extends Component{
    constructor(props) {
        super(props);
        this.state = {
            jumbotron_title: 'Facebook Pixel Injection',
            jumbotron_message: 'Simple Facebook Pixel Injection for React',
            code_4: `import React, {Component} from 'react';
import facebook from 'facebook-pixel-event-injection'

class App extends Component{
    onClick(){
        facebook('607791573487795', {
            trackCustom: 'clickButton'
        });
    }
    render() {
        return (
            <button onClick={this.onClick()} type='button'>Button</button>
        )
    }
}

export default App;`
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
                                <li className="breadcrumb-item active" aria-current="page">Facebook Pixel Injection</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="container d-flex justify-content-between">
                        <div>
                            <h3>{this.state.jumbotron_title}</h3>
                            <span className="badge badge-dark mr-2">#react</span>
                            <span className="badge badge-dark mr-2">#facebook</span>
                            <span className="badge badge-dark mr-2">#injection</span>
                        </div>
                        <div>
                            <ExternalLink href="https://github.com/scasolari/facebook-pixel-event-injection">
                                <img src={github} height={'20px'} alt={'Github'}/>
                            </ExternalLink>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="mb-4"><h3>Installation and usage</h3></div>
                    <div>
                        <p>The easiest way to use facebook-pixel-event-injection is to install it from npm and build it into your app with Webpack.</p>
                        <pre>
                            <code className="language-javascript">
                                {`npm i facebook-pixel-event-injection`}
                            </code>
                        </pre>
                    </div>
                    <div>
                        <p className="mt-4">Then use it in your app:</p>
                        <pre>
                            <code className="language-javascript">
                                {`import facebook from 'facebook-pixel-event-injection'`}
                            </code>
                        </pre>
                        <p className="mt-4">Single event PageView:</p>
                        <pre>
                            <code className="language-javascript">
{`facebook('691662573424231', {
    track: 'PageView'
});
`}
                            </code>
                        </pre>
                        <p className="mt-4">Single event conversion Lead:</p>
                        <pre>
                            <code className="language-javascript">
{`facebook('691662573424231', {
    track: 'Lead'
});
`}
                            </code>
                        </pre>
                        <p className="mt-4">Custom event:</p>
                        <pre>
                            <code className="language-javascript">
{`facebook('607791573487795', {
    track: 'PageView',
    trackCustom: 'ShareDiscount'
});
`}
                            </code>
                        </pre>
                        <p className="mt-4">Trigger event on Button Click</p>
                        <pre>
                            <code className="language-javascript">
                                {this.state.code_4}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        )
    }
}

export default FacebookPixelInjection;
