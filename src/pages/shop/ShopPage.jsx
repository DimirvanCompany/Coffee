import "./ShopPage.css";
import { Accordion, Col, Row, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDataFromShop } from "../../Redux/slices/coffees";
import CardLoding from "../../components/lodings/cardLoding/CardLoding";
import ShopItem from "../../components/shop/ShopItem";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
function ShopPage() {
  const dispatch = useDispatch();
  const { data, isPending, errorMessage } = useSelector(
    (store) => store.coffee
  );
  useEffect(() => {
    dispatch(fetchDataFromShop());
  }, []);
  return (
    <>
      <Navbar />
      <Container className="my-16">
        <Row>
          <Col sm="12" md="3">
            <div className="border-gray-700 border rounded-xl my-4">
              <Accordion defaultActiveKey="0" className="p-2.5 rounded">
                <Accordion.Item>
                  <Accordion.Header>میزان کافئین</Accordion.Header>
                  <Accordion.Body>
                    <Row className="flex justify-start items-center">
                      <Form className="p-2">
                        <Form.Check
                          reverse
                          className="py-2"
                          label="بالا"
                          name="group1"
                          type="checkbox"
                          id="up"
                        />
                        <Form.Check
                          reverse
                          className="py-2"
                          label="پایین"
                          name="group1"
                          type="checkbox"
                          id="down"
                        />
                        <Form.Check
                          reverse
                          className="py-2"
                          label="متوسط"
                          name="group1"
                          type="checkbox"
                          id="middle"
                        />
                        <Form.Check
                          reverse
                          className="py-2"
                          label="صفر"
                          name="group1"
                          type="checkbox"
                          id="zero"
                        />
                      </Form>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="border-gray-700 border rounded-xl my-4">
              <Accordion defaultActiveKey="0" className="p-2.5 rounded">
                <Accordion.Item>
                  <Accordion.Header>دم‌افزار پیشنهادی</Accordion.Header>
                  <Accordion.Body>
                    <Form className="p-2">
                      <Form.Check
                        className="py-2"
                        label="اسپرسو ساز تخصصی"
                        name="group1"
                        type="checkbox"
                        id="special-sperso-maker"
                      />
                      <Form.Check
                        className="py-2"
                        label="اسپرسو ساز صنعتی"
                        name="group1"
                        type="checkbox"
                        id="Industrial-sperso-maker"
                      />
                      <Form.Check
                        className="py-2"
                        label="قهوه ساز خانگی"
                        name="group1"
                        type="checkbox"
                        id="home-coffee-maker"
                      />
                      <Form.Check
                        className="py-2"
                        label="فرنچ‌پرس"
                        name="group1"
                        type="checkbox"
                        id="french-press"
                      />
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
          <Col sm="12" md="9" className="my-2">
            <Row>
              <Col sm="12" md="4" className="my-3">
                <Form.Select
                  className="p-3"
                  aria-label="Default select example"
                >
                  <option value="1" selected>
                    مرتب‌سازی براساس آخرین
                  </option>
                  <option value="2">مرتب‌سازی بر اساس پر فروش ترین</option>
                  <option value="3">مرتب‌سازی بر اساس امتیاز</option>
                  <option value="4">مرتب‌سازی بر اساس ارزان ترین</option>
                  <option value="5">مرتب‌سازی بر اساس گران ترین</option>
                </Form.Select>
              </Col>
              <Col sm="12" md="4" className="offset-md-4 my-3">
                <Form className="border rounded p-3 border-gray-600">
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    label="فقط کالا های موجود"
                  />
                </Form>
              </Col>
            </Row>
            <Row className="my-3 items-center">
              {isPending ? (
                <CardLoding />
              ) : errorMessage ? (
                <h2 className="text-center">خطا در دریافت اطلاعات</h2>
              ) : (
                data.map((item) => <ShopItem key={item.id} {...item} />)
              )}
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ShopPage;
