import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { io } from 'socket.io-client';

import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

import './Chat.css';

let socket;

const Chat = ({location}) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [adminMessage, setAdminMessage] = useState('');
    const ENDPOINT = 'https://chat-server-portfolio.herokuapp.com/';
    useEffect(() => {

        const {name, room} = queryString.parse(location.search)
        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);
        socket.emit('join', { name, room }, (message) => {
            setMessages(message)
        });
        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, location.search]);

    
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages(message);
        });
    }, [messages])

    useEffect(() => {
        socket.on('adminMessage', (message) => {
            setAdminMessage(message);
            setTimeout(() => setAdminMessage(''), 5000)
        })
    }, [adminMessage]);
    const sendMessage = (event) => {
        event.preventDefault();
        if(message) {
            socket.emit('sendMessage', {user: name, text: message}, () => {});
            setMessage('');
        }
    }
    return (
        <div className="outerContainer">
            {adminMessage ? <div className="info">{adminMessage}</div> : null}
            
            <div className="container">
                <InfoBar room={room}/>
                <Messages messages={messages} name={name}/>
                <Input 
                message={message}
                setMessage={setMessage}
                sendMessage={sendMessage}
                />
            </div>
        </div>
    )
}

export default Chat;
