let testObj = {
    name: 'mama join papa'
};
console.log(testObj);
//--------------------------------
let outObj = '';
let keyObj = '';
for (let key in testObj) {
    outObj = testObj[key];
    keyObj = key;
}
console.log(outObj);
console.log(keyObj);
//------------------------------------------
let outIndex = outObj.indexOf('mama');
console.log(outIndex);
//------------------------------------------------
outObj += ' my';
console.log(outObj);
//-----------------------------------------------
testObj.name = outObj;
console.log(testObj.name);




//Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет:
//-------------------------------------------------- my solution
const className = (obj, nameClass) => {
    let outObjClass = '';
    let keyObjName = '';

    for (let key in obj) {
        outObjClass = obj[key];
        keyObjName = key;
    }

    let outIndex = outObj.indexOf(nameClass);
    if (outIndex == -1) {
        outObjClass += " " + nameClass;
    }
   return obj[keyObjName] = outObjClass;
};
//------------------------------------------------------ my solution
className(testObj, 'Lera');
console.log(testObj.name);

className(testObj, 'mama');
console.log(testObj.name);

className(testObj, 'Dania');
console.log(testObj.name);

//-----------------------------------teacher solution

function addClass(obj, cls) {
    var classes = obj.className ? obj.className.split(' ') : [];
  
    for (var i = 0; i < classes.length; i++) {
      if (classes[i] == cls) return; // класс уже есть
    }
  
    classes.push(cls); // добавить
  
    obj.className = classes.join(' '); // и обновить свойство
  }
  
  var obj = {
    className: 'open menu'
  };
  
  addClass(obj, 'new');
  addClass(obj, 'open');
  addClass(obj, 'me');
  alert(obj.className) // open menu new me

//   P.S. «Альтернативный» подход к проверке наличия класса вызовом obj.className.indexOf(cls)
//    был бы неверным. В частности, он найдёт cls = "menu" в строке классов obj.className = "open mymenu".

// P.P.S. Проверьте, нет ли в вашем решении присвоения obj.className += " " + cls.
//  Не добавляет ли оно лишний пробел в случае, если изначально obj.className = ""?

//-----------------------------------teacher solution


let testObj2 = {
    className: "gogo or megogo"
}

let classes = testObj2.className ?  testObj2.className.split(' ') : [];

console.log(classes);