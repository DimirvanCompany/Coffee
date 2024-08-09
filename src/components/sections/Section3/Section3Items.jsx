import "./Section3.css";
function Section3Items({ icon, number, title }) {
  return (
    <div className="rounded-3 d-flex align-items-center">
      <div className="px-3">{icon}</div>
      <div className="px-3">
        <div className="my-3 text-light">{number}</div>
        <div className="my-3 text-light">{title}</div>
      </div>
    </div>
  );
}
export default Section3Items;
