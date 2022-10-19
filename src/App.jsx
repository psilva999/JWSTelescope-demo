import React from 'react'
import { Link } from 'react-scroll'

import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

import { changeImage, handleHeader, handleTop } from './components/Events/handleScroll'
import { faq } from './components/Events/handleClick'

import Subscribe from './assets/svg/additional/2-email.svg'
import Arrow from './assets/svg/additional/3-back-top.svg'

function App() {
  window.addEventListener('scroll', handleHeader)
  window.addEventListener('scroll', changeImage)
  window.addEventListener('scroll', handleTop)

  window.addEventListener('load', handleHeader)
  window.addEventListener('load', changeImage)
  
  window.addEventListener('load', handleTop)
  window.addEventListener('load', faq)

  return (
    <>
      <Header/>

      <main>
        <Home/>
      </main>
      
      <button className='subscribe'>
        <img src={ Subscribe }/>
      </button>

       <Link activeClass="active"
          to='top'
          spy={ true }
          smooth={ true }
          offset={ -145 }
          duration={ 600 }
          className='link-scroll'>

        <button className='volta-pro-topo'>
          <img src={ Arrow }/> </button>
      </Link>

      <Footer/>
    </>
  )
}

export default App
