class RegisterService {

    handleValidation(username, email, password) {
        let result = this.checkEmptyFields(
            username,
            email,
            password,
        )

        return result;
    }

    checkEmptyFields(username, email, password) {
        let errors = {};
        let formIsValid = true

        if (!username) {
            formIsValid = false;
            errors['username'] = "Cannot be empty";
        }
        if (!email) {
            formIsValid = false;
            errors['email'] = "Cannot be empty";
        }
        if (!password) {
            formIsValid = false;
            errors['password'] = "Cannot be empty";
        }

        return {errors, formIsValid};
    }
}

export default new RegisterService();