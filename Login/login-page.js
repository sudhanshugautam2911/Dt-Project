console.log('Perfectly working...')

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
// const page2 = document.getElementById("redirect");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.email.value;
    const password = loginForm.password.value;

    if (username === "vishalkumarvkvk988@gmail.com" && password === "Hardworker") {
        alert("You have successfully logged in.");
        // location.reload();
        window.location.href = "webpage.html";
    } 
    else if(username === "mohit@gmail.com" && password === "Chocolate") {
        alert("You have successfully logged in.");
        // location.reload();
        window.location.href = "webpage.html";
    }

    else if(username === "sudhanshu@gmail.com" && password === "Designer") {
    alert("You have successfully logged in.");
    // location.reload();
    window.location.href = "webpage.html";
    }
    else if(username === "hardik@gmail.com" && password === "Resources") {
        alert("You have successfully logged in.");
        // location.reload();
        window.location.href = "webpage.html";
        }
        else if(username === "chandan@gmail.com" && password === "loafing") {
            alert("You have successfully logged in.");
            // location.reload();
            window.location.href = "webpage.html";
            }
    else {
        alert("error.");
    }







});