import React from 'react'

const Footer = () => {
  return (
    <>
        <div className="footer">
            <h1>Subscribe to our daily newsletter</h1>
            <p>Get the latest news delivered to your email daily!</p>
            <form className='form'>
                <input type="email" placeholder='Enter your Email address'/>
                <button type='submit'>Subscribe</button>

            </form>
        </div>
    </>
  )
}

export default Footer
