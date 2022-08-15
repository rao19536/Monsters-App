import React from "react";

const Card = (props) => {
    return(
        <>
            <div className="container">
                <div className="row">
                    {props.users && 
                        props.users.map((user, index) => (
                            <div className="col-lg-3 mb-3" key={index}>
                                <div className="card" style={{width: '18rem'}}>
                                    <img className="card-img-top" src={user.image} alt="" />
                                    <div className="card-body">
                                        <h5 className="card-title">{user.firstName} {user.lastName}</h5>
                                        <p className="card-text">{user.address.address}</p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">{user.phone}</li>
                                        <li className="list-group-item">{user.email}</li>
                                        <li className="list-group-item">{user.domain}</li>
                                    </ul>
                                    <div className="card-body">
                                        <a className="card-link">View Detail</a>
                                    </div>
                                </div>
                            </div>
                            
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default Card
