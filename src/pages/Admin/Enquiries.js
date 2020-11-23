import React, { useState, useEffect } from "react";

function Enquiries() {

    var myHeaders = new Headers();
    myHeaders.append("key", "5f92c26e069f2212ce387be6");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    // Storage
    const [enquiries, setEnquiries] = useState([]);

    // Getting the enquiries from API
    useEffect(() => {
        fetch("https://us-central1-noroff-final-exam.cloudfunctions.net/api/v1/enquiries", requestOptions)
            .then(response => response.json())
            .then(json => {
                setEnquiries(json)
                console.log(json)
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <div>
            <h1>New enquiries</h1>
            <div className="list-group">
                {enquiries.length == 0 &&
                    <p>You have no enquiries</p>
                }
                
                {enquiries.map(enquirie => (
                    <div href="#" className="list-group-item list-group-item-action">
                        <p>
                            <strong>
                                {enquirie.name}<br />
                                {enquirie.email}<br />
                                {enquirie.establishmentId}<br />
                                {enquirie.checkIn}<br />
                                {enquirie.checkOut}
                            </strong>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Enquiries;