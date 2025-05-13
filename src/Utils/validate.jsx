
export const checkValidData = (fullname, email, password, isSignInForm) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const isFullNameValid = /^[a-zA-Z]+(?: [a-zA-Z]+)+$/.test(fullname)

    if(!isEmailValid) return "Email Id is not valid";
    if(!isPasswordValid) return "Password is not Valid"
    if(!isSignInForm && !isFullNameValid) return "FullName is not valid"

    return null;

};