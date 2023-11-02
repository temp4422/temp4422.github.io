function Coutner() {
  const [count, setCount] = React.useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

function Header() {
  return <h1>Develop. Preview. Ship. 🚀</h1>
}

function HomePage() {
  return (
    <div>
      <Header />
      <Coutner />
    </div>
  )
}

// ReactDOM.render(<HomePage />, app)

const app = document.getElementById('app')
const root = ReactDOM.createRoot(app)
root.render(<HomePage />)

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
