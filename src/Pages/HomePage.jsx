import React, { Suspense } from "react";
import { defer, useLoaderData, Await } from "react-router-dom";
import { getShoes } from "../Server/api";
import Cards from "../Components/CardContainer";

export function loader() {
    return defer({ shoes: getShoes() })
}


export default function Home() {

    const data = useLoaderData()

    return (
        <div>
            <div className="home-content">
                <h1>Step into style and comfort with SHOOKY Where every stride tells a story</h1>
            </div>
            <div className="products">
                <h1 className="best-seller-title">Best Seller</h1>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Await resolve={data.shoes}>
                        {(shoes) => {
                            const shuffled = shoes.sort(() => 0.5 - Math.random());
                            let selected = shuffled.slice(0, 4);
                            return (
                                <Cards data={selected} />
                            )
                        }}
                    </Await>
                </Suspense>
            </div>
        </div>
    )
}