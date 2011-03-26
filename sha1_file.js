var sha1_file = function(fileName) {
  require('fs').readFile(fileName,function(err, data){
    return require('crypto').createHash('sha1').update(data).digest('hex')
  })   
};


module.exports = sha1_file;