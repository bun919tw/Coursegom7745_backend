
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.temp = function(req, res){
	var data = {};
	data.temp = 'good';
	res.send(data);
};