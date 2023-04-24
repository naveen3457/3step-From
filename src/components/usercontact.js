import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserContact } from "../redux/slice/userDetails";
import { useNavigate } from "react-router-dom";

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
            <form ref={formRef}>
                <div>
                    <label htmlFor="phone"/>
                    <input name="phone"/>
                </div>
                <h2>Address</h2>
                <div>
                    <label htmlFor="address"/>
                    <textarea name="address"/>
                </div>
                <button onClick={(e)=>handlePrev(e)}>Prev</button>
                <button onClick={(e)=>handleNext(e)}>Next</button>
            </form>
        </div>
    )
}

export default UserContact;
