let CurrentPlayer='X';
var array=Array(9).fill(null)
console.log(array)

function handle(el){
     const id= Number(el.id)
     array[id]=CurrentPlayer
     el.innerText= CurrentPlayer
    CurrentPlayer= CurrentPlayer==='X'?0:'X'
      
     
    }