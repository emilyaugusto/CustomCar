
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 500)
})


let boxBuscar = document.querySelector('.buscar-box');
let lupa = document.querySelector('.lupa-buscar');
let btnFechar = document.querySelector('.btn-fechar');

lupa.addEventListener('click', ()=> {
    boxBuscar.classList.add('ativar')
})

btnFechar.addEventListener('click', ()=> {
    boxBuscar.classList.remove('ativar')
})




const colorButtons = document.querySelectorAll('.color-button');
const customButtons = document.querySelectorAll('.custom-paint-button');
const carImage = document.querySelector('.car-image');

colorButtons.forEach(button => {
    button.addEventListener('click', function() {
        const color = button.classList[1];
        switch(color) {
            case 'red':
                carImage.src = 'assets/img/carred.jpg';
                break;
            case 'blue':
                carImage.src = 'assets/img/carblue.jpg';
                break;
            case 'green':
                carImage.src = 'assets/img/cargreen.jpg';
                break;
            case 'yellow':
                carImage.src = 'assets/img/carro.jpg';
                break;
            case 'black':
                carImage.src = 'assets/img/carwater.jpg';
                break;
            default:
                carImage.src = 'assets/img/carro.jpg'; // fallback para a imagem padrão
                break;
        }
    });
});

customButtons.forEach(button => {
    button.addEventListener('click', function() {
        const customPaint = button.classList[1];
        switch(customPaint) {
            case '1':
                carImage.src = 'assets/img/customfire.jpg';
                break;
            case '2':
                carImage.src = 'assets/img/customcinza.jpg';
                break;
            case '3':
                carImage.src = 'assets/img/customgreen.jpg';
                break;
            default:
                carImage.src = 'assets/img/carro.jpg'; // fallback para a imagem padrão
                break;
        }
    });
});
