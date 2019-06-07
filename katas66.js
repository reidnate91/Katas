// 66: object-literal - getter
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('An object literal can also contain getters', () => {
    it('just prefix the property with `get` (and make it a function)', function() {
      const obj = {
       get x() { return 'ax'; }
      };
      assert.equal(obj.x, 'ax');
    });
    
    // describe('An object literal can also contain getters', () => {
    // it('just prefix the property with `get` (and make it a function)', function() {
    //   const obj = {
    //     x() { return 'ax'; }
    //   };
    //   assert.equal(obj.x, 'ax');
    // });
    
    it('must have NO parameters', function() {
      const obj = {
       get x() { return 'ax'; }
      };
      assert.equal(obj.x, 'ax');
    });
    
    //   it('must have NO parameters', function() {
    //   const obj = {
    //     x(param) { return 'ax'; }
    //   };
    //   assert.equal(obj.x, 'ax');
    // });
    
    it('can be a computed property (an expression enclosed in `[]`)', function() {
      const keyName = 'x';
      const obj = {
        get [keyName]() { return 'ax'; }
      };
      assert.equal(obj.x, 'ax');
    });
    
    //   it('can be a computed property (an expression enclosed in `[]`)', function() {
    //   const keyName = 'x';
    //   const obj = {
    //     get keyName() { return 'ax'; }
    //   };
    //   assert.equal(obj.x, 'ax');
    // });
    
    it('can be removed using delete', function() {
      const obj = {
        get x() { return 'ax'; }
      };
      delete obj.x;
      assert.equal(obj.x, void 0);
    });
    
    //   it('can be removed using delete', function() {
    //   const obj = {
    //     get x() { return 'ax'; }
    //   };
    //   delete obj.y;
    //   assert.equal(obj.x, void 0);
    // });
     })   