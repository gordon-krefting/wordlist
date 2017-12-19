'use strict';

module.exports = {
  matching_words: matching_words
};
function matching_words(request, response) {
  var q = request.swagger.params.q.value;

  response.json(["These","are","some","matching", "words"]);
}
