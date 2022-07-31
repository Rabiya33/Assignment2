import React from "react";
//import ContactCard from "./ContactCard";
import avatar from"../images/avatar.jpg";


const ContactCard =(props)=>{
    const {id,name,email}=props.contact;
    return(
        <div className="item">
            <img className="ui avatar image" src={avatar} alt="avatar" />
            <div className="content">
                <div className="Header">{name}</div>
                <div>{email}</div>
            </div>

            <i className="trash alternate outline icon" 
            style={{color:"red",marginTop:"7px"}}
            onClick ={() => props.clickHandler(id)}
            
            ></i>
        </div>
    );
}
export default ContactCard;