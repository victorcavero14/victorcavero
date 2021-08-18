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
  "--dark-color": "#222",
  "--blueviolet-color": "#8a2be2",
};

button.addEventListener("click", () => {
  if (value) {
    change_props(light);

    value = false;
  } else {
    change_props(dark);

    value = true;
  }
});

const change_props = (obj) => {
  root.style.setProperty("--bg-color", obj["--bg-color"]);
  root.style.setProperty("--white-color", obj["--white-color"]);
  root.style.setProperty("--black-color", obj["--black-color"]);
};
