import React from "react";
import { useNavigate } from "react-router-dom";
import BaseDefault from "../Core/Base";
import { AppState } from "../AppContext/AppProvider";

export default function UserContent(){
    const {user, setUser} = AppState();
    
    const history = useNavigate();
    const delete_User = async (per) =>{
        try {
            const response = await fetch(`https://6457b9e40c15cb14820f825c.mockapi.io/data/${per}`,{
            method : "DELETE"
            });
            const data = await response.json();
            const alt_list = user.filter((item,index)=>item.id!==per);
            setUser(alt_list)
            if(!data){
                console.log("cound't delete");
            }    
        } catch (error) {
            console.log(error);
        }
        
        }

    return(
        <BaseDefault
            title="UserContent"
            styles="title"
        >
            <div className="card-box">
                {
                user&& (
                user?.map((data,idx)=>(
                    <div key={idx} className="card">
                        <h5>{data.name}</h5>
                        <p>Email : {data.email}</p>
                        <p>Batch : {data.batch}</p>
                        <p>Experience : {data.experience}</p>
                        <div className="btn-list">
                        <button onClick={()=>history(`/user/${idx}`)}>View</button>
                        <button onClick={()=>history(`/edit/${data.id}`)}>Edit</button>
                        <button onClick={()=>delete_User(data.id)}>Delete</button>
                        </div>
                    </div>
                )))}
            </div>
        </BaseDefault>

    )
}