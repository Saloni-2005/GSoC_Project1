function openTab(event, tabId) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show the selected tab content
    document.getElementById(tabId).classList.add('active');

    // Set the clicked tab as active
    event.currentTarget.classList.add('active');
}


document.getElementById('inventoryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const category = document.getElementById('category').value;
    const productName = document.getElementById('productName').value;
    const quantity = document.getElementById('quantity').value;
    const datePurchased = document.getElementById('datePurchased').value;
    const dateExpiry = document.getElementById('dateExpiry').value;

    const table = document.getElementById('goodsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.textContent = category;
    cell2.textContent = productName;
    cell3.textContent = quantity;
    cell4.textContent = datePurchased;
    cell5.textContent = dateExpiry;

    document.getElementById('inventoryForm').reset();
});
