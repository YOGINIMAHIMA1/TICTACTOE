var currentPlayer="X"
// create array as grid
var arr=Array(9).fill(null)

function checkWinner(){
  if((arr[0]!==null&& arr[0]==arr[1]&& arr[1]==arr[2])||
     (arr[3]!==null&&arr[3]== arr[4]&& arr[4]==arr[5] )||
     (arr[6]!==null &&arr[6]== arr[7]&& arr[7]==arr[8])||
     (arr[0]!==null && arr[0]== arr[3] && arr[3]== arr[6])||
     (arr[1]!==null && arr[1]== arr[4] && arr[4]==arr[7])||
     (arr[2]!==null && arr[2]== arr[5] && arr[5] ==arr[8])||
     (arr[0]!==null && arr[0]== arr[4] && arr[4] ==arr[8]) ||
     (arr[2]!==null && arr[2]==  arr[4] && arr[4]==arr[6]))
     {
document.write(`WINNER IS ${currentPlayer}`)
}
if(!arr.some((e)=>e==null)){
   document.write(`Draw`);
   return;
}
}
// function to show on grid to know which square u clicked 
  function handle(el) {
    
  var id= el.id;
  if(arr[id]!==null) return;
  // store current player in array
  arr[id]=currentPlayer;
 
  // if array is x then now make current player is 0
  currentPlayer= currentPlayer=='X'?'0':'X'
  // print on DOM
  el.innerText=currentPlayer
  checkWinner();
  console.log(arr)

 
  }