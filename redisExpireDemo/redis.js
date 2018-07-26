var redis = require("redis");
var client = redis.createClient("6379", "127.0.0.1");

client.on("error", function (error) {
	console.log(error);
});

client.select("15", function (error) {
	if (error) {
		console.log(error);
		return;
	}
});

function existInRedis(key) {
	client.get("s7::"+key, function (err, reply) {
		if (err) {
			console.error(err);
		} else {
			console.info("get reply = ", reply);
			if (reply === null) {
				return false;
			} else {
				return true;
			}
		}
	});
}

function addToRedis(key) {
	client.set("s7::"+key, JSON.stringify({"name":"wolfy", age:28}), function (error, res) {
		if (error) {
			console.error(error);
		} else {
			console.info("set reply = ", res);
		}
	});
	
	client.expire("s7::"+key, 60, function (err, reply) {
		if (err) {
			console.error(err);
		} else {
			console.info("expire reply = ", reply);
		}
	});
}

client.set("stringkey", "stringvalue", redis.print);
console.log('client.exists("stringkey") = ', client.exists("stringkey"));



