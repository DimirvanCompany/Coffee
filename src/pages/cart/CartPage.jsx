import { Col, Container, Row } from "react-bootstrap";
import CartIPageItem from "../../components/cart/CartIPageItem";
import "./CartPage.css";
import { useSelector } from "react-redux";
import { CgShoppingBag } from "react-icons/cg";
function CartPage() {
  const { addedProducts, addedToCart, totalPrice } = useSelector(
    (store) => store.cart
  );
  return (
    <Container>
      <Row>
        {addedToCart == 0 && (
          <Row className="flex mt-5 w-75 m-auto text-white py-5 rounded-2xl items-center gray-bg gap-y-8 justify-center ">
            <CgShoppingBag size="60px" color="#ffb91d" />
            <h2 className="text-center">سبد خرید خالیه!</h2>
          </Row>
        )}
        {addedToCart > 0 && (
          <Row className="flex items-start justify-center m-auto">
            <Col md="9">
              {addedProducts.map((item) => (
                <CartIPageItem key={item.id} {...item} />
              ))}
            </Col>
            <Col
              md="3"
              className=" p-3 rounded-lg mt-4 text-center bg-navbar custom-shadow flex items-center justify-center"
            >
              <Row>
                <p>مجموع سبد خرید</p>
                <p>{totalPrice.toLocaleString()} تومان</p>
              </Row>
            </Col>
            
          </Row>
        )}
      </Row>
    </Container>
  );
}
  
export default CartPage;
