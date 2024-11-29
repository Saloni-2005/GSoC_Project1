Goods Guardian
Goods Guardian is an inventory management and tracking web application designed to help users manage their stock and receive reminders when products are about to expire. It allows users to track their goods, manage the quantity, and get timely alerts for expiration dates.

Key Features
Stock Management: Manage your inventory by adding and tracking goods in stock, goods to buy, and goods that are about to expire.
Expiration Tracker: The main feature of Goods Guardian is its ability to track the expiry dates of products. It sends reminders a few days before a product is set to expire, ensuring that users can take action on time.
Sign Up & Log In: Users can create an account to sign up and store their credentials, or log in if they already have an account. Login details are securely stored in the browser using localStorage.
Notifications: Users can sign up or log in directly through notifications, making the process smooth and user-friendly.
Profile Management: After logging in, users can access their profile, view their stored goods, and make necessary changes to their inventory.
Technologies Used
HTML5: Structure and layout of the web pages.
CSS3: Styling, including responsive design.
JavaScript: For user interactivity, login management, inventory tracking, and notifications.
localStorage: Storing login credentials and inventory data locally in the browser.
Setup and Installation
To get started with Goods Guardian locally:

Clone the repository:

bash
Copy code
git clone https://github.com/Saloni-2005/goods-guardian.git
Navigate into the project directory:

bash
Copy code
cd goods-guardian
Open index.html in your browser:

bash
Copy code
open index.html  # Or simply double-click the file
How to Use
Sign Up / Log In:

Click on the profile icon to either sign up or log in. Once logged in, you will have access to the inventory management features.
When signing up, ensure the username does not already exist. If it does, an alert will notify you.
Inventory Management:

Goods in Stock: Add products that are currently in stock.
Goods to Buy: Add items you need to purchase.
About to Expire: Add products that are nearing their expiration date.
Expiration Reminder:

The app will track the expiration dates of the items and send reminders a few days before they expire, helping users keep their inventory updated.
Contributing

If you want to contribute to the project:

Fork the repository.
Create a new branch (git checkout -b feature-name).
Commit your changes (git commit -am 'Add new feature').
Push to your branch (git push origin feature-name).
Open a Pull Request.
