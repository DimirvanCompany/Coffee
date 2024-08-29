import "./Section3.css";
function Section3Items({ icon, number, title }) {
  return (
    <div
      className="rounded-3 d-flex align-items-center"
      data-aos="fade-left"
      data-aos-delay="250"
    >
      <div className="px-3" data-aos="fade-left" data-aos-delay="300">
        {icon}
      </div>
      <div className="px-3">
        <div
          className="my-3 text-light fw-bold"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          {number}
        </div>
        <div
          className="my-3 text-light fw-bold"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          {title}
        </div>
      </div>
    </div>
  );
}
export default Section3Items;
