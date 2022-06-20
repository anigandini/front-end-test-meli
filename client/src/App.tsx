import React , { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./styles/sass/main.sass"
import SearchBar from './components/UI/SearchBar'
import Loader from './components/UI/Loader'
const BreadCrumbs = lazy(() => import('./components/UI/BreadCrumbs'))
const Product = lazy(() => import('./components/pages/Product'))
const SearchResult = lazy(() => import('./components/pages/searchResult'))

function App() {
  const [ searchResult, setSearchResult ] = React.useState([])
  const [ searchQuery, setSearchQuery ] = React.useState('')
  const [ categories, setCategories ] = React.useState(null)
  
  return (
    <Router>
      <div className="app">
        <header className="header">
          <SearchBar setSearchResult={setSearchResult} searchQuery={searchQuery} setSearchQuery={setSearchQuery} setCategories={setCategories} />
        </header>
        <main>
          {categories !== null && <BreadCrumbs categories={categories}/>}
          <Suspense fallback={<Loader/>}>
            <Routes>
              <Route path='/' />
              <Route path={`/items/:id`} element={<Product setCategories={setCategories}/>}/>
              <Route path={`/items/search/:q`} element={<SearchResult items={searchResult} setItems={setSearchResult} setCategories={setCategories}/>}/>
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  )
}

export default App