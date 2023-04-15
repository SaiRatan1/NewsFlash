import React, { useEffect, useState } from "react";
import Image from "./newscard";
import Carousel from "react-multi-carousel";


const responsive = {   // WIDTH SHOULD DECREASE, NOT THE NUMBER OF ITEMS... CHECK AGAIN
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1398 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1398, min: 1070 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 1070, min: 724},
    items: 2,
  },
  ultrasmall: {
    breakpoint: { max: 724, min: 0 },
    items: 1,
  },
};

const Card = () => {
  const [news, setNews] = useState([]);
  let data;
  let finaldata;
  const fetchNews = async () => {

      // const res = await fetch(
      //   `https://api.unsplash.com/search/photos?page=1&query=${type}&client_id=fHtp17WQ5ZImZ3oZ_bf_V1NILIDGTUgakFeQJhz04fQ`
      // );
      // finaldata = await res.json();
      let date = new Date()
      let day = date.getDate();

      const res = await fetch(
          `https://newsapi.org/v2/everything?q=news&from=${day}&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}&language=en`
      );
      data = await res.json();
      // data = finaldata.articles.slice(0, 4)
      finaldata = await data
      console.log(finaldata.articles)
      setNews(finaldata.articles);
  };

  useEffect(() => {
      fetchNews();
  }, []);




  return (
    <>
      <div className="sub" id="daily">
        <h1>Daily News</h1>
        <span></span>
      </div>
      {!news
        ? (<h1>Loading...</h1>)
        : (
            <Carousel responsive={responsive}>
              {news.map((news) => {
                return <Image key={news.id} news = {news} />
              })}
            </Carousel>
          )}

    </>
  );
};

export default Card;
