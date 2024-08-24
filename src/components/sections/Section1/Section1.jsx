import "./Section1.css";
import { Col, Container, Row } from "react-bootstrap";
import Coffee from "../../../assets/images/photo_2024-08-08_08-29-32.jpg";
import { FaCoffee } from "react-icons/fa";
import { CgCoffee } from "react-icons/cg";
import { GiSlicedBread } from "react-icons/gi";
import { FaGlassWater } from "react-icons/fa6";
import { RiCake3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
function Section1() {
  return (
    <>
      <div className="mt-5" id="container-fluid-margin">
        <Container>
          <Row className="d-flex align-items-center justify-content-center">
            <Col sm="12" md="6" className="mt-5">
              <h1 className="my-3 dark-color fw-bold">قهوه آراد</h1>
              <h2 className="my-3 gray-bg text-light d-inline-block p-2 border-radius fw-bold">
                طعمی متفاوت
              </h2>
              <p className="my-3 fs-custom text-justify">
                سرو قهوه فوق العاده ، کیک ها و شیرینی های تازه و ارائه بهترین
                سرویس ها در فضای زنده و به یاد ماندنی از جمله ارزش های ما در
                مجموعه قهوه تمیز است . همه هدف ما ، تلاش ما و امید ما ارائه
                بهترین محصول با بهترین قیمت و کیفیت است.
              </p>
              <button className="btn my-3 border-0 orange-bg" id="btn-radius">
                <Link
                  to="/shop"
                  className="text-decoration-none text-black"
                >
                  فروشگاه قهوه آراد
                </Link>
              </button>
            </Col>
            <Col sm="12" md="6" className="mt-5 text-center text-md-end">
              <img
                src={Coffee}
                className="img-fluid w-75"
                id="responsive-style"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="my-5" id="custom-margin">
        <Container>
          <Row className="gray-bg d-flex justify-content-center align-items-center custom-style p-3 py-4 rounded-5 shadow">
            <Col sm="12" md="5" className="text-light">
              <h4 className="my-2">منوی قهوه آراد</h4>
              <p className="my-4 text-justify">
                منوی مجموعه قهوه آراد شامل نوشیدنی های گرم ، نوشیدنی های سرد ،
                ماچاها ، کیک ها و شیرینی های سالم و تازه پخت است که طعم خوش و
                ماندگاری را برای شما به یادگار می گذارد.
              </p>
            </Col>
            <Col
              sm="12"
              md="6"
              className="d-flex offset-1 justify-content-center text-center align-items-center m-auto"
            >
              <Row className="d-flex justify-content-center align-items-center">
                <Col md="4" lg="3" xl="2" xxl="2" className="my-2 mx-2 p-3">
                  <FaCoffee className="m-auto" color="#E9EFED" size="70px" />
                  <h6 className="my-1 text-center text-light">چای و دمنوش</h6>
                </Col>
                <Col md="4" lg="3" xl="2" xxl="2" className="my-2 mx-2 p-3">
                  <CgCoffee className="m-auto" color="#E9EFED" size="70px" />
                  <h6 className="my-1 text-center text-light">نوشیدنی گرم</h6>
                </Col>
                <Col
                  md="4"
                  lg="3"
                  xl="4"
                  xxl="2"
                  className="my-2 mx-2 p-3 orange-bg rounded-4"
                >
                  <GiSlicedBread
                    className="m-auto"
                    color="#E9EFED"
                    size="70px"
                  />
                  <h6 className="my-1 text-center">صبحانه آراد</h6>
                </Col>
                <Col md="4" lg="3" xl="2" xxl="2" className="my-2 mx-2 p-3">
                  <FaGlassWater
                    className="m-auto"
                    color="#E9EFED"
                    size="70px"
                  />
                  <h6 className="my-1 text-center text-light">نوشیدنی سرد</h6>
                </Col>
                <Col md="4" lg="3" xl="2" xxl="2" className="my-2 mx-2 p-3">
                  <RiCake3Line className="m-auto" color="#E9EFED" size="70px" />
                  <h6 className="my-1 text-light text-center">کیک ها</h6>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Section1;
