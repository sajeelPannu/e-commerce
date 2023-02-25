import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer className='bg-dark py-2'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="text-center mb-0 text-white">&copy; {year}.All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
