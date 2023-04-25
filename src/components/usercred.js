import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserCreds } from "../redux/slice/userDetails";
import { useNavigate } from "react-router-dom";
import "../styles/userdetails.scss";


const UserCreds = () => {
    const dispatch = useDispatch();
    const formRef = useRef(null);
    const navigate = useNavigate();
    const userCreds = useSelector(state => state.UserDetails.userCreds)
    const handlePrev = (event) => {
        event.preventDefault();
        navigate("/contact");
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const userData = {
            email: formRef.current.email.value,
            password: formRef.current.password.value
        }
        dispatch(addUserCreds(userData))
    }

    return (
        <div>
            <form className="usercred-container" ref={formRef}>
                <h1>USER CRED</h1>
                <div>
                    <label>Email:</label>
                    <input name="email"/>
                </div>
                <div>
                    <label>Password:</label>
                    <input  type="password" name="password"/>
                </div>
                <span>
                <button onClick={(e)=>handlePrev(e)}>Prev</button>
                <button onClick={(e)=>handleSubmit(e)}>Submit</button></span>
            </form>
        </div>
    )
}

export default UserCreds;