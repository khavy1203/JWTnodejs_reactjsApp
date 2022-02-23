import UserService from '../service/userServices'
const handleHelloWord = (req, res) => {
    const render = "1234";
    return res.render("home.ejs", { render });
}
const handleUserPage = async (req, res) => {
    let userList = await UserService.getUserList();
    console.log(">>>> userList: " + userList)
    return res.render("user.ejs", { userList });
}
const handleCreateNewUser = (req, res) => {

    let email = req.body.email;
    let password = req.body.password;
    // let result = UserService.createUserService(email, password);
    res.send("create-new-user")
}
module.exports = {
    handleHelloWord,
    handleUserPage,
    handleCreateNewUser
}