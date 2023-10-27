import Swal from "sweetalert2";

const Popup = Swal.mixin({
  position: "center",
  showConfirmButton: false,
  timer: 2000,
});

export const alertSuccess = (title) => {
  return Popup.fire({
    icon: "success",
    title,
  });
};

export const alertError = (title) => {
  return Popup.fire({
    icon: "error",
    title,
  });
};

export const warningPopup = (text) => {
  return Swal.fire({
    title: text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, I do",
    confirmButtonColor: "#0f929b",
    cancelButtonText: "Cancel",
    cancelButtonColor: "#858585",
  });
};

export const warningLogout = () => {
  return Swal.fire({
    title: "Are you sure you want to log out?",
    icon: "warning",
    showCancelButton: true,
    showConfirmButton: true,
    confirmButtonText: "Yes, I do",
    confirmButtonColor: "#0354a5",
    cancelButtonText: "Cancel",
    cancelButtonColor: "#d33",
  });
};

export const alertSuccess2 = (title) => {
  return Popup.fire({
    icon: "success",
    title,
    position: "center",
  });
};

export const alertError2 = (title) => {
  return Popup.fire({
    icon: "error",
    title,
    position: "center",
  });
};

export const alertRequireLogin = () => {
  return Popup.fire({
    title: "You need to login to make this action",
    icon: "warning",
    position: "center",
    showCancelButton: true,
    showConfirmButton: true,
    confirmButtonText: "Continue",
    confirmButtonColor: "#0354a5",
    cancelButtonText: "Cancel",
    cancelButtonColor: "#d33",
  });
};
