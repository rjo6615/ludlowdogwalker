import React from "react";

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
  <div
    class="text-center bg-image"
    style={{
      backgroundImage: "url('https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/244248843_238430764967044_3416130564928511357_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=783fdb&_nc_ohc=vabOUbcDjCkAX9RldnW&_nc_ht=scontent-atl3-1.xx&oh=00_AfAmazhs9BBcYbUKREw2SNsZ61_1J5KCYlzK9YATVM7Mqg&oe=656B9C42')",
      height: '1000px',
      backgroundSize: 'cover',
      marginTop: '-250px'
    }}
  >
    <div class="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)', height: '1000px'}}>
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white">
          <h1 class="mb-3">Dog Walking and Boarding</h1>
          <h4 class="mb-3">Subheading</h4>
          <a data-mdb-ripple-init class="btn btn-outline-light btn-lg" href="tel:555-555-5555" role="button"
          >Call us Today</a>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Home;
