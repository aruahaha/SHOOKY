import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<h1>Hello world</h1>} />
))

function App() {
    return (
        <RouterProvider router={router} />
    )
}

ReactDOM
    .createRoot(document.getElementById("root"))
    .render(<App />)