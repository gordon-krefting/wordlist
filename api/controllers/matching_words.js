'use strict';

module.exports = {
  matching_words: matching_words
};
function matching_words(request, response) {
  var q = request.swagger.params.q.value;

  var pattern = /[^a-z\.]+/;

  if (q === '') {
    response.json([]);
    return;
  }

  if (q.match(pattern)) {
    response.json([]);
    return;
	}

  response.json(["These","are","some","matching", "words", "tree"]);
}
