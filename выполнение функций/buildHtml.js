// Модуль tags содержит набор функций, позволяющих генерировать HTML с помощью функций.


// это модуль tags
// export const table = (...children) => `<table>${children.join('')}</table>`;
// export const tr = (...children) => `<tr>${children.join('')}</tr>`;
// export const td = (...children) => `<td>${children.join('')}</td>`;
// export const p = (...children) => `<p>${children.join('')}</p>`;


// table(
//   tr(td('one'), td('two')),
//   tr(td('three'), td('four'))
// );
// В результате вызовов возвращается вот такой HTML:

// <table>
//   <tr>
//     <td>one</td>
//     <td>two</td>
//   </tr>
//   <tr>
//     <td>three</td>
//     <td>four</td>
//   </tr>
// </table>
// buildHtml.js
// Реализуйте и экспортируйте по умолчанию функцию buildHtml, простой вызов которой:

// buildHtml();
// создаёт и возвращает следующий HTML:

// <table>
//   <tr>
//     <td>lang</td>
//     <td>comment</td>
//   </tr>
//   <tr>
//     <td>php</td>
//     <td>statements</td>
//   </tr>
//   <tr>
//     <td>clojure</td>
//     <td>expressions</td>
//   </tr>
// </table>


// me decision --------------------------------------

import { table, tr, td } from './tags';

// BEGIN (write your solution here)
const buildHtml = () => {
  return table(
  tr(td('lang'), td('comment')),
  tr(td('php'), td('statements')),
  tr(td('clojure'), td('expressions'))
);
}

export default buildHtml;
// END


// me decision --------------------------------------

// decision teacher from hexlet-------------------------------------

// BEGIN
export default () => table(
    tr(td('lang'), td('comment')),
    tr(td('php'), td('statements')),
    tr(td('clojure'), td('expressions')),
  );
  // END

// decision teacher from hexlet-------------------------------------