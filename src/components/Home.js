import React from "react";
import {Carousel, Card, Container, Row} from 'react-bootstrap';

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
<div className="main-container" style={{ backgroundColor: '#eae2b7', color: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <div className="contact-info-container slideInLeft" style={{ flex: '1' }}>
    <div className="px-5" style={{ fontFamily: "'Caveat', cursive", fontWeight: 'bold', fontSize: '40px' }}>
      "Years of love and care in Ludlow, Vermont! Join us 
      for personalized dog walks, overnights, and daycare. Your pets deserve 
      the best, and we're here to deliver!"</div>
      <div className="mt-5" style={{ fontFamily: "'Caveat', cursive", fontWeight: 'bold', fontSize: '40px' }}>Call us</div>
      <style>{`
    button {
      display: inline-block;
      padding: 8px 20px;
      margin: 5px;
      background: none;
      border: 2px solid #000;
      color: #000;
      text-decoration: none;
      transition: background-color 0.3s ease;
      cursor: pointer;
      border-radius: 5px;
      width: 300px; /* Adjust the width as needed */
    }

    button:hover {
      background-color: #fff;
    }`}
  </style>
      <button className="button-pop-out">(802)-353-2676</button>
      <br />
      <div className="mt-1" style={{ fontFamily: "'Caveat', cursive", fontWeight: 'bold', fontSize: '40px' }}>Email us</div>
      <button className="button-pop-out">ludlowdogwalker@gmail.com</button>
    
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

<div className="carousel-container slideInRight" style={{ flex: '2' }}>
  <Carousel fade>
    <Carousel.Item>
      <img
        style={{ borderRadius: '0%', width: '1200px', height: '800px' }}
        className="d-block w-100 zoom-in"
        src="https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/244248843_238430764967044_3416130564928511357_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=783fdb&_nc_ohc=8S2uCiVVRYUAX_fC3WF&_nc_ht=scontent-atl3-1.xx&oh=00_AfD4Zd8uG7MZoJN7fw9yq87CUUPJghtP7AJPNcNylztjAg&oe=656D9682"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        style={{ borderRadius: '0%', width: '1200px', height: '800px' }}
        className="d-block w-100 zoom-in"
        src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/244247366_238417958301658_5414622567045488740_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=RXokeo_tLvQAX86Crek&_nc_ht=scontent-atl3-2.xx&oh=00_AfA0YNqlooG1iKEN5JZlXRv6hoxZ7hmDrXSVp0Rxlw8QSw&oe=656ECA91"
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        style={{ borderRadius: '0%', width: '1200px', height: '800px' }}
        className="d-block w-100 zoom-in"
        src="https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/406302740_774541428022639_8215054823871706732_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=TxKE-nKYrGkAX_lBfw-&_nc_ht=scontent-atl3-1.xx&oh=00_AfC4hJQDdfHZ39myBdTr47C7QlYSFZIJ7o_dgWRTY-tboQ&oe=656D73E7"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
</div>
</div>
<center>
      <Container id='services'>
      <Row className="d-flex flex-wrap justify-content-center">
      <span className="reveal mt-5" style={{ fontFamily: "'Caveat', cursive", fontWeight: 'bold', fontSize: '60px' }}>Our Services</span>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 reveal">
          <Card className="text-black mt-4 mx-3 image-hover" style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', borderStyle: 'none', width: '15rem' }}>
            <Card.Header className="image-hover image-size" style={{ width: '15rem', height: '15rem', borderRadius: '50%', paddingTop: '200px', backgroundSize: 'cover', backgroundImage: 'url(https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/386067086_740452044764911_1558155325825133413_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=oNw45qzRhOMAX-KZ9t-&_nc_ht=scontent-atl3-1.xx&oh=00_AfBmBZ6hBuxKWWKz1PwqX8cGFdq9J7g5cYGdkrHTgLCqkQ&oe=656E2E74)'}}></Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{ color: 'black', fontSize: '20px', fontFamily: "Dancing Script, cursive" }} className='mb-4'>Walking</Card.Title>
              <Card.Text>
              <ul className='mb-5'>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 1</li>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 2</li>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 3</li>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 4</li>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 5</li>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 6</li>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 7</li>
              </ul>
            </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 reveal">
          <Card className="text-black mt-4 mx-3 image-hover" style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', borderStyle: 'none', width: '15rem' }}>
            <Card.Header className="image-hover image-size" style={{ width: '15rem', height: '15rem', borderRadius: '50%', paddingTop: '200px', backgroundSize: 'cover', backgroundImage: 'url(https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/400711480_762166782593437_8219838962183967743_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=efSSVKOPyOYAX8iAAcq&_nc_ht=scontent-atl3-1.xx&oh=00_AfBUsr6Em--gF7qpppeQePdH9L55Qx25jbPxk-j7m1wEnw&oe=656D20E6)'}}></Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{ color: 'black', fontSize: '20px', fontFamily: "Dancing Script, cursive" }} className='mb-4'>Overnights</Card.Title>
              <Card.Text>
              <ul className='mb-5'>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 1</li>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 2</li>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 3</li>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 4</li>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 5</li>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 6</li>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 7</li>
              </ul>
            </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 reveal">
          <Card className="text-black mt-4 mx-3 image-hover" style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', borderStyle: 'none', width: '15rem' }}>
            <Card.Header className="image-hover image-size" style={{ width: '15rem', height: '15rem', borderRadius: '50%', paddingTop: '200px', backgroundSize: 'cover', backgroundImage: 'url(https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/401522650_765405172269598_2886420737545786491_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=53mQUdkNUHUAX8i1mqN&_nc_ht=scontent-atl3-1.xx&oh=00_AfBu9KUT1DiFwjxF9YwA_rkesGRyfoJ-ZLsjUX3CmR-pVw&oe=656E23C3)'}}></Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{ color: 'black', fontSize: '20px', fontFamily: "Dancing Script, cursive" }} className='mb-4'>Daycare</Card.Title>
              <Card.Text>
              <ul className='mb-5'>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 1</li>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 2</li>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 3</li>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 4</li>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 5</li>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 6</li>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 7</li>
              </ul>
            </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 reveal">
          <Card className="text-black mt-4 mx-3 image-hover" style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)', borderStyle: 'none', width: '15rem' }}>
            <Card.Header className="image-hover image-size" style={{ width: '15rem', height: '15rem', borderRadius: '50%', paddingTop: '200px', backgroundSize: 'cover', backgroundImage: 'url(https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/384500595_740926471384135_1415448167507272910_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=VEv7mKvnOl4AX_VqTzO&_nc_ht=scontent-atl3-2.xx&oh=00_AfDIsr2vkTCdfQnYGG0IV8EXYBgfZHvrJuFfuG7eq7TI8g&oe=656CF28E)'}}></Card.Header>
            <Card.Body className="d-flex flex-column">
              <Card.Title style={{ color: 'black', fontSize: '20px', fontFamily: "Dancing Script, cursive" }} className='mb-4'>Something Else</Card.Title>
              <Card.Text>
              <ul className='mb-5'>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 1</li>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 2</li>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 3</li>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 4</li>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 5</li>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 6</li>
                <li style={{ listStyle: "disc", color: 'black' }}>Feature 7</li>
              </ul>
            </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Container>
    </center>
    <section class="text-center">
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
              <h2 class="fw-bold mb-5">About Us</h2>
              <h6>"Welcome to Ludlow's Premier Dog Care by
                 our dedicated husband-and-wife team! Celebrating 
                 1 year, we offer personalized dog walking, overnight
                  stays, and daycare. Located in Ludlow, Vermont, we 
                  provide loving and reliable care for your furry 
                  friends. Join our family for joy-filled walks and 
                  cozy overnights, ensuring your pets feel secure and 
                  cherished. Your pets deserve the best, and we're here 
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
        <img src="https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/401522650_765405172269598_2886420737545786491_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=53mQUdkNUHUAX8i1mqN&_nc_ht=scontent-atl3-1.xx&oh=00_AfBu9KUT1DiFwjxF9YwA_rkesGRyfoJ-ZLsjUX3CmR-pVw&oe=656E23C3"
          class="rounded-circle img-fluid" alt="" style={{width: "300px"}} />
        <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 'bold', fontSize: '40px' }}>The Owners</div>
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
