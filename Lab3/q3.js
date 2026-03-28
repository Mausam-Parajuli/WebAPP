

document.getElementById("addBtn").addEventListener("click", addRow);

function addRow() {
    const name = document.getElementById("nameInput").value.trim();
    const age = document.getElementById("ageInput").value.trim();

    if (name === "" || age === "") {
        alert("Please enter both Name and Age.");
        return;
    }

    const tableBody = document.getElementById("dynamicTable").getElementsByTagName("tbody")[0];
    const newRow = tableBody.insertRow();

    const nameCell = newRow.insertCell(0);
    const ageCell = newRow.insertCell(1);
    const actionCell = newRow.insertCell(2);

    nameCell.textContent = name;
    ageCell.textContent = age;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", () => {
        newRow.remove();
    });

    actionCell.appendChild(deleteBtn);

    document.getElementById("nameInput").value = "";
    document.getElementById("ageInput").value = "";
}

document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        this.closest("tr").remove();
    });
});

