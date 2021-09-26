import React from 'react';
import './UserInfo.css'

const UserInfo = (props) => {
    const { userInfo } = props || {};

    const totalReducer = (previousValue, currentValue) => previousValue + currentValue.salary;
    const totalSalary = userInfo.reduce(totalReducer, 0)

    return (
        <>
            <div>
                <h3><i className="fas fa-user-alt"></i>Members: {userInfo.length}</h3>
                <h5>Total Salary: $ {totalSalary}</h5>
            </div>
            <div>
                <h4>Hired Model Name</h4>
                <ul>
                    {
                        userInfo.map((user, i) => <li key={i} className="fas fa-address-card list">  {user.name}</li>)
                    }
                </ul>
            </div>
        </>
    );
};

export default UserInfo;