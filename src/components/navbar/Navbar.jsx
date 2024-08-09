import { Button, Col, Container, Offcanvas, Row } from 'react-bootstrap'
import './Navbar.css'
import { BsCart4 , BsBuilding} from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { RiContactsFill } from "react-icons/ri";
import { GrArticle } from "react-icons/gr";
function Navbar(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div className="bg-navbar">
            <Container>
                <Row>
                    <Col sm='5' md='4' lg='8'>
                    
                        <nav className='nav'> 
                            <Button className='d-xl-none d-lg-block' variant="" onClick={handleShow}>
                                <CiMenuFries size='20px'/>
                            </Button>
                            <h4 className='d-xl-none d-lg-block fw-bold mt-2'>قهوه آراد</h4>
                            <ul className='d-flex d-none d-xl-flex'>
                                <li className='list-title'><a href="#" ><h4>قهوه آراد</h4></a></li>
                                <li className='list-style'><a href="#" >خانه</a></li>
                                <li className='list-style'><a href="#" >فروشگاه</a></li>
                                <li className='list-style'><a href="#" >منوی کافه</a></li>
                                <li className='list-style'><a href="#" >شعبه ها</a></li>
                                <li className='list-style'><a href="#" >درباره ما</a></li>
                                <li className='list-style'><a href="#" >وبلاگ</a></li>

                            </ul>
                        </nav>
                    </Col>
                    <Col sm='6' md='8' lg='4'> 
                        <p className='nav_left'>
                            <span className='icon'><IoMdSearch size='17px'/></span>
                            <span className='icon'><BsCart4 size='17px'/></span>
                            <span className='sign_in'>ورود | ثبت نام</span>
                        </p>
                    </Col>
                </Row>
            </Container>

            

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className='fw-bold'>قهوه آراد</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <nav className='nav_offcanvas'>
                    <ul>
                        <li className='m-0 mt-2'><FaHome size='20px' className='me-1'/><a href="#" >خانه</a></li>
                        <li className='m-0 mt-2'><BsCart4 size='20px' className='me-1'/><a href="#" >فروشگاه</a></li>
                        <li className='m-0 mt-2'><FiCoffee size='20px' className='me-1'/><a href="#" >منوی کافه</a></li>
                        <li className='m-0 mt-2'><BsBuilding size='20px' className='me-1'/><a href="#" >شعبه ها</a></li>
                        <li className='m-0 mt-2'><RiContactsFill size='20px' className='me-1'/><a href="#" >درباره ما</a></li>
                        <li className='m-0 mt-2'><GrArticle size='20px' className='me-1'/><a href="#" >وبلاگ</a></li>
                    </ul>
                    <hr />
                    <span className='sign_in'>ورود | ثبت نام</span>
                        </nav>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}
export default Navbar