import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function BaseDefault({title,styles,children}){
    const history = useNavigate();
    return(
        <>
            <div className="navbar">
                <Button onClick={()=>history("/")} variant="primary">Home</Button>
                <Button  onClick={()=>history("/adduser")} variant="primary">Add User</Button>
            </div>
            <div className={styles}>{title}</div>
            <div className="children">{children}</div>
        </>
    )
}