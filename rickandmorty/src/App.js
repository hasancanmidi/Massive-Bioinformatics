import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Characters from './pages/characters/Characters';
import { Provider } from 'react-redux';
import store from './redux/store';
import AboutProject from './pages/aboutproject/AboutProject';
import Episode from './pages/episode/Episode';
import AboutMe from './pages/aboutme/AboutMe';



function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/episodes' element={<Episode />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/about-project' element={<AboutProject />} />
          <Route path='/about-me' element={<AboutMe />} />
        </Routes>
      </Router>
    </div>
  </Provider>
  );
}

export default App;