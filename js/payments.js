const webAppUrl = 'https://script.google.com/macros/s/AKfycby7CJQznWvr_z1Wjf9X5DH9EPuCb3L11lvE5KsKwNjmBpzUxPgb8ggE7Q-26GQlIiGqRw/exec'; 

function sendEmail(courseId, courseName, _amount, paymentMethod) {
  const userName = localStorage.getItem(`client_name_${courseId}`);
  const userEmail = localStorage.getItem(`client_email_${courseId}`);
  return emailjs.send("service_im88pwq", "template_8kdx3ee", {
    client_name: userName,
    client_email: userEmail,
    amount: `${_amount} $`,
    course_name: courseName,
    payment_method: paymentMethod
  });
}

function addRow(rowData) {
  fetch(webAppUrl, {
    method: 'POST',
    body: JSON.stringify({ rowData }),
    headers: { "Content-Type": "text/plain;charset=utf-8" }
  })
  .then(response => response.text())
  .then(text => onSuccess(text));
}

function onSuccess(message) {
  console.log("Row added successfully:", message);
}

function onFailure(error) {
  console.error("Error adding row:", error);
}

function handleSuccess(courseId, courseName, amount, paymentMethod) {
  try {
    showCustomAlert(`Оплата успешно завершена! Ожидайте доступ к курсу`, "success");
    const userName = localStorage.getItem(`client_name_${courseId}`);
    const userEmail = localStorage.getItem(`client_email_${courseId}`);
    const currentDate = new Date().toISOString();

    sendEmail(courseId, courseName, amount, paymentMethod)
      .then(function(response) {
        console.log("Email отправлен успешно:", response);
        addRow([currentDate, userName, userEmail, courseName, paymentMethod]);

        localStorage.removeItem(`client_name_${courseId}`);
        localStorage.removeItem(`client_email_${courseId}`);
      })
      .catch(function(error) {
        console.error("Ошибка при отправке email:", error);
      });

    setTimeout(() => {
      const newUrl = window.location.href.split('?')[0]; 
      window.history.replaceState({}, '', newUrl); 
    }, 1000);

  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
  console.clear();
}

if (window.location.search.includes("status=success1m")) {
  handleSuccess('course1', 'Персональная программа для самостоятельной работы', `10`, 'Monobank');
}
if (window.location.search.includes("status=success2m")) {
  handleSuccess('course2', 'Программа питания', `20`, 'Monobank');
}
if (window.location.search.includes("status=success3m")) {
  handleSuccess('course3', 'Программа на похудение/набор с акцентом на ягодицы', `30`, 'Monobank');
}

document.addEventListener("DOMContentLoaded", function () {
    function isFormValid(courseId) {
        const form = document.getElementById(`payment-form-${courseId}`);
        const userName = form.querySelector(`[name="client_name"]`).value.trim();
        const userEmail = form.querySelector(`[name="client_email"]`).value.trim();

        if (!userName || !userEmail) {
            showCustomAlert(`Пожалуйста, заполните все поля формы перед оплатой.`, "error");
            return false;
        }

        localStorage.setItem(`client_name_${courseId}`, userName);
        localStorage.setItem(`client_email_${courseId}`, userEmail);

        return true;
    }

    // Обработчики для Monobank
    document.getElementById("plata-by-mono-1").addEventListener("click", async function () {
        if (!isFormValid('course1')) return;
        try {
            const response = await fetch("https://monobank-5mve5st3a-ivans-projects-311967c8.vercel.app/api/monobank.js", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    amount: 4240,
                    ccy: 980,
                    description: "Персональная программа для самостоятельной работы",
                    redirectUrl: window.location.origin + window.location.pathname + "?status=success1m"
                }),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Не удалось создать счет");
            }

            const { invoiceUrl } = await response.json();
            window.location.href = invoiceUrl;
        } catch (error) {
            console.error("Ошибка при создании счета:", error.message);
            alert("Произошла ошибка при создании счета. Попробуйте позже.");
        }
    });

    document.getElementById("plata-by-mono-2").addEventListener("click", async function () {
        if (!isFormValid('course2')) return;
        try {
            const response = await fetch("https://monobank-5mve5st3a-ivans-projects-311967c8.vercel.app/api/monobank.js", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    amount: 100,
                    ccy: 980,
                    description: "Программа питания",
                    redirectUrl: window.location.origin + window.location.pathname + "?status=success2m"
                }),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Не удалось создать счет");
            }

            const { invoiceUrl } = await response.json();
            window.location.href = invoiceUrl;
        } catch (error) {
            console.error("Ошибка при создании счета:", error.message);
            alert("Произошла ошибка при создании счета. Попробуйте позже.");
        }
    });

    document.getElementById("plata-by-mono-3").addEventListener("click", async function () {
        if (!isFormValid('course4')) return;
        try {
            const response = await fetch("https://monobank-5mve5st3a-ivans-projects-311967c8.vercel.app/api/monobank.js", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    amount: 2124,
                    ccy: 980,
                    description: "Программа на похудение/набор с акцентом на ягодицы",
                    redirectUrl: window.location.origin + window.location.pathname + "?status=success3m"
                }),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Не удалось создать счет");
            }

            const { invoiceUrl } = await response.json();
            window.location.href = invoiceUrl;
        } catch (error) {
            console.error("Ошибка при создании счета:", error.message);
            alert("Произошла ошибка при создании счета. Попробуйте позже.");
        }
    });
});
