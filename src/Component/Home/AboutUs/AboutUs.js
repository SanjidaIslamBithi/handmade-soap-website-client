import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import aboutus from '../../../images/gettyimages-1208483325-2048x2048.jpg';
const AboutUs = () => {
  return (
    <div>
      <Container className='shadow-lg p-3 mb-5 bg-body rounded mt-5'>
      <h2 className="fs-1 fw-bold mt-5 mb-5">
              Abou<span className=' text-info'>Us</span>
            </h2>
        <Row className='mt-5 mb-5'>
       
          <Col sm={8}>
            <Image src={aboutus} rounded className='mb-3 w-75' />
          </Col>
          <Col>
            
            <p className="text-start fs-5 fst-normal">
              Our products are Hand-Made soap, O'luv soap for women, Oasis men's
              soap, Vee-7 detergent powder, Jess-gel toothpaste, Ivy Natural
              Soap, Marigold Sandalwood Soap & Daffodil Talcum powder. We
              provide quality products at very affordable prices. We are looking
              for potential importers from the Eastern European countries,
              Middles East countries, Latin Amrican countries & Africa. We also
              do OEM for soaps, detergents and creams according to our buyers
              brand names.
            </p>
          </Col>
        </Row>
        {/* <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default AboutUs;
