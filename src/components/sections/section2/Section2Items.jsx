
import "./Section2.css";
function Section2Items({image , title , price , details }){
    return (
        <div className="card_container">
            <div className="card_image image_fluid">
              <img src={image} className="m-auto" />
            </div>
            <div className="card_body mt-5">
              <h5 className="title fw-bold">{title}</h5>
              <p className="price color_green fw-bold">
                {price} ریال
              </p>
              <p className="details fw-bold">{details}</p>
              <button
                className="btn fw-bold my-3 border-0 orange-bg"
                id="btn-radius"
              >
                ثبت سفارش
              </button>
            </div>
          </div>
    )
}

export default Section2Items;