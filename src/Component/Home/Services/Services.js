import React from 'react';
import { Accordion, Col, Container, Image, Row } from 'react-bootstrap';
import pic from '../../../images/im13.jpg';
const Services = () => {
  return (
    //extra as bonus
    <Container className='mt-4 ms-5 g-5 shadow-lg' xs={6} md={4}>
      <Row>
        <Col>
          <h2 className='mt-5 pb-4 fw-bold'>
            Some Common <span className=' text-info'>Question answers</span>
          </h2>
          <Image src={pic} rounded className="mb-3" />
        </Col>
        <Col className='mt-5 pb-4'>
          <Accordion
            className='mt-5 ms-5 g-5 shadow-lg pb-4 bg-light border'
            defaultActiveKey='0'
          >
            <Accordion.Item eventKey='0'>
              <Accordion.Header>Want to know about us </Accordion.Header>
              <Accordion.Body>
                Our company name is hand made soap. We are working with soaps
                for almost 4 years. We have clients world wide.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='1'>
              <Accordion.Header>Is handmade soap natural?</Accordion.Header>
              <Accordion.Body>
                All handmade hard bar soap is made with lye (sodium hydroxide),
                a man-made chemical. ... Since there is no natural, organic
                source of raw sodium hydroxide lye, no sodium hydroxide lye is
                organic, and by US law, no soap made with it can be called
                “organic”.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2'>
              <Accordion.Header>What is pure soap?</Accordion.Header>
              <Accordion.Body>
                Soap flakes are pure soap, basically. ... Most brands of soap
                flakes are completely natural meaning they contain no bleaches,
                GMOs, dyes, chemicals or any other nasty thing that other types
                of cleaners do. This means that they are perfect for “green
                cleaning”.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
