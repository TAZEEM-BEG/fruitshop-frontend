// // Login/Register buttons
// const loginBtn = document.getElementById("login-btn");
// const registerBtn = document.getElementById("register-btn");
// const orderBtn = document.querySelector("#order-id");
// const fruitSection = document.getElementById("fruits");
// const addToCartButtons = document.querySelectorAll('.fruit-card button'); // Fruit buttons
// const cartItemsList = document.getElementById('cart-items');
// const cartTotalElement = document.getElementById('cart-total');
// // Modals
// const loginModal = document.getElementById("loginModal");
// const registerModal = document.getElementById("registerModal");

// // Open Login Modal
// loginBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   loginModal.style.display = "block";
//   registerModal.style.display = "none";
// });

// // Open Register Modal
// registerBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   registerModal.style.display = "block";
//   loginModal.style.display = "none";
// });

// // Close Modal Function
// function closeModal(modalId) {
//   const modal = document.getElementById(modalId);
//   modal.style.display = "none";
// }

// // Close modal if clicked outside content
// window.onclick = function (event) {
//   if (event.target === loginModal) {
//     loginModal.style.display = "none";
//   }
//   if (event.target === registerModal) {
//     registerModal.style.display = "none";
//   }
// };

// // order button 
// orderBtn.addEventListener("click", () => {
//   fruitSection.style.display = "block";
//   window.scrollTo({
//     top: fruitSection.offsetTop,
//     behavior: "smooth"
//   });
// });

// // add to cart

// let total = 0;

// addToCartButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const card = button.closest('.fruit-card');
//     const name = card.querySelector('h3').textContent;
//     const priceText = card.querySelector('p').textContent;
//     const price = parseInt(priceText.replace(/[^\d]/g, ''));

//     total += price;

//     const li = document.createElement('li');
//     li.innerHTML = `
//       ${name} - ₹${price}
//       <button class="remove-btn">-</button>
//     `;

//     cartItemsList.appendChild(li);
//     updateTotal();

//     // ✅ Save to MongoDB
//     fetch('http://localhost:5000/api/cart', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         name: name,
//         price: price,
//         quantity: 1
//       })
//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log('✅ Saved to DB:', data);
//       })
//       .catch(err => {
//         console.error('❌ Error saving to DB:', err);
//       });

//     li.querySelector('.remove-btn').addEventListener('click', () => {
//       total -= price;
//       li.remove();
//       updateTotal();
//     });
//   });
// });

// function updateTotal() {
//   cartTotalElement.textContent = `Total: ₹${total}`;
// }


// // hmbergar toggle
// // document.addEventListener("DOMContentLoaded", () => {
// //   const hamburger = document.getElementById('hamburger');
// //   const mobileMenu = document.querySelector('.mobile-menu');

// //   hamburger.addEventListener('click', () => {
// //     mobileMenu.classList.toggle('active');
// //   });
// // });

// document.addEventListener("DOMContentLoaded", () => {
//   const hamburger = document.getElementById('hamburger');
//   const mobileMenu = document.querySelector('.mobile-menu');

//   console.log("hamburger:", hamburger); // Check if it's null

//   if (hamburger && mobileMenu) {
//     hamburger.addEventListener('click', () => {
//       mobileMenu.classList.toggle('active');
//       mobileMenu.classList.toggle('active');
//     });// Optional: Close menu when clicking on a menu item
//     const menuLinks = mobileMenu.querySelectorAll("a");
//     menuLinks.forEach(link => {
//       link.addEventListener("click", () => {
//         mobileMenu.classList.remove("active");
//       });
//     });
//   }
// });




// // Register form submission
// document.getElementById("register-form").addEventListener("submit", async function (e) {
//   e.preventDefault();

//   const name = document.getElementById("register-name").value;
//   const email = document.getElementById("register-email").value;
//   const password = document.getElementById("register-password").value;
//   try{
//   const res = await fetch("http://localhost:5000/api/users/register", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ name, email, password }),
//   });

//   const data = await res.json();
//   if (res.ok) {
//       alert("Registration successful! Please login.");
//       window.location.href = "index.html"; // agar login.html hai
//     } else {
//       alert(data.message || "Registration failed.");
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     alert("Something went wrong!");
//   }
// });

// // Login form submission
// document.getElementById("login-form").addEventListener("submit", async function (e) {
//   e.preventDefault();

