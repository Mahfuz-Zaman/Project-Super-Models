import './Persons.css'
import React from 'react';

const Persons = (props) => {
    const { name, img, gender, age, email, country, salary } = props.person || {};
    return (
        <div className="col-md-4  py-3">
            <div className="card mb-3 cd-hvr ">
                <div className="row g-2">
                    <div className="col-md-4">
                        <img className="person-img" src={img} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Name: {name}</h5>
                            <h6 className="card-text">Gender:<small>{gender}</small></h6>
                            <h6 className="card-text">Age:<small>{age}</small></h6>
                            <h6 className="card-text">Country:<small>{country}</small></h6>
                            <h6 className="card-text">Salary:$<small>{salary}</small></h6>
                        </div>
                    </div>
                    <h6 className="card-text mb-5">Email:<small>{email}</small></h6>
                </div>
                <button
                    onClick={() => props.handleUserInfo(props.person)}
                    className="btn btn-danger"><i className="fas fa-id-card-alt"></i> Add to List</button>
            </div>

        </div>
    );
};

export default Persons;