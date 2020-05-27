const span_list = Array.from(document.getElementsByTagName("span"))
const carrousel = document.getElementById('review')


/*Templates con cada una de las reviews para el carrusel*/ 

const el1 = `

    <img src="./img/avatar-anisha.png">
    <p class="name">Anisha LI</p>
    <p class="opinion">
        "Manage has supercharged our team's workflow 
        the hability to main visibility on larger milestones at all times
        keeps everyone motivated
        "
    </p>
`

const el2 = `

    <img src="./img/avatar-ali.png">
    <p class="name">Ali bravo</p>
    <p class="opinion">
        "We have been able to cancel so many
        other subscriptions since using Manage.
        There is no more cross-channel confusion
        and everyone is much more focused"
    </p>

`

const el3 = `

    <img src="./img/avatar-richard.png">
    <p class="name">Richard Watts</p>
    <p class="opinion">
        "Manage allow us to provide structure and process. It
        keep us organized and focused. I can't stop recommending
        them to everyone I talk to!
        "
    </p>
`

const el4 = `

    <img src="./img/avatar-shanai.png">
    <p class="name">Shanai Gough</p>
    <p class="opinion">
        "Their software allow us to track,manage and collaborate
        on our projects from anywhere. It keeps the whole team in-
        sync without being intrusive
        "
    </p>
`
/*Recive un array con los botones para pasar de slider y les cambia el fondo a blanco para que aparezcan sin seleccionar*/
const unselected = (array) => {
    array.forEach(el => {
       if(el.id.includes('slide')) {
        el.style.backgroundColor = "white"
       }
    } )
}

span_list.forEach( span => {
    
/*Por cada uno de mis botones para pasar hacia delante o atrás , saco su id
ejecuto la función para deseleccionar los demás , y al clickado le pongo un fondo naranja
para que se vea seleccionado
*/
    span.onclick = ({target}) => {
        const {id} = target
        unselected(span_list)
        target.style.backgroundColor="#f25f3a"
        /*
            Dependiendo del botón clickado , se mostrará un elemento u otro del carrusel
        */ 
        switch (id) {
            case "slide-1":
                carrousel.innerHTML = el1
                
                break;
            case "slide-2":
                carrousel.innerHTML = el2
                break;
            case "slide-3":
                carrousel.innerHTML = el3
                break;
            case "slide-4":
                carrousel.innerHTML = el4
                break;
            default:
                console.log(id)
                break;
        }
    }
    
})


const hamburger = document.getElementById('hamburger')
const hamburger_close = document.getElementById('hamburger-close')


hamburger.onclick = (e) => {
    /*Cuando hago click en el botón de el mítico hamburger-menu
añado la clase mobile-nav-open a mi navegación de movil
esta clase está definida en mis estilos , y lo que hará será mostrar el elemento
*/
    document.querySelector('#mobile-nav').setAttribute('class' , 'mobile-nav-open')

    //Arranco la animación definida en mis estilos para que la apertura se vea fluida
    document.querySelector('#mobile-nav nav').style.animationPlayState = 'running'
    //Quito el botón del hamburger-menu y muestro el de la X para cerrarlo
    e.target.setAttribute('class' , 'hamburger-closed')
    hamburger_close.setAttribute('class' , 'hamburger-open')
}

//Aquí sería el mismo proceso pero al revés
hamburger_close.onclick = (e) => {
    document.querySelector('#mobile-nav').setAttribute('class' , 'mobile-nav-closed')
    document.querySelector('#mobile-nav nav').style.animationPlayState = 'paused'
    e.target.setAttribute('class' , 'hamburger-closed')
    hamburger.setAttribute('class' , 'hamburger-open')

}



//Expresión regular para comprobar si un email es valido
const email_rule = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

//Si cuando hago click en enviar , el contendio del input cumple con la expresión regular , es un email válido
document.querySelector('#email_send').onclick = () => {
    const input = document.querySelector('#email-input')
    const {value} = input
    if(email_rule.test(value)) {
        alert("enviado!")
    } else {
        alert("Formato incorrecto")
    }
}