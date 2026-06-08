let Products = [
    { name: "product 1", price: "100$", id: 1 },
    { name: "product 2", price: "200$", id: 2 },
    { name: "product 3", price: "150$", id: 3 },
]

export async function GET(request) {
    try {
        return new Response(
            JSON.stringify(Products),
            {
                status: 200,
                headers: { "Content-Type": "application/json" }
            }
        )
    } catch (error) {
        console.log(error)
        return new Response(
            JSON.stringify({ error: error.message }), 
            {
                status: 500,
                headers: { "Content-Type": "application/json" }
            }
        )
    }
}

export async function POST(request) {
try{
    let requa = request.JSON()
    Products.push(requa)
    return new Response(
        JSON.stringify(Products),
        {
            status: 200  , 
              headers: { "Content-Type": "application/json" }
        }
    )
    }catch(error){
        return new Response(
            JSON.stringify({error : error.message}), 
              {
            status: 400  , 
              headers: { "Content-Type": "application/json" }
        }
        )
    }
}