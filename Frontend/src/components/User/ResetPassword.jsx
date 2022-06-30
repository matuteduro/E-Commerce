import React, { Fragment, useState, useEffect } from 'react';
import "./ResetPassword.css";
import Loader from '../layout/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, resetPassword} from "../../actions/userAction";
import { useAlert } from "@blaumaus/react-alert"
import MetaData from '../layout/MetaData';
import { BiLockOpenAlt } from 'react-icons/bi';


const ResetPassword = ({match}) => {
 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const alert = useAlert();
  
    const { error, success, loading } = useSelector((state) => state.forgotPassword)

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
  
  
  
    const resetPasswordSubmit = (e) => {
      e.preventDefault();
  
      const myForm = new FormData();
  
      myForm.set("password", password);
      myForm.set("confirmPassword", confirmPassword);
  
      dispatch(resetPassword(match.params.token, myForm))
    };
  
  
    useEffect(() => {
     
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
  
      if (success) {
        alert.success("Password Updated Successfully");
        navigate("/login");
      }
    }, [dispatch, error, alert, navigate, success]);
    return (
      <Fragment>
        {loading?<Loader /> : <Fragment>
        <MetaData title="Change Password" />
        <div className="resetPasswordContainer">
          <div className="resetPasswordBox">
            <h2 className='resetPasswordHeading'>reset Profile</h2>
            <form className="resetPasswordForm" onSubmit={resetPasswordSubmit}>   
            <div>
                  <BiLockOpenAlt/>
                  <input type="password" placeholder="New Password" required value={password} onChange={(e) => setPassword(e.target.value)}    />
                 </div>
            <div>
                  <BiLockOpenAlt/>
                  <input type="password" placeholder="Confirm Password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}    />
                 </div>
              <input type="submit" value="Update" className="resetPasswordBtn" />
  
            </form>
          </div>
        </div>
      </Fragment>}
      </Fragment>
    )
}

export default ResetPassword