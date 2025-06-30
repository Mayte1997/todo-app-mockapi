# React To-Do App 📝

A simple, clean, and functional To-Do List app built with **React**, **React Router**, **Bootstrap**, and **MockAPI**.

---

## 🚀 Features

- ✅ Full **CRUD operations** using MockAPI
- 🧩 **10+ custom components**
- 🧭 **3 pages** (Home, About, Contact) via React Router
- 🎨 Styled with **React Bootstrap**
- 📦 Easily deployable to GitHub Pages, Vercel, or Netlify

---

## 🔧 Technologies Used

- React 18
- React Router DOM
- React Bootstrap
- Axios
- MockAPI (for simulating a real backend)

---

## 📁 Project Structure

```
src/
├── components/        # Reusable UI components (Header, Footer, TaskList, etc.)
├── pages/             # Route pages (Home, About, Contact)
├── App.js             # Main app logic & routing
├── index.js           # Entry point
```

---

## 🌐 Live Demo

> _(Add your deployed link here)_  
> https://your-vercel-or-netlify-link.com

---

## 🛠️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/todo-app-mockapi.git
cd todo-app-mockapi
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm start
```

---

## 🔗 API Setup (MockAPI)

1. Go to [https://mockapi.io](https://mockapi.io)
2. Create a new project
3. Add a resource called `tasks` with fields:
   - `title` (string)
   - `desc` (string)
4. Copy the API URL and update it in `App.js` like this:

```js
const API_URL = 'https://your-mockapi-url.mockapi.io/api/v1/tasks';
```

---

## 📦 Deploy Instructions

- Push to GitHub
- Connect your repo to [Vercel](https://vercel.com) or [Netlify](https://netlify.com)
- It will auto-deploy on each push!

---

## 🧠 Author

Made with ❤️ by **Mayte Dixon**

> For portfolio or class submission  
> Email: [mayte@example.com](mailto:mayte@example.com)

---

## 📜 License

This project is licensed under MIT — use it, remix it, just give credit.