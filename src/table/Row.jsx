// this not a pure component, 
// it has side effect, 
// it changes the counter variable outside of the function 

// let counter = 0;

// export default function Row({text}) {
//     counter++;
//     return (
//         <tr>
//             <td>{counter}</td>
//             <td>{text}</td>
//         </tr>
//     )
// }

// this is a pure component
export default function Row({id, text}) {
    return (
        <tr>
            <td>{id}</td>
            <td>{text}</td>
        </tr>
    )
}