import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import "./AboutUs.css";
function AboutUs() {
  return (
    <Container className="my-5">
      <Row className="flex items-center justify-center mb-4 m-auto">
        <Col sm="12" md="5" className="cusom-shadow p-0">
          <img
            src="https://araadcoffee.com/wp-content/uploads/2020/11/gifts-for-coffee-snobs-blog-post-image-2048x1365.jpg"
            alt=""
            className="img-fluid"
          />
        </Col>
        <Col sm="12" md="7">
          <p className="text-justify my-4">
            فروشگاه اینترنتی قهوه آراد از سال ۱۳۹۹ در زمینه فروش قهوه و محصولات
            وابسته با هدف ترویج فرهنگ قهوه نوشی و آموزش ساده ی روش های دم آوری
            قهوه به افرادی که کمترین اطلاعات را در زمینه قهوه دارند تاسیس و
            فعالیت خود را آغاز کرد.
          </p>
          <p className="text-justify my-4">
            برند قهوه آراد به پشتوانه تجربه ۴۰ ساله ی موسسان در زمینه تامین دان
            قهوه، برشته کاری و فروش عمده دان قهوه در شهر اصفهان هدف خود را ترویج
            فرهنگ قهوه نوشی در خانه و همینطور بالا بردن کیفیت دان قهوه و روش های
            دم آوری قهوه تعیین کرد و با استفاده از نیروهای جوان، با انگیزه و
            متخصص در این راه قدم برداشت.
          </p>
          <p className="text-justify my-4">
            افتخار مجموعه آراد در طی این سال ها رضایت حداکثری بیش از ۳۰۰۰ مصرف
            کننده قهوه آراد است.
          </p>
          <p className="text-justify my-4">
            یکی از اصلی ترین اهداف ما در قهوه آراد توجه به کیفیت دان سبز، برشته
            کاری دقیق و اصولی به وسیله بروزترین دستگاه های برشته کاری و تازگی
            قهوه است.
          </p>
          <p className="text-justify my-4">
            آرزومندیم با نوشیدن قهوه آراد چیزی فراتر از آنچه تاکنون نوشیده اید
            را تجربه کنید.
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md="4" className="my-3">
          <p className="my-2">کیفیت محصولات :</p>
          <ProgressBar animated variant="warning" now={"100"} label="100 %" />
        </Col>
        <Col sm="12" md="4" className="my-3">
          <p className="my-2">رضایت مشتریان :</p>
          <ProgressBar animated variant="warning" now={"96"} label="96 %" />
        </Col>
        <Col sm="12" md="4" className="my-3">
          <p className="my-2">خدمات پس از فروش :</p>
          <ProgressBar animated variant="warning" now={"87"} label="87 %" />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;
