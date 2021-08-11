class LoginService {

    handleValidation(username, password) {
        let result = this.checkEmptyFields(
            username,
            password,
        )

        return result;
    }

    checkEmptyFields(username, password) {
        let errors = {};
        let formIsValid = true

        if (!username) {
            formIsValid = false;
            errors['username'] = "Cannot be empty";
        }
        if (!password) {
            formIsValid = false;
            errors['password'] = "Cannot be empty";
        }

        return {errors, formIsValid};
    }
}

export default new LoginService();