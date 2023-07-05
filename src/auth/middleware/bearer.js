'use strict';

const { users } = require('../models/index');


module.exports =async (req, res, next) => {

  if (req.headers.authorization) {
      const token = req.headers.authorization.split(' ').pop();
     await users.authenticateToken(token).then(data => {
          req.user = data
          req.token = data.token;
          next()
      }).catch(err => {
          // next ({ massege: err })
          res.status(403).send('Invalid Login');

          // next(err)
      })
     
  }
}
