import { Col, Container, Row } from "react-bootstrap";
import "./Section2.css";
import img_coffee1 from "../../../assets/images/coffee-1.png";
import img_coffee2 from "../../../assets/images/coffee_2.png";
import img_coffee3 from "../../../assets/images/coffee_3.png";
import img_coffee4 from "../../../assets/images/coffee_4.png";
import shop_Coffee_1 from "../../../assets/images/shop_Coffee_1.png";
import shop_Coffee_2 from "../../../assets/images/shop_Coffee_2.png";
import shop_Coffee_3 from "../../../assets/images/shop_Coffee_3.png";
import image_s2_sub from "../../../assets/images/s2_sub.svg";
import "../../../index.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import Section2Items from "./Section2Items";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
const price1 = 10000;
const price2 = 200000;
const price3 = 26000;
const price4 = 588000;
const price5 = 54600;
const price6 = 100000;
const price7 = 60000;
const price8 = 75900;
function Section2() {

  const cardItem = [
    {
      id : 1,
      image : img_coffee1,
      title : 'تایتل مربوط به محصول',
      price : price1.toLocaleString(),
      details : 'جزئیات محصول',
    },
    {
      id : 2,
      image : img_coffee2,
      title : 'تایتل مربوط به محصول',
      price : price2.toLocaleString(),
      details : 'جزئیات محصول',
    },
    {
      id : 3,
      image : img_coffee3,
      title : 'تایتل مربوط به محصول',
      price : price3.toLocaleString(),
      details : 'جزئیات محصول',
    },
    {
      id : 4,
      image : img_coffee4,
      title : 'تایتل مربوط به محصول',
      price : price4.toLocaleString(),
      details : 'جزئیات محصول',
    },
    {
      id : 5,
      image : img_coffee1,
      title : 'تایتل مربوط به محصول',
      price : price5.toLocaleString(),
      details : 'جزئیات محصول',
    },
    {
      id : 6,
      image : img_coffee2,
      title : 'تایتل مربوط به محصول',
      price : price6.toLocaleString(),
      details : 'جزئیات محصول',
    },
    {
      id : 7,
      image : img_coffee3,
      title : 'تایتل مربوط به محصول',
      price : price7.toLocaleString(),
      details : 'جزئیات محصول',
    },
    {
      id : 8,
      image : img_coffee4,
      title : 'تایتل مربوط به محصول',
      price : price8.toLocaleString(),
      details : 'جزئیات محصول',
    },
  ]




  return (
    <Container>
      <Row className="py-5">
        <h2 className="fw-bold pb-4">
          <span className="color_green">محصولات پرفروش</span> کافه اراد
        </h2>
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
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              200: {
                slidesPerView: 1,
              },
            }}
            className="mySwiper"
          >  
              {cardItem.map(item => (
                <SwiperSlide key={item.id}>
                  <Section2Items {...item} />
                </SwiperSlide>
              ))}
          </Swiper>
         


      </Row>
      <Row className="my-5 py-5">
        <Col sm={12} md={8}>
          <Row>
            <Col sm={12} xl={6} className="gy-3">
              <div className="sub_s2_container_1">
                <div className="number_s2 py-2">
                  <span>25+</span>
                </div>
                <div className="branch_S2">
                  <h5>شعب قهوه آراد</h5>
                  <p>
                    مجموعه قهوه لمیز با بیش از 25 شعبه فعال در
                    تهران،اصفهان،رویان،متل قو،کیش،کرج،و...
                  </p>
                </div>
                <div className="d-flex justify-content-end">
                  <div className="icon_s2">
                    <button className="btn">
                      {" "}
                      <FaArrowLeftLong />
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} xl={6} className="gy-3">
              <div className="sub_s2_container_2">
                <div className="number_s2 py-2 text-dark d-flex justify-content-end">
                  <span className="icon_s2 image_shop">
                    <img src={shop_Coffee_1} />
                  </span>
                  <span className="icon_s2 image_shop">
                    <img src={shop_Coffee_2} />
                  </span>
                  <span className="icon_s2 image_shop">
                    <img src={shop_Coffee_3} />
                  </span>
                </div>
                <div className="branch_S2">
                  <h5>منوی قهوه آراد</h5>
                  <p>
                    مجموعه قهوه آراد با تنوع بیش از 100 نوع محصول در فروشگاه...
                  </p>
                </div>
                <div className="d-flex justify-content-end">
                  <div className="icon_s2">
                    <button className="btn">
                      {" "}
                      <FaArrowLeftLong />
                    </button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="py-5">
            <Col sm={12}>
              <div className="d-flex align-items-center justify-content-around rounded-5 bg-gray p-4 sub_row_right">
                <span>
                  <img src={image_s2_sub} className="sub_icon" />
                </span>
                <span>
                  <img src={image_s2_sub} className="sub_icon" />
                </span>
                <h5 className="fw-bold ">قهوه آراد،طعمی متفاوت</h5>
                <span>
                  <img src={image_s2_sub} className="sub_icon" />
                </span>
                <span>
                  <img src={image_s2_sub} className="sub_icon" />
                </span>
              </div>
            </Col>
          </Row>
        </Col>
        <Col sm={12} md={4}>
          <div className="sub_s2_container_3 mt-3">
            <div className="number_s2 py-2">
              <span>25+</span>
            </div>
            <div className="branch_S2">
              <h5>شعب قهوه آراد</h5>
              <p>
                مجموعه قهوه لمیز با بیش از 25 شعبه فعال در
                تهران،اصفهان،رویان،متل قو،کیش،کرج،و...
              </p>
            </div>
            <div className="d-flex justify-content-end icon_image">
              <div className="icon_s2">
                <button className="btn">
                  {" "}
                  <FaArrowLeftLong />
                </button>
              </div>
            </div>
            <div className="text-center">
              <img
                src="https://vakacoffee.com/wp-content/uploads/2023/03/MOCHAPOT.svg"
                className="img-fluid w-50 m-auto"
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Section2;
