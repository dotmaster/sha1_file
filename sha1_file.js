var sha1_file = function(fileName, cb) {
  require('fs').readFile(fileName,function(err, data){
    var sha1 = require('crypto').createHash('sha1');
    var update = sha1.update(data);
    var digest = update.digest('hex');
    cb(digest)
    //return require('crypto').createHash('sha1').update(data).digest('hex')
  })   
};


module.exports = sha1_file;