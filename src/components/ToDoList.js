import React, { useState } from 'react';

// function ToDoList() {
//     // let nextId = 0;
//     const [name, setName] = useState('');
//     const [items, setItems] = useState([]);

//   return (
//     <>
//       <h1>ToDoList:</h1>
//       <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <button onClick={() => {
//         items.push({
//         //   id: nextId++,
//           name: name,
//         });
//       }}>Add</button>
//       <ul>
//         {items.map(item => (
//           <li>{item.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

function ToDoList() {
    const [inputText, setinputText] = useState('');
    const [arr, setarr] = useState([]);

    function clickHandler() {
        if(!inputText.trim()) {
            return;
        }
        setarr([...arr, inputText]);
        setinputText("");
    }
    return ( 
        <>
            <label htmlFor='input'>"Введите текст"</label>
            <input 
                onChange={(event) => setinputText(event.target.value)}
                type="text"
                id="input"
                value={inputText}
                maxLength={10}
            ></input>
            <button onClick={clickHandler}>Click to add</button>
            <ul>
                {arr.map((item)=>(
                    <li key={arr.indexOf(item)}>{item}</li>
                ))}
            </ul>
        </>
     );
}

export default ToDoList;

