// ===== GOLDENGEN — CONTACT PAGE ONLY =====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const status = document.getElementById("contactFormStatus");

  // Each field owns its validation message so the form can identify the exact
  // correction needed before a submission is attempted.

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
      if (status) status.textContent = "";
      if (field.input.classList.contains("invalid")) validateField(field);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (status) status.textContent = "";

    const allValid = Object.values(fields).map(validateField).every(Boolean);
    if (!allValid) {
      form.querySelector(".invalid")?.focus();
      return;
    }

    const validationMessage =
      "Form validation passed. This preview is not connected, so no message was sent or stored.";
    if (status) {
      status.textContent = validationMessage;
    }

    const announcer = document.getElementById("srAnnouncer");
    if (announcer) {
      announcer.textContent = validationMessage;
    }
  });
});
