import React from 'react'
import "./styles/sass/main.sass"
import SearchBar from './components/SearchBar'

function App() {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message))
  }, [])

  return (
    <div className="app">
      <header className="header">
        <SearchBar />
      </header>
        <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}

export default App