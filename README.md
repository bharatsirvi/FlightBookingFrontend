## 🌐 Deployment

The full stack Flight Booking Analytics application is deployed and live at:

**Frontend:**  
[Vercel Deployment](https://flight-booking-frontend-drab.vercel.app/)

**Backend:**  
(Example) [https://flightbookingbackend-3.onrender.com](https://flightbookingbackend-3.onrender.com)

---

# Flight Booking Frontend

This is the React + Vite frontend for the Flight Booking Analytics project.

---

## 🚀 Features

- Modern React app bootstrapped with Vite
- Connects to a FastAPI backend for flight analytics
- Uses custom hooks and components for chat, charts, and tables
- Supports async API polling and error handling

## 🛠️ Setup Instructions

### 1. **Navigate to the frontend folder**

```sh
cd flight_booking_frontend
```

### 2. **Install dependencies**

```sh
npm install
```

### 3. **Start the development server**

```sh
npm run dev
```

- The app will start at [http://localhost:5173](http://localhost:5173) by default.
- Make sure your backend server is running at [http://127.0.0.1:8000](http://127.0.0.1:8000).
- If needed, update the backend URL in `src/utils/constants.js`.


## 📁 Project Structure

```
flight_booking_frontend/
│
├── src/
│   ├── components/
│   │   ├── Body.jsx 
│   │   ├── ChatWindow.jsx
│   │   ├── ChartRenderer.jsx
│   │   ├── ChatInput.jsx 
│   │   └── TableRenderer.jsx
│   ├── hooks/
│   │   └── usePollingState.js
│   ├── utils/
│   │   └── constants.js
│   ├── App.jsx
│   └── main.jsx
├── public/
│   └── flightLogo.png
├── package.json
├── vite.config.js
└── README.md
```

---

## 📝 Notes

- This project uses [Vite](https://vitejs.dev/) for fast development.
- Tailwind CSS is used (see `src/index.css`).
- For API calls, the frontend expects the backend to be running locally.
- For any issues, check the browser console or terminal output.

---

**Enjoy your flight booking analytics frontend!**