function cambiar(actual,siguiente){
    document.getElementById(actual).style.display = "none";
    document.getElementById(siguiente).style.display = "block";
}
function validarCamposVacios(formulario){
    let camposVacios= false;
    if (formulario === 1) {
        const nombrePersona = document.getElementById('nombrePersona').value;
        const apellidoPaternoPersona = document.getElementById('apellidoPaternoPersona').value;
        const apellidoMaternoPersona = document.getElementById('apellidoMaternoPersona').value;
        const alcaldiaPersona = document.getElementById('alcaldiaPersona').value;
        const coloniaPersona = document.getElementById('coloniaPersona').value;
        const codigoPostalPersona = document.getElementById('codigoPostalPersona').value;
        const direccionPersona = document.getElementById('direccionPersona').value;

        if (nombrePersona === "" || apellidoPaternoPersona === "" || apellidoMaternoPersona === "" || alcaldiaPersona === "" || coloniaPersona === "" || codigoPostalPersona === "" || direccionPersona === "") {
            camposVacios = true;
        }
    } else if (formulario === 2) {
        const nombreAlumno = document.getElementById('nombreAlumno').value;
        const apellidoPaternoAlumno = document.getElementById('apellidoPaternoAlumno').value;
        const apellidoMaternoAlumno = document.getElementById('apellidoMaternoAlumno').value;
        const numeroControlAlumno = document.getElementById('numeroControlAlumno').value;

        if (nombreAlumno === "" || apellidoPaternoAlumno === "" || apellidoMaternoAlumno === "" || numeroControlAlumno === "") {
            camposVacios = true;
        }
    } else {
        alert("Error: Formulario inválido");
    }

    return camposVacios
}
function enviar(formulario) {
    let mensaje = '';

    if (formulario === 1) {
        const nombrePersona = document.getElementById('nombrePersona').value;
        const apellidoPaternoPersona = document.getElementById('apellidoPaternoPersona').value;
        const apellidoMaternoPersona = document.getElementById('apellidoMaternoPersona').value;
        const alcaldiaPersona = document.getElementById('alcaldiaPersona').value;
        const coloniaPersona = document.getElementById('coloniaPersona').value;
        const codigoPostalPersona = document.getElementById('codigoPostalPersona').value;
        const direccionPersona = document.getElementById('direccionPersona').value;

        mensaje = `Adopción de Nopal - Persona:\nNombre: ${nombrePersona}\nApellido Paterno: ${apellidoPaternoPersona}\nApellido Materno: ${apellidoMaternoPersona}\nAlcaldía: ${alcaldiaPersona}\nColonia: ${coloniaPersona}\nCódigo Postal: ${codigoPostalPersona}\nDirección: ${direccionPersona} \nEl uso indebido de este mensaje se tomará acción legal`;
    } else if (formulario === 2) {
        const nombreAlumno = document.getElementById('nombreAlumno').value;
        const apellidoPaternoAlumno = document.getElementById('apellidoPaternoAlumno').value;
        const apellidoMaternoAlumno = document.getElementById('apellidoMaternoAlumno').value;
        const numeroControlAlumno = document.getElementById('numeroControlAlumno').value;

        mensaje = `Adopción de Nopal - Alumno:\nNombre: ${nombreAlumno}\nApellido Paterno: ${apellidoPaternoAlumno}\nApellido Materno: ${apellidoMaternoAlumno}\nNúmero de Control: ${numeroControlAlumno} \nEl uso indebido de este mensaje se tomará acción legal`;
    } else {
        alert("Error: Formulario inválido");
        return;
    }

    const camposVacios = validarCamposVacios(formulario);

    if (camposVacios) {
        alert("Llena todos los campos correctamente");
        return;
    }

    const numeroTelefono = '525563359894'; // Obtener el número de teléfono de una fuente externa
    const url = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');

    if (formulario === 1) {
        cambiar('f1', 'compromiso');
        final(1)
    } else if (formulario === 2) {
        cambiar('f2', 'compromiso');
        final(2)

    }
}
function final(formulario){
    if(formulario == 1){
        const nombrePersona = document.getElementById('nombrePersona').value;
        const apellidoPaternoPersona = document.getElementById('apellidoPaternoPersona').value;
        const apellidoMaternoPersona = document.getElementById('apellidoMaternoPersona').value;
        
        const nombre = nombrePersona + " " + apellidoPaternoPersona + " " + apellidoMaternoPersona;
        document.getElementById('nombreadoptante').innerHTML = nombre;
    }else if(formulario == 2){
        const nombreAlumno = document.getElementById('nombreAlumno').value;
        const apellidoPaternoAlumno = document.getElementById('apellidoPaternoAlumno').value;
        const apellidoMaternoAlumno = document.getElementById('apellidoMaternoAlumno').value;
        
        var nombre = nombreAlumno + " " + apellidoPaternoAlumno + " " + apellidoMaternoAlumno;
        document.getElementById('nombreadoptante').innerHTML = nombre;
    }else{alert("ERROR")}
}
function imprimir(){
    document.getElementById('menu').style.display = "none"
    document.getElementById('footer').style.display = "none"
    print()
    document.getElementById('menu').style.display = "flex"
    document.getElementById('footer').style.display = "block"
    
}