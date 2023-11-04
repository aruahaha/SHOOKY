import React, { Suspense } from "react";
import { defer, useLoaderData, Await } from "react-router-dom";
import { getShoes } from "../Server/api";

export function loader() {
    return defer({ shoes: getShoes() })
}


export default function Home() {


    return (
        <div>
            <div className="home-content">
                <h1>Step into style and comfort with SHOOKY Where every stride tells a story</h1>
            </div>
            <div className="products">

            </div>
        </div>
    )
}