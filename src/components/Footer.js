function Footer() {
      return (       
  <div>
  <footer class="text-center text-lg-start bg-white text-muted mt-5">
  <section className="d-flex justify-content-center p-4 border-bottom">
            <div className="me-5 d-none d-lg-block mt-2">
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
            <a
              data-mdb-ripple-init
              class="btn text-white btn-floating m-1 button-pop-out"
              style={{backgroundColor: "#3b5998"}}
              href="https://www.facebook.com/profile.php?id=100064003659462"
              role="button"
              ><i class="fab fa-facebook-f"></i>
              </a>
              <a
              data-mdb-ripple-init
              class="btn text-white btn-floating m-1 instagram button-pop-out"
              href="https://www.instagram.com/lynnandjims/"
              role="button"
              ><i class="fab fa-instagram"></i>
              </a>
            </div>
          </section>
    <div className="text-center text-black" style={{ backgroundColor: "#eae2b7" }}>
  <div className="p-3">
    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
    <p>
      <i className="fas fa-home mx-3 text-secondary"></i>Ludlow, VT
      <a href="mailto:ludlowdogwalker@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>
        <i className="fas fa-envelope mx-3 text-secondary"></i>ludlowdogwalker@gmail.com
      </a>
      <a href="tel:8023532676" style={{ color: "inherit", textDecoration: "none" }}>
        <i className="fas fa-phone mx-3 text-secondary"></i>(802) 353-2676
      </a>
    </p>
  </div>
</div>
  </footer>
  </div>
      )
  }
  
  export default Footer;