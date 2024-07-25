import React from 'react'

const NotFound = () => {
    return (
        <>
            <div className='flex h-full items-center justify-center'>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold'>404</h1>
                    <h2 className='text-xl my-1'>Page Not Found</h2>
                    <p>The page you are looking for does not exist.</p>
                </div>
            </div>
        </>
    )
}

export default NotFound