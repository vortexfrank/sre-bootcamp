import { config, makeDb } from './connection.js';
/**
 * Obtiene un listado de la BBDD MySQL mediante consulta SQL.
 * @param {String} request 
 * @returns Object
 */
export const getMysqlDbList = async (request) => {
    let list = '';
    const db = makeDb(config);

    try {
        list = await db.query(request);
    } catch (err) {
        console.error(err);
    } finally {
        await db.close();
    }

    return list;
}
