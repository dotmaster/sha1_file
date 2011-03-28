sha1_file = require('../sha1_file.js')
util = require('util')
sha1_file('/Users/dotmaster/Downloads/Software/Microsoft Office 2011 v14.0.0.dmg', function(err, sha1){
  if (err) util.log(err)
  else util.log(sha1)
})

