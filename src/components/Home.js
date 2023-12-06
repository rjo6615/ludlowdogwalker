import React from "react";
import {Carousel, Card, Container, Row} from 'react-bootstrap';
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import walking from "../images/walking.jpg";
import overnights from "../images/overnights.jpg";
import daycare from "../images/daycare.jpg";
import somethingelse from "../images/somethingelse.jpg";
import owners from "../images/owners.jpg";

function Home() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);

  return (
<div>
<div id="home" className="main-container" style={{ backgroundColor: '#eae2b7', color: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <div className="contact-info-container fadeIn" style={{ flex: '1' }}>
    <div className="px-5 contact" style={{ fontFamily: "'Caveat', cursive", fontWeight: 'bold'}}>
      "Years of love and care in Ludlow, Vermont! Join us 
      for joy filled walks, exercise hikes, daycare and cozy overnights. Your dogs deserve 
      the best, and we're here to deliver!"</div>
      <div className="mt-2 contact" style={{ fontFamily: "'Caveat', cursive", fontWeight: 'bold'}}>Call us</div>
      <a href="tel:2038589786"><button className="button-pop-out contact-button">Lynn: (203)-858-9786</button></a>
      <br />
      <a href="tel:8023532676"><button className="button-pop-out contact-button">Jim: (802)-353-2676</button></a>
      <br />
      <div className="mt-1 contact" style={{ fontFamily: "'Caveat', cursive", fontWeight: 'bold'}}>Email us</div>
      <a href="mailto:ludlowdogwalker@gmail.com"><button className="button-pop-out contact-button">ludlowdogwalker@gmail.com</button></a>
  </div>
  <style>
  {`
    .zoom-in {
      animation: zoomIn 10s ease-in-out infinite;
    }

    @keyframes zoomIn {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  `}
</style>

<div className="carousel-container fadeIn" style={{ flex: '2' }}>
  <Carousel fade>
    <Carousel.Item style={{ position: 'relative' }}>
    <div style={{ paddingBottom: '56.25%', overflow: 'hidden', borderRadius: '0%' }}>
      <img
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        className="d-block w-100 zoom-in"
        src={slide1}
        alt="First slide"
      />
      </div>
    </Carousel.Item>
    <Carousel.Item style={{ position: 'relative' }}>
    <div style={{ paddingBottom: '56.25%', overflow: 'hidden', borderRadius: '0%' }}>
      <img
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        className="d-block w-100 zoom-in"
        src={slide2}
        alt="Second slide"
      />
      </div>
    </Carousel.Item>
    <Carousel.Item style={{ position: 'relative' }}>
    <div style={{ paddingBottom: '56.25%', overflow: 'hidden', borderRadius: '0%' }}>
      <img
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        className="d-block w-100 zoom-in"
        src={slide3}
        alt="Third slide"
      />
      </div>
    </Carousel.Item>
  </Carousel>
</div>
</div>
<center>
      <Container id='services'>
      <Row className="d-flex flex-wrap justify-content-center">
      <span className="mt-1" style={{ fontFamily: "'Caveat', cursive", fontWeight: 'bold', fontSize: '60px' }}>Our Services</span>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 reveal">
          <Card className="text-black mt-4 mx-3 image-hover" style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', borderStyle: 'none', width: '15rem' }}>
            <Card.Header className="image-hover image-size" style={{ width: '15rem', height: '15rem', borderRadius: '50%', paddingTop: '200px', backgroundSize: 'cover', backgroundImage: 'url(' + walking + ')'}}></Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{ color: 'black', fontSize: '30px', fontFamily: "'Caveat', cursive" }} className='mb-4'>Walking</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 reveal">
          <Card className="text-black mt-4 mx-3 image-hover" style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', borderStyle: 'none', width: '15rem' }}>
            <Card.Header className="image-hover image-size" style={{ width: '15rem', height: '15rem', borderRadius: '50%', paddingTop: '200px', backgroundSize: 'cover', backgroundImage: 'url(' + overnights + ')'}}></Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{ color: 'black', fontSize: '30px', fontFamily: "'Caveat', cursive" }} className='mb-4'>Overnights</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 reveal">
          <Card className="text-black mt-4 mx-3 image-hover" style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', borderStyle: 'none', width: '15rem' }}>
            <Card.Header className="image-hover image-size" style={{ width: '15rem', height: '15rem', borderRadius: '50%', paddingTop: '200px', backgroundSize: 'cover', backgroundImage: 'url(' + daycare + ')'}}></Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{ color: 'black', fontSize: '30px', fontFamily: "'Caveat', cursive" }} className='mb-4'>Daycare</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 reveal">
          <Card className="text-black mt-4 mx-3 image-hover" style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', borderStyle: 'none', width: '15rem' }}>
            <Card.Header className="image-hover image-size" style={{ width: '15rem', height: '15rem', borderRadius: '50%', paddingTop: '200px', backgroundSize: 'cover', backgroundImage: 'url(' + somethingelse + ')'}}></Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{ color: 'black', fontSize: '30px', fontFamily: "'Caveat', cursive" }} className='mb-4'>Exercise Hikes</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Container>
    </center>
    <section id="about" class="text-center">
  <div class="p-5 bg-image" style={{
        backgroundColor: '#eae2b7',
        height: "300px",
        marginBottom: "-150px"}}></div>
  <div class="row"  id='aboutus'>
    <div class="col-md-6 reveal">
      <div class="card mx-4 mx-md-5 shadow-5-strong mt-5" style={{
          background: "hsla(0, 0%, 100%, 0.8)",
          backdropFilter: "blur(30px)",
          maxWidth: '800px',
          height: '420px'}}>
        <div class="card-body py-5 px-md-5">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-8">
              <h2 class="fw-bold mb-5" style={{fontFamily: "'Caveat', cursive"}}>About Us</h2>
              <h6>"Welcome to Ludlow's Premier Dog Care by
                 our dedicated husband-and-wife team, Lynn and Jim! 
                 We offer personalized dog walking, overnight
                  stays, and daycare. Located in Ludlow Vermont 3.8 miles from downtown, we 
                  provide loving and reliable care for your dogs. 
                  Join our family for joy filled walks, exercise hikes, 
                  daycare and cozy overnights, ensuring your dogs feel secure and 
                  cherished. Your dogs deserves the best, and we're here 
                  to deliver!"
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-6 reveal">
  <div class="card mx-4 mx-md-5 shadow-5-strong mt-5" style={{
      background: "hsla(0, 0%, 100%, 0.8)",
      backdropFilter: "blur(30px)",
      maxWidth: '800px',
      height: '420px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
  }}>
    <div class="d-flex mb-3">
      <div class="text-center">
        <img src={owners}
          class="rounded-circle img-fluid" alt="" style={{width: "300px"}} />
        <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 'bold', fontSize: '40px' }}></div>
      </div>
    </div>
  </div>
</div>
</div>
</section>
</div>
  )
}

export default Home;
