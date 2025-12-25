// import logo from './logo.svg';
import './App.css';
// import Hello from './01/Hello';
// import MyClock from './02/MyClock';
//import MyDiv01 from './03/MyDiv01';
// import MyList from './04/MyList';

import Lotto from './05/Lotto';
import { RiHomeHeartFill } from "react-icons/ri";
function App() {

  return (
    <div className="flex flex-col w-full h-screen mx-auto">
      <header className='flex justify-between items-center text-xl font-bold h-20 p-10 bg-slate-200'>
      <p>React Basic</p>
      <p><RiHomeHeartFill /></p>
      </header>
      <main className='grow w-full flex justify-center items-center overflow-y-auto'>
        {/* <MyDiv01 /> */}
        {/* <MyList /> */}
        <Lotto />
      </main>
      <footer className='flex justify-center items-center h-20 bg-black text-slate-100'>
        ⓒ Kim Su Jin
      </footer>
    </div>
  );
}

export default App;