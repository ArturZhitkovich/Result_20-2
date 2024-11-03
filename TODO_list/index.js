// JS Type

// 8 

// number string boolean undefined null bigInt symbol - примитивы
// object - ссылочный 

//

// let number = 1;
// let string = 'hello';
// let boolean = true // false
// let undefined;
// let myNull = null;

// console.log(number === 1); // true

// let myObject = { a: '1' }; // "LINK\ССЫЛКА" ссылку на ячейку памяти
// let b = myObject;
// let c = { a: '1' };

// console.log(myObject === b); // true 
// console.log(myObject === c); // false 

// let myBigInt = 100000000000n;
// let mySymbol = new Symbol(); 

//number 

// обычные числа
// обычные матем. действия

// let n = 10

// приведение к Number 

// 
// +string 
// Number(number)
// parseInt(10.22)
// parseFloat('22.3');

//integer - это целое число (число без запятой)
// Number.isInteger(number) - проверяте евляется ли число целым 

// ! - отрицание 

// if (!Number.isInteger(number) || number <= 0) {

// String
//  let string = 'hello';

// это просто текст 

// сложение строк (Конкатенация)

// let s = 'hello'
// let a = "world"
// let d = `My name is`

// const result = s + " " +  a; /// 'helloworld'
// const myName = 'Artur';

// console.log(result);
// console.log(`My name is ${myName}`)

// console.log(result.length);
// console.log(result[1]);


// Boolean 

//  true || false
// правда || ложь

// false - 0, '', null, undefined, false, NaN

// console.log(Boolean(0));
// console.log(!!'');
// console.log(!null);

// null - это ничего 

// undefined - это незадан 

// let m; undefined
// let m = undefined; // undefined

// объявление переменных 

// var - не используем (устаревший)
// let - используем
// const - константы (неизменяемая)


// var - имеет хостинг

// console.log(a); // undefined
// console.log(b); // ReferenceError

// var a = 2;
// let b = 3;

// console.log(a); // 2
// console.log(b); // 3

// && - и
// || - или

// let a = 1;
// let b = "2";
// let c = false;
// let u = undefined;

// console.log(a && b && c && u);

// let a = 1;
// let b = "2";
// let c = false;
// let u = undefined;

// console.log(a || b || c || u);

// function 

// function declaration
// function expression 

// MyFunc(); // all is okey
// myExpression(); // ReferenceError


// function MyFunc() {
// }

// const myExpression = function() {
// }

// arrow function 

// не создает свой контекст 
// не имеет псевдомасссива arguments 
// нельзя присвоить контекст через bind, call, apply
// не может быть методом класса

// const sum = (a,b) => {
//   console.log(a + b);
//   return a + b;
// }
// console.log('sum(2,3)', sum(2,3));

// const result = sum(45,90);

// console.log(result)
// const arrow = (a, b) => {
//   return a + b;
// }

// const arrow1 = (a, b) => a + b;
//
// Array 

// 
// const a = [1, null, () => {}, [5,6,7,7]]

// console.log(a.length); // показывает длину массива
// console.log(a[3]); // [5,6,7,7]

// a.length = 10; 

// console.log(a); // [1, null, () => {}, [5,6,7,7], empty x6]

// a.length = 2;

// console.log(a); // [1, null]

// a.length = 0;
// a = [];

// циклы 

// for (let index = 0; index < a.length; index++) {
//   const element = a[index];
//   console.log(element)
// }

// while () {

// }

// do { // 1 раз выполнится точно 

// } while ()



// Камень ножницы бумага 

// step : камень | ножницы | бумага 

// 1) выбор комьютера (рандом) из 3х вариантов
// 2) вывод результата


// ДЗ попробовать реализовать таблицу истории 
// 

// function random(min, max) {
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// }

// const variants = ['камень', 'ножницы', 'бумага'];
                //   0         1           2
// function getHistory() {
  // вывод истории игры
  // номер игры | userChoise | computerChoise | 'Ничья!' || 'Вы победили!' || 'Компьютер победил!'
// } 

// function addHistory(userChoise, computerIndexChoise) {

// }
 
// function playGame(userChoise = 'бумага', getResultCB = getResultV2) {
//   const computerIndexChoise = random(0, 2);
//   const computerChoise = variants[computerIndexChoise];

//   const resultText = getResultCB(userChoise, computerChoise);

//   const result = `Вы выбрали: "${userChoise}", Компьютер выбрал "${computerChoise}"
//   результат: "${resultText}"`

//   return result;
// }

// function getResult(userChoise, computerChoise) {
//   if (userChoise === computerChoise) {
//     return 'Ничья!';
//   }

