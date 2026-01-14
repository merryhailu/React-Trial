
document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-button');

    function addItem() {

        const inputText = document.getElementById('input-text');
        const inputItem = inputText.value;


        if (inputItem === '') {
            prompt('enter item')
        }
        else {

            const listContainer = document.getElementById('list-container');
            const listItem = document.createElement('li');
            listItem.textContent = inputItem

            listContainer.append(listItem);

            inputText.value = '';
        }

    }


    addBtn.addEventListener('click', addItem);
})



