/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*==================== sticky navbar ====================*/
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*==================== scroll reveal ====================*/
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content,.heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .projects-box, .contact form,.timeline",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img,.container.left ", {
  origin: "left",
});
ScrollReveal().reveal(".home-content p, .about-content,.container.right", {
  origin: "right",
});
/*==================== typed js ====================*/
const typed = new Typed(".multiple-text", {
  strings: [
    "AI and Data Science Student",
    "Data Scientist",
    "Machine Learning Student",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
//Email
/*
emailjs.init("jw_rvC6MIzpMYsBtn");

function sendmail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let messages = document.getElementById("message").value;
  let phone = document.getElementById("number").value;

  var contactParams = {
    from_name: name,
    from_email: email,
    message: messages,
    number: phone,
  };
  emailjs
    .send("service_ngi1d3e", "template_ohy09tt", contactParams)
    .then(function (res) {});
}*/

function sendmail() {
  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  // Create the email body
  var body = "Name: " + name + "\n";
  body += "Email: " + email + "\n";
  body += "Phone Number: " + number + "\n";
  body += "Subject: " + subject + "\n";
  body += "Message: " + message;

  // Open the default email client with pre-filled values
  window.location.href =
    "mailto:youremail@example.com?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);
}
