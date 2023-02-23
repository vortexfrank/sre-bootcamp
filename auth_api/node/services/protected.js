import jsonwebtoken from 'jsonwebtoken';

export const protectFunction = (authorization) => {
  let tokenSecretKey = "my2w7wjd7yXF64FIADfJxNs1oupTGAuW";

  try{
    if(typeof authorization !== 'undefined')
    {
      const bearer = authorization.split(' ');
      var bearerToken = bearer[1];
    }
    else{
      return 'You are under protected data';
    }

    const verified = jsonwebtoken.verify(bearerToken, tokenSecretKey);
    if(verified){
        return "Successfully verified";
    }
    else{
        return 'You are under protected data';
    }
  }catch ( error ) {
    return 'You are under protected data';
  }
}
