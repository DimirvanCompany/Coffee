import { MdCoffeeMaker } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { CiCoffeeCup } from "react-icons/ci";
const data = [
  {
    icon: (
      <MdCoffeeMaker
        size="80px"
        color="#E9EFED"
        className="p-2 bg-info bg-opacity-25 rounded-4"
      />
    ),
    number: "+400",
    title: "باریستا",
  },
  {
    icon: (
      <CiCoffeeCup
        size="80px"
        color="#E9EFED"
        className="p-2 bg-info bg-opacity-25 rounded-4"
      />
    ),
    number: "+70",
    title: "نوشیدنی ها",
  },
  {
    icon: (
      <FaHandHoldingHeart
        size="80px"
        color="#E9EFED"
        className="p-2 bg-info bg-opacity-25 rounded-4"
      />
    ),
    number: "+14",
    title: "سال فعالیت",
  },
  {
    icon: (
      <BsShop
        size="80px"
        color="#E9EFED"
        className="p-2 bg-info bg-opacity-25 rounded-4"
      />
    ),
    number: "+25",
    title: "شعبه فعال",
  },
];
export default data;
