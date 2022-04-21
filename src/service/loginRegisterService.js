import db from '../models/index.js';//connectdb
import bcryptjs from 'bcryptjs';
import { Op } from 'sequelize';

const salt = bcryptjs.genSaltSync(10);

const hashUserPassword = (userPassword) => {
    return bcryptjs.hashSync(userPassword, salt);
}
const compareUserPassword = (userPassword, hashPassword) => {
    return bcryptjs.compareSync(userPassword, hashPassword);
}
const checkEmail = async (userEmail) => {
    let isExist = await db.User.findOne({
        where: { userEmail: userEmail }
    });
    if (isExist) {
        return true;
    }
    return false;
}

const checkPhone = async (userPhone) => {
    let isExist = await db.User.findOne({
        where: { phone: userPhone }
    });
    if (isExist) {
        return true;
    }
    return false;
}

const registerNewUser = async (rawUserData) => {
    try {
        //check email/phone number are exist
        let emailExists = await checkEmail(rawUserData.email);
        if (emailExists === true) {
            return {
                EM: 'Email exist',
                EC: 1
            }
        }
        let phoneExists = await checkPhone(rawUserData.phone);
        if (phoneExists === true) {
            return {
                EM: 'Phone exist',
                EC: 1
            }
        }
        //hash user password
        let hashPassword = hashUserPassword(rawUserData.password);
        //crete new user
        await db.User.create({
            userEmail: rawUserData.email,
            userName: rawUserData.username,
            userPassword: hashPassword,
            phone: rawUserData.phone
        });
        return {
            EM: 'Create new user successfully ',
            EC: '0'
        }
    } catch (e) {
        console.log("check error : ", e)
        return {
            EM: 'Something wrong ...',
            EC: '-2'
        }
    }
}
const loginUser = async (rawUserAccount) => {
    try {
        let user = await db.User.findOne({
            where: {
                [Op.or]: [
                    { userEmail: rawUserAccount.account },
                    { phone: rawUserAccount.account }
                ]
            },
            raw: true
        });
        if (user) {
            console.log("found user", user);
            let isCorrectPassword = compareUserPassword(rawUserAccount.password, user.userPassword);
            if (isCorrectPassword === true) {
                return {
                    EM: 'ok',
                    EC: '0',
                    DT: ''
                }
            }
        }
        return {
            EM: 'Your email/phone number or password is incorrect',
            EC: '1',
            DT: ''
        }
    } catch (e) {
        console.log("error from service : >>>", e);
        return {
            EM: 'Something wrong ...',
            EC: '-2',
            DT: ''
        }
    }
}
module.exports = {
    registerNewUser,
    loginUser,
    checkEmail,
    checkPhone,
    hashUserPassword
}