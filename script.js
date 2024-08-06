const selectmovieInputEl = document.getElementById('movie');
console.log(selectmovieInputEl);
const selectseatInputEl = document.querySelectorAll('.seats');
console.log(selectseatInputEl);
const AmountEl = document.getElementById('Amount');
console.log(AmountEl);
const countEl = document.getElementById('count');
console.log(countEl);


selectmovieInputEl.addEventListener('change' ,function(){

    const movieselect = selectmovieInputEl.value;
    console.log(movieselect);
    const seat = selectseatInputEl.length;
    console.log(seat);
    const Amount = seat * movieselect;
    console.log(Amount);

   selectseatInputEl .innertext = seat;
   AmountEl.innerText = Amount;

});
for (let i = 0; i < selectseatInputEl.length; i++){
    if(!selectseatInputEl[i].classList.contains('Occupied')){
        selectseatInputEl[i].addEventListener('click',function(){
            selectseatInputEl[i].classList.toggle('selected');
            summary();
        })
    }
}

