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

function saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
}


function loadProducts() {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const table = document.getElementById("goodsTable").getElementsByTagName("tbody")[0];
    table.innerHTML = ""; // Clear any existing rows

    products.forEach(product => {
        const newRow = table.insertRow();
        newRow.insertCell(0).textContent = product.category;
        newRow.insertCell(1).textContent = product.productName;
        newRow.insertCell(2).textContent = product.quantity;
        newRow.insertCell(3).textContent = product.datePurchased;
        newRow.insertCell(4).textContent = product.dateExpiry;
    });
}

// Load products when the page loads
document.addEventListener("DOMContentLoaded", loadProducts);


document.getElementById('inventoryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const category = document.getElementById('category').value;
    const productName = document.getElementById('productName').value;
    const quantity = document.getElementById('quantity').value;
    const datePurchased = document.getElementById('datePurchased').value;
    const dateExpiry = document.getElementById('dateExpiry').value;

    const products = JSON.parse(localStorage.getItem("products")) || [];
    products.push({ category, productName, quantity, datePurchased, dateExpiry });

    saveProducts(products); // Save the updated products array to localStorage
    loadProducts(); // Refresh the table
    document.getElementById('inventoryForm').reset(); // Reset the form
});


// Open the login modal
document.querySelector(".profile").addEventListener("click", function () {
    document.getElementById("loginModal").style.display = "block";
});

// Close the modal when the close button is clicked
function closeModal() {
    document.getElementById("loginModal").style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function (event) {
    const modal = document.getElementById("loginModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Submit form
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("rememberMe").checked;

    console.log("Login Details:");
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Contact Number: ${contact}`);
    console.log(`Remember Me: ${rememberMe}`);

    // Close modal after successful submission
    closeModal();
});

function handleLogin() {
    alert("Log In functionality goes here!");
    // Add your logic here, e.g., switch to a different form or load login data
}

// Show notification popup when notification button is clicked
function showNotificationPopup() {
    // alert("Notification clicked!");
    var notificationContainer = document.getElementById('notificationListContainer');
    notificationContainer.classList.toggle('show');
}

// Close the notification popup
function closeNotificationPopup() {
    document.getElementById("notificationModal").style.display = "none";
}



// function checkForExpiringProducts() {
//     const today = new Date();
//     const table = document.getElementById("goodsTable").getElementsByTagName("tbody")[0];
//     const rows = table.getElementsByTagName("tr");

//     Array.from(rows).forEach((row) => {
//         const expiryDate = new Date(row.cells[4].textContent.trim()); // Expiry date from table
//         const daysToExpiry = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24)); // Difference in days

//         if (daysToExpiry === 3) {
//             const productName = row.cells[1].textContent.trim(); // Product Name
//             sendReminderSMS(productName); // Call function to send SMS
//         }
//     });
// }

// // Mock function to simulate sending an SMS
// function sendReminderSMS(productName) {
//     const userContact = document.getElementById("contact").value; // Get the contact number from login
//     if (!userContact) {
//         console.error("No contact number provided!");
//         return;
//     }

//     // Here, you'd call your backend API to send the SMS
//     console.log(`Sending SMS to ${userContact}: "Reminder: Your product ${productName} is expiring in 3 days."`);
// }

// // Call the function periodically (e.g., once a day)
// setInterval(checkForExpiringProducts, 24 * 60 * 60 * 1000);



