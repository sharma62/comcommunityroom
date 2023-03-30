import React from 'react'
 
const Body = (props) => {
    return (
        <>
            <section className='bg-slate-900 '>
                {/* Quote tag or slogan */}
                <div className="App-header mx-auto">
                    <blockquote className="text-2xl font-semibold italic text-center text-slate-50 xl:text-xl md:text-xl sm:text-sm">"
                        When you look
                        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                            <span className="relative text-black"> annoyed </span>
                        </span>
                        all the time, people think that you're busy.
                        "</blockquote>
                    <h1 className='font-bold text-8xl my-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>HeLLo Folks</h1>
                    <h1 className="xl:text-7xl md:text-4xl font-semibold ">
                        Welcome to <span className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '> {props.app_name}</span>
                    </h1>
                </div>
                {/* img & membership btn */}
                <div className="container flex flex-wrap mx-auto bg-slate-900  ">
                    <div className="w-8/12 ">
                        <img src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg" alt="" />
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
            </section>
            {/* project review */}
            <div className="container flex mx-auto bg-slate-900  ">
                <div className="w-4/12"></div>
                <div className="w-7/12"></div>
            </div>

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

        </>
    )
}

export default Body
