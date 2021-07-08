
import './App.css';

import HeaderTitle from'./components/Header';
import InputTracker from'./components/InputTracker';
import ResultTracker from'./components/ResultTracker';
// import Map from './components/Map';
 const App=()=> {

  const projectAdress = `https://www.frontendmentor.io?ref=challenge`;
  const author= `Michał Dziedzic`;
  return (
    <div className="App">
      <header>
        <HeaderTitle/>
        <InputTracker/>
        <ResultTracker/>
      </header>
      <section>
        {/* <Map></Map> */}
        <p>place for a display address location on map view</p>
      </section>
      <footer>
        Challenge by <a href={projectAdress} >Frontend Mentor</a>. 
        Coded by <a href={author}>{author}</a>.
      </footer>
    </div>
  );
}

export default App;
