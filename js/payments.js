if (window.location.search.includes("status=success1m")) {
    showCustomAlert(`Оплата успешно завершена! Ожидайте доступ к курсу`, "success");
    sendEmail('course1','Ускоренная растяжка', `10`, `Monobank`);
    setTimeout(() => {
      const newUrl = window.location.href.split('?')[0]; 
      window.history.replaceState({}, '', newUrl); 
    }, 1000);
}
if (window.location.search.includes("status=success2m")) {
    showCustomAlert(`Оплата успешно завершена! Ожидайте доступ к курсу`, "success");
    sendEmail('course2','Программа похудения', `20`, `Monobank`);
    setTimeout(() => {
      const newUrl = window.location.href.split('?')[0]; 
      window.history.replaceState({}, '', newUrl); 
    }, 1000);
}
if (window.location.search.includes("status=success3m")) {
    showCustomAlert(`Оплата успешно завершена! Ожидайте доступ к курсу`, "success");
    sendEmail('course3','Силовые показатели', `30`, `Monobank`);
    setTimeout(() => {
      const newUrl = window.location.href.split('?')[0]; 
      window.history.replaceState({}, '', newUrl); 
    }, 1000);
}
if (window.location.search.includes("status=success4m")) {
    showCustomAlert(`Оплата успешно завершена! Ожидайте доступ к курсу`, "success");
    sendEmail('course4','Выносливость', `40`, `Monobank`);
    setTimeout(() => {
      const newUrl = window.location.href.split('?')[0]; 
      window.history.replaceState({}, '', newUrl); 
    }, 1000);
}



