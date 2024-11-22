const showValue = document.getElementById('showValue');
const increaseValue = document.getElementById('increaseValue');
const dicreaseValo = document.getElementById('dicreaseValo');


    let counter = 0;
    const conuntUpOrDown = (value) => {

        // if(showValue){
        //     showValue.innerText = "0"+displayShow;

        // }
        // counter = counter < 10 ? "0"+counter : counter;
//    let counter = counter + 1; //not! work
    // let  increshowValue = (counter = counter + value);
    
    // counter = counter + value;
    counter = counter + value;
    // const countAdd = counter;
    // countAdd = counter < 10 ? "0"+counter: counter;
    // countAdd = countAdd < 10 ? "0"+countAdd : countAdd;
    // showValue.textContent = increshowValue;
//=>this data show whene only single number add 0 dubble number ot cancel to 0;   
    // let displayShow = showValue.textContent = counter;
    let displayShow = counter;

    // displayShow = displayShow < 10 ? "0"+ displayShow : displayShow;
    if(displayShow < 10){
        showValue.textContent = "0"+counter;

    }else{
        showValue.textContent = counter;
    }
// const enterVlaue = increaseValue.value; //not! work
        // for(let i = 0; i <= 10; i++){
            
        //     showValue.innerText = enterVlaue;
        // }
        // console.log(counter = counter + 1);
        
        if(counter >= 10){
            // increaseValue.style.cursor = "not-allowed";
            // increaseValue.style.opacity = "50%";

            // counter--;
            increaseValue.setAttribute('disabled', true);
           
        }else{
            // if(counter > 1 === counter < 10){
            //     dicreaseValo.style.cursor = "pointer";
            //     dicreaseValo.style.opacity = "100%";
            // }
            increaseValue.removeAttribute('disabled', false);
        }

        // decrease button function 

        // dicreasevalue = (counter = counter - 1); //(!)jodi akta function ar modde code raki tahole decrise button function coummnet out koresi
        //showValue.textContent = dicreasevalue;
        if(counter <= 1){
            // dicreaseValo.style.cursor = "not-allowed";
            // dicreaseValo.style.opacity = "50%";
            // counter++;
            dicreaseValo.setAttribute('disabled', true);
        }else{
            // if(counter > 1 === counter < 10){
            //     // increaseValue.style.cursor = "pointer";
            //     // increaseValue.style.opacity = "100%";
            //     // // increaseValue.setAttribute('disabled', true)
            // }
            dicreaseValo.removeAttribute('disabled', false);
        }

        // if(counter < 10){
        //     "0" + counter;
        // }
    }
    // use this function i give
    // counterUpDown = function countnumber(){

    // }
    

increaseValue.addEventListener('click', () =>{
    
    conuntUpOrDown(1);
       
});

dicreaseValo.addEventListener('click', () => {
      conuntUpOrDown(-1);
});
