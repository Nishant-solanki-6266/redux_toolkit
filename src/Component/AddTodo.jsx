//   dispatch (reducers) ka use krke data (store) me (changes) kr deta hai
import React, { useState } from "react";
import{addtodo} from '../features/todo/todoSlice'        // yha se hum methord ko le aaye (hmne ye wali methord ko export bhi kiya hai)

import  {useDispatch} from 'react-redux'     // usedispatch ka use store me (add krne ke liye kiya) jayega or {useSelector}

function AddTodo(){
    
    const [input,setInput]=useState('');    // mtlb hme kuch add krna hai store me to dispatch se hoga esa bol rha hai. ye bhai

    const dispatch=useDispatch();            // ye reducers store ye sb redux toolkit se laye or ye dispatch or ak {use selector} ye react redux se laye ye wiring krta ak dusre se judta hai ak dusre se

const addTodoHandler=(e)=>{               // vha se event aaya hmare pass
  e.preventDefault();
  dispatch(addtodo(input));                             // yha hmen dispatch ko coll kiya jisse hmari methord clegi or methord ko bhi lana pdega bhai..(input pass kr diya hmne yha se)
  setInput('');  // mtlb hmen jo input bhara aara the use khali kr diya vapis
}


//     return (
//         <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
//           <input
//             type="text"
//             className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//             placeholder="Enter a Todo..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//           />
//           <button
//             type="submit"
//             className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
//           >
//             Add Todo
//           </button>
//         </form>
//       )
// }
// export default AddTodo;

return (
  <form onSubmit={addTodoHandler} className="space-x-3 mt-12 text-center" >
    <input
      type="text"
      className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      placeholder="Enter a Todo..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
    <button
      type="submit"
      className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    >
      Add Todo
    </button>
  </form>
)
}

export default AddTodo