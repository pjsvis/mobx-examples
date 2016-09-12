import React from 'react';
import { observer } from 'mobx-react';
import { autorun } from 'mobx';

@observer
export default class App extends React.Component {

    componentDidMount(){
        autorun(() => {
           this.props.users.list(this.props.appState.query);
        });
    }

    render(){

        const loading = this.props.appState.loading ? <span>Loading</span> : null;

        var getUsers = () => {
            if(!this.props.appState.numberOfUsers){
                return null;
            }

            return (
                <ul>
                    {this.props.appState.users.map((user,index) => (
                        <li key={index}>
                            <img src={user.picture.thumbnail} width="50"/>
                            <span>{user.name.first} {user.name.last}</span>
                            <button onClick={() => this.props.users.delete(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            );
        };

        return (
            <div>
                <h1>MobX Example</h1>
                {loading}
                <input type="text" onChange={(e) => this.props.appState.query = e.target.value}/>
                {getUsers()}
                <div>
                    Total Users: {this.props.appState.numberOfUsers}
                </div>
            </div>
        );
    }
}