// Add React to website https://github.com/nadeem099/adding-react-to-website/tree/main

function Counter() {
  const [count, setCount] = React.useState(0)

  const mystyle = {
    container: {
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      padding: '0',
      margin: '0',
    },
    paragraph: {
      margin: '0.5rem',
    },
    button: {
      width: '10rem',
      color: 'white',
      backgroundColor: 'DodgerBlue',
      padding: '10px',
      fontFamily: 'Arial',
      borderRadius: '10px',
    },
  }

  return (
    <div style={mystyle.container}>
      <h3 style={mystyle.heading}>Counter</h3>
      <p style={mystyle.paragraph}>You clicked {count} times</p>
      <button style={mystyle.button} onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

function Header() {
  const mystyle = {
    heading: {
      padding: '0.5rem',
      margin: '0',
    },
  }
  return <h2 style={mystyle.heading}>Develop. Preview. Ship. 🚀</h2>
}

function App() {
  return (
    <div>
      <Header />
      <Counter />
    </div>
  )
}

const app = document.getElementById('app')
const root = ReactDOM.createRoot(app)
root.render(<App />)

// "use strict";

// function PostComments() {
//   const inputRef = React.useRef(null);
//   const [commentList, setCommentList] = React.useState([]);
//   const id = React.useId();

//   React.useEffect(() => {
//     if (inputRef.current) inputRef.current.focus()
//     inputRef.current.addEventListener("keypress", (e) => {
//       if (e.key === "Enter" && inputRef.current.value !== "") {
//         const newValue = inputRef.current.value;
//         setCommentList((prev) => [...prev, newValue]);
//         inputRef.current.value = "";
//       }
//     });
//   }, []);

//   return (
//     <div style={{ textAlign: "left" }}>
//       <input
//         style={{
//           width: "96%",
//           margin: "10px 0px",
//           padding: "10px 5px",
//           outline: "none",
//           fontSize: "1rem",
//         }}
//         ref={inputRef}
//         placeholder="Write a comment..."
//       />
//       {commentList.length ? (
//         <div>
//           {commentList.map((comment, ind) => (
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "flex-start",
//                 maxWidth: "100%",
//               }}
//               key={`${id}_${ind}`}
//             >
//               <div
//                 style={{
//                   marginTop: "10px",
//                   borderRadius: "50%",
//                   padding: "10px",
//                   border: "1px solid rgb(76, 74, 74)",
//                 }}
//               >
//                 U
//               </div>
//               <p
//                 style={{
//                   marginLeft: "10px",
//                 }}
//               >
//                 {comment}
//               </p>
//             </div>
//           ))}
//         </div>
//       ) : null}
//     </div>
//   );
// }

// const domNode = document.getElementById("post-comments-root");
// const root = ReactDOM.createRoot(domNode);
// root.render(<PostComments />);
