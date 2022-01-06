import React from 'react';
import './MobileClient.css';
import { MobileEvent } from '../Events/events';


class MobileClient extends React.PureComponent {

    editRow = () => MobileEvent.emit('edit', this.props.client); // this.props.client.id

    deleteRow = () => MobileEvent.emit('delete', this.props.client.id);

    render() {
        console.log(`MobileClient id = ${this.props.client.id} render`);
        
        return (
            <tr key={this.props.client.id}>
                <td>{this.props.client.lastName}</td>
                <td>{this.props.client.firstName}</td>
                <td>{this.props.client.middleName}</td>
                <td>{this.props.client.balance}</td>
                <td className={(this.props.client.status === 'active') ? 'MobileClientActive' : 'MobileClientBlocked'}>{this.props.client.status}</td>
                <td><input type='button' value='Редактировать' onClick={this.editRow} /></td>
                <td><input type='button' value='Удалить' onClick={this.deleteRow}/></td>
            </tr>
        )
    };
}

export default MobileClient;
        
