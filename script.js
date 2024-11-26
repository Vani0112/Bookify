// Books Data
const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A novel about the American dream and the disillusionment of society.",
      image: "https://m.media-amazon.com/images/I/71f6MA9NNJL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "A story about racial injustice in the Deep South.",
      image: "https://m.media-amazon.com/images/I/71smIoGNeiL._UF1000,1000_QL80_.jpg",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      description: "A dystopian novel about a totalitarian regime controlling every aspect of life.",
      image: "https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 4,
      title: "English",
      author: "Cordova",
      description: "A novel about the American dream and the disillusionment of society.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbp4DrQerIgO4TYh_F2YMpuk4aH-krreqJVA&s",
    },
    {
      id: 5,
      title: "Science",
      author: "Cengage",
      description: "A story about racial injustice in the Deep South.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-q578aRse5nZHTHb1WUvh8cAZ1zw6mI_0IQ&s",
    },
    {
      id: 6,
      title: "Ikigai",
      author: "Francesc Miralles",
      description: "A dystopian novel about a totalitarian regime controlling every aspect of life.",
      image: "https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg",
    },
    {
      id: 7,
      title: "Mathematics",
      author: "RD Sharma",
      description: "A novel about the American dream and the disillusionment of society.",
      image: "https://m.media-amazon.com/images/I/613fNwtzebL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 8,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "A story about racial injustice in the Deep South.",
      image: "https://m.media-amazon.com/images/I/71smIoGNeiL._UF1000,1000_QL80_.jpg",
    },
    {
      id: 9,
      title: "1984",
      author: "George Orwell",
      description: "A dystopian novel about a totalitarian regime controlling every aspect of life.",
      image: "https://m.media-amazon.com/images/I/61ZewDE3beL._AC_UF1000,1000_QL80_.jpg",
    }
    
  ];
  


// Login Page Functionality
if (window.location.pathname.includes("login.html")) {
    document.getElementById("login-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // Simple check 
      if (username === "admin" && password === "password") {
        window.location.href = "library.html";  // Redirect to library page
      } else {
        document.getElementById("error-message").textContent = "Invalid login credentials!";
      }
    });
  }
  
  
  // Library Page
  if (window.location.pathname.includes("library.html")) {
    const bookList = document.querySelector(".book-list");
  
    books.forEach((book) => {
      const card = document.createElement("div");
      card.classList.add("book-card");
      card.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
      `;
      card.onclick = () => {
        window.location.href = `book.html?id=${book.id}`;
      };
      bookList.appendChild(card);
    });
  }
  
  // Book Details Page
  if (window.location.pathname.includes("book.html")) {
    const params = new URLSearchParams(window.location.search);
    const book = books.find((b) => b.id == params.get("id"));
  
    if (book) {
      document.getElementById("book-title").textContent = book.title;
      document.getElementById("book-author").textContent = `by ${book.author}`;
      document.getElementById("book-image").src = book.image;
      document.getElementById("book-description").textContent = book.description;
    }
  }
  
 
  