//   const email = document.getElementById("login-email").value;
//   const password = document.getElementById("login-password").value;
//   try{
//   const res = await fetch("http://localhost:5000/api/users/login", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email, password }),
//   });

//   const data = await res.json();
// if (res.ok) {
//       alert(" login successful!");
//       window.location.href = "index.html"; // agar login.html hai
//     } else {
//       alert(data.message || "login failed.");
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     alert("Something went wrong!");
//   }
// });

// // Contact form submission
// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("contact-form");
//   if (form) {
//     form.addEventListener("submit", async function (e) {
//       e.preventDefault();

//       const name = document.getElementById("contact-name").value;
//       const email = document.getElementById("contact-email").value;
//       const message = document.getElementById("contact-message").value;

//       try {
//         const res = await fetch("http://localhost:5000/api/messages", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ name, email, message }),
//         });

//         const data = await res.json();

//         if (res.ok) {
//           alert("Message sent successfully!");
//           form.reset();
//         } else {
//           alert(data.message || "Failed to send message.");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         alert("Something went wrong while sending your message.");
//       }
//     });
//   } else {
//     console.warn("Contact form not found on the page");
//   }
// });


// // add cart item

// const cartItems = [
//   { fruitId: "64abcdef123...", name: "Apple", price: 50, quantity: 2 },
//   { fruitId: "64ghijk789...", name: "Banana", price: 30, quantity: 3 },
// ];

// fetch("http://localhost:5000/api/cart", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     userId: "64userID123...",  // get this from login info
//     items: cartItems
//   })
// })
//   .then(res => res.json())
//   .then(data => console.log("Cart saved:", data));


const backendURL = "https://tazeem-fruit-backend.onrender.com";

// Buttons and Sections
const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const orderBtn = document.querySelector("#order-id");
const fruitSection = document.getElementById("fruits");
const addToCartButtons = document.querySelectorAll('.fruit-card button');
const cartItemsList = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

// Modals
const loginModal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");

// Open Modals
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loginModal.style.display = "block";
  registerModal.style.display = "none";
});

registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  registerModal.style.display = "block";
  loginModal.style.display = "none";
});

window.onclick = function (event) {
  if (event.target === loginModal) loginModal.style.display = "none";
  if (event.target === registerModal) registerModal.style.display = "none";
};

// Order button scroll
orderBtn.addEventListener("click", () => {
  fruitSection.style.display = "block";
  window.scrollTo({ top: fruitSection.offsetTop, behavior: "smooth" });
});

// Cart logic
let total = 0;

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.fruit-card');
    const name = card.querySelector('h3').textContent;
    const priceText = card.querySelector('p').textContent;
    const price = parseInt(priceText.replace(/[^\d]/g, ''));

    total += price;

    const li = document.createElement('li');
    li.innerHTML = `${name} - ₹${price} <button class="remove-btn">-</button>`;
    cartItemsList.appendChild(li);
    updateTotal();

    // Save to backend
    fetch(`${backendURL}/api/cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price, quantity: 1 })
    })
    .then(res => res.json())
    .then(data => console.log('✅ Saved to DB:', data))
    .catch(err => console.error('❌ Error saving to DB:', err));

    li.querySelector('.remove-btn').addEventListener('click', () => {
      total -= price;
      li.remove();
      updateTotal();
    });
  });
});

function updateTotal() {
  cartTotalElement.textContent = `Total: ₹${total}`;
}

// Hamburger menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });

    const menuLinks = mobileMenu.querySelectorAll("a");
    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
      });
    });
  }
});

// Register Form
document.getElementById("register-form").addEventListener("submit", async function (e) {
  e.preventDefault();
  const name = document.getElementById("register-name").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  try {
    const res = await fetch(`${backendURL}/api/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      alert("Registration successful! Please login.");
      window.location.href = "index.html";
    } else {
      alert(data.message || "Registration failed.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong!");
  }
});

// Login Form
document.getElementById("login-form").addEventListener("submit", async function (e) {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    const res = await fetch(`${backendURL}/api/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert(data.message || "Login failed.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong!");
  }
});

// Contact Form
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const name = document.getElementById("contact-name").value;
      const email = document.getElementById("contact-email").value;
      const message = document.getElementById("contact-message").value;

      try {
        const res = await fetch(`${backendURL}/api/messages`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });
        const data = await res.json();
        if (res.ok) {
          alert("Message sent successfully!");
          form.reset();
        } else {
          alert(data.message || "Failed to send message.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong while sending your message.");
      }
    });
  }
});

