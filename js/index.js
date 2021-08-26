const button = document.querySelector("#theme");
const root = document.documentElement;
var value = true;

const dark = {
  "--bg-color": "#28282a",
  "--red-color": "#fa0005",
  "--white-color": "#fff",
  "--black-color": "#000",
  "--grey-color": "#ddd",
  "--dark-grey-color": "#ccc",
  "--darkest-grey-color": "#555",
  "--dark-color": "#222",
  "--blueviolet-color": "#8a2be2",
};

const light = {
  "--bg-color": "#fff",
  "--red-color": "#fa0005",
  "--white-color": "#000",
  "--black-color": "#fff",
  "--grey-color": "#ddd",
  "--dark-grey-color": "#ccc",
  "--darkest-grey-color": "#555",
  "--dark-color": "#f3f3f3",
  "--blueviolet-color": "#eac435",
};

document.documentElement.style.setProperty(
  "--vh",
  `${window.innerHeight / 100}px`
);

button.addEventListener("click", () => {
  var formimg = document.querySelector("#form-img");
  var arrow = document.querySelector("#arrow");
  var logos = document.querySelectorAll(".logo");

  if (value) {
    change_props(light);
    logos.forEach((logo) => logo.classList.add("invert"));

    arrow.classList.add("invert");
    formimg.style.setProperty("filter", "invert(0)");

    value = false;
  } else {
    change_props(dark);
    logos.forEach((logo) => logo.classList.remove("invert"));

    formimg.style.setProperty("filter", "invert(1)");
    arrow.classList.remove("invert");

    value = true;
  }
});

const change_props = (obj) => {
  root.style.setProperty("--bg-color", obj["--bg-color"]);
  root.style.setProperty("--white-color", obj["--white-color"]);
  root.style.setProperty("--black-color", obj["--black-color"]);
  root.style.setProperty("--dark-color", obj["--dark-color"]);
  root.style.setProperty("--blueviolet-color", obj["--blueviolet-color"]);
};

const submit = document.querySelector("form");

submit.addEventListener("submit", () => {
  var name_val = document.querySelector('input[type="text"]').value;
  var email_val = document.querySelector('input[type="email"]').value;
  var content_val = document.querySelector("textarea").value;

  const data = {
    name: name_val,
    email: email_val,
    content: content_val,
  };
  post_request(data);
});

const post_request = (data) => {
  var xhr = new XMLHttpRequest();

  var json = JSON.stringify(data);
  xhr.open("POST", "http://localhost:3000/submit-data", true); // aqui añadir la url express
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(json);
  console.log("Form sent");
};

/* REUTILIZAR FUNCION PARA DESCARGAR PDF CON MI CV? */
const export2txt = (originalData) => {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(
    new Blob([JSON.stringify(originalData, null, 2)], {
      type: "text/plain",
    })
  );
  a.setAttribute("download", "form.txt");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
