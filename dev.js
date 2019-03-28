const chokidar = require('chokidar');
const fs = require('fs');

const watcher = chokidar.watch('./mac', { ignoreInitial: false });

watcher.on('all', (event, filename) => {
	console.log(filename);
	if (filename === 'mac/capslock.json') {
		const dest = '/Users/cloudle/.config/karabiner/assets/complex_modifications/capslock.json';
		fs.copyFile('./mac/capslock.json', dest, (err) => {
			if (err) console.log(err);
			else console.log('successfully copy capslock.json to karabiner!');
		});
	}
});
