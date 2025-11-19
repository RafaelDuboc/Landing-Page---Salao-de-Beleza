   var btnn = document.getElementById('btn-next')
const btnp = document.getElementById('btn-prev');
var items = document.querySelectorAll('.servico-card')
var dotnumber = document.querySelectorAll('.dot')
var number = document.querySelectorAll('.number')

let activeIndex = 0
let total = items.length


function update(direction) {
      document.querySelector('.servico-card.active').classList.remove('active')
      document.querySelector('.number.active').classList.remove('active')
      document.querySelector('.dot.active').classList.remove('active')

      if(direction > 0){
         activeIndex = activeIndex + 1
            if(activeIndex === total){
               activeIndex = 0         
            }
               
            
      }  else if( direction < 0){ 
         activeIndex = activeIndex - 1

         if(activeIndex < 0){
            activeIndex = total - 1
         }

         
      }

      items[activeIndex].classList.add('active')
      number[activeIndex].classList.add('active')
      dotnumber[activeIndex].classList.add('active')
}

        btnp.addEventListener('click', function(){
            update(-1)
             
        });
    

    
    
        btnn.addEventListener('click', function(){
           update(1)
             
        });
    



