function minusStock(stockId){
    const stock=document.getElementById(stockId);
    const currentStock = parseInt(stock.textContent);
    stock.textContent= currentStock+1;
    var coun1=coun1-1;
    updateValue();

}
const valueInput = document.getElementById('noitems');
let value = 0;
const updateValue = () => {
    valueInput.value = value;
};
function addstock(stockId){
    const stock=document.getElementById(stockId);
    const currentStock = parseInt(stock.textContent);
    if(currentStock>0){
        stock.textContent= currentStock -1;
    }
    var coun1=coun1+1;
    updateValue();
    
}