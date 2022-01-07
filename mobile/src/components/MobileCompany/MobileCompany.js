import React from 'react';
import PropTypes from 'prop-types';
import { MobileEvent } from '../Events/events';
import MobileClient from '../MobileClient/MobileClient';
import MobileClientEdit from '../MobileClientEdit/MobileClientEdit';
import './MobileCompany.css';


class MobileCompany extends React.PureComponent {
    
    static propTypes = {
        name: PropTypes.string.isRequired,
        clients:PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.number.isRequired,
              lastName: PropTypes.string.isRequired,
              firstName: PropTypes.string.isRequired,
              middleName: PropTypes.string.isRequired,
              balance: PropTypes.number.isRequired,
            }),
        ),
    }
    
    state = {
        name: this.props.name, 
        clients: this.props.clients,
        cardMode: 0, // 0 - нет, 1 - режим редактирования клиента, 2 - режим добавления нового клиента
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

    componentWillUnmount = () => {
        MobileEvent.removeListener('edit', this.changeClient);
        MobileEvent.removeListener('delete', this.deleteClient);
        MobileEvent.removeListener('save', this.saveClient);
        MobileEvent.removeListener('cancel', this.cancelClient);
    }

    // edit button
    changeClient = (id) => {
        this.setState({ cardMode: 1, selectedClientId: id});
    }
    // delete button
    deleteClient = (id) => {
        if (window.confirm('Уверены, что хотите удалить?'))
        this.setState({ clients: this.state.clients.filter(v => v.id !== id), cardMode: 0 })
    }

    saveClient = (newClient) => {
        
        if (this.state.cardMode === 2) {
            let newClients = [...this.state.clients, newClient];
            this.setState({ clients: newClients, cardMode: 0 });
            this.setState({ idNew: newClient.id + 1 });
        } else {
            let editClients = this.state.clients.map(client => (client.id === newClient.id) ? newClient : client);
            this.setState({ clients: editClients, cardMode: 0 });
        }
    }

    // cancel button
    cancelClient = () => {
        this.setState({ cardMode: 0 });
    }
    
    addClient = () => {
        this.setState({cardMode: 2, selectedItemId: 0})
    }

    //кнопка фильтрации
    setStatus = (status) => {
        this.setState({ status });
    }

    render() {
        console.log('MobileCompany render');

        let filterClients = this.state.clients.filter((client) => {
            if (this.state.status === 'all') {
                return true;
            }
            if (this.state.status === 'active') {
                return client.balance >= 0;
            }
            if (this.state.status === 'blocked') {
                return client.balance < 0
            }
            return filterClients;
        });
        
        let clientsTable = filterClients.map(client =>
            <MobileClient
                key={client.id}
                client={client}
            />);
        
        let client = this.state.clients.find((v => v.id === this.state.selectedClientId));
        let newClient = { id: this.state.idNew, lastName: '', firstName: '', middleName: '', balance: '' };
        return (
            <div className='MobileCompany'>
                <h2>Компания: {this.props.name}</h2>
                <div>
                    <input type='button' value='Все' onClick={() => this.setStatus('all')} />
                    <input type='button' value='Активные' onClick={() => this.setStatus('active')} />
                    <input type='button' value='Заблокированные' onClick={() => this.setStatus('blocked')} />
                </div>
                
                    <table>
                        <thead>
                            <tr>
                                <th>Фамилия</th>
                                <th>Имя</th>
                                <th>Отчество</th>
                                <th>Баланс</th>
                                <th>Статус</th>
                                <th>Редактировать</th>
                                <th>Удалить</th>
                            </tr>
                        </thead>
                        <tbody className='MobileCompanyTable'>{clientsTable}</tbody>
                    </table>
                
                <input type='button' value='Добавить клиента' onClick={this.addClient} />
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