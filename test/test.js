sha1_file = require('../sha1_file.js')
util = require('util')
//var file = '../README.md'
var file = '/Users/dotmaster/Downloads/Software/Microsoft Office 2011 v14.0.0.dmg'
stat = require('fs').statSync(file)
size = stat['size']
var start = new Date().getTime()
sha1_file(file, function(err, sha1){
  if (err) return util.log(err)
    var end = new Date().getTime()
  util.log(sha1 + ' rate: ' + (size/(end-start) *1000 /(1024*1024)).toFixed(2) + 'mb/sec')
})

