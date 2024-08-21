import { useDispatch } from "react-redux";
import "./CartIPageItem.css";
import { MdDelete } from "react-icons/md";
import { removeFromCart } from "../../Redux/slices/cart";
function CartIPageItem({ id, image, title, price }) {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeFromCart({ id, price }));
  };
  return (
    <div>
      <div className="card my-4" id="card-border">
        <div className="row g-md-1 align-items-center bg-navbar cusom-shadow p-1 rounded-lg">
          <div className="my-3 col-md-2 col-sm-6">
            <img
              src={image}
              className="img-fluid rounded-3xl ps-md-2 size-28"
            />
          </div>
          <div className="my-3 col-md-10 flex col-sm-6">
            <div className="card-body">
              <h5 className="card-title text-center">{title}</h5>
            </div>
            <div className="card-body flex items-center flex-row justify-center">
              <p className="card-text text-center flex items-center">
                <MdDelete
                  size="30px"
                  className="cursor-pointer"
                  onClick={removeHandler}
                />
                {price.toLocaleString()} تومان
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartIPageItem;
