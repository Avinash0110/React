import React ,{useState} from 'react';

function StateMngt()
{
    const [count , setCount] = useState(0);
    const [dcount ,setDcount]=useState(10);

  
   
    return(
        <div>
            <p>you clicked {count} times <b> value={count}</b></p>
            <button onClick={ () => setCount(count+1)}>ClickMe ToIncrement</button>

            <p>you clicked {10-dcount} times <b> value={dcount}</b></p>
            <button onClick={ () => setDcount(dcount-1)}>ClickMe ToDecrement</button>
        </div>
    )
}

export default StateMngt