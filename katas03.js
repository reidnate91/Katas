describe('the tag function can access each part of the template', function() {
    describe('the 1st parameter receives only the pure strings of the template string', function() {
      function tagFunction(strings) {
        return strings;
      }
      it('the strings are an array', function() {
        var result = 'template string';
        assert.deepEqual(tagFunction`template string`, result);
      });
      it('expressions are NOT passed to it', function() {
        var tagged = tagFunction`one${23}`;
        assert.deepEqual(tagged, ['one', 'two']);
      });
    })