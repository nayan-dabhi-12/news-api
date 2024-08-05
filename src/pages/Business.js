import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Header from "../common/header";
import Footer from "../common/footer";

export default function Business() {
  return (
    <>
      <Header />

      <section class="w3l-about-breadcrumb">
        <div class="breadcrumb-bg breadcrumb-bg-about py-sm-5 pt-5 pb-4">
          <div class="container pt-lg-5 pt-md-3 py-lg-4 pb-md-3">
            <h2 class="title">BUSINESS NEWS</h2>
            <ul class="breadcrumbs-custom-path mt-2">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li class="mx-2">/ </li>
              <li class="active"> Business </li>
            </ul>
          </div>
        </div>
      </section>

      <div class="w3l-news" id="news">
        <section id="grids5-block" class="py-5">
          <div class="container py-lg-5 py-md-4 py-2">
            <h3 class="title-big text-center">Business News</h3>
            <div class="row mt-lg-5 mt-4" id="news api">
            <Businessdata/></div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}


export function Businessdata() {
  const [data, setData] = useState([]);

  const apiGet = () => {
    fetch("https://inshortsapi.vercel.app/news?category=business")
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
        <SubBusiness
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

export function SubBusiness(props) {
  return (
    <div class="col-lg-4 col-md-6 mt-md-4 mt-sm-4" >
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