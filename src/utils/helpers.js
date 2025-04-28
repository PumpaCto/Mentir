// Basit bir mail validator
export function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// İsimlerin baş harflerini büyük yapar
export function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Scroll to bir id
export function scrollToId(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
