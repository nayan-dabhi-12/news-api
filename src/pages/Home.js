// Import statements
import { useState, useEffect } from "react";
import Header from "../common/header";
import Footer from "../common/footer";


export default function Home() {
  return (
    <>
      <Header />
      <section id="home" class="w3l-banner py-5">
        <div class="container py-lg-5 mt-lg-5">
          <div class="py-lg-4 my-2">
            <div class="banner-info-grid mt-lg-5">
              <h3 class="mb-4">Top News for You</h3>
              <section id="bottom" class="demo">
                <a href="#bottom"><span></span>Scroll</a>
              </section>
            </div>
          </div>
        </div>
      </section>

      <div class="w3l-news" id="news">
        <section id="grids5-block" class="py-5">
          <div class="container py-lg-5 py-md-4 py-2">
            <h3 class="title-big text-center">All News</h3>
            <div class="row mt-lg-5 mt-4" id="news api">
            <Homedata/></div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export function Homedata() {
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch("https://inshortsapi.vercel.app/news?category=all")
      .then((Response) => Response.json())
      .then((json) => setData(json.data));
  };

  useEffect(() => {
    apiGet();
    const interval = setInterval(() => {
      apiGet();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {data.slice(1).map((item, i) => (
        <SubHome
          key={i}
          nimg={item.imageUrl}
          ntitle={item.title}
          ncontent={item.content}
          ndate={item.date}
          ntime={item.time}
          nreadmoreurl={item.readMoreUrl}
        />
      ))}
    </>
  );
}

export function SubHome(props) {
  return (
    <div class="col-lg-4 col-md-4 mt-md-4 mt-sm-4" >
      <div class="grids5-info">
        <a href="#" class="d-block zoom"><img src={props.nimg} alt="" class="img-fluid news-image" /></a>
        <div class="blog-info">
          <h4 style={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}><a href="#">{props.ntitle}</a></h4>
          <p class="date"><span class="fa fa-calendar mr-2"></span> {props.ndate}, {props.ntime}</p>
          <p style={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{props.ncontent}</p>
          <a href={props.nreadmoreurl} class="btn btn-news mt-4">Read More</a>
        </div>
      </div>
    </div>
  );
}