//   if (
//     (userChoise === 'камень' && computerChoise === 'ножницы') || 
//     (userChoise === 'ножницы' && computerChoise === 'бумага') ||
//     (userChoise === 'бумага' && computerChoise === 'камень')
//   ) {
//     return 'Вы победили!';
//   } else {
//     return 'Компьютер победил!'
//   }
// }

// function getResultV2(userChoise, computerChoise) {
//   if (userChoise === computerChoise) {
//     return 'Ничья! вы набрали + 1 балл';
//   }

//   if (
//     (userChoise === 'камень' && computerChoise === 'ножницы') || 
//     (userChoise === 'ножницы' && computerChoise === 'бумага') ||
//     (userChoise === 'бумага' && computerChoise === 'камень')
//   ) {
//     return 'Вы победили! Ура вы набрали +2 балла'
//   } else {
//     return 'Компьютер победил! Увы вы набрали 0 баллов'
//   }
// }

// Ваш выбор: 'ножницы', Компьютер выбрал 'бумага'
// результат: 'Ничья!' || 'Вы победили!' || 'Компьютер победил!'

// console.log(playGame('камень', getResult)) 
// console.log(playGame('ножницы', getResult))
// console.log(playGame('ножницы'))
// console.log(playGame())
// console.log(playGame('бумага', getResultV2))
// console.log(playGame('камень', getResultV2))
// console.log(playGame('ножницы'))
// console.log(playGame('бумага'))
// console.log(playGame('камень'))
// console.log(playGame('ножницы'))
// console.log(playGame('бумага'))


// console.log(getHistory()); // номер игры  | userChoise | computerChoise | 'Ничья!' || 'Вы победили!' || 'Компьютер победил!'



// CallBack функции 

// функция которая передается в фунцию в виде аргумента 

// console.clear();

// const array = [1,3,4,5,6];

// const newArray = array.map((item, index) => {
//   return item + 3;
// })

// const newArray1 = array.map((item, index) => {
//   if (index === 2) {
//     item = item - 2;
//   }

//   return item + 10;
// })

// console.log(newArray)
// console.log(newArray1)

// const date = new Date(2024, 9, 19);

// console.log(date.toLocaleString());
 

// Пожружиться с циклам 
// написать свой foreach map reduce filter 
// поможет разобраться с callBack function 

// const array = [1,3,4,5,6,3,23,512,423,32,67,8,94,213];

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

//   console.log(element);
// }

// // FOREACH - 

// // array.forEach()

// function MyForeach(array, callBack) {
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
//     if (callBack) {
//       callBack(element, index, array);
//     }
//   }
// }

// // MyForeach(array, (element, index, array) => console.log(element, index, array))
// // MyForeach(array, (element) => { console.log(element + 10)});


// // map - ? 

// // const newArray = array.map((element) => element + 2);

// function MyMap(array, callBack) {
//   const newArray = [];

//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];

//     if (callBack) {
//       const newElement = callBack(element, index, array);

//       newArray[index] = newElement;
//     }
//   }

//   return newArray;
// }

// const newArray = MyMap(array, (element) => element + 2);

// const filteredArray = array.filter((element) => element % 2 === 0);

// function MyFilter(array, callBack) {
//   const newArray = [];

//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
//     if (callBack) {
//       const result = callBack(element, index, array);

//       if (result) {
//         newArray.push(element);
//       }
//     }
//   }

//   return newArray;
// }

// const MyfilteredArray = MyFilter(array, (element) => element % 2 === 0);


// const sumOfArray = array.reduce((acc, element, index, array) => {
//   acc += element;

//   return acc;
// }, 0)

// function MyReduce(array, callBack, initialValue) {
//   let acc = initialValue;

//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];

//     acc = callBack(acc, element, index, array);
//   }

//   return acc;
// }

// console.log(MyReduce(array, (acc, element) => {
//   acc += element;

//   return acc;
// }, 0));

// console.log(MyReduce(array, (acc, element) => {
//   if (element % 2 !== 0) {
//     acc.push(element);
//   }

//   return acc;
// }, []))


// разберем 2 задание в объектах 


// const obj = {
//   'key': 'value',
//   name: 'Ivan',
//   job: 'driver'
// } 
// const newKey = 'name';


// // key - уникальная строка 
// console.log(obj);
// console.log(obj.key);
// console.log(obj['key']);
// console.log(obj.name);
// console.log(obj['name']);


// console.log(obj.newKey) // undefined
// console.log(obj[newKey]) // 'Ivan'

// const keys = ['key', 'job', 'name'];

// for (let index = 0; index < keys.length; index++) {
//   const key = keys[index];

//   console.log(obj[key]);
//   console.log(obj.key);

// }
// 'value'
// 'value'
// 'driver'
// 'value'
// 'Ivan'
// 'value'

