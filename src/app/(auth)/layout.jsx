import React from 'react'

const AuthLayout = ({ children }) => {
    return (
        <>
            <div className='bg-yellow-400 px-4 py-2'>
                <h1 className='text-center text-3xl mt-4 text-blue-800'>Authentication Page</h1>
                {children}
            </div>
        </>
    )
}

export default AuthLayout