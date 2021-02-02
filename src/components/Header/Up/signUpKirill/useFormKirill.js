// import { useState } from "react";
// import axios from "axios";
//
// const useForm = (validate) => {
//     const [values, setValues] = useState({
//         name:"",
//         surname:"",
//         email:"",
//         password:"",
//         verifyPassword:"",
//     });
//     const [errors, setErrors] = useState({});
//
//     const handleChange = e => {
//         const { name, value } = e.target;
//
//         setValues({
//             ...values,
//             [name]: value
//         });
//     };
//     const handleSubmit = e => {
//         e.preventDefault();
//         setErrors(validate(values), valueSubmitForm);
//     };
//
//     const valueSubmitForm = () => {
//         axios.post("http://localhost:3001/api/v1/users", values)
//             .then((res) => {
//                 if (res.data.accessToken) {
//                     localStorage.setItem("user", JSON.stringify(res.data))
//                 }
//                 return res.data
//             })
//     }
//
//     return{ handleChange, values, handleSubmit , errors, valueSubmitForm  }
//
//
// }
//
// export default useForm;