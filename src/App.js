import React from 'react';
import './App.css';




function App() {
  const app_name = 'comCommunityRoom.org';
  return (
    <>
      <section className=' bg-slate-900'>
        {/* nav */}
        <nav className='flex font-semibold text-white items-center justify-center flex-wrap p-2 '>
          <div class="flex items-center flex-shrink-0 text-white mr-6 ">
            <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9. 45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
            <span class="font-semibold text-xl tracking-tight ">CCR</span>
          </div>
          <div >
            <ul className='flex gap-x-4 p-5 justify-center  '>
              <li className='hover:font-bold transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300 '><a href="/"> Home      </a></li>
              <li className='hover:font-bold transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300 '><a href="/"> About     </a></li>
              <li className='hover:font-bold transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300 '><a href="/"> Meet      </a></li>
              <li className='hover:font-bold transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300 '><a href="/"> Events    </a></li>
              <li className='hover:font-bold transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300 '><a href="/"> Projects  </a></li>
            </ul>
          </div>
        </nav>
        {/* main body */}
        {/* Quote tag or slogan */}
        <div className="App-header mx-auto">
          <blockquote class="text-2xl font-semibold italic text-center text-slate-50 xl:text-xl md:text-xl sm:text-sm">"
            When you look
            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
              <span class="relative text-black"> annoyed </span>
            </span>
            all the time, people think that you're busy.
            "</blockquote>
          <h1 className='font-bold text-8xl my-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>HeLLo</h1>
          <h1 className="xl:text-7xl md:text-4xl font-semibold ">
            Welcome to <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '> {app_name}</span>
          </h1>
        </div>
        {/* img & membership btn */}
        <div class="container flex mx-auto bg-slate-900   ">
          <div className="w-8/12">
            <img src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg" alt="" srcset="" />
          </div>
          <div className="w-4/12 m-auto grid grid-rows-4 grid-flow-col gap-4">
            <h3 className='text-center text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-pink-300 to-yellow-300 ' >Join us</h3>

            <div className='m-auto border-white hover:bg-slate-500 hover:font-bold p-3'>
              <button className='grid-rows-2  transition hover:grid-rows-6 text-white  ease-in delay-50 hover:-translate-y-1 duration-300 '> Get in Touch</button>
            </div>
            <div className='m-auto hover:bg-slate-500 hover:font-bold p-3'>
              <button className='grid-rows-2  transition hover:grid-rows-6 text-white  ease-in delay-50 hover:-translate-y-1 duration-300 '> Become a Member</button>
            </div>
          </div>
        </div>
        {/* project review */}
        <div class="container flex mx-auto bg-slate-900  ">
          <div className="w-4/12"></div>
          <div className="w-7/12"></div>
        </div>
      </section>


      {/* footer */}
      <footer className='grid grid-col-3 gap-4 m-auto'>
        <div className="text-center p-3 font-bold">All Rights reserved @ ComComunityroom.org</div>
  
      </footer>
    </>
  );
}

export default App;

