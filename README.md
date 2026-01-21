# Taf16.com

> **Note:** Looking for the previous version of the website? It has been archived at **[old.taf16.com](https://old.taf16.com)**.

## 🚀 About The Project

### Tech Stack

- **Core:** [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Routing:** [@tanstack/react-router](https://tanstack.com/router)
- **Backend/Data:** [Firebase](https://firebase.google.com/) (Firestore)
- **Styling:** SCSS (Sass) & CSS Modules
- **Containerization:** Docker & Nginx

## 🛠️ Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v20+ recommended)
- npm or yarn

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/thedackss/taf16.com.git
    cd taf16.com
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory. You will need your Firebase configuration keys.

    ```env
    VITE_apiKey=your_api_key
    VITE_authDomain=your_project_id.firebaseapp.com
    VITE_projectId=your_project_id
    VITE_storageBucket=your_project_id.firebasestorage.app
    VITE_messagingSenderId=your_sender_id
    VITE_appId=your_app_id
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```

## 🗄️ Database Setup (Firestore)

This application relies on two specific collections in Cloud Firestore to function correctly:

1.  **`buttons`**: Documents representing the visible buttons on the homepage.
    - Fields: `name` (string), `img_link` (string URL), `id` (auto).
2.  **`links`**: A pool of URLs used for the random link redirection logic.
    - Fields: `name` (string URL).

## 🐳 Docker Deployment

The project includes a multi-stage `Dockerfile` and a `docker-compose.yml` for easy production deployment using Nginx.

### Using Docker Compose

1.  Ensure your environment variables are set (or pass them via `args` in the compose file if modifying the build process).
2.  Run the container:

    ```bash
    docker-compose up -d --build
    ```

The application will be accessible at `http://localhost:8080`.

### Manual Build

To build the image manually, passing build arguments:

```bash
docker build \
  --build-arg VITE_apiKey=... \
  --build-arg VITE_authDomain=... \
  --build-arg VITE_projectId=... \
  --build-arg VITE_storageBucket=... \
  --build-arg VITE_messagingSenderId=... \
  --build-arg VITE_appId=... \
  -t taf16-app .
```
