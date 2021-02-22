import React from 'react';

import './Input.css';

const Import = ({ message, setMessage, sendMessage }) => (
    <form className="form">
        <input
            className="input"
            type="text"
            placeholder="Введите сообщение..."
            value={message}
            onChange={event => setMessage(event.target.value)}
            onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button className="sendButton" onClick={(event) => sendMessage(event)}>Отправить</button>
    </form>
)


export default Import;