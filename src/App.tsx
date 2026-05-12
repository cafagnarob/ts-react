import 'bootstrap/dist/css/bootstrap.min.css'

import { Container } from 'react-bootstrap'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import ArticleDetails from './components/ArticleDetails'

function App() {


  return (
    <>
    <BrowserRouter>
      <Container fluid={true} >
        <h1 className='text-center my-3 fw-bold'>EPINEWS</h1>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/article/:id' element={<ArticleDetails/>}/>
          

        <Route path='*' element={<p>404 - not found</p>}/>

       
        
        </Routes>
      </Container>
    </BrowserRouter>
    </>
  )
}

export default App
