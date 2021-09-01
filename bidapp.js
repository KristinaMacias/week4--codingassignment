let id = 0;

document.getElementById("add").addEventListener("click", () => {
  //date created
  let createdDate = new Date();
  let table = document.getElementById("list");
  let row = table.insertRow(1);
  row.setAttribute("id", `item-${id}`);
  //add project name
  row.insertCell(0).innerHTML = document.getElementById("project-name").value;
  row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${
    createdDate.getMonth() + 1
  }-${createdDate.getDate()}`;
  row.insertCell(2).innerHTML = document.getElementById("bid-date").value;
  row.insertCell(3).innerHTML = document.getElementById("job-walk").value;
  row.insertCell(4).innerHTML = document.getElementById("rfi-date").value;

  let actions = row.insertCell(5);
  actions.appendChild(createDeleteButton(id++));
  document.getElementById("project-name").value = " ";
});
//
function createDeleteButton(id) {
  // this function creates a button
  let btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.id = id;
  btn.innerHTML = "Delete";
  btn.onclick = () => {
    //binds a method or function to its on-click properties. so it deletes the row the btn is assigned
    console.log(`Deleting row with id: item-${id}`);
    let elementToDelete = document.getElementById(`item-${id}`);
    elementToDelete.parentNode.removeChild(elementToDelete);
  };
  return btn;
}
