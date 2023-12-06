
function bubbleSort(arr){
   var len = arr.length;
   for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(arr[j-1]>arr[j]){
           var temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
        }
     }
   }
   return arr;
}
//https://khan4019.github.io/front-end-Interview-Questions/sort.html
console.log(bubbleSort([7,5,2,4,3,9])); //[2, 3, 4, 5, 7, 9]

console.log(bubbleSort([9,7,5,4,3,1])); //[1, 3, 4, 5, 7, 9]

console.log(bubbleSort([1,2,3,1,1,1,4,5,6])); //[1, 1,1,1,2, 3, 4, 5, 6]
