import { Card, Col } from "react-bootstrap";
import "./ShopItem.css";
import { TbBasketDollar } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/slices/cart";
import toast, { Toaster } from "react-hot-toast";
function ShopItem({ id, image, title, packaging, price }) {
  const dispatch = useDispatch();
  const { addedProducts } = useSelector((store) => store.cart);
  const { data } = useSelector((store) => store.coffee);
  const addToCartHandler = () => {
    if (isItemExistInToCart()) {
      toast.success("محصول به سبد خرید اضافه شده است");
    } else {
      toast.success("محصول با موفقیت به سبد خرید اضافه شد");
      const productData = data.find((coffee) => coffee.id == id);
      dispatch(addToCart(productData));
    }
  };

  const isItemExistInToCart = () => {
    return addedProducts.some((item) => item.id == id);
  };
  return (
    <>
      <Toaster position="top" />
      <Col sm="12" md="3" className="my-3">
        <Card className="rounded-lg">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title className="flex gap-x-1 my-3">
              <span className="text-xs">{packaging}</span>
            </Card.Title>
            <Card.Text className="text-sm">{title}</Card.Text>
            <div className="price-container mt-4">
              <span>{price.toLocaleString()} تومان</span>
              <button
                className="flex justify-center items-center"
                onClick={addToCartHandler}
              >
                <TbBasketDollar
                  color="#121"
                  className="font-extrabold p-2 border-2 border-orange-200 rounded-full"
                  size="50px"
                />
              </button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default ShopItem;
