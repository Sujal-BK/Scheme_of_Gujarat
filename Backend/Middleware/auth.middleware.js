// import jwt from 'jsonwebtoken'

// export const generateToken = (userData) => {
//     const payload = {
//         email: userData.email,
//         role: userData.role,
//     }
//     return jwt.sign(payload, process.env.JWT_SECRET_KEY)
// }


// export const jsonAuthMiddleware = async (req, resizeBy, next) => {
//     try {
//         const token = req.headers.authorization
//         const verifyToken = jwt.verify(token, process.env.JWT_SECRET_KEY)
//         req.user = { email: verifyToken.email, role: verifyToken.role }
//         next()
//     } catch (error) {
//         console.log(error);
//         return res.status(401).json({
//             success: false,
//             message: "Invalid token or unauthorized access",
//         });
//     }
// }