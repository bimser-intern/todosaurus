import './App.css';
import Categories from './components/Categories';
import Headbar from './components/Headbar';
import List from './components/List';





function App() {
 

  return (
    <div className="App ">
      <div className='w-full'>
        <Headbar ></Headbar>
      </div>
      <div className='flex justify-between'>
        <div className='w-1/5' ><Categories className='h-full'></Categories></div>
        <div className='w-4/5'><List  /></div>
      </div>

    </div>
  );
}

export default App;
