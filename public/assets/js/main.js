const nameInput = document.getElementById("user-name");
const emailInput = document.getElementById("user-email");
const usersTableBody = document.getElementById("users-table-body");
const result = document.getElementById("result");
const saveButton = document.getElementById("save-user");
const clearButton = document.getElementById("clear-user");

function showResult(message, type) {
  result.textContent = message || "";
  result.className = `result ${type}`;
}

function clearForm() {
  nameInput.value = "";
  emailInput.value = "";
}

function renderEmptyTable(message) {
  usersTableBody.innerHTML = `
    <tr>
    <td colspan "3" class="user-table-empty">${message} </td>
    </tr>
    `;
}

async function deleteUser(id) {
  showResult("Excluindo registro...", "loading");
  const response = await fetch(`/users/${id}`, { method: "DELETE" });
  if (response.ok) {
    const users = await response.json();
    console.log(users);
    showResult("Usuário excluido com sucesso.", "sucess");
    await loadUsers();
  } else {
    showResult("Problemas ao excluir o usuário.", "error");
  }
}

function renderUsers(users) {
  if (users.length == 0) {
    renderEmptyTable("Nenhum usuário cadastrado");
  } else {
    let rowsTemp = "";
    for (let i = 0; i < users.length; i++) {
      console.log(users[i]);
      rowsTemp += `
    <tr>
    <td>${users[i].name} </td>
    <td>${users[i].email} </td>
    <td class="user-table-actions-cell">
    <button class="delete-user-button" onClick="deleteUser(${users[i].id_user})">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="64" height="64" viewBox="0 0 24 24" style="color: rgb(74, 85, 101);"><path fill="currentColor" d="M4 5h3V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1h3a1 1 0 0 1 0 2h-1v13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7H4a1 1 0 1 1 0-2m3 2v13h10V7zm2-2h6V4H9zm0 4h2v9H9zm4 0h2v9h-2z"></path></svg>
    </button>
    </td>
    </tr>
    `;
    }
    usersTableBody.innerHTML = rowsTemp;
  }
}

async function loadUsers() {
  const response = await fetch("/users");
  if (response.ok) {
    const users = await response.json();
    renderUsers(users);
  } else {
    renderEmptyTable("Problemas ao obter os usuários");
  }
}

async function createUser() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  if (name && email) {
    showResult("Salvando usuário", "loading");
    const response = await fetch(`/users/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });
    if (response.ok) {
      const users = await response.json();
      clearForm();
      showResult("Usuário cadastrado com sucesso.", "sucess");
      await loadUsers();
    } else {
      showResult("Problemas ao cadastrar o usuário.", "error");
    }
  } else {
    showResult("Preencha nome e email para continuar", "error");
  }
}

saveButton.addEventListener("click", function () {
  createUser();
});

clearButton.addEventListener("click", function () {
  clearForm();
});

loadUsers();
