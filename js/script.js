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
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1224: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    }
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
