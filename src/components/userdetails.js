import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUserDetails } from '../redux/slice/userDetails';
import { useNavigate } from 'react-router-dom';

export default function UserDetails() {
    const userDetails = useSelector(state=> state.UserDetails.userDetails);
    const dispatch = useDispatch();
    const formRef = useRef(null);
    const navigate = useNavigate();
    const handleSubmit= (event) => {
        event.preventDefault();
        const userData = {
            fname: formRef.current.fname.value,
            lname: formRef.current.lname.value,
            gender: formRef.current.gender.value,
        }
        dispatch(addUserDetails(userData));
        navigate("/contact")
    }
  return (
    <div>
        <form ref={formRef}>
            <div>
                <label htmlFor="fname">First Name</label>
                <input  name='fname' placeholder='First Name'/>
            </div>
            <div>
                <label htmlFor="lname">Last Name</label>
                <input  name='lname' placeholder='Last Name'/>
            </div>
            <div>
                <label htmlFor="gender">Gender</label>
                <select name='gender'>
                    <option value="">select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>
            <button disabled>Prev</button>
            <button onClick={(e) =>handleSubmit(e)}>Next</button>
        </form>
    </div>
  )
}
