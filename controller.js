import User from "./models/user.js"

class controller {

    async registration(req, res) {
        try {

            const {firstname, lastname, login, email, password} = req.body;
            console.log(req.body)
            console.log("hii")
            console.log(firstname)
            const candidate = await User.findOne({login});
            if (candidate) {
                return res.status(400).json({message: "User already exist"})
            }

            const user = new User({firstname, lastname, login, email, password});
            await user.save();
            return res.json({message: "User was created"});
        } catch (e) {
            console.log(e);
            res.status(400).json({message: "Registration error"})
        }
    }

    async login(req, res) {
        try {
            const {email, password} = req.body;
            const user = await User.findOne({email});
            if (!user) {
                return res.status(400).json({message: "Email is incorrect"})
            }

            if (password != user.password) {
                return res.status(400).json({message: "Password is incorrect"})
            }
            return res.json({message: "You have successfully logged in"});
        } catch (e) {
            console.log(e);
            res.status(400).json({message: "Login error"})
        }
    }
}

export default new controller();