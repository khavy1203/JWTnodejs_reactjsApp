import loginRegisterNewUser from "../service/loginRegisterService";
const test = (req, res) => {
    res.status(200).json({
        message: "oke",
        data: "test api"
    });
}
const handleRegister = async (req, res) => {
    try {
        //email, phone, username, password * validate phía sever
        if (!req.body.email || !req.body.password || !req.body.phone || !req.body.username) {
            return res.status(200).json({
                EM: 'Missing requeried parameters',//error message
                EC: '1',//error code post 
                DT: ''
            })
        }
        if (req.body.password.length < 9) {
            return res.status(200).json({
                EM: 'Your password must have more than 9 letters',//error message
                EC: '1',//error code post 
                DT: ''
            })
        }
        //service * call service create user
        let data = await loginRegisterNewUser.registerNewUser(req.body);
        res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: ''
        });
    } catch (e) {
        console.error("check error: ", e);
        return res.status(500).json({
            EM: 'error from sever',//error message
            EC: '-1',//error code
            DT: ''
        })
    }

}
const handleLogin = async (req, res) => {
    //call login service
    try {
        let data = await loginRegisterNewUser.loginUser(req.body);
        res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        });
    } catch (e) {
        console.error("check error: ", e);
        return res.status(500).json({
            EM: 'error from sever',//error message
            EC: '-1',//error code
            DT: ''
        })
    }

}
module.exports = {
    test,
    handleRegister,
    handleLogin

}