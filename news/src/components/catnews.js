import React, { useState, useEffect } from 'react'
import Newscard from './newscard'
import { Link } from 'react-router-dom';


const Catnews = ({ type }) => {

    const [news, setNews] = useState([]);
    let data;
    let finaldata;
    const fetchNews = async () => {
        let date = new Date()
        let day = date.getDate();

        const res = await fetch(
            `https://newsapi.org/v2/everything?q=${type}&from=${day}&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}&language=en`
        );
        data = await res.json();
        // data = finaldata.articles.slice(0, 4)
        finaldata = data
        finaldata.articles = finaldata.articles.slice(0, 40);
        finaldata.articles = finaldata.articles.filter(article => {
            return (article.urlToImage !== null)
        })
        console.log(finaldata.articles)
        setNews(finaldata.articles);
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <>

            <div className="space" id={type}>
                <div className="spaceflex1">
                    <div className="spacename">
                        {type}</div>
                    <div className="dots"> </div>
                </div>
                {news && <Link to={'/news'} state={{ type: type, newsArray: news.slice(4, 16) }} >
                    <div className="view">View more {'>'}</div>
                </Link>}

            </div>

            {/* <div className="sub" id="finance">
        <h2>Finance</h2>
        <span></span>
      </div> */}

            <div className="cardcontainer cardcontainer-flex shift-card">
                {news && news.slice(0, 4).map((news, key) => {
                    return <Newscard key={key + 1} news={news} />
                })}
            </div>

        </>
    )
}

export default Catnews
