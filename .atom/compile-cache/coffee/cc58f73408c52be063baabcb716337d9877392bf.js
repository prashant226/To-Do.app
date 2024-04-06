(function() {
  var ExpressionsRegistry, PathScanner, VariableExpression, VariableScanner, async, fs;

  async = require('async');

  fs = require('fs');

  VariableScanner = require('../variable-scanner');

  VariableExpression = require('../variable-expression');

  ExpressionsRegistry = require('../expressions-registry');

  PathScanner = (function() {
    function PathScanner(filePath, scope, registry) {
      this.filePath = filePath;
      this.scanner = new VariableScanner({
        registry: registry,
        scope: scope
      });
    }

    PathScanner.prototype.load = function(done) {
      var currentChunk, currentLine, currentOffset, lastIndex, line, readStream, results;
      currentChunk = '';
      currentLine = 0;
      currentOffset = 0;
      lastIndex = 0;
      line = 0;
      results = [];
      readStream = fs.createReadStream(this.filePath);
      readStream.on('data', (function(_this) {
        return function(chunk) {
          var i, index, lastLine, len, result, v;
          currentChunk += chunk.toString();
          index = lastIndex;
          while (result = _this.scanner.search(currentChunk, lastIndex)) {
            result.range[0] += index;
            result.range[1] += index;
            for (i = 0, len = result.length; i < len; i++) {
              v = result[i];
              v.path = _this.filePath;
              v.range[0] += index;
              v.range[1] += index;
              v.definitionRange = result.range;
              v.line += line;
              lastLine = v.line;
            }
            results = results.concat(result);
            lastIndex = result.lastIndex;
          }
          if (result != null) {
            currentChunk = currentChunk.slice(lastIndex);
            line = lastLine;
            return lastIndex = 0;
          }
        };
      })(this));
      return readStream.on('end', function() {
        emit('scan-paths:path-scanned', results);
        return done();
      });
    };

    return PathScanner;

  })();

  module.exports = function(arg) {
    var paths, registry;
    paths = arg[0], registry = arg[1];
    registry = ExpressionsRegistry.deserialize(registry, VariableExpression);
    return async.each(paths, function(arg1, next) {
      var p, s;
      p = arg1[0], s = arg1[1];
      return new PathScanner(p, s, registry).load(next);
    }, this.async());
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9DOi9Vc2Vycy9QcmFzaGFudGgvLmF0b20vcGFja2FnZXMvcGlnbWVudHMvbGliL3Rhc2tzL3NjYW4tcGF0aHMtaGFuZGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLEtBQUEsR0FBUSxPQUFBLENBQVEsT0FBUjs7RUFDUixFQUFBLEdBQUssT0FBQSxDQUFRLElBQVI7O0VBQ0wsZUFBQSxHQUFrQixPQUFBLENBQVEscUJBQVI7O0VBQ2xCLGtCQUFBLEdBQXFCLE9BQUEsQ0FBUSx3QkFBUjs7RUFDckIsbUJBQUEsR0FBc0IsT0FBQSxDQUFRLHlCQUFSOztFQUVoQjtJQUNTLHFCQUFDLFFBQUQsRUFBWSxLQUFaLEVBQW1CLFFBQW5CO01BQUMsSUFBQyxDQUFBLFdBQUQ7TUFDWixJQUFDLENBQUEsT0FBRCxHQUFXLElBQUksZUFBSixDQUFvQjtRQUFDLFVBQUEsUUFBRDtRQUFXLE9BQUEsS0FBWDtPQUFwQjtJQURBOzswQkFHYixJQUFBLEdBQU0sU0FBQyxJQUFEO0FBQ0osVUFBQTtNQUFBLFlBQUEsR0FBZTtNQUNmLFdBQUEsR0FBYztNQUNkLGFBQUEsR0FBZ0I7TUFDaEIsU0FBQSxHQUFZO01BQ1osSUFBQSxHQUFPO01BQ1AsT0FBQSxHQUFVO01BRVYsVUFBQSxHQUFhLEVBQUUsQ0FBQyxnQkFBSCxDQUFvQixJQUFDLENBQUEsUUFBckI7TUFFYixVQUFVLENBQUMsRUFBWCxDQUFjLE1BQWQsRUFBc0IsQ0FBQSxTQUFBLEtBQUE7ZUFBQSxTQUFDLEtBQUQ7QUFDcEIsY0FBQTtVQUFBLFlBQUEsSUFBZ0IsS0FBSyxDQUFDLFFBQU4sQ0FBQTtVQUVoQixLQUFBLEdBQVE7QUFFUixpQkFBTSxNQUFBLEdBQVMsS0FBQyxDQUFBLE9BQU8sQ0FBQyxNQUFULENBQWdCLFlBQWhCLEVBQThCLFNBQTlCLENBQWY7WUFDRSxNQUFNLENBQUMsS0FBTSxDQUFBLENBQUEsQ0FBYixJQUFtQjtZQUNuQixNQUFNLENBQUMsS0FBTSxDQUFBLENBQUEsQ0FBYixJQUFtQjtBQUVuQixpQkFBQSx3Q0FBQTs7Y0FDRSxDQUFDLENBQUMsSUFBRixHQUFTLEtBQUMsQ0FBQTtjQUNWLENBQUMsQ0FBQyxLQUFNLENBQUEsQ0FBQSxDQUFSLElBQWM7Y0FDZCxDQUFDLENBQUMsS0FBTSxDQUFBLENBQUEsQ0FBUixJQUFjO2NBQ2QsQ0FBQyxDQUFDLGVBQUYsR0FBb0IsTUFBTSxDQUFDO2NBQzNCLENBQUMsQ0FBQyxJQUFGLElBQVU7Y0FDVixRQUFBLEdBQVcsQ0FBQyxDQUFDO0FBTmY7WUFRQSxPQUFBLEdBQVUsT0FBTyxDQUFDLE1BQVIsQ0FBZSxNQUFmO1lBQ1QsWUFBYTtVQWJoQjtVQWVBLElBQUcsY0FBSDtZQUNFLFlBQUEsR0FBZSxZQUFhO1lBQzVCLElBQUEsR0FBTzttQkFDUCxTQUFBLEdBQVksRUFIZDs7UUFwQm9CO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUF0QjthQXlCQSxVQUFVLENBQUMsRUFBWCxDQUFjLEtBQWQsRUFBcUIsU0FBQTtRQUNuQixJQUFBLENBQUsseUJBQUwsRUFBZ0MsT0FBaEM7ZUFDQSxJQUFBLENBQUE7TUFGbUIsQ0FBckI7SUFuQ0k7Ozs7OztFQXVDUixNQUFNLENBQUMsT0FBUCxHQUFpQixTQUFDLEdBQUQ7QUFDZixRQUFBO0lBRGlCLGdCQUFPO0lBQ3hCLFFBQUEsR0FBVyxtQkFBbUIsQ0FBQyxXQUFwQixDQUFnQyxRQUFoQyxFQUEwQyxrQkFBMUM7V0FDWCxLQUFLLENBQUMsSUFBTixDQUNFLEtBREYsRUFFRSxTQUFDLElBQUQsRUFBUyxJQUFUO0FBQ0UsVUFBQTtNQURBLGFBQUc7YUFDSCxJQUFJLFdBQUosQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsUUFBdEIsQ0FBK0IsQ0FBQyxJQUFoQyxDQUFxQyxJQUFyQztJQURGLENBRkYsRUFJRSxJQUFDLENBQUEsS0FBRCxDQUFBLENBSkY7RUFGZTtBQWpEakIiLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyA9IHJlcXVpcmUgJ2FzeW5jJ1xuZnMgPSByZXF1aXJlICdmcydcblZhcmlhYmxlU2Nhbm5lciA9IHJlcXVpcmUgJy4uL3ZhcmlhYmxlLXNjYW5uZXInXG5WYXJpYWJsZUV4cHJlc3Npb24gPSByZXF1aXJlICcuLi92YXJpYWJsZS1leHByZXNzaW9uJ1xuRXhwcmVzc2lvbnNSZWdpc3RyeSA9IHJlcXVpcmUgJy4uL2V4cHJlc3Npb25zLXJlZ2lzdHJ5J1xuXG5jbGFzcyBQYXRoU2Nhbm5lclxuICBjb25zdHJ1Y3RvcjogKEBmaWxlUGF0aCwgc2NvcGUsIHJlZ2lzdHJ5KSAtPlxuICAgIEBzY2FubmVyID0gbmV3IFZhcmlhYmxlU2Nhbm5lcih7cmVnaXN0cnksIHNjb3BlfSlcblxuICBsb2FkOiAoZG9uZSkgLT5cbiAgICBjdXJyZW50Q2h1bmsgPSAnJ1xuICAgIGN1cnJlbnRMaW5lID0gMFxuICAgIGN1cnJlbnRPZmZzZXQgPSAwXG4gICAgbGFzdEluZGV4ID0gMFxuICAgIGxpbmUgPSAwXG4gICAgcmVzdWx0cyA9IFtdXG5cbiAgICByZWFkU3RyZWFtID0gZnMuY3JlYXRlUmVhZFN0cmVhbShAZmlsZVBhdGgpXG5cbiAgICByZWFkU3RyZWFtLm9uICdkYXRhJywgKGNodW5rKSA9PlxuICAgICAgY3VycmVudENodW5rICs9IGNodW5rLnRvU3RyaW5nKClcblxuICAgICAgaW5kZXggPSBsYXN0SW5kZXhcblxuICAgICAgd2hpbGUgcmVzdWx0ID0gQHNjYW5uZXIuc2VhcmNoKGN1cnJlbnRDaHVuaywgbGFzdEluZGV4KVxuICAgICAgICByZXN1bHQucmFuZ2VbMF0gKz0gaW5kZXhcbiAgICAgICAgcmVzdWx0LnJhbmdlWzFdICs9IGluZGV4XG5cbiAgICAgICAgZm9yIHYgaW4gcmVzdWx0XG4gICAgICAgICAgdi5wYXRoID0gQGZpbGVQYXRoXG4gICAgICAgICAgdi5yYW5nZVswXSArPSBpbmRleFxuICAgICAgICAgIHYucmFuZ2VbMV0gKz0gaW5kZXhcbiAgICAgICAgICB2LmRlZmluaXRpb25SYW5nZSA9IHJlc3VsdC5yYW5nZVxuICAgICAgICAgIHYubGluZSArPSBsaW5lXG4gICAgICAgICAgbGFzdExpbmUgPSB2LmxpbmVcblxuICAgICAgICByZXN1bHRzID0gcmVzdWx0cy5jb25jYXQocmVzdWx0KVxuICAgICAgICB7bGFzdEluZGV4fSA9IHJlc3VsdFxuXG4gICAgICBpZiByZXN1bHQ/XG4gICAgICAgIGN1cnJlbnRDaHVuayA9IGN1cnJlbnRDaHVua1tsYXN0SW5kZXguLi0xXVxuICAgICAgICBsaW5lID0gbGFzdExpbmVcbiAgICAgICAgbGFzdEluZGV4ID0gMFxuXG4gICAgcmVhZFN0cmVhbS5vbiAnZW5kJywgLT5cbiAgICAgIGVtaXQoJ3NjYW4tcGF0aHM6cGF0aC1zY2FubmVkJywgcmVzdWx0cylcbiAgICAgIGRvbmUoKVxuXG5tb2R1bGUuZXhwb3J0cyA9IChbcGF0aHMsIHJlZ2lzdHJ5XSkgLT5cbiAgcmVnaXN0cnkgPSBFeHByZXNzaW9uc1JlZ2lzdHJ5LmRlc2VyaWFsaXplKHJlZ2lzdHJ5LCBWYXJpYWJsZUV4cHJlc3Npb24pXG4gIGFzeW5jLmVhY2goXG4gICAgcGF0aHMsXG4gICAgKFtwLCBzXSwgbmV4dCkgLT5cbiAgICAgIG5ldyBQYXRoU2Nhbm5lcihwLCBzLCByZWdpc3RyeSkubG9hZChuZXh0KVxuICAgIEBhc3luYygpXG4gIClcbiJdfQ==
