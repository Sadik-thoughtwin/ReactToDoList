import React, {useState,useMemo} from 'react';

export default function Usememo() {

const [count,setCount] = useState(0)
const [item,setItem] = useState(10)

const multiMemo = useMemo(function multiCount(){
    console.warn("multi")
    return count*2
},[count])



  return <div>
      <h2>Count:{count}</h2>
      <button onClick= {()=>setCount(count+1)}>Count</button>
      <h2>Item:{item}</h2>
      <h3>Multivalue:{multiMemo}</h3>
      <button onClick={()=>setItem(item+1)}>Item</button>
  </div>;
}
