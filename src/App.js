import './App.css';
import Headbar from './components/Headbar';
import List from './components/List';




function App() {
 

  return (
    <div className="App ">
      <div className='w-full'>
        <Headbar ></Headbar>
      </div>
      <div className='flex justify-between'>
        <div className='w-1/5' >Kategori</div>
        <div className='w-4/5'><List  /></div>
      </div>

    </div>
  );
}

export default App;
