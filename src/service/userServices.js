// get the client
import mysql2 from 'mysql2/promise';
import bluebird from 'bluebird';
import bcryptjs from 'bcryptjs';
import db from '../models/index.js';

// create the connection to database
// create the connection, specify bluebird as Promise

// query database

const salt = bcryptjs.genSaltSync(10);

const hashUserPassword = (userPassword) => {
    return bcryptjs.hashSync(userPassword, salt);
}
const createUserService = async (userEmail, userName, userPassword) => {
    let userHashPassword = hashUserPassword(userPassword);
    // connection.query(
    //     'INSERT INTO `user`(`userEmail`, `userPassword`) VALUES (?,?)', [userEmail, userHashPassword],
    //     function (err, results, fields) {
    //         console.log(results); // results contains rows returned by server
    //         console.log(fields); // fields contains extra meta data about results, if available
    //     }
    // );
    // return userHashPassword;


    try {
        await db.User.create({
            userEmail: userEmail,
            userName: userName,
            userPassword: userHashPassword
        })
    } catch (error) {
        console.log(">>> Check error: ", error);
    }
}
const getUserList = async () => {
    // connection.query(
    //     'SELECT * FROM `user`',
    //     function (err, results, fields) {
    //         console.log(results); // results contains rows returned by server
    //         // console.log(fields); // fields contains extra meta data about results, if available
    //     }
    // );
    // const connection = await mysql2.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     database: 'jwt',
    //     Promise: bluebird
    // });
    let users = [];
    try {
        users = await db.User.findAll();
        return users;
    } catch (error) {
        console.log(">>> Check error: ", error);
    }

}
const deleteUser = async (id) => {
    // const connection = await mysql2.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     database: 'jwt',
    //     Promise: bluebird
    // });

    // try {
    //     const [rows, fields] = await connection.execute('DELETE FROM `user` WHERE id= ?', [id]);
    //     return rows;
    // } catch (error) {
    //     console.log(">>> Check error: ", error);
    // }
    try {
        await db.User.destroy({
            where: {
                id: id
            }
        });
    } catch (error) {
        console.log(">>> Check error: ", error);
    }
}
const getUpdateUser = async (id) => {
    // const connection = await mysql2.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     database: 'jwt',
    //     Promise: bluebird
    // });

    // try {
    //     const [rows, fields] = await connection.execute('SELECT * FROM `user`WHERE id= ?', [id]);
    //     console.log(rows);
    //     return rows;
    // } catch (error) {
    //     console.log(">>> Check error: ", error);
    // }
    let user;
    try {
        user = await db.User.findOne({
            where: {
                id: id
            }
        });
        return user.get({
            plain: true
        });
    }
    catch (error) {
        console.log(">>> Check error: ", error);
    }
}
const updateUser = async function (userEmail, userName, userId) {
    // const connection = await mysql2.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     database: 'jwt',
    //     Promise: bluebird
    // });
    // try {
    //     const [rows, fields] = await connection.execute('UPDATE `user` SET `userEmail`=?,`userName`=? WHERE id = ? ', [userEmail, userName, userId]);

    //     return rows;
    // } catch (error) {
    //     console.log(">>> Check error: ", error);
    // }
    try {
        await db.User.update(
            {
                userEmail: userEmail,
                userName: userName,
            },
            {
                where: {
                    id: userId,
                }
            }
        )
    } catch (error) {
        console.log(">>> Check error: ", error);
    }
}
module.exports = {
    createUserService,
    getUserList,
    deleteUser,
    getUpdateUser,
    updateUser
}