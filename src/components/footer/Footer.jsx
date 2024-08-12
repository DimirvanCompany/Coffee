import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import coffeeMan from "../../assets/images/coffee-man.png";
import { LiaTelegram } from "react-icons/lia";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { FiInstagram } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";
function Footer() {
  return (
    <Container fluid className="gray-bg">
      <Container id="custom-style">
        <div className="my-5" id="custom-footer-margin">
          <Container>
            <Row className="orange-bg mx-5 d-flex justify-content-center align-items-center px-3 rounded-5 shadow" id="custom-style">
              <Col
                sm="12"
                md="12"
                lg="6"
                className="text-light"
                id="news-container"
              >
                <h1 className="my-2 text-dark py-3">خبرنامه قهوه آراد</h1>
                <p className="my-4 text-justify text-dark">
                  ما به وقت شما اهمیت می دهیم ، اجازه دهید برای ورود شما برنامه
                  ریزی کنیم
                </p>
                <Row className="d-flex justify-content-center align-items-center">
                  <div className="bg-light rounded-5 p-2 d-flex justify-content-center align-items-center">
                    <button className="send-email-btn orange-bg rounded-5 p-2">
                      ارسال ایمیل
                    </button>
                    <input
                      type="text"
                      className="send-email-input p-2"
                      placeholder="آدرس ایمیل"
                    />
                  </div>
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
                  <img
                    src={coffeeMan}
                    className="img-fluid img-emailBox"
                    alt=""
                  />
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
      <Container>
        <Row className="my-4 d-flex justify-content-center align-items-center">
          <Col sm="12" md="6">
            <h2 className="text-light text-opacity-75">قهوه آراد</h2>
          </Col>
          <Col
            sm="12"
            md="6"
            className="d-flex flex-column justify-content-around"
          >
            <div className="text-light text-opacity-75 my-3">
              رسانه های اجتماعی
            </div>
            <div className="d-flex align-items-center justify-content-start">
              <div
                className="bg-info d-flex align-items-center justify-content-center mx-2 bg-opacity-10  p-3"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              >
                <LiaTelegram size="30px" color="#e9efed" />
              </div>
              <div
                className="bg-info d-flex align-items-center justify-content-center mx-2 bg-opacity-10  p-3"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              >
                <PiYoutubeLogoLight size="30px" color="#e9efed" />
              </div>
              <div
                className="bg-info d-flex align-items-center justify-content-center mx-2 bg-opacity-10 p-3"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              >
                <FiInstagram size="30px" color="#e9efed" />
              </div>
              <div
                className="bg-info d-flex align-items-center justify-content-center mx-2 bg-opacity-10 p-3"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              >
                <CiFacebook size="30px" color="#e9efed" />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-4 d-flex justify-content-center align-items-center text-light">
          <Col sm="12" md="4">
            <span className="text-light text-opacity-75">درباره قهوه آراد</span>
            <p className="text-justify my-3 text-light text-opacity-75">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد.
            </p>
          </Col>
          <Col sm="12" md="4">
            <ul>
              <h6 className="text-justify my-3 text-light text-opacity-75">لینک ها</h6>
              <li className="list-style">
                <a href="#" className="text-light text-opacity-75 text-decoration-none">
                  خانه
                </a>
              </li>
              <li className="list-style">
                <a href="#" className="text-light text-opacity-75 text-decoration-none">
                  فروشگاه
                </a>
              </li>
              <li className="list-style">
                <a href="#" className="text-light text-opacity-75 text-decoration-none">
                  منوی کافه
                </a>
              </li>
              <li className="list-style">
                <a href="#" className="text-light text-opacity-75 text-decoration-none">
                  شعبه ها
                </a>
              </li>
              <li className="list-style">
                <a href="#" className="text-light text-opacity-75 text-decoration-none">
                  وبلاک
                </a>
              </li>
              <li className="list-style">
                <a href="#" className="text-light text-opacity-75 text-decoration-none">
                  درباره ما
                </a>
              </li>
            </ul>
          </Col>
          <Col sm="12" md="4">
            <span className="py-2 text-light text-opacity-75">ساعت کاری</span>
            <p className="text-justify">
              <table className="table table-borderless text-light text-opacity-75">
                <tbody>
                  <tr>
                    <th className="text-light text-opacity-75">شنبه - پنجشنبه</th>
                    <td>8 صبح تا 6 شب</td>
                  </tr>
                  <tr>
                    <th className="text-light text-opacity-75">جمعه</th>
                    <td>9 صبح تا 11 شب</td>
                  </tr>
                </tbody>
              </table>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
