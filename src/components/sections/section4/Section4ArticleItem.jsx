import "./Section4.css";

function Section4ArticleItem({ image, title, desc }) {
  return (
    <div className="container_article">
      <div className="card_image_article">
        <img src={image} className="img-fluid" />
      </div>
      <div className="card_title_article px-4">
        <h5 className="my-3 fw-bold">{title}</h5>
      </div>
      <div className="card_desc_article px-4">
        <p className="">{desc}</p>
      </div>
      <button
        className="btn fw-bold my-3 border-0 orange-bg mx-4"
        id="btn-radius"
      >
        بیشتر بخوانید
      </button>
    </div>
  );
}

export default Section4ArticleItem;
