import React from 'react';
import PropTypes from 'prop-types';
import { MobileEvent } from '../Events/events';
import MobileClient from './MobileClient/MobileClient';
import MobileClientEdit from './MobileClientEdit/MobileClientEdit';
import './MobileCompany.css';


class MobileCompany extends React.PureComponent {
    
    static propTypes = {
        name: PropTypes.string.isRequired,
        clients:PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.number.isRequired,
              fio: PropTypes.string.isRequired,
              balance: PropTypes.number.isRequired,
            }),
        ),
    }
    

    state = {
        name: this.props.name, 
        clients: this.props.clients,
        cardMode: 0, // 0 - нет, 1 - режим редактирования клиента, 2 - режим добавления нового клиента
        // buttonMode: false, // delete button block
        // blockChange: false, // edit button block
        idNew: this.props.clients.length + 1,
        status: 'all', // фильтр клиентов, active, blocked
        selectedClientId: 0,
    }
    
    componentDidMount = () => {
        MobileEvent.addListener('edit', this.changeClient);
        MobileEvent.addListener('delete', this.deleteClient);
        MobileEvent.addListener('save', this.saveClient);
        MobileEvent.addListener('cancel', this.cancelClient);
    }


    // edit button
    changeClient = (id) => {
        this.setState({ cardMode: 2, selectedClientId: id});
    }
    // delete button
    deleteClient = (id) => {
        this.setState({ clients: this.state.clients.filter(v => v.id != id), cardMode: 0 })
    }

    saveClient = (data) => {
        if (this.state.cardMode === 1) {
        let editInd;
        this.state.clients.forEach((v, i) => {
            if (v.id === newClient.id) {
            editInd = i;
            }
        });
        let editClients = this.state.clients;
        editClients[editInd] = newClient;
        this.setState({ clients: editClients });
        }

        if (this.state.cardMode === 2) {
        this.state.clients.push(newClient);
        this.setState({ idNew: newClient.id + 1 });
        }
        this.setState({ cardMode: 0 });
  }

    // cancel button
    cancelClient = () => {
        this.setState({ cardMode: 0 });
  }


  //кнопка фильтрации
    setStatus = (status) => {
        this.setState({ status });
    }
 
    

    buildClientsTable = () => {
        let client = this.state.clients.find((v => v.id === this.state.selectedClientId));
        if (this.state.status === 'all') {
            return this.state.clients.map(client =>
                <MobileClient
                    key={client.id}
                    client={client}
                />)
        }
    }
    
    render() {
        console.log('MobileCompany render');
        let client = this.state.clients.find((v => v.id === this.state.selectedClientId));
        let newClient = { id: this.state.idNew, lastName: '', firstName: '', middleName: '', balance: '', status: '' };
        return (
            <div>
                <h2>Компания: {this.props.name}</h2>
                <div className='filterClients'>
                    <input type='button' value='Все' onClick={() => this.setStatus('all')} />
                    <input type='button' value='Активные' onClick={() => this.setStatus('active')} />
                    <input type='button' value='Заблокированные' onClick={() => this.setStatus('blocked')} />
                </div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Фамилия</th>
                                <th>Имя</th>
                                <th>Отчество</th>
                                <th>Баланс</th>
                                <th>Статус</th>
                                <th>Редактировать</th>
                                <th>Удалить</th>
                            </tr>
                            {this.buildClientsTable()}
                        </tbody>
                    </table>
                </div>
                <input type='button' value='Добавить' onClick={() => }  />
                <div>
                    {this.state.cardMode === 1 && <MobileClientEdit
                    key={client.id}
                    cardMode={this.state.cardMode}
                    client={client}
                     />} 
                    {this.state.cardMode === 2 && <MobileClientEdit
                    key={newClient.id}
                    cardMode={this.state.cardMode}
                    client={newClient}
                     />}
                </div>
            </div>
        )
  }
}


export default MobileCompany;