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
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              width="189.000000pt" height="90.000000pt" viewBox="0 0 189.000000 170.000000"
              preserveAspectRatio="xMidYMid meet">

              <g transform="translate(0.000000,170.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                <path d="M534 1321 c-83 -24 -143 -61 -197 -121 -85 -95 -117 -195 -117 -368
                          0 -72 6 -137 16 -176 45 -174 163 -290 336 -331 63 -15 222 -20 252 -9 13 5
                          16 23 16 91 l0 84 -37 -8 c-77 -15 -160 -7 -218 22 -60 29 -92 64 -127 141
                          -20 43 -23 65 -23 184 0 120 3 141 24 187 59 131 207 192 359 147 23 -7 23 -6
                          20 82 l-3 89 -120 2 c-90 1 -136 -3 -181 -16z"/>
                <path d="M924 1325 c3 -9 6 -45 6 -80 l0 -63 168 -4 c180 -4 215 -13 247 -62
                          43 -65 22 -168 -43 -208 -34 -21 -51 -23 -204 -26 l-168 -4 0 -79 0 -79 114 0
                          114 0 115 -187 115 -188 116 -3 c64 -1 116 0 116 3 0 4 -58 97 -130 208 l-129
                          201 59 28 c94 45 149 127 158 233 11 137 -57 246 -183 296 -55 21 -79 23 -269
                          27 -192 3 -208 2 -202 -13z"/>
                <path d="M626 1075 c-108 -38 -156 -118 -156 -261 0 -166 80 -261 230 -272 37
                      -2 84 -2 104 2 l36 7 0 55 c0 55 0 55 -22 40 -14 -10 -44 -16 -78 -16 -101 0
                      -149 52 -158 171 -6 82 20 148 70 179 40 24 116 27 158 5 l30 -16 0 54 c0 53
                      -1 55 -31 61 -52 10 -142 6 -183 -9z"/>
              </g>
            </svg>
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
        <div class="container flex mx-auto bg-slate-900  h-screen ">
          <div className="w-8/12">
            <img src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg" alt="" srcset="" />
          </div>
          <div className="w-4/12 m-auto grid grid-rows-4 grid-flow-col gap-4">
            <h3 className='text-center text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-pink-300 to-yellow-300 ' >Join us</h3>

            <div className='m-auto border-white hover:bg-slate-500 hover:font-bold p-3'>
              <button className='grid-rows-2 transition hover:grid-rows-6 text-white  ease-in delay-50 hover:-translate-y-1 duration-300 '> Get in Touch</button>
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
      {/* Programms */}
      <section className='bg-slate-500'>
        <h1 className=' text-center lg:text-7xl md:text-5xl sm:text-4xl font-semibold p-5 mt-10'> Ambassador Program ?</h1>
        <div className="grid  container m-auto grid-cols-2 text-center gap-3 p-10">
          <div className="p-3 shadow-slate-500">
            <div className='m-auto border-white hover:bg-slate-700 hover:font-bold p-3'>
              <button className='grid-rows-2 transition hover:grid-rows-6 text-white  ease-in delay-50 hover:-translate-y-1 duration-300 '> For School</button>
            </div>
          </div>
          <div className="p-3 shadow-slate-500"><div className='m-auto border-white hover:bg-slate-800 hover:font-bold p-3'>
            <button className='grid-rows-2 transition hover:grid-rows-6 text-white  ease-in delay-50 hover:-translate-y-1 duration-300 '> For Campus</button>
          </div></div>


        </div>

      </section>


      {/* footer */}
      <footer className='grid grid-col-3 gap-4 m-auto h-auto '>
        <div className="text-center p-3 font-bold">All Rights reserved @ ComComunityroom.org</div>
      </footer>
    </>
  );
}

export default App;

