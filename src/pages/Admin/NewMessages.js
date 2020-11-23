import React, { useState, useEffect } from "react";

function NewMessages() {

    var myHeaders = new Headers();
    myHeaders.append("key", "5f92c26e069f2212ce387be6");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    // Storage
    const [messages, setMessages] = useState([]);

    // Getting the messages from API
    useEffect(() => {
        fetch("https://us-central1-noroff-final-exam.cloudfunctions.net/api/v1/contacts", requestOptions)
            .then(response => response.json())
            .then(json => {
                setMessages(json)
                console.log(json)
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <div>
            <h1>New messages</h1>
            <div className="list-group">
                {messages.length === 0 &&
                    <p>You have no new messages</p>
                }

                {messages.map(message => (
                    <div href="#" className="list-group-item list-group-item-action">
                        <p>
                            <strong>
                                {message.name}<br />
                                {message.email}
                            </strong>
                        </p>
                        <p><em>{message.message}</em></p>
                        <small>Created at: {message.createdAt}</small>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewMessages;