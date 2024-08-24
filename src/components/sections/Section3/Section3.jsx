import { Col, Container, Row } from "react-bootstrap";
import "./Section3.css";
import Section3Items from "./Section3Items";
import data from "./data/Data";
import { Link } from "react-router-dom";
function Section3() {
  return (
    <>
      <Container fluid className="mt-5 py-5 gray-bg">
        <Container>
          <Row className="align-items-center">
            <Col className="my-2" sm="12" md="6">
              <div
                className="rounded-5 d-flex align-items-center"
                id="background-image"
              >
                <div className="gray-bg rounded-4" id="media-query">
                  {data.map((item) => (
                    <Section3Items key={item.title} {...item} />
                  ))}
                </div>
              </div>
            </Col>
            <Col sm="12" md="5" className="offset-md-1 my-2">
              <h2 className="my-3 text-light fw-bold">درباره کافه آراد</h2>
              <p className="my-2 text-light text-justify">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
                نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
                جامعه و متخصصان را می طلبد.
              </p>
              <button
                className="btn my-3 border-0 orange-bg fw-bold"
                id="btn-radius"
              >
                <Link
                  to="/about-us"
                  className="text-decoration-none text-black"
                >
                  درباره قهوه آراد
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Section3;
