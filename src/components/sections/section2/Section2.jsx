import { Col, Container, Row } from 'react-bootstrap'
import './Section2.css'
import img_coffee1 from "../../../assets/images/coffee-1.png";
import img_coffee2 from "../../../assets/images/coffee_2.png"
import img_coffee3 from "../../../assets/images/coffee_3.png"
import img_coffee4 from "../../../assets/images/coffee_4.png"
import shop_Coffee_1 from "../../../assets/images/shop_Coffee_1.png";
import shop_Coffee_2 from "../../../assets/images/shop_Coffee_2.png";
import shop_Coffee_3 from "../../../assets/images/shop_Coffee_3.png";
import shop_pitcher from "../../../assets/images/pitcher.png";
import image_s2_sub from "../../../assets/images/s2_sub.svg"
import '../../../index.css'
import { FaArrowLeftLong } from "react-icons/fa6";
const price = 1200000;
function Section2() {

    return(
        <Container>
            <Row className='py-5'>
            <h2 className='fw-bold py-5'><span className='color_green'>محصولات پرفروش</span> کافه اراد</h2>
                <Col sm={12} md={6} lg={4} xl={3}>
                <div className="card_container">
                <div className="card_image image_fluid">
                    <img src={img_coffee1} />
                </div>
                <div className="card_body mt-5">
                    <h5 className='title fw-bold'>تایتل مربوط به محصول</h5>
                    <p className='price color_green fw-bold'>{price.toLocaleString()} ریال</p>
                    <p className="details fw-bold">جزئیات محصول</p>
                    <button className="btn fw-bold my-3 border-0 orange-bg" id="btn-radius">
                      ثبت سفارش
                    </button>
                </div>
            </div>
                </Col>
                <Col sm={12} md={6} lg={4} xl={3}>
                <div className="card_container">
                <div className="card_image image_fluid">
                    <img src={img_coffee2} />
                </div>
                <div className="card_body mt-5">
                    <h5 className='title fw-bold'>تایتل مربوط به محصول</h5>
                    <p className='price color_green fw-bold'>{price.toLocaleString()} ریال</p>
                    <p className="details fw-bold">جزئیات محصول</p>
                    <button className="btn fw-bold my-3 border-0 orange-bg" id="btn-radius">
                      ثبت سفارش
                    </button>
                </div>
            </div>
                </Col>
                <Col sm={12} md={6} lg={4} xl={3}>
                <div className="card_container">
                <div className="card_image image_fluid">
                    <img src={img_coffee3} />
                </div>
                <div className="card_body mt-5">
                    <h5 className='title fw-bold'>تایتل مربوط به محصول</h5>
                    <p className='price color_green fw-bold'>{price.toLocaleString()} ریال</p>
                    <p className="details fw-bold">جزئیات محصول</p>
                    <button className="btn fw-bold my-3 border-0 orange-bg" id="btn-radius">
                      ثبت سفارش
                    </button>
                </div>
            </div>
                </Col>
                <Col sm={12} md={6} lg={4} xl={3}>
                <div className="card_container">
                <div className="card_image image_fluid">
                    <img src={img_coffee4} />
                </div>
                <div className="card_body mt-5">
                    <h5 className='title fw-bold'>تایتل مربوط به محصول</h5>
                    <p className='price color_green fw-bold'>{price.toLocaleString()} ریال</p>
                    <p className="details fw-bold">جزئیات محصول</p>
                    <button className="btn fw-bold my-3 border-0 orange-bg" id="btn-radius">
                      ثبت سفارش
                    </button>
                </div>
            </div>
                </Col>
            </Row>
            <Row className='my-5 py-5'>
                <Col sm={12} md={8}>
                    <Row>
                        <Col sm={12} xl={6} className='gy-3'>
                            <div className="sub_s2_container_1">
                                <div className="number_s2 py-2"><span>25+</span></div>
                            <div className="branch_S2">
                                <h5>شعب قهوه آراد</h5>
                                <p>مجموعه قهوه لمیز با بیش از 25 شعبه فعال در تهران،اصفهان،رویان،متل قو،کیش،کرج،و...</p>
                            </div>
                            <div className="d-flex justify-content-end">
                            <div className="icon_s2">
                                <FaArrowLeftLong />
                            </div>
                            </div>
                            </div>
                        </Col>
                        <Col sm={12} xl={6} className='gy-3'>
                            <div className="sub_s2_container_2">
                                <div className="number_s2 py-2 text-dark d-flex justify-content-end">
                                    <span className='icon_s2 image_shop'>
                                        <img src={shop_Coffee_1}/>
                                    </span>
                                    <span className='icon_s2 image_shop'>
                                        <img src={shop_Coffee_2}/>
                                    </span>
                                    <span className='icon_s2 image_shop'>
                                        <img src={shop_Coffee_3}/>
                                    </span>
                                </div>
                            <div className="branch_S2">
                                <h5>منوی قهوه آراد</h5>
                                <p>مجموعه قهوه آراد با تنوع بیش از 100 نوع محصول در فروشگاه...</p>
                            </div>
                            <div className="d-flex justify-content-end">
                            <div className="icon_s2">
                                <FaArrowLeftLong />
                            </div>
                            </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='py-5'>
                        <Col sm={12}>
                            <div className="d-flex align-items-center justify-content-around rounded-5 bg-gray p-4 sub_row_right">
                                <span><img src={image_s2_sub} className='sub_icon' /></span>
                                <span><img src={image_s2_sub} className='sub_icon' /></span>
                                <span><img src={image_s2_sub} className='sub_icon' /></span>
                                <span><img src={image_s2_sub} className='sub_icon' /></span>
                                <h5 className='fw-bold '>قهوه آراد،طعمی متفاوت</h5>
                                <span><img src={image_s2_sub} className='sub_icon' /></span>
                                <span><img src={image_s2_sub} className='sub_icon' /></span>
                                <span><img src={image_s2_sub} className='sub_icon' /></span>
                                <span><img src={image_s2_sub} className='sub_icon' /></span>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} md={4}>
                <div className="sub_s2_container_3 mt-3">
                    <div className="number_s2 py-2"><span>25+</span></div>
                <div className="branch_S2">
                    <h5>شعب قهوه آراد</h5>
                    <p>مجموعه قهوه لمیز با بیش از 25 شعبه فعال در تهران،اصفهان،رویان،متل قو،کیش،کرج،و...</p>
                </div>
                <div className="d-flex justify-content-end icon_image">
                <div className="icon_s2">
                    <FaArrowLeftLong />
                </div>
                </div>
                <div>
                    <img src={shop_pitcher} className='img-fluid' />
                </div>
                </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Section2