const presupuesto = prompt('Ingrese el presupuesto.');
let formulario = document.getElementById('formulario');
let cantidadPresupuesto;



document.addEventListener('DOMContentLoaded',function(){

    if (presupuesto === null || presupuesto === '') {
        window.location.reload();
    } else {
        cantidadPresupuesto = new Presupuesto(presupuesto);
        
        const ui = new Interfaz();

        ui.imprimirCantidad(cantidadPresupuesto.total);
        
       
    }
});

formulario.addEventListener('submit',function(e){
   e.preventDefault();
    const tipoGasto = document.getElementById('tipoGasto').value;
    const montoGasto = document.getElementById('montoGasto').value;

    const ui= new Interfaz();
    

   
    if (tipoGasto ==='' || montoGasto === '') {
       
        ui.imprimirMensaje('Por favor no deje espacios en blanco','error');
        

    } else {
        
        ui.imprimirMensaje('Guardado','correcto');
        ui.imprimirLista(tipoGasto,montoGasto);

        
        ui.presupuestoRestante(montoGasto);
        ui.cambiarRestanteFaltante();
    }

    formularioDeposito.addEventListener('submit', function(e){
      e.preventDefault();
      const cantidadDepositada= Number(document.querySelector('#deposito').value);
      const interfaz = new Interfaz();
      const mensaje2 = document.querySelector('.mensaje2');

     
      if (cantidadDepositada == '' || cantidadDepositada == null  ) {
          mensaje2.classList.remove('oculto');
      } else {
        const totalDeposito = interfaz.imprimirDeposito(cantidadDepositada);
        mensaje2.classList.add('oculto');
      }
     
    });

 
   
});




