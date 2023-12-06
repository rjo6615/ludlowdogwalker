import React from "react";
import {Carousel, Card, Container, Row} from 'react-bootstrap';
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.jpg";
import slide3 from "../images/slide3.jpg";
import slide4 from "../images/slide4.jpeg";
import slide5 from "../images/slide5.jpeg";
import slide6 from "../images/slide6.jpeg";
import slide7 from "../images/slide7.jpeg";
import slide8 from "../images/slide8.jpeg";
import slide9 from "../images/slide9.jpeg";
import slide10 from "../images/slide10.jpeg";
import slide11 from "../images/slide11.jpeg";
import slide12 from "../images/slide12.jpeg";
import slide13 from "../images/slide13.jpeg";
import slide14 from "../images/slide14.jpeg";
import slide15 from "../images/slide15.jpeg";
import slide16 from "../images/slide16.jpeg";
import slide17 from "../images/slide17.jpeg";
import slide18 from "../images/slide18.jpeg";
import slide19 from "../images/slide19.jpeg";
import slide20 from "../images/slide20.jpeg";
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
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }}
        className="d-block w-100 zoom-in"
        src={slide1}
        alt="Slide 1"
      />
      </div>
    </Carousel.Item>
    <Carousel.Item style={{ position: 'relative' }}>
    <div style={{ paddingBottom: '56.25%', overflow: 'hidden', borderRadius: '0%' }}>
      <img
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }}
        className="d-block w-100 zoom-in"
        src={slide2}
        alt="Slide 2"
      />
      </div>
    </Carousel.Item>
    <Carousel.Item style={{ position: 'relative' }}>
    <div style={{ paddingBottom: '56.25%', overflow: 'hidden', borderRadius: '0%' }}>
      <img
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }}
        className="d-block w-100 zoom-in"
        src={slide3}
        alt="Slide 3"
      />
      </div>
    </Carousel.Item>
    <Carousel.Item style={{ position: 'relative' }}>
    <div style={{ paddingBottom: '56.25%', overflow: 'hidden', borderRadius: '0%' }}>
      <img
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }}
        className="d-block w-100 zoom-in"
        src={slide4}
        alt="Slide 4"
      />
      </div>
    </Carousel.Item>
    <Carousel.Item style={{ position: 'relative' }}>
    <div style={{ paddingBottom: '56.25%', overflow: 'hidden', borderRadius: '0%' }}>
      <img
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }}
        className="d-block w-100 zoom-in"
        src={slide5}
        alt="Slide 5"
      />
      </div>
    </Carousel.Item>
    <Carousel.Item style={{ position: 'relative' }}>
    <div style={{ paddingBottom: '56.25%', overflow: 'hidden', borderRadius: '0%' }}>
      <img
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }}
        className="d-block w-100 zoom-in"
        src={slide6}
        alt="Slide 6"
      />
      </div>
    </Carousel.Item>
    <Carousel.Item style={{ position: 'relative' }}>
    <div style={{ paddingBottom: '56.25%', overflow: 'hidden', borderRadius: '0%' }}>
      <img
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }}
        className="d-block w-100 zoom-in"
        src={slide7}
        alt="Slide 7"
      />
      </div>
    </Carousel.Item>
    <Carousel.Item style={{ position: 'relative' }}>
    <div style={{ paddingBottom: '56.25%', overflow: 'hidden', borderRadius: '0%' }}>
      <img
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }}
        className="d-block w-100 zoom-in"
        src={slide8}
        alt="Slide 8"
      />
      </div>
    </Carousel.Item>
    <Carousel.Item style={{ position: 'relative' }}>
    <div style={{ paddingBottom: '56.25%', overflow: 'hidden', borderRadius: '0%' }}>
      <img
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }}
        className="d-block w-100 zoom-in"
        src={slide9}
        alt="Slide 9"
      />
      </div>
    </Carousel.Item>
    <Carousel.Item style={{ position: 'relative' }}>
    <div style={{ paddingBottom: '56.25%', overflow: 'hidden', borderRadius: '0%' }}>
      <img
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }}
        className="d-block w-100 zoom-in"
        src={slide10}
        alt="Slide 10"
      />
      </div>
    </Carousel.Item>
    <Carousel.Item style={{ position: 'relative' }}>
    <div style={{ paddingBottom: '56.25%', overflow: 'hidden', borderRadius: '0%' }}>
      <img
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }}
        className="d-block w-100 zoom-in"
        src={slide11}
        alt="Slide 11"
      />
      </div>
    </Carousel.Item>
    <Carousel.Item style={{ position: 'relative' }}>
    <div style={{ paddingBottom: '56.25%', overflow: 'hidden', borderRadius: '0%' }}>
      <img
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }}
        className="d-block w-100 zoom-in"
        src={slide12}
        alt="Slide 12"
      />
      </div>
    </Carousel.Item>
    <Carousel.Item style={{ position: 'relative' }}>
    <div style={{ paddingBottom: '56.25%', overflow: 'hidden', borderRadius: '0%' }}>
      <img
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }}
        className="d-block w-100 zoom-in"
        src={slide13}
        alt="Slide 13"
      />
      </div>
    </Carousel.Item>
    <Carousel.Item style={{ position: 'relative' }}>
    <div style={{ paddingBottom: '56.25%', overflow: 'hidden', borderRadius: '0%' }}>
      <img
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }}
        className="d-block w-100 zoom-in"
        src={slide14}
        alt="Slide 14"
      />
      </div>
    </Carousel.Item>
    <Carousel.Item style={{ position: 'relative' }}>
    <div style={{ paddingBottom: '56.25%', overflow: 'hidden', borderRadius: '0%' }}>
      <img
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }}
        className="d-block w-100 zoom-in"
        src={slide15}
        alt="Slide 15"
      />
      </div>
    </Carousel.Item>
    <Carousel.Item style={{ position: 'relative' }}>
    <div style={{ paddingBottom: '56.25%', overflow: 'hidden', borderRadius: '0%' }}>
      <img
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }}
        className="d-block w-100 zoom-in"
        src={slide16}
        alt="Slide 16"
      />
      </div>
    </Carousel.Item>
    <Carousel.Item style={{ position: 'relative' }}>
    <div style={{ paddingBottom: '56.25%', overflow: 'hidden', borderRadius: '0%' }}>
      <img
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }}
        className="d-block w-100 zoom-in"
        src={slide17}
        alt="Slide 17"
      />
      </div>
    </Carousel.Item>
    <Carousel.Item style={{ position: 'relative' }}>
    <div style={{ paddingBottom: '56.25%', overflow: 'hidden', borderRadius: '0%' }}>
      <img
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }}
        className="d-block w-100 zoom-in"
        src={slide18}
        alt="Slide 18"
      />
      </div>
    </Carousel.Item>
    <Carousel.Item style={{ position: 'relative' }}>
    <div style={{ paddingBottom: '56.25%', overflow: 'hidden', borderRadius: '0%' }}>
      <img
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }}
        className="d-block w-100 zoom-in"
        src={slide19}
        alt="Slide 19"
      />
      </div>
    </Carousel.Item>
    <Carousel.Item style={{ position: 'relative' }}>
    <div style={{ paddingBottom: '56.25%', overflow: 'hidden', borderRadius: '0%' }}>
      <img
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'fill' }}
        className="d-block w-100 zoom-in"
        src={slide20}
        alt="Slide 20"
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
