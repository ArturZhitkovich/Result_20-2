// Event_loop

// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout');
// }, 0);

// console.log('End');

// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout 1');

//   setTimeout(() => {
//     console.log('Timeout 2');
//   }, 0);
// }, 0);

// console.log('End');


// console.log('Start'); console.log('End');  console.log('Timeout 1'); console.log('Timeout 2');


// Sync //
// Promise // 
// SetTimeout // 


// console.log('Start');

// Promise.resolve()
//   .then(() => {
//     console.log('Promise 1');
//     return Promise.resolve();
//   })
//   .then(() => {
//     console.log('Promise 2');
//     return Promise.resolve();
//   })
//   .then(() => {
//     console.log('Promise 3');
//   });

// console.log('End');


// 'Start' 'End' 'Promise 1' 'Promise 2' 'Promise 3'

// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout 1');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise 1');
//   return Promise.resolve().then(() => {
//     console.log('Promise 2');
//   });
// }).then(() => {
//   console.log('Promise 3');
// });

// setTimeout(() => {
//   console.log('Timeout 2');
// }, 0);

// console.log('End');

// 'Start' 'End' 'Promise 1' 'Promise 2' 'Promise 3' 'Timeout 1' 'Timeout 2'

// 'Start'  'End' 'Promise 1' 'Promise 2' 'Promise 3' 'Timeout 1' 'Timeout 2'


// Sync // 
// Promise // 
// SetTimeout //  


// class Man {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Promise {
//   constructor(resolve, reject) {
//     this.resolve = resolve;
//     this.reject = reject;
//   }
// }

// new Promise((resolve) => {
//   console.log('New Promise');
//   setTimeout(() => {
//     console.log('Timeout inside Promise');
//     resolve();
//   }, 0);
// })

// const Ivan = new Man('Ivan', age);


// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout 1');
// }, 0);

// new Promise((resolve) => {
//   console.log('New Promise');
//   setTimeout(() => {
//     console.log('Timeout inside Promise');
//     resolve();
//   }, 0);
// }).then(() => {
//   console.log('Promise 1');
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Timeout inside Nested Promise');
//       resolve();
//     }, 0);
//   });
// }).then(() => {
//   console.log('Promise 2');
// });

// setTimeout(() => {
//   console.log('Timeout 2');
// }, 0);

// console.log('End');

// 'Start'  
// 'New Promise' 
// 'End'
// 'Timeout 1' 
// 'Timeout inside Promise'
// 'Promise 1' 
// 'Timeout 2'  
// 'Timeout inside Nested Promise' 
// 'Promise 2'

// Sync //
// Promise // 
// SetTimeout // 


// console.log('Start');

// Promise.resolve().then(() => {
//   console.log('Promise 1');
// });

// Promise.resolve().then(() => {
//   console.log('Promise 2');
// }).then(() => {
//   console.log('Promise 3');
// });

// Promise.resolve().then(() => {
//   console.log('Promise 4');
// });

// console.log('End');

//  'Start' 'End' 'Promise 1' 'Promise 2' 'Promise 4'  'Promise 3' 

// Sync // 
// Promise // 'Promise 1' 'Promise 2' 'Promise 4'  'Promise 3' 
// SetTimeout // 

// const getData = (callback) => {
//   console.log('getData start');
//   fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then((response) => response.json())
//     .then((user) => {
//       console.log('Success');
//       callback(user);
//     })
//   console.log('getData end');
// }

// getData(() => {
//   console.log('user received');
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, 500);
//     console.log('in promise');
//     setTimeout(() => {
//       console.log('last set timeout');
//     }, 400);
//  });
//  promise.then(() => {
//    console.log('promise resolved');
//   });
// });

// console.log('End') 

// 'getData start' 'getData end' 'End' 'Success'  'user received'  'in promise' 'last set timeout' 'promise resolved'

// call Stack // 
// Sync //
// Promise // fetch
// SetTimeout // 

console.time()

setTimeout(() => {
  console.log('10 ms')
}, 10)

for (let index = 0; index < Math.pow(2, 20); index++) {
  console.log(index);
}
console.timeEnd()