// const ordersArr = [4, 1, 2, 3];
// const people = [
//    { id: 1, name: "Максим" },
//    { id: 2, name: "Николай" },
//    { id: 3, name: "Ангелина" },
//    { id: 4, name: "Виталий" },
// ];


// const peopleMap = {
//   1: { id: 1, name: "Максим" },
//   2: { id: 2, name: "Николай" },
//   3: { id: 3, name: "Ангелина" },
//   4: { id: 4, name: "Виталий" },
// }


// function giveTalonsInOrder(patients, orders) {
//   const patientsMap = patients.reduce((acc, p) => {
//     acc[p.id] = p;

//     return acc;
//   }, {})

//   const r = orders.map((order) => {
//     return patientsMap[order];
//   })

//   return r;
// }


// const result = giveTalonsInOrder(people, ordersArr);
// console.log('result', result);
// /* Возвращает массив
// [
//    { id: 4, name: 'Виталий' },
//    { id: 2, name: 'Николай' },
//    { id: 1, name: 'Максим' },
//    { id: 3, name: 'Ангелина' }
// ]
// */


// Дано: текст в виде строки, содержащий слова, разделенные пробелами. Необходимо найти, самое популярное слово


// "Hello world Hello everyone This is a test Test test"

// разбить на массив
// const w =  {
//   'hello': 2,
//   'world': 1,
//   'everyone': 1,
//   'this': 1,
//   'is': 1,
//   'a': 1,
//   'test': 3
// }

// function getMostPopularWordl(string) {
//   const words = string.toLowerCase().split(' ');
//   const wordMap = words.reduce((acc, word) => {
//     if (word in acc) {
//       acc[word] += 1;
//     } else {
//       acc[word] = 1;
//     }

//     return acc
//   }, {});

//   let mostPopularWord = {value: '', count: 0 };

//   for (const word in wordMap) {
//     const countOfWord = wordMap[word];
   
//     if (countOfWord > mostPopularWord.count) {
//       mostPopularWord = {
//         value: word,
//         count: countOfWord,
//       }
//     }
//   }

//   return mostPopularWord.value;
// }

// console.log(getMostPopularWordl("Hello world Hello everyone This is a test Test test"));


// Деструктуризация 
// Объектов и массивов 

// 1) Динамический ключ 


// const array = [1, () => console.log('hello World'), { name: 'Ivan' }, null, undefined, , true];
// console.log(array.length)

// const firstElement = array[0];
// const helloWorldFn = array[1];



// const [firstElement, helloWorldFn, _, elementNull] = array;

// console.log(firstElement);
// helloWorldFn();

// console.log(elementNull);

// operator rest 
// rest - остаток

// const [firstElement, helloWorldFn, ...rest] = array;


// console.log(firstElement, helloWorldFn());

// console.log(rest);


// Надо написать функцию useState

// которая принимает аргумент initialValue 
// возвращает массив из двух элементов 

// 1-й элемент это будет value
// 2-й это функция которая меняет value - setValue(newValue) 

// function useState(initialValue) {
//   let value = initialValue;

//   const setValue = (newValue) => {
//     value = newValue;
//   }

//   return [() => value, setValue]
// }

// const [getName, setName] = useState('Ivan');

// console.log(getName());
// setName('Oleg');

// console.log(getName());

// Деструктуризация Щбъектов

// const BMW_X7 = {
//   model: 'x7',
//   brand: 'BMW',
//   oil: 'gaz',
//   year: '2024'
// } 

// const { model, year, oil, brand } = BMW_X7
// // console.log(model, year, oil, brand)

// const student = {
//   name: 'Ivan',
//   city: 'Moscow',
//   homeAddress: {
//     city: 'Murmansk',
//     street: 'Lenina',
//   },
//   bank: {
//     name: 'Sber',
//     account: '1321312321',
//   }
// }

// const { name, city, street = 'Mira', homeAddress: { city: homeCity, street: homeStreet }, ...bankInfo } = student;
// // const { city } = homeAddress;

// console.log('Name:', name, city, street, homeCity, homeStreet);
// console.log(bankInfo);

// Динамические ключи 

// console.log(student.bank);

// const get = (key) => {
//   const value = student[key];

//   return value;
// }

// const mainCity = get('city');
// console.log(mainCity);
// const homeAddress = get('homeAddress');
// console.log(homeAddress);

// lodash get 

const student = {
  name: 'Ivan',
  city: 'Moscow',
  homeAddress: {
    city: 'Murmansk',
    street: 'Lenina',
    phone: {
      mobile: '+7312312213123'
    }
  },
  bank: {
    name: 'Sber',
    account: '1321312321',
  }
}

// function get(obj, path) {
//   const keys = path.split('.');
//   const [key, ...rest] = keys;

