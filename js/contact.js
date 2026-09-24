// ===== GOLDENGEN — CONTACT PAGE ONLY =====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const fields = {
    name: {
      input: document.getElementById("contactName"),
      error: document.getElementById("contactNameError"),
      validate: (value) => value.trim().length >= 2,
      message: "Please enter your name.",
    },
    email: {
      input: document.getElementById("contactEmail"),
      error: document.getElementById("contactEmailError"),
      validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
      message: "Please enter a valid email address.",
    },
    subject: {
      input: document.getElementById("contactSubject"),
      error: document.getElementById("contactSubjectError"),
      validate: (value) => value.trim().length >= 3,
      message: "Please enter a subject.",
    },
    message: {
      input: document.getElementById("contactMessage"),
      error: document.getElementById("contactMessageError"),
      validate: (value) => value.trim().length >= 10,
      message: "Please enter a message (at least 10 characters).",
    },
  };

  function validateField(field) {
    const isValid = field.validate(field.input.value);
    field.input.classList.toggle("invalid", !isValid);
    field.input.setAttribute("aria-invalid", String(!isValid));
    field.error.textContent = isValid ? "" : field.message;
    return isValid;
  }

  Object.values(fields).forEach((field) => {
    field.input.addEventListener("blur", () => validateField(field));
    field.input.addEventListener("input", () => {
      if (field.input.classList.contains("invalid")) validateField(field);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const allValid = Object.values(fields).map(validateField).every(Boolean);
    if (!allValid) {
      form.querySelector(".invalid")?.focus();
      return;
    }

    const submitBtn = form.querySelector(".contact-form-submit");
    submitBtn.disabled = true;
    form.setAttribute("aria-busy", "true");
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sending...`;

    // No backend yet — simulated submission.
    // Swap block for a real API call once Express is in place.
    setTimeout(() => {
      form.reset();
      form.removeAttribute("aria-busy");
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Send Message`;

      if (typeof ggShowToast === "function") {
        ggShowToast("Message received — we'll get back to you soon");
      }

      const announcer = document.getElementById("srAnnouncer");
      if (announcer) {
        announcer.textContent = "";
        setTimeout(() => {
          announcer.textContent = "Your message has been sent.";
        }, 20);
      }
    }, 900);
  });
});
