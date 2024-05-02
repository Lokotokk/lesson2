import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0); /*а значение переменной count сохраним в
                                             стейт с помощью специальной функции-хука useState:*/
    const upCount = () => {
        setCount(count + 1);
    }
                                                
    return ( 
        <div>
            <span className="counter">{count}</span>
            <button onClick={upCount}>Кнопка</button>
        </div>
     );
}

export default Counter;