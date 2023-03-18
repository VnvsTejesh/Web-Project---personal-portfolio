const btnMenu = document.getElementById("btn_menu");
const menu = document.getElementById("menu");

btnMenu.addEventListener("click", () => {
  btnMenu.classList.toggle("fa-times");
  menu.classList.toggle("active");
});

// ============================================

const form = document.getElementsByClassName("contact-form")[0];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { value: name } = document.getElementById("username");
  const { value: email } = document.getElementById("email");
  const { value: message } = document.getElementById("text");
  if (name.length === 0 && email.length === 0) {
    console.warn("You must enter some data to submit this form");
  } else {
    const formattedName = name.length === 0 ? "no submission" : name;
    const formattedEmail = email.length === 0 ? "no submission" : email;
    const formattedText = message.length === 0 ? "no submission" : email;
    console.log("======== Form Submission =========");
    console.log(`   Username: ${formattedName}`);
    console.log(`   Email: ${formattedEmail}`);
    console.log(`   Message: ${formattedText}`);
  }
});
