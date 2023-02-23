import { generateAccessToken } from './jwtToken.js';
import { getMysqlDbList } from '../modules/utils.js';


export const loginFunction = async (username, password) => {
  let token;
  const request = `SELECT role FROM bootcamp_tht.users WHERE username = '${username}'`;
  var role = await getMysqlDbList(request);
  console.log('Role: ', role);
  token =  generateAccessToken(role);
  return token;
}