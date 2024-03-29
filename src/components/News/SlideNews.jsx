import React from 'react'

import Distancia from '../../assets/imgs/5-news/0-slide/1.jpg'
import Diferenca from '../../assets/imgs/5-news/0-slide/2.jpg'
import Detalhes from '../../assets/imgs/5-news/0-slide/3.jpg'
import Nitida from '../../assets/imgs/5-news/0-slide/4.jpg'
import Transformar from '../../assets/imgs/5-news/0-slide/5.jpg'

const SlideNews = () => {
  return (

    <article className='slide-news'>
      <ul>
        <div>
          <a href="https://socientifica.com.br/por-que-o-telescopio-james-webb-ficara-longe-da-terra/" target='_blank'>
            <img src={ Distancia }/>

            <header>
              <h1>Por que o Telescópio James Webb ficará longe da terra?</h1>
              <li></li>
              <span>JWST - USA | 2022</span>
            </header>
          </a>
        </div>

        {/*   */}

        {/* <div> <img src={ Detalhes }/>
          <a href="https://socientifica.com.br/veja-a-imagem-mais-detalhada-do-universo-tirada-pelo-telescopio-james-webb/" target='_blank'>
            <header>
              <h1>Veja a imagem mais detalhada do universo, tirada pelo Telescópio James Webb</h1>
              <li></li>
              <span>JWST - USA | 2022</span>
            </header>
          </a>
        </div>

        <div> <img src={ Nitida }/>
          <a href="https://socientifica.com.br/telescopio-james-webb-enviou-sua-imagem-mais-nitida-ate-agora/" target='_blank'>
            <header>
              <h1>Telescópio James Webb enviou sua imagem mais nítida até agora</h1>
              <li></li>
              <span>JWST - USA | 2022</span>
            </header>
          </a>
        </div>

        <div> <img src={ Transformar }/>
          <a href="https://socientifica.com.br/o-telescopio-james-webb/" target='_blank'>
            <header>
              <h1>O James Webb está transformando as astronomia</h1>
              <li></li>
              <span>JWST - USA | 2022</span>
            </header>
          </a>
        </div> */}
      </ul>

      <div className='toggle-slide-news'>
        <button className='active'></button>
        <button></button>

        <button></button>
        <button></button>

        <button></button>
      </div>
    </article>

  )
}

export default SlideNews
