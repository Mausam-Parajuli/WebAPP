
    const passwordField = document.getElementById("passwordField");
    const toggleEye = document.getElementById("toggleEye");
    const statusMsg = document.getElementById("status");

    toggleEye.addEventListener("click", () => {
      if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleEye.src = "show.png"; // swap to open eye image
        statusMsg.textContent = "Password is Visible";
      } else {
        passwordField.type = "password";
        toggleEye.src = "hidden.png"; // swap to closed eye image
        statusMsg.textContent = "Password is Hidden";
      }
    });