import UserService from '../service/userServices'
const handleHelloWord = (req, res) => {
    const render = "1234";
    return res.render("home.ejs", { render });
}
const handleUserPage = async (req, res) => {
    let userList = await UserService.getUserList();

    return res.render("user.ejs", { userList });
}
const handleCreateNewUser = async (req, res) => {

    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    let result = await UserService.createUserService(email, name, password);
    res.redirect('/user');
}
const handleDeleteUser = async (req, res) => {
    let deleteUser = await UserService.deleteUser(req.params.id);
    return res.redirect('/user');
}
const getUpdateUser = async (req, res) => {
    let user = await UserService.getUpdateUser(req.params.id);
    let userData = {};

    // if (user != null && user.length > 0) {
    //     userData = user[0];
    //     return res.render('UserUpdate', { userData });
    // } else {
    //     return res.send("Nguoi dung khong ton tai");
    // }
    if (user != null) {
        userData = user;
        return res.render('UserUpdate', { userData });
    } else {
        return res.send("Nguoi dung khong ton tai");
    }
}
const handleUpdateUser = async (req, res) => {
    let userEmail = req.body.email;
    let userName = req.body.name;
    let userId = req.body.id;
    let user = await UserService.updateUser(userEmail, userName, userId);
    console.log(user);
    return res.redirect('/user');
}
module.exports = {
    handleHelloWord,
    handleUserPage,
    handleCreateNewUser,
    handleDeleteUser,
    handleUpdateUser,
    getUpdateUser

}