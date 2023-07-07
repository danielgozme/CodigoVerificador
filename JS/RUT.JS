function ClacularVD() {
    var rut = document.getElementById("rut");
    var rutlimpio = rut.value.replace(/\./g, "").replace(/-/g, "");
    
    var suma = 0;
    var factor = 2;

    for (var i = rutlimpio.length - 1; i >= 0; i--) {
        suma += parseInt(rutlimpio.charAt(i)) * factor;
        console.log(suma);
        factor++;

        if (factor > 7) {
            factor = 2;
        }
    }

    var modulo = suma % 11;
    console.log(modulo);
    var Dcalculado = 11 - modulo;
    console.log(Dcalculado);

    var Confirmacion = Dcalculado === 11 ? '0' : Dcalculado === 10 ? 'K' : Dcalculado.toString();
    document.getElementById('validacion').textContent = "El Digito Verificador del RUT ES :" + Confirmacion;
    
}
