import User from "../Model/user.model.js"

export const SignUp = async (req, res) => {
    try {
        const { username, email, password } = req.body
        if (!username) {
            return res.status(404).json({
                success: false,
                message: "username is required",
            })
        }
        if (!email) {
            return res.status(404).json({
                success: false,
                message: "email is required",
            })
        }
        if (!password) {
            return res.status(404).json({
                success: false,
                message: "password is required",
            })
        }

        const user = await User.create({
            username,
            email,
            password
        })
        return res.status(200).json({
            success: true,
            message: "Registration Successfully...",
            user
        })

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error in Sign Up",
            error
        })
    }
}


export const SignIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            console.log('Email or password is missing');
            return res.status(400).json({ message: "All Fields are Mandatory..." })
        }

        const user = await User.findOne({ email })
        if (!user) {
            console.log('User not found:', email);
            return res.status(400).json({ message: "Invalid Creadentials...", user })
        }




        return res.status(200).json({
            success: true,
            message: "Login Successfully...",
        })
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Internam Server Error in Sign In",
            error
        })

    }

}