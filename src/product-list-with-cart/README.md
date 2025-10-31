# Product List with Cart

This project is a React application that allows users to view a list of products and manage a shopping cart. It includes components for displaying products, managing the cart, and confirming purchases.

## Project Structure

```
product-list-with-cart
├── public
│   └── index.html
├── src
│   ├── App.jsx
│   ├── index.jsx
│   ├── index.css
│   ├── components
│   │   ├── card-container
│   │   │   └── CardContainer.jsx
│   │   ├── cart
│   │   │   └── Cart.jsx
│   │   └── cart-confirmation
│   │       └── CartConfirmation.jsx
│   └── hooks
│       └── useCart.js
├── package.json
├── .gitignore
└── README.md
```

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd product-list-with-cart
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

To run the application in development mode, use the following command:

```bash
npm start
```

This will start the application and open it in your default web browser.

## Deployment

To deploy the application on GitHub Pages, follow these steps:

1. In `package.json`, add a `homepage` field with the URL of your GitHub Pages site:
   ```json
   "homepage": "https://<your-username>.github.io/<your-repo-name>"
   ```
2. Add the following scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Install the `gh-pages` package:
   ```bash
   npm install gh-pages --save-dev
   ```
4. Deploy the application:
   ```bash
   npm run deploy
   ```

After deployment, your site should be available at the URL specified in the `homepage` field.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License. See the LICENSE file for details.