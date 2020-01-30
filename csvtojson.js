const path='./talk.csv';
const csv = require('csvtojson');
const fs = require('fs');

var final = {};

csv()
.fromFile(path)
.then((json)=>{
	for (let i = 0; i < json.length; i++) {
		var obj = json[i];
		//console.log(json[i]);
		if (final.hasOwnProperty(obj.Track)) {
			final[obj.Track].push(obj);
		} else {
			final[obj.Track] = [];
			final[obj.Track].push(obj);
		}
	}
	let data = JSON.stringify(final, null, 2);
	fs.writeFile('track.json', data, (err) => {
		if (err) throw err;
		console.log('Data written to file');
	});
})
 