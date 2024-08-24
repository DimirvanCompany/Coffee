import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import coffeeMan from "../../assets/images/coffee-man.png";
import { LiaTelegram } from "react-icons/lia";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { FiInstagram } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
import { SendEmail } from "./sendEmail/SendEmail";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <Container fluid className="gray-bg">
      <Container id="custom-footer-margin">
        <Row
          className="my-5 orange-bg d-flex justify-content-center align-items-center px-3 rounded-5 shadow"
          id="custom-style"
        >
          <Col
            sm="12"
            md="12"
            lg="6"
            className="text-light"
            id="news-container"
          >
            <h1 className="my-2 text-dark py-3">خبرنامه قهوه آراد</h1>
            <p className="my-4 text-justify text-dark">
              ما به وقت شما اهمیت می دهیم ، اجازه دهید برای ورود شما برنامه ریزی
              کنیم
            </p>
            <Row className="d-flex justify-content-center align-items-center">
              <form
                className="d-flex justify-content-center align-items-center bg-light rounded-5 p-2"
                onSubmit={SendEmail}
              >
                <button
                  className="send-email-btn orange-bg rounded-5 p-2"
                  type="submit"
                >
                  ارسال ایمیل
                </button>
                <input
                  type="email"
                  className="send-email-input p-2"
                  placeholder="آدرس ایمیل"
                  name="email"
                />
              </form>
            </Row>
          </Col>
          <Col
            sm="12"
            md="0"
            lg="6"
            className="d-flex justify-content-center text-center align-items-center m-auto"
            id="image-container"
          >
            <Row className="d-flex justify-content-center align-items-center">
              <img src={coffeeMan} className="img-fluid img-emailBox" alt="" />
            </Row>
          </Col>
        </Row>
        <Row className="d-flex my-5 align-items-center">
          <Col md="4">
            <div>
              <h2 className="text-light fw-bold text-opacity-75 my-5">
                قهوه آراد
              </h2>
            </div>
          </Col>
          <Col
            md="4"
            className="offset-md-4 d-flex justify-content-end  flex-column"
          >
            <p className="text-light text-start text-md-center text-opacity-75 my-3">
              رسانه های اجتماعی
            </p>
            <Row className="d-flex align-items-center justify-content-start justify-content-md-end">
              <Col
                sm="3"
                className="bg-info d-flex align-items-center justify-content-center mx-2 bg-opacity-10 hover-style p-3"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              >
                <LiaTelegram size="30px" title="تلگرام" />
              </Col>
              <Col
                sm="3"
                className="bg-info d-flex align-items-center justify-content-center mx-2 bg-opacity-10 hover-style p-3"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              >
                <PiYoutubeLogoLight size="30px" title="یوتیوب" />
              </Col>
              <Col
                sm="3"
                className="bg-info d-flex align-items-center justify-content-center mx-2 bg-opacity-10 hover-style p-3"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              >
                <FiInstagram size="30px" title="اینستاگرام" />
              </Col>
              <Col
                sm="3"
                className="bg-info d-flex align-items-center justify-content-center mx-2 bg-opacity-10 hover-style p-3"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              >
                <CiFacebook size="30px" title="فیسبوک" />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="mt-3" sm="12" md="4">
            <div>
              <span className="text-light text-opacity-75">
                درباره قهوه آراد
              </span>
              <p className="text-justify my-3 text-light text-opacity-75">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد.
              </p>
            </div>
          </Col>
          <Col sm="12" md="4" className="mt-3 d-flex justify-content-md-center">
            <ul>
              <h6 className="text-justify text-light text-opacity-75">
                لینک ها
              </h6>
              <li className="list-style">
                <Link
                  to="/"
                  className="text-light text-opacity-75 text-decoration-none"
                >
                  خانه
                </Link>
              </li>
              <li className="list-style">
                <Link
                  to="/shop"
                  className="text-light text-opacity-75 text-decoration-none"
                >
                  فروشگاه
                </Link>
              </li>
              <li className="list-style">
                <Link
                  to="/cafe-menu"
                  className="text-light text-opacity-75 text-decoration-none"
                >
                  منوی کافه
                </Link>
              </li>
              <li className="list-style">
                <Link
                  to="/blog"
                  className="text-light text-opacity-75 text-decoration-none"
                >
                  وبلاگ
                </Link>
              </li>
              <li className="list-style">
                <Link
                  to="about-us"
                  className="text-light text-opacity-75 text-decoration-none"
                >
                  درباره ما
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="mt-3" sm="12" md="4">
            <div>
              <p className="text-light text-opacity-75">ساعت کاری</p>
              <Row className="text-light text-opacity-75">
                <Col sm="12" md="6">
                  <p>شنبه - پنجشنبه :</p>
                </Col>
                <Col sm="12" md="6">
                  <p>8 صبح تا 6 شب</p>
                </Col>
              </Row>
              <Row className="text-light text-opacity-75">
                <Col sm="12" md="6">
                  <p>جمعه :</p>
                </Col>
                <Col sm="12" md="6">
                  <p>9 صبح تا 11 شب</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
