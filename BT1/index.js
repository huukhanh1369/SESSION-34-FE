
let users = [];

let Email = document.getElementById("inputEmail");
let Password = document.getElementById("inputPassword");
let ConfirmPassword = document.getElementById("inputConfirmPassword");
let btn = document.getElementById("submit");

btn.addEventListener("click", () => {
    const emailValue = Email.value.trim();
    const passwordValue = Password.value;
    const confirmPasswordValue = ConfirmPassword.value;


    if (passwordValue !== confirmPasswordValue) {
        alert("Passwords do not match!");
        return;
    }

    const isExisting = users.some(user => user.email === emailValue);
    if (isExisting) {
        alert("Email already registered!");
        return;
    }


    const newUser = {
        email: emailValue,
        password: passwordValue
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));


    console.log("Registered users:", users);
    alert("User registered successfully!");
});