document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita recargar la página

    let usuario = document.getElementById("usuario").value.trim();
    let password = document.getElementById("password").value.trim();
    let mensaje = document.getElementById("mensaje");

    // Validaciones básicas
    if (usuario === "" || password === "") {
        mensaje.style.color = "red";
        mensaje.textContent = "Todos los campos son obligatorios";
        return;
    }

    // Login simulado
    if (usuario === "admin" && password === "1234") {
        mensaje.style.color = "green";
        mensaje.textContent = "Bienvenido, acceso permitido";
    } else {
        mensaje.style.color = "red";
        mensaje.textContent = "Usuario o contraseña incorrectos";
    }
});