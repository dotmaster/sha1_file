sha1_file_buffered = require('../sha1_file.js').buffered
util = require('util')
sha1_file_buffered('../README.md', function(err, sha1){
  if (err) util.log(err)
  else util.log(sha1)
})

