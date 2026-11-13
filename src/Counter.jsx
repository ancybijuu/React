// import { useState } from "react"
// function Counter() {
// const [count, setCount] = useState(0)
// return (
//     <div>
//         <h1>Like: {count}</h1>
//         <button onClick={() => setCount(count + 1)}>
//         Increase
//         </button>
//         <button onClick={() => setCount(count - 1)}>
//         Decrease
//         </button>
//     </div>
//     )
// }
// export default Counter


// function App() {
//   let count = 0;

//   function increase() {
//     count++;
//     console.log(count);
//   }
    

//   return (
//     <div>
//       <h1 id="result">0</h1>
//     <p>count:{count}</p>
//       <button onClick={increase}>Increase</button>
//     </div>
//   );
// }

// export default App;

import { useState } from "react"
function Counter() {
const [name, setName] = useState("")
return (
    <div>
        <h1>Hello , Welcome {name}</h1>
        <button onClick={() => setName("Ancy")}></button>
        </div>
    )
}
export default Counter
