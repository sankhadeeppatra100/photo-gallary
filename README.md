# Photo Gallery

## Run locally

The gallery and account features need MongoDB. The root `npm run dev` command starts both the React app and API server together.

1. Start the Windows service named `MongoDB` (PowerShell: `Start-Service MongoDB`).
2. Make sure `server/.env` exists and has a valid `MONGODB_URI` and `JWT_SECRET`; use `server/.env.example` as a template.
3. From the project root, run `npm run dev`.

The terminal starts both servers. Open the Vite URL it prints. The API should respond at `http://localhost:5000/api/health` with `{"status":"ok"}`. Vite forwards `/api` login and account requests to the API automatically.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
