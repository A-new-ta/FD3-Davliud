import React from "react";
import './MobileClientEdit.css'
import { MobileEvent } from "../Events/events";

class MobileClientEdit extends React.PureComponent {
    
    static PropTypes = {
        client: PropTypes.object.isRequired,
        cardMode: PropTypes.number.isRequired,
    }


    saveChanges = () => {

    }

    cancelChanges = () => {

    }

    render() {
        const {firstName, lastName, middleName, balance, status} = this.props.client;
        console.log(`ClientEdit ${lastName} render`);
        
        return (
            <div>
                <div>
                    <label>Фамилия:</label>
                    <input type='text' name='lastName' defaultValue={lastName} ref={} ></input>
                </div>
                <div>
                    <label>Имя:</label>
                    <input type='text' name='firstName' defaultValue={firstName} ref={} ></input>
                </div>
                <div>
                    <label>Отчество:</label>
                    <input type='text' name='middleName' defaultValue={middleName} ref={} ></input>
                </div>
                <div>
                    <label>Баланс:</label>
                    <input type='text' name='balance' defaultValue={balance} ref={} ></input>
                </div>
                <div>
                    <label>Статус:</label>
                    <input type='text' name='status' defaultValue={status} ref={} ></input>
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



            