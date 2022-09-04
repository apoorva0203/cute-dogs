
import './App.css';
import Header from './components/Header';
import FetchDogs from './components/FetchDogs';

function App() {
  return (
    <div className="App">
      <div class=" bg-gray-100">
        <Header />
        <div  class="md:container md:mx-auto ">
          <div class="m-10 ">
            <FetchDogs />
          </div>
        </div>
        </div>
    </div>
  );
}

export default App;
