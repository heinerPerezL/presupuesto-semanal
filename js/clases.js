class Presupuesto{
    constructor(cantPresupuesto){
        this.total = Number(cantPresupuesto);
        this.restante = Number(cantPresupuesto);
    }

    presupuestoRestante(cantidad){
        return this.restante-= cantidad;
    }

    sumarDepositoTotal(cantidadTotal){
        return this.total += cantidadTotal;
    }
    sumarDepositoRestante(cantidadRestante){
        return this.restante += cantidadRestante;
    }
}

class Interfaz{

    imprimirCantidad(cantidad){
     
     const cantTotal = document.getElementById('total');
     const cantRestante = document.getElementById('restante');

     cantTotal.innerHTML = cantidad;
     cantRestante.innerHTML = cantidad;


    }

    imprimirMensaje(mensaje, tipo){
      
        const divMensaje = document.createElement('div');
        divMensaje.appendChild(document.createTextNode(mensaje));
        
        document.querySelector('.primario').insertBefore(divMensaje,formulario);
        divMensaje.classList.add('text-center','alert');

        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
            
        }

        setTimeout(function(){
            divMensaje.remove();
            formulario.reset();
            
        }, 2000);

        

    }

    imprimirLista(tipo, cantidad){
        
        const listado = document.querySelector('#lista ul');

        const li = document.createElement('li');

        li.className = 'list-group-item d-flex justify-content-between aling-items-center';

        li.innerHTML = `${tipo} <span class = "badge badge-primary badge-pill mb-0"> $ ${cantidad}</span>`;

        listado.appendChild(li);

    }

   presupuestoRestante(cantidad){
       const restante = document.querySelector('#restante');
       const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad);
       restante.innerHTML = presupuestoRestanteUsuario;

       this.cambiarColorPresupuestoRestante();
     this.cambiarRestanteFaltante();

   }

   cambiarColorPresupuestoRestante(){
    const presupuestoTotal = cantidadPresupuesto.total;
    const presupuestoRestante = cantidadPresupuesto.restante;
    const restante = document.querySelector('#res');


    if ((presupuestoTotal / 4)>presupuestoRestante ) {
        restante.classList.remove( 'alert-primary', 'alert-warning');
        restante.classList.add('alert-danger');
    } else if ((presupuestoTotal / 2)>presupuestoRestante) {
        restante.classList.remove( 'alert-primary');
        restante.classList.add('alert-warning');
    }
   }

   cambiarRestanteFaltante(){
    const spanRestante = document.querySelector('#verRestante');
    const spanFaltante = document.querySelector('#verFaltante');
    const formularioDeposito = document.querySelector('.formDeposito');
    const formularioCompra = document.querySelector('.primario');

    const presupuestoRestante = Number(cantidadPresupuesto.restante);

    if(presupuestoRestante < 1){
        spanRestante.classList.add('oculto');
        spanFaltante.classList.remove('oculto');
        formularioDeposito.classList.remove('oculto');
        formularioCompra.classList.add('oculto');

    }else{
        spanRestante.classList.remove('oculto');
        spanFaltante.classList.add('oculto');
        
    }
   }
   imprimirDeposito(cantidad){
    const presupuestoTotal= cantidadPresupuesto.sumarDepositoTotal(cantidad);
    const presupuestoSaldo= cantidadPresupuesto.sumarDepositoRestante(cantidad);
    const presupuestoRestante = Number(cantidadPresupuesto.restante);
    let formularioDeposito = document.querySelector('.formDeposito');
    const formularioCompra = document.querySelector('.primario');
    const mensaje2 = document.querySelector('.mensaje2');


    const depositoTotal = document.querySelector('#total');
    const depositoSaldo = document.querySelector('#restante');


    depositoTotal.innerHTML = presupuestoTotal;
    depositoSaldo.innerHTML = presupuestoSaldo;

    if (presupuestoRestante > 0) {
        formularioDeposito.classList.add('oculto');
        formularioCompra.classList.remove('oculto');
        this.cambiarRestanteFaltante();
    } else {
        mensaje2.classList.remove('oculto');
        
    }
 
    this.limpiarImput();
   }
  
   limpiarImput(){

     document.querySelector('#deposito').value = '';
   }

  
}