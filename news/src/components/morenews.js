import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Newscard from './newscard'
import Navbar from './navbar'
import Footer from './footer'

const Morenews = () => {

    const location = useLocation()
    const { type, newsArray } = location.state

    return (
        <>
            <Navbar />
            <div className="morenews-container">
                <h1>{type}</h1>
                {!newsArray
                    ? (<h1>Loading...</h1>)
                    : (
                        <div className="cardcontainer morenews-flex">
                            {newsArray && newsArray.map((news, key) => {
                                return <Newscard key={key + 1} news={news} />
                            })}
                        </div>
                    )}
            </div>
            <Footer />
        </>
    )
}

export default Morenews
