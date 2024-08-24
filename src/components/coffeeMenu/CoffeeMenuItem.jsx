import { Col, Row } from "react-bootstrap";
import "./CoffeeMenuItem.css";
import { addToMenuCart } from "../../Redux/slices/menu";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
function CoffeeMenuItem({ id, title, image, price }) {
  const dispatch = useDispatch();
  const addToMenuHandler = () => {
    dispatch(addToMenuCart({ price }));
    toast.success("به سفارشات اضافه شد");
  };
  return (
    <>
      <Toaster position="top" />
      <Row className="cusom-shadow bg-gray-200 rounded-xl mb-3">
        <Col xs={6}>
          <div className="right flex items-center justify-between p-4 h-28 ">
            <img src={image} className="xs_media w-[50%]" />
            <span className="w-[50%] text-start">
              <h5>{title}</h5>
            </span>
          </div>
        </Col>
        <Col xs={2}>
          <div className="center flex justify-center items-center h-28">
            <h6 className="fw-bold">{price.toLocaleString()} تومان</h6>
          </div>
        </Col>
        <Col xs={4}>
          <div className="left flex items-center justify-end pe-4 h-28">
            <button
              className="btn my-3 border-0 orange-bg"
              id="btn-radius"
              onClick={addToMenuHandler}
            >
              افزودن
            </button>
          </div>
        </Col>
      </Row>
    </>
  );
}
export default CoffeeMenuItem;
