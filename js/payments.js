const webAppUrl = 'https://script.google.com/macros/s/AKfycby7CJQznWvr_z1Wjf9X5DH9EPuCb3L11lvE5KsKwNjmBpzUxPgb8ggE7Q-26GQlIiGqRw/exec'; 

function sendEmail(courseId, courseName, _amount, paymentMethod) {
  const userName = localStorage.getItem(`client_name_${courseId}`);
  const userEmail = localStorage.getItem(`client_email_${courseId}`);
  return emailjs.send("service_im88pwq", /*"template_8kdx3ee"*/"template_uhek66n", {
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
  handleSuccess('course1', 'Персональная программа с сопровождением', `300`, 'Monobank');
}
if (window.location.search.includes("status=success2m")) {
  handleSuccess('course2', 'Персональная программа для самостоятельной работы', `100`, 'Monobank');
}
if (window.location.search.includes("status=success3m")) {
  handleSuccess('course3', 'Программа тренировки для похудения', `50`, 'Monobank');
}
if (window.location.search.includes("status=success4m")) {
  handleSuccess('course4', 'Программа тренировки для набора с акцентом на ягодицы', `50`, 'Monobank');
}
if (window.location.search.includes("status=success5m")) {
  handleSuccess('course5', 'Программа питания для похудения', `50`, 'Monobank');
}
if (window.location.search.includes("status=success6m")) {
  handleSuccess('course6', 'Программа питания для набора массы', `50`, 'Monobank');
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
    //course 1
    document.addEventListener("click", async function (event) {
        if (event.target && event.target.id === "plata-by-mono_1") {
            if (!isFormValid('course1')) return;
            try {
                const response = await fetch("https://monobank-5mve5st3a-ivans-projects-311967c8.vercel.app/api/monobank.js", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        amount: 15500,
                        ccy: 980,
                        description: "Персональная программа с сопровождением",
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
        }
    });

    //course 1_ua
    document.addEventListener("click", async function (event) {
        if (event.target && event.target.id === "plata-by-mono_1_ua") {
            if (!isFormValid('course1_ua')) return;
            try {
                const response = await fetch("https://monobank-5mve5st3a-ivans-projects-311967c8.vercel.app/api/monobank.js", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        amount: 15500,
                        ccy: 980,
                        description: "Персональная программа с сопровождением",
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
        }
    });

    //course 1_2
    document.addEventListener("click", async function (event) {
        if (event.target && event.target.id === "plata-by-mono_2") {
            if (!isFormValid('course2')) return;
            try {
                const response = await fetch("https://monobank-5mve5st3a-ivans-projects-311967c8.vercel.app/api/monobank.js", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        amount: 5200,
                        ccy: 980,
                        description: "Персональная программа для самостоятельной работы",
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
        }
    });

    //course 1_2_ua
    document.addEventListener("click", async function (event) {
        if (event.target && event.target.id === "plata-by-mono_2_ua") {
            if (!isFormValid('course2_ua')) return;
            try {
                const response = await fetch("https://monobank-5mve5st3a-ivans-projects-311967c8.vercel.app/api/monobank.js", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        amount: 5200,
                        ccy: 980,
                        description: "Персональная программа для самостоятельной работы",
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
        }
    });

    //course 2
    document.addEventListener("click", async function (event) {
        if (event.target && event.target.id === "plata-by-mono_3") {
            if (!isFormValid('course3')) return;
            try {
                const response = await fetch("https://monobank-5mve5st3a-ivans-projects-311967c8.vercel.app/api/monobank.js", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        amount: 2600,
                        ccy: 980,
                        description: "Программа питания на похудение",
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
        }
    });

    //course 2_ua
    document.addEventListener("click", async function (event) {
        if (event.target && event.target.id === "plata-by-mono_3_ua") {
            if (!isFormValid('course3_ua')) return;
            try {
                const response = await fetch("https://monobank-5mve5st3a-ivans-projects-311967c8.vercel.app/api/monobank.js", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        amount: 2600,
                        ccy: 980,
                        description: "Программа питания на похудение",
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
        }
    });

    //course 2_2
    document.addEventListener("click", async function (event) {
        if (event.target && event.target.id === "plata-by-mono_4") {
            if (!isFormValid('course4')) return;
            try {
                const response = await fetch("https://monobank-5mve5st3a-ivans-projects-311967c8.vercel.app/api/monobank.js", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        amount: 2600,
                        ccy: 980,
                        description: "Программа на набор с акцентом на ягодицы",
                        redirectUrl: window.location.origin + window.location.pathname + "?status=success4m"
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
        }
    });

    //course 2_2_ua
    document.addEventListener("click", async function (event) {
        if (event.target && event.target.id === "plata-by-mono_4_ua") {
            if (!isFormValid('course4_ua')) return;
            try {
                const response = await fetch("https://monobank-5mve5st3a-ivans-projects-311967c8.vercel.app/api/monobank.js", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        amount: 2600,
                        ccy: 980,
                        description: "Программа на набор с акцентом на ягодицы",
                        redirectUrl: window.location.origin + window.location.pathname + "?status=success4m"
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
        }
    });

    //course 3
    document.addEventListener("click", async function (event) {
        if (event.target && event.target.id === "plata-by-mono_5") {
            if (!isFormValid('course5')) return;
            try {
                const response = await fetch("https://monobank-5mve5st3a-ivans-projects-311967c8.vercel.app/api/monobank.js", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        amount: 2600,
                        ccy: 980,
                        description: "Программа питания на набор",
                        redirectUrl: window.location.origin + window.location.pathname + "?status=success5m"
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
        }
    });

    //course 3_ua
    document.addEventListener("click", async function (event) {
        if (event.target && event.target.id === "plata-by-mono_5_ua") {
            if (!isFormValid('course5_ua')) return;
            try {
                const response = await fetch("https://monobank-5mve5st3a-ivans-projects-311967c8.vercel.app/api/monobank.js", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        amount: 2600,
                        ccy: 980,
                        description: "Программа питания на набор",
                        redirectUrl: window.location.origin + window.location.pathname + "?status=success5m"
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
        }
    });

    //course 3_2
    document.addEventListener("click", async function (event) {
        if (event.target && event.target.id === "plata-by-mono_6") {
            if (!isFormValid('course6')) return;
            try {
                const response = await fetch("https://monobank-5mve5st3a-ivans-projects-311967c8.vercel.app/api/monobank.js", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        amount: 2600,
                        ccy: 980,
                        description: "Программа питания на похудение",
                        redirectUrl: window.location.origin + window.location.pathname + "?status=success6m"
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
        }
    });

    //course 3_2_ua
    document.addEventListener("click", async function (event) {
        if (event.target && event.target.id === "plata-by-mono_6_ua") {
            if (!isFormValid('course6_ua')) return;
            try {
                const response = await fetch("https://monobank-5mve5st3a-ivans-projects-311967c8.vercel.app/api/monobank.js", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        amount: 2600,
                        ccy: 980,
                        description: "Программа питания на похудение",
                        redirectUrl: window.location.origin + window.location.pathname + "?status=success6m"
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
        }
    });
});
