import util from 'util';
import mysql from 'mysql';

export const config = {
    host: "sre-bootcamp-selection-challenge.cabf3yhjqvmq.us-east-1.rds.amazonaws.com",
    user: "secret",
    password: "jOdznoyH6swQB9sTGdLUeeSrtejWkcw",
    port: "3306"
};

export const makeDb = (config) => {
    const connection = mysql.createConnection(config);
    return {
        query(sql, args) {
            return util.promisify(connection.query)
                .call(connection, sql, args);
        },
        close() {
            return util.promisify(connection.end).call(connection);
        }
    };
}