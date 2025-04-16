
if (!localStorage.getItem("accounts")) {
    const defaultAccounts = [
      { email: "test@example.com", password: "123456" },
      { email: "user@example.com", password: "password" }
    ];
    localStorage.setItem("accounts", JSON.stringify(defaultAccounts));
  }
  
 
  if (document.getElementById("login")) {
    let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  
    document.getElementById("login").addEventListener("click", function (e) {
      e.preventDefault();
      let mail = document.getElementById("email").value.trim();
      let password = document.getElementById("password").value;
    
      if (mail === "") {
        alert("Email không được bỏ trống");
        return;
      }
    
      if (password === "") {
        alert("Password không được bỏ trống");
        return;
      }
    
      let acc = accounts.find((item) => item.email === mail && item.password === password);
    
      if (acc) {
        alert("Welcome");
        localStorage.setItem("currentUser", JSON.stringify(acc));
        window.location.href = "index2.html";
      } else {
        alert("Email hoặc mật khẩu không đúng");
      }
    });
  }    
  

  if (document.getElementById("userEmail")) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      window.location.href = "index.html";
    } else {
      document.getElementById("userEmail").textContent = currentUser.email;
    }
  
    document.getElementById("logout").addEventListener("click", () => {
      localStorage.removeItem("currentUser");
      window.location.href = "index.html";
    });
  }
  