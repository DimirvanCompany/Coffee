import { Button, Col, Container, Modal, Offcanvas, Row } from "react-bootstrap";
import "./Navbar.css";
import { BsBuilding } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FiCoffee } from "react-icons/fi";
import { RiContactsFill } from "react-icons/ri";
import { GrArticle } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CgShoppingBag } from "react-icons/cg";
function Navbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //searchBox
  const [searchBoxShow, setSearchBoxShow] = useState(false);
  const searchBoxShowClose = () => setSearchBoxShow(false);
  const searchBoxhandleShow = () => setSearchBoxShow(true);
  const { addedToCart } = useSelector((store) => store.cart);
  return (
    <div className="bg-navbar">
      <Container>
        <Row>
          <Col sm="5" md="4" lg="8">
            <nav className="nav">
              <Button
                className="d-xl-none d-lg-block"
                variant=""
                onClick={handleShow}
              >
                <CiMenuFries size="20px" />
              </Button>
              <h4 className="d-xl-none d-lg-block fw-bold mt-2">قهوه آراد</h4>

              <ul className="d-flex d-none d-xl-flex">
                <li className="list-title">
                  <Link to="/">
                    <h4>قهوه آراد</h4>
                  </Link>
                </li>
                <li className="list-style">
                  <Link to="shop">فروشگاه</Link>
                </li>
                <li className="list-style">
                  <Link to="cafe-menu">منوی کافه</Link>
                </li>
                <li className="list-style">
                  <Link to="blog">بلاگ</Link>
                </li>
                <li className="list-style">
                  <Link to="about-us">درباره ما</Link>
                </li>
              </ul>
            </nav>
          </Col>
          <Col sm="7" md="8" lg="4">
            <p className="nav_left">
              <Button variant="" className="icon" onClick={searchBoxhandleShow}>
                <IoMdSearch size="17px" />
              </Button>
              <Modal show={searchBoxShow} onHide={searchBoxShowClose}>
                <Modal.Header closeButton>
                  <Modal.Title>دنبال چی میگردی؟</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                  <input placeholder="بگو چی میخوای" className="searchInput" />
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant=""
                    className="gray-bg text-white"
                    onClick={searchBoxShowClose}
                  >
                    بستن
                  </Button>
                  <Button
                    variant=""
                    className="orange-bg"
                    onClick={searchBoxShowClose}
                  >
                    جستجو
                  </Button>
                </Modal.Footer>
              </Modal>
              <div className="icons flex items-center gap-5">
                <span className="cartIcon border border-black p-1.5 border-opacity-50 rounded-full">
                  <Link to="/cart">
                    <CgShoppingBag size="25px" title="سبد خرید" />
                  </Link>
                  {addedToCart > 0 ? <span>{addedToCart}</span> : ""}
                </span>
              </div>
              <span className="sign_in">ورود | ثبت نام</span>
            </p>
          </Col>
        </Row>
      </Container>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold">قهوه آراد</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className="nav_offcanvas">
            <ul>
              <li>
                <div className="flex">
                  <span>
                    <CgShoppingBag size="20px" className="me-2" />
                  </span>
                  <Link to="shop">فروشگاه</Link>
                </div>
              </li>
              <li>
                <div className="flex">
                  <span>
                    <FiCoffee size="20px" className="me-2" />
                  </span>
                  <Link to="cafe-menu">منوی کافه</Link>
                </div>
              </li>
              <li>
                <div className="flex">
                  <span>
                    <GrArticle size="20px" className="me-2" />
                  </span>
                  <Link to="blog">بلاگ</Link>
                </div>
              </li>
              <li>
                <div className="flex">
                  <span>
                    <RiContactsFill size="20px" className="me-2" />
                  </span>
                  <Link to="about-us">درباره ما</Link>
                </div>
              </li>
            </ul>
            <hr />
            <p className="d-flex justify-content-end">
              <Button variant="" className="icon" onClick={searchBoxhandleShow}>
                <IoMdSearch size="17px" />
              </Button>
              <Modal show={searchBoxShow} onHide={searchBoxShowClose}>
                <Modal.Header closeButton>
                  <Modal.Title>دنبال چی میگردی؟</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                  <input placeholder="بگو چی میخوای" className="searchInput" />
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant=""
                    className="gray-bg text-white"
                    onClick={searchBoxShowClose}
                  >
                    بستن
                  </Button>
                  <Button
                    variant=""
                    className="orange-bg"
                    onClick={searchBoxShowClose}
                  >
                    جستجو
                  </Button>
                </Modal.Footer>
              </Modal>
              <div className="icons flex items-center gap-5">
                <span className="cartIcon border border-black p-1.5 border-opacity-50 rounded-full">
                  <Link to="/cart">
                    <CgShoppingBag size="25px" title="سبد خرید" />
                  </Link>
                  {addedToCart > 0 ? <span>{addedToCart}</span> : ""}
                </span>
              </div>
              <span className="sign_in">ورود | ثبت نام</span>
            </p>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
export default Navbar;
