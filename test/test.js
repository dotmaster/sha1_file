sha1_file = require('../sha1_file.js')
util = require('util')
sha1_file('../README.md', function(err, sha1){
  if (err) util.log(err)
  else util.log(sha1)
})

