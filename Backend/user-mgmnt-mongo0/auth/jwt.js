import jwt from 'jsonwebtoken';


const SECRET = process.env.JWT_SECRET;

function signToken(payload){
    const token = jwt.sign(
        payload, 
        SECRET, 
        {
            expiresIn:"30d",
            algorithm:"HS256"
        }
    )

    return token;
}


function verifyToken(token){
    return jwt.verify(token, SECRET);
}


export {
    signToken,
    verifyToken
}