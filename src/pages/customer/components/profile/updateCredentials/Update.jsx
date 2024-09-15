import React,{useState,useEffect} from "react";
import Header from "../../common/Header";
import { Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import Password from "antd/es/input/Password";
import { changePassword,updateCustomer } from "../../../../../Api/api";


const Update = () => {
  const [formData, setFormData] = useState({
    newEmail: "",
    confirmNewEmail: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const userProfile= useState('')
  useEffect(() => {
    const getUserProfile = async () => {
      userProfile = await sessionStorage.getItem('userProfile');
      console.log("User Profile:", userProfile);
    };

    getUserProfile();
  }, []); // Empty dependency array ensures this runs only once on component mount
  const handleChangeEmail = (e) => {
    e.preventDefault();
    // Submit form data to the backend
    const response = updateCustomer({
      password: formData.currentPassword,
      user_type: userProfile.user_type,
      username: userProfile.username,
      email: formData.email    
    });
    alert(JSON.stringify(response)); // Display form data in alert message
    console.log("response:", response);
    // Reset form fields after submission (optional)
    setFormData({
      newEmail: "",
      confirmNewEmail: "",
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  }
  const handleChangePassword = (e) => {
    e.preventDefault();
    // Submit form data to the backend
    const response = changePassword({
      new_password1: formData.currentPassword,
      new_password2: formData.confirmNewPassword,
      user_type: userProfile.user_type,
      username: userProfile.currentPassword,
    });

    alert(JSON.stringify(response)); // Display form data in alert message
    console.log("response:", response);
    // Reset form fields after submission (optional)
    setFormData({
      newEmail: "",
      confirmNewEmail: "",
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  };
  return (
    <div>
      <Header title={"Update Credentials"} category={"Update Credentials"} />
      <div className="grid md:grid-cols-2 gap-5">
        <div className="shadow-custom rounded-xl">
          <p className="font-semibold text-[18px] p-5">Update Email</p>
          <hr/>
          <form className="grid gap-[10px] p-5"onSubmit={(e) => {
            e.preventDefault();
          }}>
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>New Email</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input type="email" placeholder="New Email" onChange={(e) => setFormData({ ...formData, newEmail: e.target.value })} required />
            </div>
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>Confirm New Email</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input type="email" placeholder="Confirm New Email" onChange={(e) => setFormData({ ...formData, confirmNewEmail: e.target.value })}  required />
            </div>
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>Current Password</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input type="password" placeholder="Current password" onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}  required />
              <button
                type="submit"
                className="shadow-btn transition-all ease-in-out duration-500 mt-[10px] w-max font-semibold px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white"
                onClick={handleChangeEmail}
              >
                Save
              </button>
            </div>
          </form>
        </div>
        <div className="shadow-custom rounded-xl">
          <p className="font-semibold text-[18px] p-5">Update Password</p>
          <hr/>
          <form className="grid gap-2.5 p-5"onSubmit={(e) => {
            e.preventDefault();
          }}>
            <div className="grid gap-2.5">
              <div className="flex gap-[5px]">
                <label>Current password</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input type="password" placeholder="Current password" onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })} required />
            </div>
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>New password</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input type="password" placeholder="New password" onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })} required />
            </div>
            <div className="grid gap-[10px]">
              <div className="flex gap-[5px]">
                <label>Confirm new password</label>
                <FontAwesomeIcon
                  className="text-[red] mt-[5px] text-[8px] "
                  icon={faAsterisk}
                />
              </div>
              <Input
                type="password"
                placeholder="Confirm new password"
                onChange={(e) => setFormData({ ...formData, confirmNewPassword: e.target.value })} 
                required
              />
              <button
                type="submit"
                className="shadow-btn transition-all ease-in-out duration-500 mt-[10px] w-max font-semibold px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white"
                onClick={handleChangePassword}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
