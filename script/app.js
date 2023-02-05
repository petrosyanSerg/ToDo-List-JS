const form = document.forms[0];
const input = document.querySelector(".inputText");
const deleteAll = document.querySelector(".delete_all");
const list = document.querySelector(".todoList");
const todoListArr = JSON.parse(localStorage.getItem("todoList")) || [];

function subbmitForms(event) {
  event.preventDefault();
  const text = input.value;
  todoListArr.push(text);
  saveInLocaleStorage(todoListArr);
  renderItem(text);
  event.target.reset();
}

function saveInLocaleStorage(value) {
  localStorage.setItem("todoList", JSON.stringify(value));
}

function renderItem(text) {
  const item = document.createElement("div");
  item.classList.add("item");
  item.innerHTML = `
          <div class="item_text">${text}</div>
            <div div class="item_btn">
            <div class="btn_completed" onclick="completed(event)">
              <i class="fa-solid fa-square-check"></i>
            </div>
            <div class="btn_remove" oncLick="removeItem(event)">
              <i class="fa-solid fa-square-minus"></i>
            </div>
          </div>
    `;
  list.appendChild(item);
}

function renderLoadPage() {
  todoListArr.forEach((element) => {
    renderItem(element);
  });
}

function deleteList() {
  todoListArr.length = 0;
  list.innerHTML = ``;
  localStorage.clear();
}
function completed(event) {
  event.currentTarget.classList.toggle("active");
}

function removeItem(event) {
  event.currentTarget.parentElement.parentElement.remove();
}

form.addEventListener("submit", subbmitForms);
deleteAll.addEventListener("click", deleteList);
renderLoadPage();
