

import Navbar from './Navbar';
import Home from './home';
// import Random from './randomComponent';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
    <Home/>

    {/* <Random/> */}

      </div>
    </div>
  );
}

export default App;
