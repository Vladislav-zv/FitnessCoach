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

    // PayPal - Course 1
    paypal.Buttons({
        style: {
            layout: 'vertical',
            color: 'blue',
            shape: 'rect',
            label: 'paypal'
        },
        fundingSource: paypal.FUNDING.PAYPAL,
        createOrder: function (data, actions) {
            if (!isFormValid('course1')) return null;
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '10.00'
                    },
                    description: 'Ускоренная растяжка - онлайн курс'
                }]
            });
        },
        onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
                showCustomAlert(`Оплата успешно завершена! Спасибо, ${details.payer.name.given_name}`, "success");
                sendEmail('course1','Ускоренная растяжка', `10`, `PayPal`);
            });
        },
        onError: function (err) {
            console.error('Ошибка оплаты:', err);
            if(!isFormValid('course1')) return;
            showCustomAlert(`К сожалению, произошла ошибка при оплате. Попробуйте снова.`, "error");
        }
    }).render('#paypal-button-container-course1');

    // Monobank - Course 1
    document.getElementById("monobank-button-course1").addEventListener("click", function () {
        if (isFormValid('course1')) {
            showCustomAlert(`Mock`, "success");
            sendEmail('course1','Ускоренная растяжка', `10`, `Monobank`);
        }
    });


    //Course 2
    // PayPal - Course 2
    paypal.Buttons({
        style: {
            layout: 'vertical',
            color: 'blue',
            shape: 'rect',
            label: 'paypal'
        },
        fundingSource: paypal.FUNDING.PAYPAL,
        createOrder: function (data, actions) {
            if (!isFormValid('course2')) return null;
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '10.00'
                    },
                    description: 'Программа похудения - онлайн курс'
                }]
            });
        },
        onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
                showCustomAlert(`Оплата успешно завершена! Спасибо, ${details.payer.name.given_name}`, "success");
                sendEmail('course2','Программа похудения', `20`, `PayPal`);
            });
        },
        onError: function (err) {
            console.error('Ошибка оплаты:', err);
            if(!isFormValid('course2')) return;
            showCustomAlert(`К сожалению, произошла ошибка при оплате. Попробуйте снова.`, "error");
        }
    }).render('#paypal-button-container-course2');

    // Monobank - Course 2
    document.getElementById("monobank-button-course2").addEventListener("click", function () {
        if (isFormValid('course2')) {
            showCustomAlert(`Mock`, "success");
            sendEmail('course2','Программа похудения', `20`, `Monobank`);
        }
    });

    //Course 3
    // PayPal - Course 3
    paypal.Buttons({
        style: {
            layout: 'vertical',
            color: 'blue',
            shape: 'rect',
            label: 'paypal'
        },
        fundingSource: paypal.FUNDING.PAYPAL,
        createOrder: function (data, actions) {
            if (!isFormValid('course3')) return null;
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '30.00'
                    },
                    description: 'Силовые показатели - онлайн курс'
                }]
            });
        },
        onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
                showCustomAlert(`Оплата успешно завершена! Спасибо, ${details.payer.name.given_name}`, "success");
                sendEmail('course3','Силовые показатели', `30`, `PayPal`);
            });
        },
        onError: function (err) {
            console.error('Ошибка оплаты:', err);
            if(!isFormValid('course3')) return;
            showCustomAlert(`К сожалению, произошла ошибка при оплате. Попробуйте снова.`, "error");
        }
    }).render('#paypal-button-container-course3');

    // Monobank - Course 3
    document.getElementById("monobank-button-course3").addEventListener("click", function () {
        if (isFormValid('course3')) {
            showCustomAlert(`Mock`, "success");
            sendEmail('course3','Силовые показатели', `30`, `Monobank`);
        }
    });

    //Course 4
    // PayPal - Course 4
    paypal.Buttons({
        style: {
            layout: 'vertical',
            color: 'blue',
            shape: 'rect',
            label: 'paypal'
        },
        fundingSource: paypal.FUNDING.PAYPAL,
        createOrder: function (data, actions) {
            if (!isFormValid('course4')) return null;
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '40.00'
                    },
                    description: 'Выносливость - онлайн курс'
                }]
            });
        },
        onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
                showCustomAlert(`Оплата успешно завершена! Спасибо, ${details.payer.name.given_name}`, "success");
                sendEmail('course4','Выносливость', `40`, `PayPal`);
            });
        },
        onError: function (err) {
            console.error('Ошибка оплаты:', err);
            if(!isFormValid('course4')) return;
            showCustomAlert(`К сожалению, произошла ошибка при оплате. Попробуйте снова.`, "error");
        }
    }).render('#paypal-button-container-course4');

    // Monobank - Course 3
    document.getElementById("monobank-button-course4").addEventListener("click", function () {
        if (isFormValid('course4')) {
            showCustomAlert(`Mock`, "success");
            sendEmail('course4','Выносливость', `40`, `Monobank`);
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
