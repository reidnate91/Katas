describe('`return` in a generator function is special', function() {

    describe('the returned value is an IteratorResult (just like any value returned via `yield`)', function() {
  
      it('returns an IteratorResult (an object with the properties `value` and `done`)', function() {
        function* generatorFunction() { return 1; }
        const returned = generatorFunction().next();
        const propertyNames = Object.keys(returned);
        assert.deepEqual(Object.keys(returned), propertyNames);
      });
  
      it('the property `value` is the value given after the `return` statement', function() {
        function* generatorFunction() { return 23; }
        const {value} = generatorFunction().next();
        assert.equal(value, 23);
      });
  
      it('the property `done` is true', function() {
        function* generatorFunction() { return 42; }
        const {done} = generatorFunction().next();
        assert.equal(done, true);
      });
  
      it('NOTE: `yield` does not return `done=true` but `done=false`!', function() {
        function* generatorFunction() { yield 1; }
        const returned = generatorFunction().next();
        assert.deepEqual(returned, {value: 1, done: false});
      });
  
      it('a missing `return` returns {value: undefined, done: true}', function() {
        function* generatorFunction() { return; }
        const returned = generatorFunction().next();
        assert.deepEqual(returned, {value: void 0, done: true});
      });
  
    });
  
    describe('mixing `return` and `yield`', function() {
  
      function* generatorFunctionWithYieldAndReturn() {
        yield 1;
        return 2;
      }
  
      function* generatorFunctionWithTwoYields() {
        yield 1;
        yield 2;
      }
  
      it('is possible', function() {
        const iterator = generatorFunctionWithYieldAndReturn();
        const values = [
          iterator.next(),
          iterator.next()
        ];
        assert.deepEqual(values, [{value: 1, done: false}, {value: 2, done: true}]);
      });
  
      it('the mix behaves different to two `yield`s', function() {
        const iterator = generatorFunctionWithTwoYields();
        const values = [1, 2];
        assert.deepEqual(Array.from(iterator), values);
      });
  
      it('two `yield`s returning values', function() {
        assert.deepEqual(Array.from(generatorFunctionWithTwoYields()), [1, 2]);
      });
  
      it('returning a yielded value', function() {
        function* generatorFunction() {
          yield 1
          return 2;
        }
        const iterator = generatorFunction();
        const values = [
          iterator.next().value,
          iterator.next(2).value
        ];
        assert.deepEqual(values, [1, 2]);
      });
  
    });
  
  });
  