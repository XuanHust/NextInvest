import * as yup from "yup";

export const validateName = yup
  .string()
  .required("Vui lòng nhập họ tên")
  .max(30, "Họ tên tối đa 30 ký tự!")

export const validateUsername = yup
  .string()
  .required("Vui lòng nhập Username")
  .max(15, "Username tối đa 15 ký tự!")
  .matches(
    /^[A-Za-z0-9]*$/,
    "Username gồm số và chữ, không phân biệt chữ hoa và chữ thường, không sử dụng ký tự đặc biệt"
  );

export const validatePassword = yup
  .string()
  .required(`Mật khẩu không được để trống.`)
  .max(40, "Mật khẩu tối đa 40 ký tự!")
  .min(6, "Mật khẩu tối thiểu 6 ký tự!")
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,40})/,
    "Mật khẩu phải có từ 6 đến 32 ký tự, có ký tự chữ số, chữ hoa và chữ thường."
  );

export const validateConfirmPassword = (field = "newPassword") => {
  return yup
    .string()
    .required(`Xác nhận mật khẩu không được để trống.`)
    .max(40, "Mật khẩu tối đa 40 ký tự!")
    .min(6, "Mật khẩu tối thiểu 6 ký tự!")
    .oneOf([yup.ref(field), null], "Mật khẩu nhập lại không khớp");
};

export const validateDifferentPassword = (field = "oldPassword") => {
  return yup
    .string()
    .required(`Mật khẩu không được để trống.`)
    .max(40, "Mật khẩu tối đa 40 ký tự!")
    .min(6, "Mật khẩu tối thiểu 6 ký tự!")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,40})/,
      "Mật khẩu phải có từ 6 đến 32 ký tự, có ký tự chữ số, chữ hoa và chữ thường."
    )
    .notOneOf([yup.ref(field), null], "Mật khẩu mới không được trùng với mật khẩu cũ");
};

export const validateEmail = yup
  .string()
  .required("Vui lòng nhập Email")
  .max(40, "Email tối đa 40 ký tự!")
  .email("Email không đúng định dạng");

export const validatePhone = yup
  .string()
  .max(15, "SDT tối đa 15 ký tự!")
  .matches(/^(84|0[3|5|7|8|9])[0-9]{8,13}$/, {
    message: "Số điện thoại chưa đúng định dạng", excludeEmptyString: true
  })
