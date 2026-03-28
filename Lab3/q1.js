

function showInput() {
        document.getElementById("inputSection").style.display = "block";
    }

    function addItem() {
        const input = document.getElementById("itemInput");
        const value = input.value.trim();

        if (value === "") {
            alert("Please enter an item");
            return;
        }

        const li = document.createElement("li");
        li.textContent = value;

        document.getElementById("itemList").appendChild(li);

        input.value = "";
    }

    function removeLastItem() {
        const list = document.getElementById("itemList");

        if (list.children.length > 0) {
            list.removeChild(list.lastElementChild);
        } else {
            alert("List is already empty!");
        }
    }

