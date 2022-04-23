let $ = document;
let inputEl = $.getElementById("input-field");
let btnSaveEl = $.getElementById("btn-save");
let listEl = $.getElementById("listed");
let colorsBox = $.querySelectorAll(".color-box");

colorsBox.forEach((colorsBox) => {
  colorsBox.addEventListener("click", () => {
    let mainColor = colorsBox.style.backgroundColor;
    inputEl.style.backgroundColor = mainColor;
  });
});

let noteCount = 1;

btnSaveEl.onclick = () => {
  let text = inputEl.value;
  if (text === "") {
    alert("هیچ متنی ننوشته اید");
    return false;
  } else {
    let color = inputEl.style.backgroundColor;

    let containerEl = $.createElement("div");
    containerEl.setAttribute("class", "card shadow-sm rounded");
    containerEl.setAttribute("id", "note" + noteCount);
    containerEl.style.backgroundColor = color;

    let textEl = $.createElement("p");
    textEl.setAttribute("class", "card-text p-3");
    textEl.innerHTML = text;

    containerEl.appendChild(textEl);
    listEl.appendChild(containerEl);

    inputEl.value = "";
    inputEl.style.backgroundColor = "";
    noteCount++;
  }
};
