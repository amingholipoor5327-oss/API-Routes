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
    let requa =  await request.json()
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


export async function PUT(request) {
    try {
        const updatedProduct = await request.json();

        const index = Products.findIndex(
            (product) => product.id === updatedProduct.id
        );

        if (index === -1) {
            return Response.json(
                { message: "Product not found" },
                { status: 404 }
            );
        }

        Products[index] = {
            ...Products[index],
            ...updatedProduct
        };

        return Response.json({
            message: "Product updated successfully",
            product: Products[index]
        });

    } catch (error) {
        return Response.json(
            { error: error.message },
            { status: 500 }
        );
    }
}


export async function DELETE(request) {
    try {
        const requested = await request.json();

        Products = Products.filter(
            (p) => p.id !== requested.id
        );

        return new Response(
            JSON.stringify({
                message: "محصول با موفقیت حذف شد",
                products: Products
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

    } catch (error) {
        return new Response(
            JSON.stringify({
                error: error.message
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
    }
}