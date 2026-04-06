// Utility helpers
function formatDate(date) {
  return new Date(date).toLocaleDateString();
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
module.exports = { formatDate, capitalize, debounce };
