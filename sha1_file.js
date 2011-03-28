var fs = require('fs')

var sha1_file_buffered = function(fileName, cb) {
  require('fs').readFile(fileName,function(err, data){
    if(err) return cb(err)
    var sha1 = require('crypto').createHash('sha1');
    debugger
    var update = sha1.update(data);
    var digest = update.digest('hex');
    cb(digest)
    //return require('crypto').createHash('sha1').update(data).digest('hex')
  })   
};

//non buffering version
var sha1_file = function(fileName, cb) {
  var sha1 = require('crypto').createHash('sha1');
  fs.stat(fileName, function(err, stats){
		if(err){
			return cb(err)
		}
    fs.open(fileName, 'r', 666 , function(err, fd){
  		if(err){
  			return cb(err);
  		}
  		
		  var read_len = 1024 || stats.blksize,
			  offset = 0;
      var dat= new Buffer(read_len);

				//Actual do read function
			var do_read = function(){
				fs.read(fd, dat, 0, read_len, offset, function(err, readlen){			  
//			var do_read = function(){
//        fs.read(fd, read_len, offset, 'binary', function(err, dat){
  				if(err){
  					return cb(err);
  				}
  				sha1.update(dat); 
  				console.log(dat.length)
  				offset += read_len;
  				//less than blksize bytes left
  				if( read_len > stats.size - offset && offset < stats.size){
  					read_len = stats.size - offset; 
  					dat = new Buffer(read_len);
  				}
				
  				if( offset >= stats.size ){
            //read complete
  					fs.closeSync(fd);
  					//Close and go home
  					var digest = sha1.digest('hex');
  					return cb(null, digest)
  				}
        
          do_read();
          //return require('crypto').createHash('sha1').update(data).digest('hex')
        })  
      }
      do_read()
    })
  }) 
};

module.exports = sha1_file;
module.exports.buffered = sha1_file_buffered;