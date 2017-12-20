'use strict';

const util = require('util'); //?
const { exec } = require('child_process');

module.exports = {
  matching_words: matching_words
};

function matching_words(request, response) {
  var q = request.swagger.params.q.value.toLowerCase();

  // '' -> []
  if (q === '') {
    response.json([]);
    return;
  }

  // only letters and '.' allowed
  var pattern = /[^a-z\.]+/;
  if (q.match(pattern)) {
    response.json([]);
    return;
	}

	var cmd = `/usr/bin/grep "^${q}$" /usr/share/dict/words | head -n 101`;
	
	exec(cmd, (err, stdout, stderr) => {

	  if (err) {
	  	console.log(`error: ${err}`);
	  	// How to throw errors?
	    // node couldn't execute the command
	    return;
	  }

	  // the *entire* stdout and stderr (buffered)
	  if (stdout === '') {
	  	response.json([]);
	  } else {
		  response.json(stdout.split("\n"));
	  }
	  return;
	});
}
