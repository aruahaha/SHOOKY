import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import "../src/style.css"
import "../src/Server/shoeServer"
import Layout from "./Components/Layout";
import Home, { loader as HomePageLoader } from "./Pages/HomePage";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />} >
        <Route index element={<Home />} loader={HomePageLoader} />
        <Route path="men" element={<h1>Men</h1>} />
        <Route path="women" element={<h1>Women</h1>} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="cart" element={<h1>Cart</h1>} />
    </Route>
))

function App() {
    return (
        <RouterProvider router={router} />
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<App />)