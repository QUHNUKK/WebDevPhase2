const users = [
    {"username": "ahmad",
        "password": 974,
        "type": "Customer",
        "money": 100000,
        "transactions": [],
        "surname":"AL-Thani",
        "address":"Qatar Doha Al Rayyan Zone 55 street 1037 Home 5"},
    {"username": "mike",
        "password": 911,
        "type": "Seller",
        "transactions": [],
        "companyName":"Pocco",
        "bankAccount":"QIIB72634982300000069823" },
    {"username": "walter",
        "password": 420,
        "type": "Customer",
        "money": 2500,
        "transactions": [],
        "surname":"White",
        "address":"USA 308 Negra Arroyo Lane, Albuquerque, New Mexico 87104 "},
    {"username": "tom",
        "password": 8793,
        "type": "Seller",
        "transactions": [],
        "companyName":"ooredoo",
        "bankAccount":"QIB234482300000069823"},
    {   "username": "jim",
        "password": 8793,
        "type": "Seller",
        "transactions": [],
        "companyName":"Qualcomm",
        "bankAccount":"QNB72356982300000069823"},
    {   "username": "admin",
        "password": 123,
        "type": "Admin"}
]

export async function GET(request){
    const {searchParams} = new URL(request.url)
    const type = searchParams.get("type")
    if (!type) return  Response.json({users},{ status : 200})
    const filteredUsers = users.filter(user => user.type === type)
    return Response.json({filteredUsers},{ status : 200})
}

export async function PUT(request){
    return Response.json({message : "Welcome to /api/account PUT method"},{ status : 200})
}

export async function DELETE(request){
    return Response.json({message : "Welcome to /api/account DELETE method"},{ status : 200})

}

export async function POST(request){
    return Response.json({message : "Welcome to /api/account POST method"},{ status : 200})
}
     