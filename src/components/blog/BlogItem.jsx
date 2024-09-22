import { Col } from "react-bootstrap";
import "./BlogItem.css";
import { Link } from "react-router-dom";
function BlogItem({ image, title, desc }) {
  return (
    <Col sm="12" md="6">
      <Link
        className="card my-4 mx-3 mx-md-0 text-decoration-none"
        id="card-border"
      >
        <div className="row g-md-1 justify-between align-items-center bg-navbar cusom-shadow p-1 rounded-lg">
          <div className="my-3 col-md-6 col-sm-6 flex items-center gap-x-4">
            <img src={image} className="img-fluid rounded-xl ps-md-2 size-24" />
            <p className="text-center text-xs">{title}</p>
          </div>
          <div className="my-3 col-md-6 flex col-sm-6">
            <div className="card-body flex items-center flex-row gap-x-4 justify-center">
              <p className="flex items-center text-justify justify-center gap-x-4 text-sm">
                {desc}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
}

export default BlogItem;
