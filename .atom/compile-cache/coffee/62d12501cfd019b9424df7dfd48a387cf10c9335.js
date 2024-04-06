(function() {
  var BufferColorsScanner, ColorContext, ColorExpression, ColorScanner, ColorsChunkSize, ExpressionsRegistry;

  ColorScanner = require('../color-scanner');

  ColorContext = require('../color-context');

  ColorExpression = require('../color-expression');

  ExpressionsRegistry = require('../expressions-registry');

  ColorsChunkSize = 100;

  BufferColorsScanner = (function() {
    function BufferColorsScanner(config) {
      var colorVariables, registry, variables;
      this.buffer = config.buffer, variables = config.variables, colorVariables = config.colorVariables, this.bufferPath = config.bufferPath, this.scope = config.scope, registry = config.registry;
      registry = ExpressionsRegistry.deserialize(registry, ColorExpression);
      this.context = new ColorContext({
        variables: variables,
        colorVariables: colorVariables,
        referencePath: this.bufferPath,
        registry: registry
      });
      this.scanner = new ColorScanner({
        context: this.context
      });
      this.results = [];
    }

    BufferColorsScanner.prototype.scan = function() {
      var lastIndex, result;
      if (this.bufferPath == null) {
        return;
      }
      lastIndex = 0;
      while (result = this.scanner.search(this.buffer, this.scope, lastIndex)) {
        this.results.push(result);
        if (this.results.length >= ColorsChunkSize) {
          this.flushColors();
        }
        lastIndex = result.lastIndex;
      }
      return this.flushColors();
    };

    BufferColorsScanner.prototype.flushColors = function() {
      emit('scan-buffer:colors-found', this.results);
      return this.results = [];
    };

    return BufferColorsScanner;

  })();

  module.exports = function(config) {
    return new BufferColorsScanner(config).scan();
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9DOi9Vc2Vycy9QcmFzaGFudGgvLmF0b20vcGFja2FnZXMvcGlnbWVudHMvbGliL3Rhc2tzL3NjYW4tYnVmZmVyLWNvbG9ycy1oYW5kbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUE7O0VBQUEsWUFBQSxHQUFlLE9BQUEsQ0FBUSxrQkFBUjs7RUFDZixZQUFBLEdBQWUsT0FBQSxDQUFRLGtCQUFSOztFQUNmLGVBQUEsR0FBa0IsT0FBQSxDQUFRLHFCQUFSOztFQUNsQixtQkFBQSxHQUFzQixPQUFBLENBQVEseUJBQVI7O0VBQ3RCLGVBQUEsR0FBa0I7O0VBRVo7SUFDUyw2QkFBQyxNQUFEO0FBQ1gsVUFBQTtNQUFDLElBQUMsQ0FBQSxnQkFBQSxNQUFGLEVBQVUsNEJBQVYsRUFBcUIsc0NBQXJCLEVBQXFDLElBQUMsQ0FBQSxvQkFBQSxVQUF0QyxFQUFrRCxJQUFDLENBQUEsZUFBQSxLQUFuRCxFQUEwRDtNQUMxRCxRQUFBLEdBQVcsbUJBQW1CLENBQUMsV0FBcEIsQ0FBZ0MsUUFBaEMsRUFBMEMsZUFBMUM7TUFDWCxJQUFDLENBQUEsT0FBRCxHQUFXLElBQUksWUFBSixDQUFpQjtRQUFDLFdBQUEsU0FBRDtRQUFZLGdCQUFBLGNBQVo7UUFBNEIsYUFBQSxFQUFlLElBQUMsQ0FBQSxVQUE1QztRQUF3RCxVQUFBLFFBQXhEO09BQWpCO01BQ1gsSUFBQyxDQUFBLE9BQUQsR0FBVyxJQUFJLFlBQUosQ0FBaUI7UUFBRSxTQUFELElBQUMsQ0FBQSxPQUFGO09BQWpCO01BQ1gsSUFBQyxDQUFBLE9BQUQsR0FBVztJQUxBOztrQ0FPYixJQUFBLEdBQU0sU0FBQTtBQUNKLFVBQUE7TUFBQSxJQUFjLHVCQUFkO0FBQUEsZUFBQTs7TUFDQSxTQUFBLEdBQVk7QUFDWixhQUFNLE1BQUEsR0FBUyxJQUFDLENBQUEsT0FBTyxDQUFDLE1BQVQsQ0FBZ0IsSUFBQyxDQUFBLE1BQWpCLEVBQXlCLElBQUMsQ0FBQSxLQUExQixFQUFpQyxTQUFqQyxDQUFmO1FBQ0UsSUFBQyxDQUFBLE9BQU8sQ0FBQyxJQUFULENBQWMsTUFBZDtRQUVBLElBQWtCLElBQUMsQ0FBQSxPQUFPLENBQUMsTUFBVCxJQUFtQixlQUFyQztVQUFBLElBQUMsQ0FBQSxXQUFELENBQUEsRUFBQTs7UUFDQyxZQUFhO01BSmhCO2FBTUEsSUFBQyxDQUFBLFdBQUQsQ0FBQTtJQVRJOztrQ0FXTixXQUFBLEdBQWEsU0FBQTtNQUNYLElBQUEsQ0FBSywwQkFBTCxFQUFpQyxJQUFDLENBQUEsT0FBbEM7YUFDQSxJQUFDLENBQUEsT0FBRCxHQUFXO0lBRkE7Ozs7OztFQUlmLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFNBQUMsTUFBRDtXQUNmLElBQUksbUJBQUosQ0FBd0IsTUFBeEIsQ0FBK0IsQ0FBQyxJQUFoQyxDQUFBO0VBRGU7QUE3QmpCIiwic291cmNlc0NvbnRlbnQiOlsiQ29sb3JTY2FubmVyID0gcmVxdWlyZSAnLi4vY29sb3Itc2Nhbm5lcidcbkNvbG9yQ29udGV4dCA9IHJlcXVpcmUgJy4uL2NvbG9yLWNvbnRleHQnXG5Db2xvckV4cHJlc3Npb24gPSByZXF1aXJlICcuLi9jb2xvci1leHByZXNzaW9uJ1xuRXhwcmVzc2lvbnNSZWdpc3RyeSA9IHJlcXVpcmUgJy4uL2V4cHJlc3Npb25zLXJlZ2lzdHJ5J1xuQ29sb3JzQ2h1bmtTaXplID0gMTAwXG5cbmNsYXNzIEJ1ZmZlckNvbG9yc1NjYW5uZXJcbiAgY29uc3RydWN0b3I6IChjb25maWcpIC0+XG4gICAge0BidWZmZXIsIHZhcmlhYmxlcywgY29sb3JWYXJpYWJsZXMsIEBidWZmZXJQYXRoLCBAc2NvcGUsIHJlZ2lzdHJ5fSA9IGNvbmZpZ1xuICAgIHJlZ2lzdHJ5ID0gRXhwcmVzc2lvbnNSZWdpc3RyeS5kZXNlcmlhbGl6ZShyZWdpc3RyeSwgQ29sb3JFeHByZXNzaW9uKVxuICAgIEBjb250ZXh0ID0gbmV3IENvbG9yQ29udGV4dCh7dmFyaWFibGVzLCBjb2xvclZhcmlhYmxlcywgcmVmZXJlbmNlUGF0aDogQGJ1ZmZlclBhdGgsIHJlZ2lzdHJ5fSlcbiAgICBAc2Nhbm5lciA9IG5ldyBDb2xvclNjYW5uZXIoe0Bjb250ZXh0fSlcbiAgICBAcmVzdWx0cyA9IFtdXG5cbiAgc2NhbjogLT5cbiAgICByZXR1cm4gdW5sZXNzIEBidWZmZXJQYXRoP1xuICAgIGxhc3RJbmRleCA9IDBcbiAgICB3aGlsZSByZXN1bHQgPSBAc2Nhbm5lci5zZWFyY2goQGJ1ZmZlciwgQHNjb3BlLCBsYXN0SW5kZXgpXG4gICAgICBAcmVzdWx0cy5wdXNoKHJlc3VsdClcblxuICAgICAgQGZsdXNoQ29sb3JzKCkgaWYgQHJlc3VsdHMubGVuZ3RoID49IENvbG9yc0NodW5rU2l6ZVxuICAgICAge2xhc3RJbmRleH0gPSByZXN1bHRcblxuICAgIEBmbHVzaENvbG9ycygpXG5cbiAgZmx1c2hDb2xvcnM6IC0+XG4gICAgZW1pdCgnc2Nhbi1idWZmZXI6Y29sb3JzLWZvdW5kJywgQHJlc3VsdHMpXG4gICAgQHJlc3VsdHMgPSBbXVxuXG5tb2R1bGUuZXhwb3J0cyA9IChjb25maWcpIC0+XG4gIG5ldyBCdWZmZXJDb2xvcnNTY2FubmVyKGNvbmZpZykuc2NhbigpXG4iXX0=
