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
