import React, { Fragment, useState, useEffect } from 'react';
import "./UpdatePassword.css";
import Loader from '../layout/Loader/Loader';
import { MdMailOutline, MdFace } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, updatePassword, loadUser } from "../../actions/userAction";
import { useAlert } from "@blaumaus/react-alert"
import { UPDATE_PASSWORD_RESET } from '../../constants/userConstants';
import MetaData from '../layout/MetaData';
import { BiLockOpenAlt } from 'react-icons/bi';

const UpdatePassword = () => {

    const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, isUpdated, loading } = useSelector((state) => state.profile)

  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")



  const updateProfileSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("avatar", avatar);
    dispatch(updateProfile(myForm))
  };

  const updateProfileDataChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result)
        setAvatar(reader.result);
      }
    }
    reader.readAsDataURL(e.target.files[0]);
  };


  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setAvatarPreview(user.avatar.url);


    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Profile Updated Successfully");
      dispatch(loadUser());
      navigate("/account");
      dispatch({
        type: UPDATE_PROFILE_RESET,
      })
    }
  }, [dispatch, error, alert, navigate, user, isUpdated]);
  return (
    <Fragment>
      {loading?<Loader /> : <Fragment>
      <MetaData title="Update Profile" />
      <div className="updateProfileContainer">
        <div className="updateProfileBox">
          <h2 className='updateProfileHeading'>Update Profile</h2>
          <form className="updateProfileForm" encType="multipart/form-data" onSubmit={updateProfileSubmit}>   
          <div className="loginPassword">
                <BiLockOpenAlt/>
                <input type="password" placeholder="Password" required value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}    />
          <div className="loginPassword">
                <BiLockOpenAlt/>
                <input type="password" placeholder="Password" required value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}    />
               </div>
          <div className="loginPassword">
                <BiLockOpenAlt/>
                <input type="password" placeholder="Password" required value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)}    />
               </div>
            <input type="submit" value="Update" className="updateProfileBtn" />

          </form>
        </div>
      </div>
    </Fragment>}
    </Fragment>
  )
}

export default UpdatePassword