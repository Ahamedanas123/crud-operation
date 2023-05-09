import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import BaseDefault from "../Core/Base";
import { AppState } from "../AppContext/AppProvider";

export function ViewUser(){
    const {user} = AppState();
    
    const history = useNavigate();
    const {id} = useParams();
    const person = user[id]
    return(
        <BaseDefault
            title={"View user"}
            styles={"title"}
        >
            <div className="user-content">
                <div className="card">
                    <h5>{person.name}</h5>
                    <p>Email : {person.email}</p>
                    <p>Batch : {person.batch}</p>
                    <p>Experience : {person.experience}</p>
                    <div className="btn-list">
                    <button onClick={()=>history("/")}>Back</button>
                    </div>
                </div>
            </div>
        </BaseDefault>

    )
}