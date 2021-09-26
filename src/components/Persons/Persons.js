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
                <div className="d-flex justify-content-around">
                    <h1>
                        <a href="https://www.facebook.com/07.69pain"> <i className="fab fa-facebook-square fa-1x"></i></a>
                    </h1>
                    <h1>
                        <a href="https://www.youtube.com/channel/UCefesuYRZm1lQZgdTKbBNoQ/about"> <i className="fab fa-youtube-square text-danger fa-1x"></i></a>
                    </h1>
                    <h1>
                        <a href="https://twitter.com/MahfuzZaman4"> <i className="fab fa-twitter-square fa-1x"></i></a>
                    </h1>

                </div>
                <button
                    onClick={() => props.handleUserInfo(props.person)}
                    className="btn btn-danger"><i className="fas fa-id-card-alt"></i> Add to List</button>

            </div>

        </div>
    );
};

export default Persons;