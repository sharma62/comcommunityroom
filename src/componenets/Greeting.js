import React from 'react'
 
const Greeting = (props) => {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h4 className='clock'>{props.clock}</h4>
                        
                    <h1>To <span className='color-dark-perple'>Enhance</span> , Empower,<span className='color-light-orange'> Aware</span>, <span className='color-g'>Open Source</span> <span className='color-light-perple'>&</span> culture</h1>
                    <h2>{props.name}</h2>
                    <h4>Comming Sooon . . .  </h4>
                </header>
            </div>
        </>
    )
}

export default Greeting
