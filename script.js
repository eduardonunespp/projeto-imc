const btn = document.getElementById('buttonp');
      
        
btn.addEventListener('click', () => {

    const verif = document.getElementsByClassName("fa-circle-check");
    const excla = document.getElementsByClassName("fa-triangle-exclamation");
    const text_val = document.getElementById("imc_value")
    const popup = document.getElementsByClassName("popup_erro")
    const peso = document.getElementById('num_peso').value;
    const alt = document.getElementById('num_alt').value;
    const modal = document.getElementsByClassName('modal');
    const pesoint = Number(peso);
    const altint = Number(alt);

    const imc = peso / alt**2;

    const val = Number(imc.toFixed(2));


    console.log(val);

    if(typeof(val) !== "number" || peso == 0 || alt == 0 || val == Infinity){
        popup[0].classList.add("pop_active");
        modal[0].style.display = 'none';
    }
    else{
        modal[0].style.display = 'block';
    }


    if(val <= 18.5){
        text_val.innerHTML = `O valor do seu IMC é de ${val}, cuidado, você está abaixo do peso`;
        modal[0].classList.add("modal_negative");
        modal[0].classList.add('modal_center')
        modal[0].classList.remove("modal_positive");
        excla[0].style.display = 'block';
        verif[0].style.display = 'none';

    }
    else if(val > 18.5 && imc < 24.8){
        text_val.innerHTML = `Parabéns!!! o valor do seu IMC é de ${val}, você está no peso ideal `;
        modal[0].classList.add("modal_positive");
        modal[0].classList.remove("modal_negative");
        modal[0].classList.add('modal_center')
        excla[0].style.display = 'none';
        verif[0].style.display = 'block';

    }
    else if(val >= 24.9 && imc < 29.9){
        text_val.innerHTML = `O valor do seu IMC é de ${val}, cuidado, você está acima do peso `;
        modal[0].classList.add("modal_negative");
        modal[0].classList.remove("modal_positive");
        modal[0].classList.add('modal_center')
        excla[0].style.display = 'block';
        verif[0].style.display = 'none';
    }
    else if(val > 29.9){
        text_val.innerHTML = `O valor do seu IMC é de ${val}, cuidado, você está acima do peso (Obesidade) `;
        modal[0].classList.add("modal_negative");
        modal[0].classList.remove("modal_positive");
        modal[0].classList.add('modal_center');
        excla[0].style.display = 'block';
        verif[0].style.display = 'none';
        
    
    }


})

const btn_modal = document.getElementById("button_modal");

btn_modal.addEventListener("click", () => {
    const popup = document.getElementsByClassName("popup_erro");
    popup[0].classList.remove("pop_active");
})

const cancel = document.getElementById('cancel');

cancel.addEventListener('click', () => {
    const modal = document.getElementsByClassName('modal');
    modal[0].classList.remove('modal_center')
})