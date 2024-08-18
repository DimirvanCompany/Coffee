import { Card, Col } from "react-bootstrap";
import "./CartItem.css";
import { TbBasketDollar } from "react-icons/tb";
function CartItem() {
  return (
    <Col sm="12" md="3" className="my-3">
      <Card className="rounded-lg">
        <Card.Img
          variant="top"
          src="https://www.bonmano.com/wp-content/uploads/2024/06/hover-300x300.jpg"
        />
        <Card.Body>
          <Card.Title className="flex gap-x-1 my-3">
            <span className="text-xs">250 گرم و 1 کیلوگرم</span>
          </Card.Title>
          <Card.Text>کافی میکس 1*2 بدون شکر</Card.Text>
          <div className="price-container mt-4">
            <span>535,920 تومان</span>
            <span className="flex justify-center items-center">
              <TbBasketDollar
                color="#121"
                className="font-extrabold p-2 border-2 border-orange-200 rounded-full"
                size="50px"
              />
            </span>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CartItem;
