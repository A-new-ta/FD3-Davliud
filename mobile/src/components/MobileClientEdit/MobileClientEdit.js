import React from 'react';
import './MobileClientEdit.css';
import { MobileEvent } from "../Events/events";

class MobileClientEdit extends React.PureComponent {
    constructor(props) {
        super(props);
        this.newLastNameRef = React.createRef();
        this.newFirstNameRef = React.createRef();
        this.newMiddleNameRef = React.createRef();
        this.newBalanceRef = React.createRef();
    }
    // static PropTypes = {
    //     client: PropTypes.object.isRequired,
    //     cardMode: PropTypes.number.isRequired,
    // }

    state = {
        client: this.props.client,
    }

    // newLastNameRef = null;
    // newFirstNameRef = null;
    // newMiddleNameRef = null;
    // newBalanceRef = null;
    // // newStatusRef = null;

    // setNewLastNameRef = (ref) => {
    //     this.newLastNameRef = ref;
    // };
    // setNewFirstNameRef = (ref) => {
    //     this.newFirstNameRef=ref;
    // };
    // setNewMiddleNameRef = (ref) => {
    //     this.newMiddleNameRef=ref;
    // };
    // setNewBalanceRef = (ref) => {
    //     this.newBalanceRef=ref;
    // };
    // setNewStatusRef = (ref) => {
    //     this.newStatusRef=ref;
    // };

    saveChanges = () => {
        let newLastName = this.newLastNameRef.current.value;
        let newFirstName = this.newFirstNameRef.current.value;
        let newMiddleName = this.newMiddleNameRef.current.value;
        let newBalance = +(this.newBalanceRef.current.value);
        
        if (newLastName === this.props.client.lastName &&
            newFirstName === this.props.client.firstName &&
            newMiddleName === this.props.client.middleName &&
            newBalance === this.props.client.balance) {
            this.cancelChanges();
        } else {
            if (newLastName && newFirstName && newMiddleName && newBalance) {
                let newClient = {
                    ...this.props.client,
                    id: this.props.client.id,
                    lastName: newLastName,
                    firstName: newFirstName,
                    middleName: newMiddleName,
                    balance: newBalance,
                    status: (newBalance >= 0) ? 'active' : 'blocked'
                };
                MobileEvent.emit('save', newClient);
            }
        }
    };
    

    cancelChanges = () => {
        MobileEvent.emit('cancel');
    }

    render() {
        const {firstName, lastName, middleName, balance} = this.props.client;
        console.log(`ClientEdit id = ${this.props.client.id} render`);
        
        return (
            <div className='MobileClientEditBlock'>
                <div className='MobileClientEdit'>
                    <label>Фамилия:</label>
                    <input type='text' name='lastName' defaultValue={lastName} ref={this.newLastNameRef} ></input>
                </div>
                <div className='MobileClientEdit'>
                    <label>Имя:</label>
                    <input type='text' name='firstName' defaultValue={firstName} ref={this.newFirstNameRef} ></input>
                </div>
                <div className='MobileClientEdit'>
                    <label>Отчество:</label>
                    <input type='text' name='middleName' defaultValue={middleName} ref={this.newMiddleNameRef} ></input>
                </div>
                <div className='MobileClientEdit'>
                    <label>Баланс:</label>
                    <input type='text' name='balance' defaultValue={balance} ref={this.newBalanceRef} ></input>
                </div>
                <div>
                    {this.props.cardMode === 1 && <input type='button' value='Сохранить' onClick={this.saveChanges}/>}
                    {this.props.cardMode === 2 && <input type='button' value='Добавить' onClick={this.saveChanges}/> }
                    <input type='button' value='Отмена' onClick={this.cancelChanges}/>
                </div>
            </div>
        )
    }
}

export default MobileClientEdit;



            