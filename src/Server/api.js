export async function getShoes() {
    const res = await fetch("/api/shoes")
    if (!res.ok) {
        throw {
            message: "Failed to fetch shoes",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.shoes
}