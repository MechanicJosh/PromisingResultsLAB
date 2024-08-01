// slowMath.add(6,2)
// .then(result => {
//     console.log(result);
//     return slowMath.multiply(result,2);
// })
// .then(result => {
//     console.log(result);
//     return slowMath.divide(result,4);
// })
// .then(result => {
//     console.log(result);
//     return slowMath.subtract(result,3);
// })
// .then(result => {
//     console.log(result);
//     return slowMath.add(98,result);
// })
// .then(result => {
//     console.log(result);
//     return slowMath.remainder(result,2);
// })
// .then(result => {
//     console.log(result);
//     return slowMath.multiply(result, 50);
// })
// .then(result => {
//     console.log(result);
//     return slowMath.remainder(result,40);
// })
// .then(result => {
//     console.log(result);
//     return slowMath.add(result,32);
// })
// .then(result => {
//     console.log(`The final result is ${result}.`);
// })
// .catch(error => {
//     console.log(error);
// });


async function doMath(){
    try{
       let value = await slowMath.add(6,2);
       console.log(value);

       value = await slowMath.divide(value,2);
       console.log(value);

       value = await slowMath.subtract(value,3);
       console.log(value);

       value = await slowMath.add(value,98);
       console.log(value);

       value = await slowMath.remainder(value,2);
       console.log(value);

       value = await slowMath.multiply(value,50);
       console.log(value);

       value = await slowMath.remainder(value,40);
       console.log(value);

       value = await slowMath.add(value,32);
       console.log(`The result is ${value}.`);
    }
    catch(error){
        console.log(error);
    }
}

doMath();