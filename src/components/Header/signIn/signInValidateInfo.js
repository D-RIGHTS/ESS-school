export default function ValidationInfo(values) {
    let errors ={};

    if(!values.email.trim()) {
        errors.email="Email required"
    }

    if (!values.password) {
        errors.password="Password Required"
    }else if (values.password < 6){
        errors.password="Password needs more than 6 characters"
    }
    return errors
}