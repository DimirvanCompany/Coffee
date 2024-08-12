import "./Section4.css";
import { ImStarEmpty } from "react-icons/im";
function Section4Items({ image, name, comment, date }) {
  return (
    <div className="container_comments">
      <div className="card_image_comments">
        <img src={image} className="img-fluid" />
      </div>
      <div className="card_title_comments">
        <p>{name}</p>
        <p className="color-gray">{date}</p>
      </div>
      <div className="card_desc_comments">
        <p>{comment}</p>
      </div>
      <div className="card_score_comments">
        <p>
          <span className="me-2">
            <ImStarEmpty color="yellow" size="20px" />
            <ImStarEmpty color="yellow" size="20px" />
            <ImStarEmpty color="yellow" size="20px" />
            <ImStarEmpty color="yellow" size="20px" />
            <ImStarEmpty color="yellow" size="20px" />
          </span>
          <span className="mt-1">5</span>
        </p>
      </div>
    </div>
  );
}

export default Section4Items;
