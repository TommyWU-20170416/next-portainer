# My Next.js App

This is a simple Next.js application built with React. It serves as a starting point for building web applications using Next.js.

## Project Structure

```
MY-NEXT-APP
├── pages
│   ├── index.tsx        # Main entry point of the application
│   └── _app.tsx         # Custom App component for layout persistence
├── public
│   └── favicon.ico      # Favicon for the application
├── styles
│   └── globals.css      # Global CSS styles
├── .env                 # Environment variables (e.g., EMAIL_IP)
├── package.json         # npm configuration file
├── tsconfig.json        # TypeScript configuration file
└── README.md            # Project documentation
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd MY-NEXT-APP
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and define your email IP address:
   ```
   EMAIL_IP=your_email_ip
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

- Modify the `pages/index.tsx` file to change the homepage content.
- Use the `styles/globals.css` file to apply global styles across your application.
- Update the `.env` file to change environment variables as needed.

## License

This project is licensed under the MIT License.