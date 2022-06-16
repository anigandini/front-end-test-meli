import React from 'react'
import "./styles/sass/main.sass"
import SearchBar from './components/SearchBar'
import SearchResult from './components/searchResult'
import Icon from './components/Icon'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [ searchResult, setSearchResult ] = React.useState([])
  const [ searchQuery, setSearchQuery ] = React.useState('')


  return (
    <Router>
      <div className="app">
        <header className="header">
          <SearchBar setSearchResult={setSearchResult} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </header>
        <main>
            <Routes>
              <Route path='/' />
              <Route path='/items/:id' />
              <Route path={`/items/search/:q`} element={<SearchResult items={searchResult}/>}/>
            </Routes>
          </main>
      </div>
    </Router>
  )
}

export default App