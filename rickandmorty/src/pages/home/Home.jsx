import React from 'react'
import Footer from '../../components/layout/footer/Footer.jsx'
import Header from '../../components/layout/header/Header.jsx'
import CardCharacterSlider from '../../components/common/card-character-slider/CardCharacterSlider.jsx'
import CardEpisodeSlider from '../../components/common/card-episode-slider/CardEpisodeSlider.jsx'

const Home = () => {
  return (
    <>
      <Header/>
        <CardCharacterSlider/>
        <CardEpisodeSlider/>
      <Footer/>
    </>
  )
}

export default Home