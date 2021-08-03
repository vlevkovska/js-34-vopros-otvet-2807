const refs = {
  name: document.getElementById("name"),
  message: document.getElementById("message"),
  agreement: document.getElementById("agreement"),
  age: document.getElementById("age"),
};

window.addEventListener("load", () => {
  const name = localStorage.getItem("name");
  const message = localStorage.getItem("message");
  const agreement = localStorage.getItem("agreement");

  refs.name.value = name;
  refs.message.value = message;
  refs.agreement.checked = agreement === "true";
});
// console.log({ agreement, message, name });
// console.log(refs);
