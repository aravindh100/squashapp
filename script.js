// JavaScript for interactive features

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]')

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80 // Account for fixed navbar

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    })
  })

  // Navbar background change on scroll
  const navbar = document.querySelector(".navbar")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "rgba(37, 43, 66, 0.95)"
      navbar.style.backdropFilter = "blur(10px)"
    } else {
      navbar.style.backgroundColor = "var(--primary-navy)"
      navbar.style.backdropFilter = "none"
    }
  })

  // Play button functionality
  const playButtons = document.querySelectorAll(".play-button")

  playButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Simulate video play
      this.innerHTML = '<i class="fas fa-pause"></i>'
      this.style.backgroundColor = "#1a8cd8"

      setTimeout(() => {
        this.innerHTML = '<i class="fas fa-play"></i>'
        this.style.backgroundColor = "var(--primary-blue)"
      }, 3000)
    })
  })

  // Search functionality
  const searchButton = document.querySelector(".search-bar .btn")
  const searchInput = document.querySelector(".search-bar .form-control")

  if (searchButton && searchInput) {
    searchButton.addEventListener("click", () => {
      const searchTerm = searchInput.value.trim()
      if (searchTerm) {
        alert(`Searching for courses: "${searchTerm}"`)
        // Here you would implement actual search functionality
      } else {
        alert("Please enter a search term")
      }
    })

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        searchButton.click()
      }
    })

    // Form validation for search
    function validateSearch(input) {
      const value = input.value.trim()
      if (value.length < 2) {
        input.style.borderColor = "#E74040"
        return false
      } else {
        input.style.borderColor = "var(--border-light)"
        return true
      }
    }

    searchInput.addEventListener("input", function () {
      validateSearch(this)
    })
  }

  // Fade in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  // Add fade-in class to elements and observe them
  const elementsToAnimate = document.querySelectorAll(
    ".service-card, .portfolio-item, .contact-info, .education-card, .testimonial-card, .package-card, .video-testimonial-card",
  )

  elementsToAnimate.forEach((element) => {
    element.classList.add("fade-in")
    observer.observe(element)
  })

  // Card hover effects
  const cards = document.querySelectorAll(".education-card, .testimonial-card, .package-card")

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })

  // Mobile menu close on link click
  const navbarCollapse = document.querySelector(".navbar-collapse")
  const navbarToggler = document.querySelector(".navbar-toggler")

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        navbarToggler.click()
      }
    })
  })

  // Package selection
  const packageButtons = document.querySelectorAll(".package-card .btn")

  packageButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()
      const packageName = this.closest(".package-card").querySelector(".package-title").textContent
      alert(`You selected the ${packageName} package!`)
    })
  })

  // Testimonial rating interaction
  const ratings = document.querySelectorAll(".rating, .testimonial-rating")

  ratings.forEach((rating) => {
    const stars = rating.querySelectorAll("i")
    stars.forEach((star, index) => {
      star.addEventListener("mouseenter", () => {
        stars.forEach((s, i) => {
          if (i <= index) {
            s.classList.remove("far")
            s.classList.add("fas")
            s.style.color = "var(--warning-yellow)"
          } else {
            s.classList.remove("fas")
            s.classList.add("far")
            s.style.color = "#e9ecef"
          }
        })
      })

      star.addEventListener("mouseleave", () => {
        // Reset to original state
        stars.forEach((s) => {
          s.classList.add("fas")
          s.style.color = "var(--warning-yellow)"
        })
      })
    })
  })

  // Parallax effect for hero section
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroSection = document.querySelector(".hero-section")

    if (heroSection) {
      const rate = scrolled * -0.3
      heroSection.style.backgroundPosition = `center ${rate}px`
    }
  })

  // Loading animation
  window.addEventListener("load", () => {
    document.body.style.opacity = "0"
    document.body.style.transition = "opacity 0.5s ease"
    setTimeout(() => {
      document.body.style.opacity = "1"
    }, 100)
  })

  // Scroll to top functionality
  const scrollToTopBtn = document.createElement("button")
  scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>'
  scrollToTopBtn.className = "scroll-to-top-btn"
  scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: var(--primary-blue);
    color: white;
    border: none;
    cursor: pointer;
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 1000;
    font-size: 18px;
    box-shadow: 0 4px 12px rgba(35, 166, 240, 0.3);
  `

  document.body.appendChild(scrollToTopBtn)

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.opacity = "1"
      scrollToTopBtn.style.transform = "translateY(0)"
    } else {
      scrollToTopBtn.style.opacity = "0"
      scrollToTopBtn.style.transform = "translateY(10px)"
    }
  })

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  scrollToTopBtn.addEventListener("mouseenter", () => {
    scrollToTopBtn.style.backgroundColor = "#1a8cd8"
    scrollToTopBtn.style.transform = "translateY(-2px) scale(1.1)"
  })

  scrollToTopBtn.addEventListener("mouseleave", () => {
    scrollToTopBtn.style.backgroundColor = "var(--primary-blue)"
    scrollToTopBtn.style.transform = "translateY(0) scale(1)"
  })

  // Initialize tooltips if needed
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => new window.bootstrap.Tooltip(tooltipTriggerEl))

  console.log("EduPlatform initialized successfully!")
})

// Utility functions
function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId)
  if (section) {
    const offsetTop = section.offsetTop - 80
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
}

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// Export functions for external use
window.EduPlatform = {
  scrollToSection,
  isElementInViewport,
}
