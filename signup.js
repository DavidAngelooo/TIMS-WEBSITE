 
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");
 
    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add('form__message--${type}');
}
 
function setInputError(inputElement, message) {
    inputElement.classlist.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}
 
function clearInputError(inputElement) {
    inputElement.classlist.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}
 
document.addEventListener("DOMContentLoaded", () => {
    let db = new Localbase('tims')
    const signUpForm = document.querySelector("#createAccount");
 
 
    signUpForm.addEventListener("submit", e => {
        e.preventDefault();
        var inputs = signUpForm.getElementsByTagName("input");
        var inputByName = inputs["username"];
        var inputByEmail = inputs["email"];
        var inputByPassword = inputs["password"];
        var type = document.getElementById("userType");
        var table = type.value;
        console.log(table);
 
        db.collection(table).add({
            name: inputByName.value,
            email: inputByEmail.value,
            password: inputByPassword.value
          });
          
    });
});
