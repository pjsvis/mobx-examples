import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class App extends React.Component {
    render(){
        return (
            <div>
                <h1>Counter App</h1>
                <button onClick={() => {this.props.counter.increment()}}>
                    {this.props.counter.value}
                </button>
                <button onClick={() => { this.props.counter.value = 0; }}>
                    Reset
                </button>
                <div>{this.props.counter.difference}</div>
            </div>
        );
    }
}