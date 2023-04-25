import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserContact } from "../redux/slice/userDetails";
import { useNavigate } from "react-router-dom";
import "../styles/userdetails.scss";


const UserContact = () => {
    const dispatch = useDispatch();
    const formRef = useRef(null);
    const navigate = useNavigate();
    const userContact = useSelector(state => state.UserDetails.userContact)
    const handlePrev = (event) => {
        event.preventDefault();
        navigate("/")
    }
    const handleNext = (event) => {
        event.preventDefault();
        const userData = {
            phone: formRef.current.phone.value,
            address: formRef.current.address.value
        }
        dispatch(addUserContact(userData));
        navigate("/cred")
    }
    return (
        <div>
            <form className="usercontact-container" ref={formRef}>
                <h1>USER CONTACT</h1>
                <div className="labeldiv">
                    <label>Phone:</label>
                    <input name="phone"/>
                </div>
               
                <div>
                    <label>Address:</label>
                    <textarea name="address"/>
                </div>
                <span>
                <button onClick={(e)=>handlePrev(e)}>Prev</button>
                <button onClick={(e)=>handleNext(e)}>Next</button></span>
            </form>
        </div>
    )
}

export default UserContact;
