const input = document.querySelector('#input')
const imgBox = document.querySelector('#imgBox')
const qrImage = document.querySelector('#qr-img')

function generateCode(){

    if(input.value.length > 0){

        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`
    
        imgBox.classList.add('show-img')

    }else{
        input.classList.add('error')

        setTimeout(() => {
            input.classList.remove('error')
        }, 1000);
    }
}