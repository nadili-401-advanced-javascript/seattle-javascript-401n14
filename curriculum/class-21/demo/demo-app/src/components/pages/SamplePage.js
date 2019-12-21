import React from 'react';
import Sample from '../Sample';

class SamplePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            renderSample: true,
        };
    }

    changeRenderSample(e) {
        this.setState({ renderSample: !this.state.renderSample });
    }

    render() {
        return (
            <div>
                <button onClick={this.changeRenderSample.bind(this)}>
                    Toggle Render Sample
                </button>
                {this.state.renderSample ? (
                    <Sample>
                        <div>
                            Test div
                            <p>This is my nested child</p>
                        </div>
                        <div>Another one!</div>
                    </Sample>
                ) : (
                    ''
                )}
            </div>
        );
    }
}

export default SamplePage;
