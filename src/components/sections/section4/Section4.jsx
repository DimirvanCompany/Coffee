import { Col, Container, Row } from "react-bootstrap";
import "./Section4.css";
import Usercomments from "./db/commentData";
import { useState } from "react";
import Section4ArticleItem from "./Section4ArticleItem";
import Articles from "./db/ArticleDB";
import { SwiperSlide , Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import Section4CommentItems from "./Section4CommentItems";
function Section4() {
  const [comments, setComments] = useState(Usercomments);
  const [articles, setArticles] = useState(Articles);
  return (
    <Container>
      <h2 className="fw-bold py-5 my-3 text-center">
        <span className="color_green">نظرات مشتریان </span> کافه آراد
      </h2>
      <Row className="gy-5">
        {/* {comments.map((comment) => (
          <Col key={comment.id} md={6} lg={4}>
            <Section4Items {...comment} />
          </Col>
        ))} */}



          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              1200: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              200: {
                slidesPerView: 1,
              },
            }}
            className="mySwiper p-5"
          >  
              {comments.map(item => (
                <SwiperSlide key={item.id}>
                  <Section4CommentItems {...item} />
                </SwiperSlide>
              ))}
          </Swiper>

















      </Row>
      <h2 className="fw-bold py-5 my-3 text-center">
        <span className="color_green">مقالات</span> تخصصی آراد
      </h2>
      <Row className="gy-5 mb-5">
        {articles.map((article) => (
          <Col md={6} lg={4} key={article.id}>
            <Section4ArticleItem {...article} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Section4;
