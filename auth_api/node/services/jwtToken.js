import jsonwebtoken from 'jsonwebtoken';

var JWT_TOKEN = "my2w7wjd7yXF64FIADfJxNs1oupTGAuW";

export const generateAccessToken = (role) => {
    let data = {
        role : role
    }

    return jsonwebtoken.sign(data, JWT_TOKEN);
}