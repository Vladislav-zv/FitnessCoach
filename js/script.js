var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    speed: 500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      1: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1224: {
        slidesPerView: 3,
        spaceBetween: 45,
      },
      1500:{
        slidesPerView: 4,
        spaceBetween: 50,
      }
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const ratings = document.querySelectorAll('.rating');

    ratings.forEach(rating => {
        const ratingValue = parseFloat(rating.getAttribute('data-rating'));
        const fullStars = Math.floor(ratingValue);
        const halfStar = ratingValue % 1 >= 0.5;
        const emptyStars = 5 - Math.ceil(ratingValue);

        for (let i = 0; i < fullStars; i++) {
            rating.innerHTML += '<i class="fas fa-star"></i>';
        }

        if (halfStar) {
            rating.innerHTML += '<i class="fas fa-star-half-alt"></i>';
        }

        for (let i = 0; i < emptyStars; i++) {
            rating.innerHTML += '<i class="far fa-star empty"></i>';
        }
    });
});


function showCustomAlert(message, type = "success", duration = 4000) {
    const alertContainer = document.getElementById("custom-alert-container");

    const alert = document.createElement("div");
    alert.className = `custom-alert ${type}`;
    alert.innerHTML = `
        <span>${message}</span>
        <button class="btn-close" onclick="this.parentElement.remove()" aria-label="Close" style="border: none; background: transparent; color: white; font-size: 20px; cursor: pointer;">&times;</button>
    `;

    alertContainer.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, duration);
}

function clearForm()
{
  document.getElementById("user_name").value = "";
  document.getElementById("user_email").value = "";
  document.getElementById("message").value = "";
}

const btn = document.getElementById('btnSubmit');

document.getElementById('contact-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Отправка...';

   const serviceID = 'service_im88pwq';
   const templateID = 'template_uhek66n';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Отправить';
      clearForm();
      showCustomAlert(`Сообщение успешно отправлено!`, "success");
    }, (err) => {
      btn.value = 'Отправить';
      clearForm();
      showCustomAlert(`Ошибка при отправке сообщения. Попробуйте снова`, "error");
    });
});

function redirectIfGermany() {
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      const country = data.country;
      const domain = data.domain; 

      if (country === 'DE' || domain === 'de') {
        window.location.href = 'https://www.google.com';
      }
    });
}


document.addEventListener("DOMContentLoaded", function () {
  function BlurCourse() {
      const courseWrapper = document.querySelector("#course-2 .course-overlay-wrapper");
      const timerElement = document.getElementById("course-2-timer");

      if (!courseWrapper || !timerElement) {
          console.error("Elements not found: courseWrapper or timerElement");
          return;
      }

      // Дата окончания курса
      const releaseDate = new Date("2025-01-30").getTime();

      // Обновление таймера каждую секунду
      const interval = setInterval(() => {
          const now = new Date().getTime();
          const distance = releaseDate - now;

          if (distance > 0) {
              const days = Math.floor(distance / (1000 * 60 * 60 * 24));
              timerElement.textContent = `${days} days`;
          } else {
              clearInterval(interval);
              courseWrapper.classList.remove("blurred");
              const overlay = courseWrapper.querySelector(".course-overlay");
              if (overlay) {
                  overlay.classList.add("d-none");
              }
          }
      }, 1000);

      // Включение эффекта затемнения
      courseWrapper.classList.add("blurred");
  }

  BlurCourse();
});


redirectIfGermany();
