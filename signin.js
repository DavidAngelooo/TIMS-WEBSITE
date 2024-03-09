
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
 
//eto yung javascript for database
document.addEventListener("DOMContentLoaded", () => { //yung DOMContentLoaded para lang pag nag load yung sign in page ang gagawin nya ay ioopen nya yung database
    let db = new Localbase('tims')                     //ito yung pag tawag ng database nandyan yung database name
    const loginForm = document.querySelector("#login"); //tinatawag kung ano yung form na may login na id which is nasa html 
 
    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        var inputs = loginForm.getElementsByTagName("input"); //will get data from the registered input 
        var username = inputs["username"];
        var password = inputs["password"];
        var type = document.getElementById("userType");
        var table = type.value;
        console.log(table);
        
        //ito yung nag connect sa database natin kaya naka lagay ay db.collection
        //collection means table 
        //.doc - iccheck nya sa table kung merong kamatch or ano yung tinype mo na email at password
        db.collection(table).doc({ email: username.value, password:password.value }).get().then(document => { 
            console.log(document)
            if(document === undefined){ //if undefined it means wala syang kamatch dito mag eerror
                setFormMessage(loginForm, "error", "Invalid username/password combination");
            }
            else{
                if(type.value === 'learner')
                {
                    alert ("Login successfully");
                    window.location.href="/learner/home.html";
                }   else{
                    window.location.href="/worker/worker_home.html";
                }
            }
          });
    });
});