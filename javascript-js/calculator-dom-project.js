let calculation = localStorage.getItem('calculation') || '';
            
displayCalculation();

function updateCalculator(value){
    calculation += value;

    displayCalculation();

    localStorage.setItem('calculation',calculation);

}

function displayCalculation(){
    document.querySelector('.js-calculation')
        .innerHTML = calculation;
}