// 1. вернуть количество нечетных чисел из массива

function countOfOdd(arr) {
    return arr.filter(item => item % 2).length;
 }

 // 2. функция возвращает произведение всех элементов массива

 function productOfArray(arr){
    if(arr.length == 0) return 0;
       return arr.reduce( (a, b) => { return a * b; } );
   }

   // 3. функция возвращает первый отрицательный элемент массива, 
   // если такого нет в массиве пишет no negative elements

   function indexOfFirstNegative(arr){
    let index;
       arr.some((e, i) => { if(e < 0) index = i; return e < 0 });
       return index || index === 0 ? index : 'no negative elements';
   }

   //4. функция возвращает сумму элементов массива
   
   function sumOfArray(arr){
    let sum = 0;
   for(let i = 0; i < arr.length; i++){
       sum += arr[i];
       }
       return sum;
       }


      //5.  написать функцию, которая возвращает среднее
      //арифметическое массива. Если массив [], возвращает 0
       const average = (arr) => {
        if (arr === 0) {
        return 0;
        }
          const sum = arr.reduce((acc, arr) => acc + arr, 0);
          const length = arr.length;
          return sum / length;
        }
              
//6.  Возвращается сумма положительных элементов массива.
//Если в массиве только отр, вернуть 0
//если [] вернуть 0

const sumOfPositive = (arr) => {
    if (arr === 0 || arr < 0) {
    return 0;
    }
let result = 0;
for (let i = 0; i < arr.length; i++) {
  if(arr[i] > 0) {
 result += arr[i];
 }
}
return result;
}

//7. вернуть сумму отрицательных чисел массива,
// если нет отр или [], вернуть 0

function sumOfNegative(arr){
    if(arr.length === 0) {
           return 0;
    }
     let sum = 0;
     for(let i = 0; i < arr.length; i++) 
           if(arr[i] < 0)
           sum += arr[i];
       return sum;
   }