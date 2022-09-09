function contacto(nombre,cedula,mail,contraseña) {
    this.nombre = nombre;
    this.cedula = cedula;
    this.mail = mail;
    this.contraseña = contraseña;

    this.bienvenido = function () {
        console.log("Bienvenido" + this.nombre);
    }
}