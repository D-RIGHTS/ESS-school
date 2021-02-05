export default function validateInfo(values) {
    let errors = {};

    if(!values.name.trim()) {
        errors.name = "Name required"
    }

    if(!values.email) {
        errors.email = "Email required"
    }


    if(!values.password) {
        errors.password = 'Password is required'
    } else if (values.password.length < 6) {
        errors.password = "password needs more than 6 characters"
    }

    if(!values.verifyPassword) {
        errors.verifyPassword = "Password is required"
    } else if (values.verifyPassword !== values.password) {
        errors.verifyPassword = "Password does not match"
    }

    return errors;
}