import React from 'react';
import './App.css';




function App() {
  const app_name = 'comCommunityRoom.org';
  return (
    <>

      <nav className='flex bg-slate-900 font-semibold text-white items-center justify-center flex-wrap p-2 '>
        <div class="flex items-center flex-shrink-0 text-white mr-6 ">
          <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9. 45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
          <span class="font-semibold text-xl tracking-tight ">CCR</span>
        </div>
        <div >
          <ul className='flex gap-x-4 p-5 justify-center  '>
            <li><a href="/"> Home      </a></li>
            <li><a href="/"> About     </a></li>
            <li><a href="/"> Meet      </a></li>
            <li><a href="/"> Events    </a></li>
            <li><a href="/"> Projects  </a></li>
          </ul>
        </div>
      </nav>
      <div className="App-header mx-auto">
        <h1 className='font-bold text-8xl my-20 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>HeLLo</h1>
        <h1 className="xl:text-7xl md:text-5xl font-semibold ">
          Welcome to <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '> {app_name}</span>
        </h1>
      </div>
      <div class="container flex mx-auto ">
          <div className="w-8/12">
            <img src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg" alt="" srcset="" />
          </div>
          
          <div className="w-4/12">
             <h3 className='text-center text-4xl font-semibold py-3' >Join us</h3>
          </div>
          
      </div>
    </>
  );
}

export default App;