//   if (!obj || !obj.hasOwnProperty(key)) return undefined;
//   if (rest.length === 0) return obj[key];

//   const partObj = obj[key];
//   const newPath = rest.join('.');

//   return get(partObj, newPath);
// }

// const homeStreet = get(student, 'homeAddress.phone.mobile');
// console.log(homeStreet);

// function get(obj, path) {
//   return path.split('.').reduce((acc, key) => acc && acc[key], obj);
// }

// const homeStreet = console.log(get(student, 'homeAddress.phone.mobile'));


// Lenina

let tasks = [
  {
      id: '1138465078061',
      completed: false,
      text: 'Посмотреть новый урок по JavaScript',
  },
  {
      id: '1138465078062',
      completed: true,
      text: 'Выполнить тест после урока',
  },
  {
      id: '1138465078063',
      completed: false,
      text: 'Выполнить ДЗ после урока',
  },
];

const ERROR_EMPTY_MESSAGE = 'Название задачи не должно быть пустым';
const ERROR_REPEATING_MESSAGE = 'Задача с таким названием уже существует';

const TASK_LIST = document.querySelector('.tasks-list');
const FORM_ADD_NEW_ELEMENT = document.querySelector('.create-task-block');

FORM_ADD_NEW_ELEMENT.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const { isValid, message } = validation(data); 

  if(isValid) {
    removeError();
    addNewTask(data.taskName);
  } else {
    renderError(message);
  }
}) 

function validation(formData) {
  const { taskName } = formData;

  if (taskName.length === 0) {
    return {
      isValid: false,
      message: ERROR_EMPTY_MESSAGE,
    }
  }

  if (!!tasks.find(task => task.text === taskName)) {
    return {
      isValid: false,
      message: ERROR_REPEATING_MESSAGE,
    }
  }

  return { isValid: true, message: ''}
}

function addNewTask(taskName) {
  const newTask = {
    id: String(Date.now()),
    text: taskName,
    completed: false,
  }

  tasks.push(newTask);
  renderTask();
}

function createElement({ element = 'div', ...rest}) {
  let newElement = document.createElement(element);
  
  Object.entries(rest).forEach(([key, value]) => {
    newElement[key] = value
  })

  return newElement;
}

function createError(message) {
  const error = createElement({ element: 'span', textContent: message, className: 'error-message-block' });
  return error;
}

function removeError() {
  const errorElement = document.querySelector('.error-message-block');
  errorElement?.remove();
}

function renderError(message) {
  removeError();
  const errorElement = createError(message);
  FORM_ADD_NEW_ELEMENT.insertAdjacentElement('beforeend', errorElement);
}

function createTask(task) {
  const taskItem = createElement({ id: task.id, className: "task-item" })
  const mainContainer = createElement({ className: "task-item__main-container" })
  const mainContent = createElement({ className: "task-item__main-content" })

  const checkBoxForm = createElement({ element: "form", className: "checkbox-form"});
  const checkBoxFormCheckBox = createElement({ 
    element: "input", 
    id: `task-${task.id}`,
    className: "checkbox-form__checkbox",
    type: "checkbox",
    checked: task.completed,
  });
  const taskLabel = createElement({  element: "label",  htmlFor: `task-${task.id}` })
  const taskItemText = createElement({  element: "span", className: "task-item__text", textContent: task.text})
  const taskItemDeleteButton = createElement({  element: "button", className: "task-item__delete-button default-button delete-button", textContent: 'Удалить'})

  taskItem.append(mainContainer);
  mainContainer.append(mainContent);
  checkBoxForm.append(checkBoxFormCheckBox);
  checkBoxForm.append(taskLabel);
  mainContent.append(checkBoxForm);
  mainContent.append(taskItemText);
  mainContainer.append(taskItemDeleteButton);

  return taskItem;
}

function renderTask() {
  TASK_LIST.innerHTML = '';
  tasks.forEach((task) => {
    const taskItem = createTask(task);

    TASK_LIST.append(taskItem);
  })
}

function removeTask(id) {
  const isRemoved = confirm('Точно удалить ?');

  if (isRemoved) {
    tasks = tasks.filter(task => task.id !== id);
    renderTask();
  }
}

function updateCompleted(id) {
  tasks.forEach((task) => {
    if (task.id === id) {
      task.completed = !task.completed;
    }
  })
}

TASK_LIST.addEventListener('click', (event) => {
  const { target } = event;
  const taskItem = target.closest('.task-item');

  if (target.tagName === 'BUTTON') {
    removeTask(taskItem.id)
  }

  if (target.tagName === 'CHECKBOX' || target.tagName === 'LABEL') {
    updateCompleted(taskItem.id)
  }
});

renderTask();














