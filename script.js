    // Function to open the modal and animate the login container
    function openLoginModal() {
      document.getElementById('loginModal').style.display = 'flex';
      gsap.to('.container', { duration: 0.8, scale: 1, opacity: 1, ease: 'back.out(1.7)' });
    }
    // Function to close the modal and reset login steps
    function closeLoginModal() {
      console.log('clicked', closeLoginModal);
      
      document.getElementById('loginModal').style.display = 'none';
      // Reset steps to the initial state
      document.getElementById('step1').classList.add('active');
      document.getElementById('step2').classList.remove('active');
      document.getElementById('step3').classList.remove('active');
      document.getElementById('step4').classList.remove('active');
      // Reset container animation for next open
      gsap.set('.container', { scale: 0, opacity: 0 });
    }
    // Send OTP and transition to OTP verification step
    function sendOTP() {
      const mobile = document.getElementById('mobile').value;
      if (mobile.length === 10) {
        animateStepTransition(1, 2);
      } else {
        alert('Please enter a valid 10-digit mobile number.');
      }
    }
    // Verify OTP and transition to profile completion step
    function verifyOTP() {
      animateStepTransition(2, 3);
    }
    // Submit user details and transition to products list
    function submitDetails() {
      animateStepTransition(3, 4, () => {
        loadProducts();
      });
    }
    // Animate transition between steps
    function animateStepTransition(currentStep, nextStep, callback) {
      const current = document.getElementById(`step${currentStep}`);
      const next = document.getElementById(`step${nextStep}`);
      gsap.to(current, {
        duration: 0.5,
        x: -50,
        opacity: 0,
        onComplete: () => {
          current.classList.remove('active');
          next.classList.add('active');
          gsap.fromTo(
            next,
            { x: 50, opacity: 0 },
            { duration: 0.5, x: 0, opacity: 1, onComplete: callback }
          );
        },
      });
    }
    // Auto-focus to the next OTP input field
    function moveNext(currentInput) {
      const inputs = document.querySelectorAll('.otp-inputs input');
      if (inputs[currentInput - 1].value !== '') {
        if (currentInput < 4) inputs[currentInput].focus();
      }
    }
    // Load sample products (optional)
    

    ///////////////splid slider

    document.addEventListener('DOMContentLoaded', function () {
      new Splide('#my-slider', {
        type       : 'loop',    // Enables looping of slides
        perPage    : 1,         // Number of slides per page
        autoplay   : true,      // Automatically start sliding
        pauseOnHover: true,     // Pause auto-play on hover
        interval   : 3000,      // Time between slide transitions (in milliseconds)
        arrows     : true,      // Show navigation arrows
        pagination : true       // Show pagination dots
      }).mount();
    });

    document.addEventListener('DOMContentLoaded', function () {
      new Splide('#your-slider', {
        type       : 'loop',    // Enables looping of slides
        perPage    : 1,         // Number of slides per page
        autoplay   : true,      // Automatically start sliding
        pauseOnHover: true,     // Pause auto-play on hover
        interval   : 2000,      // Time between slide transitions (in milliseconds)
        arrows     : false,      // Show navigation arrows
        pagination : true       // Show pagination dots
      }).mount();
    });


///////////////Populr Products
document.addEventListener('DOMContentLoaded', function () {
  new Splide('.name_slifer', {
    type: 'loop',
    perPage: 4,        // Show 4 items at once
    perMove: 1,        // Move one slide per transition
    autoplay: true,    // Enable autoplay
    pagination: true,  // Show pagination dots
    arrows: false,      // Show navigation arrows
    gap: '1rem',       // Gap between slides
    drag: true,        // Enable dragging
    breakpoints: {
      768: {
        perPage: 1,    // Show 1 item on smaller screens
      },
    },
  }).mount();
}); 

document.addEventListener('DOMContentLoaded', function () {
  new Splide('#nameset', {
    // type: 'loop',
    perPage: 4,        // Show 4 items at once
    perMove: 1,        // Move one slide per transition
    autoplay: false,    // Enable autoplay
    pagination: true,  // Show pagination dots
    arrows: false,      // Show navigation arrows
    gap: '1rem',       // Gap between slides
    drag: true,        // Enable dragging
    breakpoints: {
      768: {
        perPage: 1,    // Show 1 item on smaller screens
      },
    },
  }).mount();
}); 

document.addEventListener('DOMContentLoaded', function () {
  new Splide('#setset', {
    // type: 'loop',
    perPage: 3,        // Show 4 items at once
    perMove: 1,        // Move one slide per transition
    autoplay: false,    // Enable autoplay
    pagination: true,  // Show pagination dots
    arrows: false,      // Show navigation arrows
    gap: '1rem',       // Gap between slides
    drag: true,        // Enable dragging
    breakpoints: {
      768: {
        perPage: 1,    // Show 1 item on smaller screens
      },
    },
  }).mount();
}); 

////////////////////add button 
const containers = document.querySelectorAll('.couters');

        containers.forEach(container => {
            const addButton = container.querySelector('.add-button');
            const quantityControls = container.querySelector('.quantity-controls');
            const plusBtn = container.querySelector('.plus-btn');
            const minusBtn = container.querySelector('.minus-btn');
            const countElement = container.querySelector('.count');

            addButton.addEventListener('click', () => {
                addButton.style.display = 'none';
                quantityControls.style.display = 'flex';
                countElement.textContent = '1';
            });

            plusBtn.addEventListener('click', () => {
                countElement.textContent = parseInt(countElement.textContent) + 1;
            });

            minusBtn.addEventListener('click', () => {
                const currentCount = parseInt(countElement.textContent);
                if (currentCount > 0) {
                    countElement.textContent = currentCount - 1;
                }

                if (parseInt(countElement.textContent) < 1) {
                    addButton.style.display = 'block';
                    quantityControls.style.display = 'none';
                }
            });
        });

///////////////////////////Product list border right
const listItems = document.querySelectorAll('ul.category li');

listItems.forEach(item => {
  item.addEventListener('click', () => {
    listItems.forEach(el => el.classList.remove('selected'));
    
    item.classList.add('selected');
  });
});


///////////////////Product detail
document.querySelectorAll('.thumb-img').forEach(thumb => {
  thumb.addEventListener('click', function() {
    document.getElementById('mainImage').src = this.src;
  });
});

document.addEventListener('DOMContentLoaded', function () {
  new Splide('#thumbnail-slider', {
    perPage: 3,
    loop:true,
    gap: '10px',
    pagination: false,
    arrows: true,
  }).mount();
});