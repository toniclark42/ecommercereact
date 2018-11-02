import React from 'react';

const AdminContactCard = (props) => {
    return (
        <div className="adminContactCard">
            <h2>First Name </h2>
            <p>{props.info.firstName}</p>
            <h2>Last Name</h2>
            <p>{props.info.lastName}</p>
            <h2>Email</h2>
            <p>{props.info.emailInput}</p>
            <h2>Comment/Question</h2>
            <p> {props.info.comments}</p>
        </div>
    );   
}

export default AdminContactCard