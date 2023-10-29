import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { putUsername, postAvatar} from "apis/userAPI";
import {
  alertError,
  alertSuccess,
  warningPopup,
} from "helpers/sweetAlert2";

function Avatar({ userInfo, getUserInfo }) {
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [loadingAvatar, setLoadingAvatar] = useState(false);

  const handleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleChangeName = (evt) => {
    setName(evt.target.value);
  };

  const handleUploadAvatar = async (evt) => {
    const file = evt.target.files[0];

    if (file) {
      setLoadingAvatar(true);
      try {
        const response = await postAvatar(file);
        let userData = JSON.parse(
          localStorage.getItem("userInfo") || sessionStorage.getItem("userInfo")
        );
        userData.user.avatar = response?.content?.avatar;
        localStorage.setItem("userInfo", JSON.stringify(userData));
        sessionStorage.setItem("userInfo", JSON.stringify(userData));
        getUserInfo();
      } catch (error) {
        console.log(error);
      } finally {
        setLoadingAvatar(false);
      }
    }
  };

  const updateUsername = async () => {
    if (name) {
      const { isConfirmed } = await warningPopup(
        `Save ${name} as your new username?`
      );
      if (isConfirmed) {
        try {
          const data = await putUsername(userInfo?.id, userInfo, name);
          console.log(data?.content);
          alertSuccess("Username updated successfully!");
        } catch (error) {
          console.log(error.response?.data?.content);
          alertError("Failed to update username");
        }
      }
    }
  };

  const handleUpdateUsername = async () => {
    await updateUsername();
    handleEditing();
    getUserInfo();
  };

  return (
    <div className="mb-5">
      <div className={styles.userAvatar}>
        <div className={styles.statusLine}>
          <div className={styles.onlineIndicator}>
            <i>·</i>Online
          </div>
        </div>
        <div className="mb-3">
          <div className="d-flex align-items-center justify-content-center mb-3">
            <label className={styles.editImage} htmlFor="profileImage">
              <div className={styles.cameraWrapper}>
                <span className={styles.cameraIcon}>
                  <i className="fa-solid fa-camera-retro"></i>
                </span>
              </div>
              <input
                accept="image/png,image/jpeg"
                type="file"
                id="profileImage"
                className="d-none invisible"
                name="profile[image]"
                onChange={handleUploadAvatar}
              />
              {loadingAvatar ? (
                <div className={styles.spinnerAvatar}>
                  <div className={styles.halfSpinnerAvatar}></div>
                </div>
              ) : userInfo?.avatar ? (
                <img
                  className={styles.uploadedAvatar}
                  src={userInfo?.avatar}
                  alt={userInfo?.name}
                />
              ) : (
                <span className={styles.profileImage}>
                  {userInfo?.name?.charAt(0).toUpperCase()}
                </span>
              )}
            </label>
          </div>
          <div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className={styles.username}>{userInfo?.name}</div>
              {isEditing ? (
                <>
                  <div className="d-flex justify-content-center align-items-center">
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleChangeName}
                      defaultValue=""
                    />
                  </div>
                  <div className="mt-2">
                    <button
                      className="btn btn-success"
                      onClick={handleUpdateUsername}
                      disabled={!name}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-secondary ms-3"
                      onClick={handleEditing}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <div>
                  <span title="Change display name">
                    <button className={styles.penIcon} onClick={handleEditing}>
                      <i className="fa-solid fa-pen"></i>
                    </button>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <ul className={styles.origin}>
            <li className={styles.location}>
              <span>
                <span className={styles.originIcon}>
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                From
              </span>
              <b>Vietnam</b>
            </li>
            <li className={`mb-0 ${styles.memberSince}`}>
              <span>
                <span className={styles.originIcon}>
                  <i className="fa-solid fa-user"></i>
                </span>
                Member since
              </span>
              <b>May 2023</b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