document.addEventListener("DOMContentLoaded", function () {
    // Функция проверки заполненности формы
    function isFormValid(courseId) {
        const form = document.getElementById(`payment-form-${courseId}`);
        const userName = form.querySelector(`[name="client_name"]`).value.trim();
        const userEmail = form.querySelector(`[name="client_email"]`).value.trim();

        if (!userName || !userEmail) {
            showCustomAlert(`Пожалуйста, заполните все поля формы перед оплатой.`, "error");
            return false;
        }
        return true;
    }

    //Payoneer - 1

    // payoneerCheckout.renderButton({
    //     merchantId: 'YOUR_MERCHANT_ID',
    //     paymentId: 'YOUR_PAYMENT_ID',
    //     amount: 10.00,
    //     currency: 'USD',
    //     paymentDescription: 'Ускоренная растяжка - онлайн курс',
    //     redirectUrl: window.location.origin + window.location.pathname + "?status=success1p",
    //   },
    //   'payoneer-checkout-1',
    //   function(response) {
    //     if (response.status === 'success') {
    //         showCustomAlert(`Оплата успешно завершена! Ожидайте доступ к курсу`, "success");
    //         sendEmail('course1','Ускоренная растяжка', `10`, `Payoneer`);
    //         setTimeout(() => {
    //           const newUrl = window.location.href.split('?')[0]; 
    //           window.history.replaceState({}, '', newUrl); 
    //         }, 1000);
    //     } else {
    //         showCustomAlert(`Произошла ошибка. Попробуйте ещё раз`, "error");
    //     }
    //   });

    //Mono - 1
    document.getElementById("plata-by-mono-1").addEventListener("click", async function () {
        if (!isFormValid('course1')) return;
        try {
            const courseDetails = {
                description: "Ускоренная растяжка - онлайн курс",
                amount: 10.00 // Сумма в гривнах
            };
    
            // Вызов API для создания счета
            const response = await fetch("https://monobank-5mve5st3a-ivans-projects-311967c8.vercel.app/api/monobankTest.js", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    amount: courseDetails.amount,
                    description: courseDetails.description,
                    redirectUrl: window.location.origin + window.location.pathname + "?status=success1m"
                }),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Не удалось создать счет");
            }
    
            const { invoiceUrl } = await response.json();
    
            // Перенаправление пользователя на страницу оплаты
            window.location.href = invoiceUrl;
        } catch (error) {
            console.error("Ошибка при создании счета:", error.message);
            alert("Произошла ошибка при создании счета. Попробуйте позже.");
        }
    });

    //Payoneer - 2
    // payoneerCheckout.renderButton({
    //     merchantId: 'YOUR_MERCHANT_ID',
    //     paymentId: 'YOUR_PAYMENT_ID',
    //     amount: 20.00,
    //     currency: 'USD',
    //     paymentDescription: 'Программа похудения - онлайн курс',
    //     redirectUrl: window.location.origin + window.location.pathname + "?status=success2p",
    //   },
    //   'payoneer-checkout-1',
    //   function(response) {
    //     if (response.status === 'success') {
    //         showCustomAlert(`Оплата успешно завершена! Ожидайте доступ к курсу`, "success");
    //         sendEmail('course2','Программа похудения', `20`, `Payoneer`);
    //         setTimeout(() => {
    //           const newUrl = window.location.href.split('?')[0]; 
    //           window.history.replaceState({}, '', newUrl); 
    //         }, 1000);
    //     } else {
    //         showCustomAlert(`Произошла ошибка. Попробуйте ещё раз`, "error");
    //     }
    //   });

    //Mono - 2
    document.getElementById("plata-by-mono-2").addEventListener("click", async function () {
        if (!isFormValid('course2')) return;
        try {
            const courseDetails = {
                description: "Ускоренная растяжка - онлайн курс",
                amount: 10.00 // Сумма в гривнах
            };
    
            // Вызов API для создания счета
            const response = await fetch("https://monobank-5mve5st3a-ivans-projects-311967c8.vercel.app/api/monobankTest.js", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    amount: courseDetails.amount,
                    description: courseDetails.description,
                    redirectUrl: window.location.origin + window.location.pathname + "?status=success2m"
                }),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Не удалось создать счет");
            }
    
            const { invoiceUrl } = await response.json();
    
            // Перенаправление пользователя на страницу оплаты
            window.location.href = invoiceUrl;
        } catch (error) {
            console.error("Ошибка при создании счета:", error.message);
            alert("Произошла ошибка при создании счета. Попробуйте позже.");
        }
    });

    //Payoneer - 3
    // payoneerCheckout.renderButton({
    //     merchantId: 'YOUR_MERCHANT_ID',
    //     paymentId: 'YOUR_PAYMENT_ID',
    //     amount: 30.00,
    //     currency: 'USD',
    //     paymentDescription: 'Силовые показатели- онлайн курс',
    //     redirectUrl: window.location.origin + window.location.pathname + "?status=success3p",
    //   },
    //   'payoneer-checkout-1',
    //   function(response) {
    //     if (response.status === 'success') {
    //         showCustomAlert(`Оплата успешно завершена! Ожидайте доступ к курсу`, "success");
    //         sendEmail('course3','Силовые показатели', `30`, `Payoneer`);
    //         setTimeout(() => {
    //           const newUrl = window.location.href.split('?')[0]; 
    //           window.history.replaceState({}, '', newUrl); 
    //         }, 1000);
    //     } else {
    //         showCustomAlert(`Произошла ошибка. Попробуйте ещё раз`, "error");
    //     }
    //   });

    //Mono - 3
    document.getElementById("plata-by-mono-3").addEventListener("click", async function () {
        if (!isFormValid('course3')) return;
        try {
            const courseDetails = {
                description: "Ускоренная растяжка - онлайн курс",
                amount: 10.00 // Сумма в гривнах
            };
    
            // Вызов API для создания счета
            const response = await fetch("https://monobank-5mve5st3a-ivans-projects-311967c8.vercel.app/api/monobankTest.js", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    amount: courseDetails.amount,
                    description: courseDetails.description,
                    redirectUrl: window.location.origin + window.location.pathname + "?status=success3m"
                }),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Не удалось создать счет");
            }
    
            const { invoiceUrl } = await response.json();
    
            // Перенаправление пользователя на страницу оплаты
            window.location.href = invoiceUrl;
        } catch (error) {
            console.error("Ошибка при создании счета:", error.message);
            alert("Произошла ошибка при создании счета. Попробуйте позже.");
        }
    });
    
    //Payoneer - 4
    // payoneerCheckout.renderButton({
    //     merchantId: 'YOUR_MERCHANT_ID',
    //     paymentId: 'YOUR_PAYMENT_ID',
    //     amount: 40.00,
    //     currency: 'USD',
    //     paymentDescription: 'Выносливость - онлайн курс',
    //     redirectUrl: window.location.origin + window.location.pathname + "?status=success4p",
    //   },
    //   'payoneer-checkout-1',
    //   function(response) {
    //     if (response.status === 'success') {
    //         showCustomAlert(`Оплата успешно завершена! Ожидайте доступ к курсу`, "success");
    //         sendEmail('course4','Выносливость', `40`, `Payoneer`);
    //         setTimeout(() => {
    //           const newUrl = window.location.href.split('?')[0]; 
    //           window.history.replaceState({}, '', newUrl); 
    //         }, 1000);
    //     } else {
    //         showCustomAlert(`Произошла ошибка. Попробуйте ещё раз`, "error");
    //     }
    //   });

    //Mono - 4
    document.getElementById("plata-by-mono-4").addEventListener("click", async function () {
        if (!isFormValid('course4')) return;
        try {
            const courseDetails = {
                description: "Ускоренная растяжка - онлайн курс",
                amount: 10.00 // Сумма в гривнах
            };
    
            // Вызов API для создания счета
            const response = await fetch("https://monobank-5mve5st3a-ivans-projects-311967c8.vercel.app/api/monobankTest.js", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    amount: courseDetails.amount,
                    description: courseDetails.description,
                    redirectUrl: window.location.origin + window.location.pathname + "?status=success4m"
                }),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Не удалось создать счет");
            }
    
            const { invoiceUrl } = await response.json();
    
            // Перенаправление пользователя на страницу оплаты
            window.location.href = invoiceUrl;
        } catch (error) {
            console.error("Ошибка при создании счета:", error.message);
            alert("Произошла ошибка при создании счета. Попробуйте позже.");
        }
    });

    // EmailJS - Отправка данных
    function sendEmail(courseId, courseName, _amount, paymentMethod) {
        const form = document.getElementById(`payment-form-${courseId}`);
        const userName = form.querySelector(`[name="client_name"]`).value;
        const userEmail = form.querySelector(`[name="client_email"]`).value;

        emailjs.send("service_im88pwq", "template_8kdx3ee", {
            client_name: userName,
            client_email: userEmail,
            amount: `${_amount} $`,
            course_name: `${courseName}`,
            payment_method: `${paymentMethod}`
        });
    }
});
