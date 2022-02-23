// get the client
import mysql2 from 'mysql2/promise';
import bluebird from 'bluebird';
import bcryptjs from 'bcryptjs';

// create the connection to database
// create the connection, specify bluebird as Promise

// query database

const salt = bcryptjs.genSaltSync(10);

const hashUserPassword = (userPassword) => {
    return bcryptjs.hashSync(userPassword, salt);
}
const createUserService = (userEmail, userPassword) => {
    let userHashPassword = hashUserPassword(userPassword);
    connection.query(
        'INSERT INTO `user`(`userEmail`, `userPassword`) VALUES (?,?)', [userEmail, userHashPassword],
        function (err, results, fields) {
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
        }
    );
    return userHashPassword;
}
const getUserList = async () => {
    // connection.query(
    //     'SELECT * FROM `user`',
    //     function (err, results, fields) {
    //         console.log(results); // results contains rows returned by server
    //         // console.log(fields); // fields contains extra meta data about results, if available
    //     }
    // );
    const connection = await mysql2.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'users',
        Promise: bluebird
    });

    try {
        const [rows, fields] = await connection.execute('SELECT * FROM `user`');
        return rows;
    } catch (error) {
        console.log(">>> Check error: ", error);
    }

}
module.exports = {
    createUserService,
    getUserList
}