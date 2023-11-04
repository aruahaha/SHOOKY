import { createServer, Model, Response } from "miragejs"


createServer({
    models: {
        shoes: Model,
    },

    seeds(server) {
        server.create("shoe", {
            id: "1",
            name: "Running Shoes",
            price: 75,
            description: "Lightweight and cushioned, perfect for your daily run.",
            imageUrl: "/Images/id1.png",
            type: "athletic",
            brand: "Runner's Choice",
            size: 8,
            color: "Blue",
            material: "Mesh and synthetic",
            gender: "unisex"
        });

        server.create("shoe", {
            id: "2",
            name: "Classic Sneakers",
            price: 60,
            description: "Timeless design suitable for any casual occasion.",
            imageUrl: "/Images/id2.png",
            type: "casual",
            brand: "FashionFoot",
            size: 7,
            color: "Classic Sneakers",
            material: "Canvas",
            gender: "unisex"
        });

        server.create("shoe", {
            id: "3",
            name: "Formal Oxfords",
            price: 90,
            description: "Elegant and sophisticated, perfect for formal events.",
            imageUrl: "/Images/id3.png",
            type: "formal",
            brand: "ClassySteps",
            size: 9,
            color: "Black",
            material: "Leather",
            gender: "men"
        });


        server.create("shoe", {
            id: "4",
            name: "Flip-Flops",
            price: 20,
            description: "Comfortable and easy-going, ideal for the beach or a casual day out.",
            imageUrl: "/Images/id4.png",
            type: "casual",
            brand: "SunnyWalks",
            size: 6,
            color: "Red",
            material: "Rubber",
            gender: "unisex"
        });

        server.create("shoe", {
            id: "5",
            name: "High Heels",
            price: 100,
            description: "Stylish heels suitable for parties and special occasions.",
            imageUrl: "/Images/id5.png",
            type: "fashion",
            brand: "GlamFeet",
            size: 7,
            color: "Silver",
            material: "Suede",
            gender: "women"
        });


        server.create("shoe", {
            id: "6",
            name: "Snow Boots",
            price: 110,
            description: "Insulated boots designed to keep your feet warm in cold conditions.",
            imageUrl: "/Images/id6.png",
            type: "outdoor",
            brand: "FrostGuard",
            size: 8,
            color: "Gray",
            material: "Nylon and synthetic",
            gender: "unisex"
        });

        server.create("shoe", {
            id: "7",
            name: "Loafers",
            price: 80,
            description: "Smart and casual loafers suitable for various occasions.",
            imageUrl: "/Images/id7.png",
            type: "casual",
            brand: "ComfyStride",
            size: 9,
            color: "Brown",
            material: "Suede",
            gender: "men"
        });

        server.create("shoe", {
            id: "8",
            name: "Slip-Ons",
            price: 50,
            description: "Easy-to-wear slip-on shoes for quick and comfortable use.",
            imageUrl: "/Images/id8.png",
            type: "casual",
            brand: "QuickSteps",
            size: 7,
            color: "Black",
            material: "Fabric",
            gender: "unisex"
        });

        server.create("shoe", {
            id: "9",
            name: "Espadrilles",
            price: 70,
            description: "Lightweight and breezy shoes perfect for summer outings.",
            imageUrl: "/Images/id9.png",
            type: "casual",
            brand: "SunShades",
            size: 8,
            color: "Beige",
            material: "Canvas and jute",
            gender: "women"
        });

        server.create("shoe", {
            id: "10",
            name: "Work Boots",
            price: 95,
            description: "Sturdy and durable boots for rugged work environments.",
            imageUrl: "/Images/id10.png",
            type: "work",
            brand: "ToughTread",
            size: 10,
            color: "Brown",
            material: "Leather and steel",
            gender: "men"
        });

        server.create("shoe", {
            id: "11",
            name: "Sandals",
            price: 45,
            description: "Comfortable sandals for casual wear during the summer.",
            imageUrl: "/Images/id11.png",
            type: "casual",
            brand: "SummerEase",
            size: 7,
            color: "Brown",
            material: "Leather and rubber",
            gender: "unisex"
        });

        server.create("shoe", {
            id: "12",
            name: "Wedge Heels",
            price: 85,
            description: "Stylish wedge heels for a trendy and elevated look.",
            imageUrl: "/Images/id12.png",
            type: "fashion",
            brand: "ElevateStyle",
            size: 6,
            color: "Black",
            material: "Suede",
            gender: "women"
        });

        server.create("shoe", {
            id: "13",
            name: "Boat Shoes",
            price: 70,
            description: "Casual and comfortable boat shoes for a relaxed vibe.",
            imageUrl: "/Images/id13.png",
            type: "casual",
            brand: "NauticalSteps",
            size: 8,
            color: "Navy",
            material: "Canvas and leather",
            gender: "unisex"
        });

        server.create("shoe", {
            id: "14",
            name: "Ankle Boots",
            price: 85,
            description: "Stylish and versatile ankle boots for various outfits.",
            imageUrl: "/Images/id14.png",
            type: "fashion",
            brand: "TrendySteps",
            size: 7,
            color: "Brown",
            material: "Suede and leather",
            gender: "women"
        });

        server.create("shoe", {
            id: "15",
            name: "Slippers",
            price: 25,
            description: "Comfortable slippers for a cozy evening at home.",
            imageUrl: "/Images/id15.png",
            type: "home",
            brand: "CozyComfort",
            size: 9,
            color: "Gray",
            material: "Cotton and fleece",
            gender: "unisex"
        });

        server.create("shoe", {
            id: "16",
            name: "Platform Shoes",
            price: 95,
            description: "Fashionable platform shoes for a bold statement.",
            imageUrl: "/Images/id16.png",
            type: "fashion",
            brand: "BoldSteps",
            size: 8,
            color: "Black",
            material: "Leather and rubber",
            gender: "women"
        });

        server.create("shoe", {
            id: "17",
            name: "Moccasins",
            price: 55,
            description: "Casual and comfortable moccasins for everyday wear.",
            imageUrl: "/Images/id17.png",
            type: "casual",
            brand: "EverydayComfort",
            size: 8,
            color: "Tan",
            material: "Suede",
            gender: "men"
        });

        server.create("shoe", {
            id: "18",
            name: "Hiking Boots",
            price: 120,
            description: "Durable boots designed for challenging hiking trips.",
            imageUrl: "/Images/id18.png",
            type: "outdoor",
            brand: "TrailBlazers",
            size: 9,
            color: "Brown",
            material: "Leather and Gore-Tex",
            gender: "unisex"
        });

        server.create("shoe", {
            id: "19",
            name: "Clogs",
            price: 40,
            description: "Comfortable and easy-to-wear clogs for daily use.",
            imageUrl: "/Images/id19.png",
            type: "casual",
            brand: "ComfortSteps",
            size: 7,
            color: "Black",
            material: "Leather",
            gender: "unisex"
        });

        server.create("shoe", {
            id: "20",
            name: "Dress Sandals",
            price: 90,
            description: "Stylish dress sandals for formal or special occasions.",
            imageUrl: "/Images/id20.png",
            type: "formal",
            brand: "ElegantFootwear",
            size: 8,
            color: "Silver",
            material: "Satin and leather",
            gender: "women"
        });
    },

    routes() {
        this.namespace = "api"
        this.logging = false
        this.timing = 1000

        this.get("/shoes", (schema, request) => {
            // return new Response(400, {}, {error: "Error fetching data"})
            return schema.shoes.all()
        })

        this.get("/shoes/Men", (schema, request) => {
            // return new Response(400, {}, {error: "Error fetching data"})
            return schema.shoes.where({ gender: "men" })
        })

        this.get("/shoes/Women", (schema, request) => {
            // return new Response(400, {}, {error: "Error fetching data"})
            return schema.shoes.where({ gender: "women" })
        })

        this.get("/shoes/Men/:id", (schema, request) => {
            const id = request.params.id
            return schema.shoes.find(id)
        })

        this.get("/shoes/Women/:id", (schema, request) => {
            const id = request.params.id
            return schema.shoes.find(id)
        })

    }
})

