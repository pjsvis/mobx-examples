import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class App extends React.Component {
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
                        </li>
                    ))}
                </ul>
            );
        };

        return (
            <div>
                <h1>MobX Example</h1>
                {loading}
                <button onClick={() => this.props.users.list()}>
                    Get Users
                </button>
                {getUsers()}
                <div>
                    Total Users: {this.props.appState.numberOfUsers}
                </div>
            </div>
        );
    }
}