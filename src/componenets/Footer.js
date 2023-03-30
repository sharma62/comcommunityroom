import React from 'react'

const Footer = (props) => {
    return (
        <>
            <footer className='grid grid-col-3 gap-4 m-auto h-auto '>
                <div className="text-center p-3 font-bold">All Rights reserved @ 2023 {props.app_name}</div>
            </footer>
        </>
    )
}

export default Footer
