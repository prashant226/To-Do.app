(function() {
  var ColorBuffer, ColorBufferElement, ColorMarker, ColorProject, ColorProjectElement, ColorResultsElement, ColorSearch, Disposable, Palette, PaletteElement, PigmentsAPI, PigmentsProvider, VariablesCollection, ref, uris, url;

  ref = [], Palette = ref[0], PaletteElement = ref[1], ColorSearch = ref[2], ColorResultsElement = ref[3], ColorProject = ref[4], ColorProjectElement = ref[5], ColorBuffer = ref[6], ColorBufferElement = ref[7], ColorMarker = ref[8], VariablesCollection = ref[9], PigmentsProvider = ref[10], PigmentsAPI = ref[11], Disposable = ref[12], url = ref[13], uris = ref[14];

  module.exports = {
    activate: function(state) {
      var convertMethod, copyMethod;
      if (ColorProject == null) {
        ColorProject = require('./color-project');
      }
      this.project = state.project != null ? ColorProject.deserialize(state.project) : new ColorProject();
      atom.commands.add('atom-workspace', {
        'pigments:find-colors': (function(_this) {
          return function() {
            return _this.findColors();
          };
        })(this),
        'pigments:show-palette': (function(_this) {
          return function() {
            return _this.showPalette();
          };
        })(this),
        'pigments:project-settings': (function(_this) {
          return function() {
            return _this.showSettings();
          };
        })(this),
        'pigments:reload': (function(_this) {
          return function() {
            return _this.reloadProjectVariables();
          };
        })(this),
        'pigments:report': (function(_this) {
          return function() {
            return _this.createPigmentsReport();
          };
        })(this)
      });
      convertMethod = (function(_this) {
        return function(action) {
          return function(event) {
            var colorBuffer, editor;
            if (_this.lastEvent != null) {
              action(_this.colorMarkerForMouseEvent(_this.lastEvent));
            } else {
              editor = atom.workspace.getActiveTextEditor();
              colorBuffer = _this.project.colorBufferForEditor(editor);
              editor.getCursors().forEach(function(cursor) {
                var marker;
                marker = colorBuffer.getColorMarkerAtBufferPosition(cursor.getBufferPosition());
                return action(marker);
              });
            }
            return _this.lastEvent = null;
          };
        };
      })(this);
      copyMethod = (function(_this) {
        return function(action) {
          return function(event) {
            var colorBuffer, cursor, editor, marker;
            if (_this.lastEvent != null) {
              action(_this.colorMarkerForMouseEvent(_this.lastEvent));
            } else {
              editor = atom.workspace.getActiveTextEditor();
              colorBuffer = _this.project.colorBufferForEditor(editor);
              cursor = editor.getLastCursor();
              marker = colorBuffer.getColorMarkerAtBufferPosition(cursor.getBufferPosition());
              action(marker);
            }
            return _this.lastEvent = null;
          };
        };
      })(this);
      atom.commands.add('atom-text-editor', {
        'pigments:convert-to-hex': convertMethod(function(marker) {
          if (marker != null) {
            return marker.convertContentToHex();
          }
        }),
        'pigments:convert-to-rgb': convertMethod(function(marker) {
          if (marker != null) {
            return marker.convertContentToRGB();
          }
        }),
        'pigments:convert-to-rgba': convertMethod(function(marker) {
          if (marker != null) {
            return marker.convertContentToRGBA();
          }
        }),
        'pigments:convert-to-hsl': convertMethod(function(marker) {
          if (marker != null) {
            return marker.convertContentToHSL();
          }
        }),
        'pigments:convert-to-hsla': convertMethod(function(marker) {
          if (marker != null) {
            return marker.convertContentToHSLA();
          }
        }),
        'pigments:copy-as-hex': copyMethod(function(marker) {
          if (marker != null) {
            return marker.copyContentAsHex();
          }
        }),
        'pigments:copy-as-rgb': copyMethod(function(marker) {
          if (marker != null) {
            return marker.copyContentAsRGB();
          }
        }),
        'pigments:copy-as-rgba': copyMethod(function(marker) {
          if (marker != null) {
            return marker.copyContentAsRGBA();
          }
        }),
        'pigments:copy-as-hsl': copyMethod(function(marker) {
          if (marker != null) {
            return marker.copyContentAsHSL();
          }
        }),
        'pigments:copy-as-hsla': copyMethod(function(marker) {
          if (marker != null) {
            return marker.copyContentAsHSLA();
          }
        })
      });
      atom.workspace.addOpener((function(_this) {
        return function(uriToOpen) {
          var host, protocol, ref1;
          url || (url = require('url'));
          ref1 = url.parse(uriToOpen), protocol = ref1.protocol, host = ref1.host;
          if (protocol !== 'pigments:') {
            return;
          }
          switch (host) {
            case 'search':
              return _this.project.findAllColors();
            case 'palette':
              return _this.project.getPalette();
            case 'settings':
              return atom.views.getView(_this.project);
          }
        };
      })(this));
      return atom.contextMenu.add({
        'atom-text-editor': [
          {
            label: 'Pigments',
            submenu: [
              {
                label: 'Convert to hexadecimal',
                command: 'pigments:convert-to-hex'
              }, {
                label: 'Convert to RGB',
                command: 'pigments:convert-to-rgb'
              }, {
                label: 'Convert to RGBA',
                command: 'pigments:convert-to-rgba'
              }, {
                label: 'Convert to HSL',
                command: 'pigments:convert-to-hsl'
              }, {
                label: 'Convert to HSLA',
                command: 'pigments:convert-to-hsla'
              }, {
                type: 'separator'
              }, {
                label: 'Copy as hexadecimal',
                command: 'pigments:copy-as-hex'
              }, {
                label: 'Copy as RGB',
                command: 'pigments:copy-as-rgb'
              }, {
                label: 'Copy as RGBA',
                command: 'pigments:copy-as-rgba'
              }, {
                label: 'Copy as HSL',
                command: 'pigments:copy-as-hsl'
              }, {
                label: 'Copy as HSLA',
                command: 'pigments:copy-as-hsla'
              }
            ],
            shouldDisplay: (function(_this) {
              return function(event) {
                return _this.shouldDisplayContextMenu(event);
              };
            })(this)
          }
        ]
      });
    },
    deactivate: function() {
      var ref1;
      return (ref1 = this.getProject()) != null ? typeof ref1.destroy === "function" ? ref1.destroy() : void 0 : void 0;
    },
    provideAutocomplete: function() {
      if (PigmentsProvider == null) {
        PigmentsProvider = require('./pigments-provider');
      }
      return new PigmentsProvider(this);
    },
    provideAPI: function() {
      if (PigmentsAPI == null) {
        PigmentsAPI = require('./pigments-api');
      }
      return new PigmentsAPI(this.getProject());
    },
    consumeColorPicker: function(api) {
      if (Disposable == null) {
        Disposable = require('atom').Disposable;
      }
      this.getProject().setColorPickerAPI(api);
      return new Disposable((function(_this) {
        return function() {
          return _this.getProject().setColorPickerAPI(null);
        };
      })(this));
    },
    consumeColorExpressions: function(options) {
      var handle, name, names, priority, regexpString, registry, scopes;
      if (options == null) {
        options = {};
      }
      if (Disposable == null) {
        Disposable = require('atom').Disposable;
      }
      registry = this.getProject().getColorExpressionsRegistry();
      if (options.expressions != null) {
        names = options.expressions.map(function(e) {
          return e.name;
        });
        registry.createExpressions(options.expressions);
        return new Disposable(function() {
          var i, len, name, results;
          results = [];
          for (i = 0, len = names.length; i < len; i++) {
            name = names[i];
            results.push(registry.removeExpression(name));
          }
          return results;
        });
      } else {
        name = options.name, regexpString = options.regexpString, handle = options.handle, scopes = options.scopes, priority = options.priority;
        registry.createExpression(name, regexpString, priority, scopes, handle);
        return new Disposable(function() {
          return registry.removeExpression(name);
        });
      }
    },
    consumeVariableExpressions: function(options) {
      var handle, name, names, priority, regexpString, registry, scopes;
      if (options == null) {
        options = {};
      }
      if (Disposable == null) {
        Disposable = require('atom').Disposable;
      }
      registry = this.getProject().getVariableExpressionsRegistry();
      if (options.expressions != null) {
        names = options.expressions.map(function(e) {
          return e.name;
        });
        registry.createExpressions(options.expressions);
        return new Disposable(function() {
          var i, len, name, results;
          results = [];
          for (i = 0, len = names.length; i < len; i++) {
            name = names[i];
            results.push(registry.removeExpression(name));
          }
          return results;
        });
      } else {
        name = options.name, regexpString = options.regexpString, handle = options.handle, scopes = options.scopes, priority = options.priority;
        registry.createExpression(name, regexpString, priority, scopes, handle);
        return new Disposable(function() {
          return registry.removeExpression(name);
        });
      }
    },
    deserializePalette: function(state) {
      if (Palette == null) {
        Palette = require('./palette');
      }
      return Palette.deserialize(state);
    },
    deserializeColorSearch: function(state) {
      if (ColorSearch == null) {
        ColorSearch = require('./color-search');
      }
      return ColorSearch.deserialize(state);
    },
    deserializeColorProject: function(state) {
      if (ColorProject == null) {
        ColorProject = require('./color-project');
      }
      return ColorProject.deserialize(state);
    },
    deserializeColorProjectElement: function(state) {
      var element, subscription;
      if (ColorProjectElement == null) {
        ColorProjectElement = require('./color-project-element');
      }
      element = new ColorProjectElement;
      if (this.project != null) {
        element.setModel(this.getProject());
      } else {
        subscription = atom.packages.onDidActivatePackage((function(_this) {
          return function(pkg) {
            if (pkg.name === 'pigments') {
              subscription.dispose();
              return element.setModel(_this.getProject());
            }
          };
        })(this));
      }
      return element;
    },
    deserializeVariablesCollection: function(state) {
      if (VariablesCollection == null) {
        VariablesCollection = require('./variables-collection');
      }
      return VariablesCollection.deserialize(state);
    },
    pigmentsViewProvider: function(model) {
      var element;
      element = model instanceof (ColorBuffer != null ? ColorBuffer : ColorBuffer = require('./color-buffer')) ? (ColorBufferElement != null ? ColorBufferElement : ColorBufferElement = require('./color-buffer-element'), element = new ColorBufferElement) : model instanceof (ColorSearch != null ? ColorSearch : ColorSearch = require('./color-search')) ? (ColorResultsElement != null ? ColorResultsElement : ColorResultsElement = require('./color-results-element'), element = new ColorResultsElement) : model instanceof (ColorProject != null ? ColorProject : ColorProject = require('./color-project')) ? (ColorProjectElement != null ? ColorProjectElement : ColorProjectElement = require('./color-project-element'), element = new ColorProjectElement) : model instanceof (Palette != null ? Palette : Palette = require('./palette')) ? (PaletteElement != null ? PaletteElement : PaletteElement = require('./palette-element'), element = new PaletteElement) : void 0;
      if (element != null) {
        element.setModel(model);
      }
      return element;
    },
    shouldDisplayContextMenu: function(event) {
      this.lastEvent = event;
      setTimeout(((function(_this) {
        return function() {
          return _this.lastEvent = null;
        };
      })(this)), 10);
      return this.colorMarkerForMouseEvent(event) != null;
    },
    colorMarkerForMouseEvent: function(event) {
      var colorBuffer, colorBufferElement, editor;
      editor = atom.workspace.getActiveTextEditor();
      colorBuffer = this.project.colorBufferForEditor(editor);
      colorBufferElement = atom.views.getView(colorBuffer);
      return colorBufferElement != null ? colorBufferElement.colorMarkerForMouseEvent(event) : void 0;
    },
    serialize: function() {
      return {
        project: this.project.serialize()
      };
    },
    getProject: function() {
      return this.project;
    },
    findColors: function() {
      var pane;
      if (uris == null) {
        uris = require('./uris');
      }
      pane = atom.workspace.paneForURI(uris.SEARCH);
      pane || (pane = atom.workspace.getActivePane());
      return atom.workspace.openURIInPane(uris.SEARCH, pane, {});
    },
    showPalette: function() {
      if (uris == null) {
        uris = require('./uris');
      }
      return this.project.initialize().then(function() {
        var pane;
        pane = atom.workspace.paneForURI(uris.PALETTE);
        pane || (pane = atom.workspace.getActivePane());
        return atom.workspace.openURIInPane(uris.PALETTE, pane, {});
      })["catch"](function(reason) {
        return console.error(reason);
      });
    },
    showSettings: function() {
      if (uris == null) {
        uris = require('./uris');
      }
      return this.project.initialize().then(function() {
        var pane;
        pane = atom.workspace.paneForURI(uris.SETTINGS);
        pane || (pane = atom.workspace.getActivePane());
        return atom.workspace.openURIInPane(uris.SETTINGS, pane, {});
      })["catch"](function(reason) {
        return console.error(reason);
      });
    },
    reloadProjectVariables: function() {
      return this.project.reload();
    },
    createPigmentsReport: function() {
      return atom.workspace.open('pigments-report.json').then((function(_this) {
        return function(editor) {
          return editor.setText(_this.createReport());
        };
      })(this));
    },
    createReport: function() {
      var o;
      o = {
        atom: atom.getVersion(),
        pigments: atom.packages.getLoadedPackage('pigments').metadata.version,
        platform: require('os').platform(),
        config: atom.config.get('pigments'),
        project: {
          config: {
            sourceNames: this.project.sourceNames,
            searchNames: this.project.searchNames,
            ignoredNames: this.project.ignoredNames,
            ignoredScopes: this.project.ignoredScopes,
            includeThemes: this.project.includeThemes,
            ignoreGlobalSourceNames: this.project.ignoreGlobalSourceNames,
            ignoreGlobalSearchNames: this.project.ignoreGlobalSearchNames,
            ignoreGlobalIgnoredNames: this.project.ignoreGlobalIgnoredNames,
            ignoreGlobalIgnoredScopes: this.project.ignoreGlobalIgnoredScopes
          },
          paths: this.project.getPaths(),
          variables: {
            colors: this.project.getColorVariables().length,
            total: this.project.getVariables().length
          }
        }
      };
      return JSON.stringify(o, null, 2).replace(RegExp("" + (atom.project.getPaths().join('|')), "g"), '<root>');
    }
  };

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZTovLy9DOi9Vc2Vycy9QcmFzaGFudGgvLmF0b20vcGFja2FnZXMvcGlnbWVudHMvbGliL3BpZ21lbnRzLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQUE7O0VBQUEsTUFTSSxFQVRKLEVBQ0UsZ0JBREYsRUFDVyx1QkFEWCxFQUVFLG9CQUZGLEVBRWUsNEJBRmYsRUFHRSxxQkFIRixFQUdnQiw0QkFIaEIsRUFJRSxvQkFKRixFQUllLDJCQUpmLEVBS0Usb0JBTEYsRUFNRSw0QkFORixFQU11QiwwQkFOdkIsRUFNeUMscUJBTnpDLEVBT0Usb0JBUEYsRUFRRSxhQVJGLEVBUU87O0VBR1AsTUFBTSxDQUFDLE9BQVAsR0FDRTtJQUFBLFFBQUEsRUFBVSxTQUFDLEtBQUQ7QUFDUixVQUFBOztRQUFBLGVBQWdCLE9BQUEsQ0FBUSxpQkFBUjs7TUFFaEIsSUFBQyxDQUFBLE9BQUQsR0FBYyxxQkFBSCxHQUNULFlBQVksQ0FBQyxXQUFiLENBQXlCLEtBQUssQ0FBQyxPQUEvQixDQURTLEdBR1QsSUFBSSxZQUFKLENBQUE7TUFFRixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQWQsQ0FBa0IsZ0JBQWxCLEVBQ0U7UUFBQSxzQkFBQSxFQUF3QixDQUFBLFNBQUEsS0FBQTtpQkFBQSxTQUFBO21CQUFHLEtBQUMsQ0FBQSxVQUFELENBQUE7VUFBSDtRQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBeEI7UUFDQSx1QkFBQSxFQUF5QixDQUFBLFNBQUEsS0FBQTtpQkFBQSxTQUFBO21CQUFHLEtBQUMsQ0FBQSxXQUFELENBQUE7VUFBSDtRQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FEekI7UUFFQSwyQkFBQSxFQUE2QixDQUFBLFNBQUEsS0FBQTtpQkFBQSxTQUFBO21CQUFHLEtBQUMsQ0FBQSxZQUFELENBQUE7VUFBSDtRQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FGN0I7UUFHQSxp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XG4gIFBhbGV0dGUsIFBhbGV0dGVFbGVtZW50LFxuICBDb2xvclNlYXJjaCwgQ29sb3JSZXN1bHRzRWxlbWVudCxcbiAgQ29sb3JQcm9qZWN0LCBDb2xvclByb2plY3RFbGVtZW50LFxuICBDb2xvckJ1ZmZlciwgQ29sb3JCdWZmZXJFbGVtZW50LFxuICBDb2xvck1hcmtlcixcbiAgVmFyaWFibGVzQ29sbGVjdGlvbiwgUGlnbWVudHNQcm92aWRlciwgUGlnbWVudHNBUEksXG4gIERpc3Bvc2FibGUsXG4gIHVybCwgdXJpc1xuXSA9IFtdXG5cbm1vZHVsZS5leHBvcnRzID1cbiAgYWN0aXZhdGU6IChzdGF0ZSkgLT5cbiAgICBDb2xvclByb2plY3QgPz0gcmVxdWlyZSAnLi9jb2xvci1wcm9qZWN0J1xuXG4gICAgQHByb2plY3QgPSBpZiBzdGF0ZS5wcm9qZWN0P1xuICAgICAgQ29sb3JQcm9qZWN0LmRlc2VyaWFsaXplKHN0YXRlLnByb2plY3QpXG4gICAgZWxzZVxuICAgICAgbmV3IENvbG9yUHJvamVjdCgpXG5cbiAgICBhdG9tLmNvbW1hbmRzLmFkZCAnYXRvbS13b3Jrc3BhY2UnLFxuICAgICAgJ3BpZ21lbnRzOmZpbmQtY29sb3JzJzogPT4gQGZpbmRDb2xvcnMoKVxuICAgICAgJ3BpZ21lbnRzOnNob3ctcGFsZXR0ZSc6ID0+IEBzaG93UGFsZXR0ZSgpXG4gICAgICAncGlnbWVudHM6cHJvamVjdC1zZXR0aW5ncyc6ID0+IEBzaG93U2V0dGluZ3MoKVxuICAgICAgJ3BpZ21lbnRzOnJlbG9hZCc6ID0+IEByZWxvYWRQcm9qZWN0VmFyaWFibGVzKClcbiAgICAgICdwaWdtZW50czpyZXBvcnQnOiA9PiBAY3JlYXRlUGlnbWVudHNSZXBvcnQoKVxuXG4gICAgY29udmVydE1ldGhvZCA9IChhY3Rpb24pID0+IChldmVudCkgPT5cbiAgICAgIGlmIEBsYXN0RXZlbnQ/XG4gICAgICAgIGFjdGlvbiBAY29sb3JNYXJrZXJGb3JNb3VzZUV2ZW50KEBsYXN0RXZlbnQpXG4gICAgICBlbHNlXG4gICAgICAgIGVkaXRvciA9IGF0b20ud29ya3NwYWNlLmdldEFjdGl2ZVRleHRFZGl0b3IoKVxuICAgICAgICBjb2xvckJ1ZmZlciA9IEBwcm9qZWN0LmNvbG9yQnVmZmVyRm9yRWRpdG9yKGVkaXRvcilcblxuICAgICAgICBlZGl0b3IuZ2V0Q3Vyc29ycygpLmZvckVhY2ggKGN1cnNvcikgPT5cbiAgICAgICAgICBtYXJrZXIgPSBjb2xvckJ1ZmZlci5nZXRDb2xvck1hcmtlckF0QnVmZmVyUG9zaXRpb24oY3Vyc29yLmdldEJ1ZmZlclBvc2l0aW9uKCkpXG4gICAgICAgICAgYWN0aW9uKG1hcmtlcilcblxuICAgICAgQGxhc3RFdmVudCA9IG51bGxcblxuICAgIGNvcHlNZXRob2QgPSAoYWN0aW9uKSA9PiAoZXZlbnQpID0+XG4gICAgICBpZiBAbGFzdEV2ZW50P1xuICAgICAgICBhY3Rpb24gQGNvbG9yTWFya2VyRm9yTW91c2VFdmVudChAbGFzdEV2ZW50KVxuICAgICAgZWxzZVxuICAgICAgICBlZGl0b3IgPSBhdG9tLndvcmtzcGFjZS5nZXRBY3RpdmVUZXh0RWRpdG9yKClcbiAgICAgICAgY29sb3JCdWZmZXIgPSBAcHJvamVjdC5jb2xvckJ1ZmZlckZvckVkaXRvcihlZGl0b3IpXG4gICAgICAgIGN1cnNvciA9IGVkaXRvci5nZXRMYXN0Q3Vyc29yKClcbiAgICAgICAgbWFya2VyID0gY29sb3JCdWZmZXIuZ2V0Q29sb3JNYXJrZXJBdEJ1ZmZlclBvc2l0aW9uKGN1cnNvci5nZXRCdWZmZXJQb3NpdGlvbigpKVxuICAgICAgICBhY3Rpb24obWFya2VyKVxuXG4gICAgICBAbGFzdEV2ZW50ID0gbnVsbFxuXG4gICAgYXRvbS5jb21tYW5kcy5hZGQgJ2F0b20tdGV4dC1lZGl0b3InLFxuICAgICAgJ3BpZ21lbnRzOmNvbnZlcnQtdG8taGV4JzogY29udmVydE1ldGhvZCAobWFya2VyKSAtPlxuICAgICAgICBtYXJrZXIuY29udmVydENvbnRlbnRUb0hleCgpIGlmIG1hcmtlcj9cblxuICAgICAgJ3BpZ21lbnRzOmNvbnZlcnQtdG8tcmdiJzogY29udmVydE1ldGhvZCAobWFya2VyKSAtPlxuICAgICAgICBtYXJrZXIuY29udmVydENvbnRlbnRUb1JHQigpIGlmIG1hcmtlcj9cblxuICAgICAgJ3BpZ21lbnRzOmNvbnZlcnQtdG8tcmdiYSc6IGNvbnZlcnRNZXRob2QgKG1hcmtlcikgLT5cbiAgICAgICAgbWFya2VyLmNvbnZlcnRDb250ZW50VG9SR0JBKCkgaWYgbWFya2VyP1xuXG4gICAgICAncGlnbWVudHM6Y29udmVydC10by1oc2wnOiBjb252ZXJ0TWV0aG9kIChtYXJrZXIpIC0+XG4gICAgICAgIG1hcmtlci5jb252ZXJ0Q29udGVudFRvSFNMKCkgaWYgbWFya2VyP1xuXG4gICAgICAncGlnbWVudHM6Y29udmVydC10by1oc2xhJzogY29udmVydE1ldGhvZCAobWFya2VyKSAtPlxuICAgICAgICBtYXJrZXIuY29udmVydENvbnRlbnRUb0hTTEEoKSBpZiBtYXJrZXI/XG5cbiAgICAgICdwaWdtZW50czpjb3B5LWFzLWhleCc6IGNvcHlNZXRob2QgKG1hcmtlcikgLT5cbiAgICAgICAgbWFya2VyLmNvcHlDb250ZW50QXNIZXgoKSBpZiBtYXJrZXI/XG5cbiAgICAgICdwaWdtZW50czpjb3B5LWFzLXJnYic6IGNvcHlNZXRob2QgKG1hcmtlcikgLT5cbiAgICAgICAgbWFya2VyLmNvcHlDb250ZW50QXNSR0IoKSBpZiBtYXJrZXI/XG5cbiAgICAgICdwaWdtZW50czpjb3B5LWFzLXJnYmEnOiBjb3B5TWV0aG9kIChtYXJrZXIpIC0+XG4gICAgICAgIG1hcmtlci5jb3B5Q29udGVudEFzUkdCQSgpIGlmIG1hcmtlcj9cblxuICAgICAgJ3BpZ21lbnRzOmNvcHktYXMtaHNsJzogY29weU1ldGhvZCAobWFya2VyKSAtPlxuICAgICAgICBtYXJrZXIuY29weUNvbnRlbnRBc0hTTCgpIGlmIG1hcmtlcj9cblxuICAgICAgJ3BpZ21lbnRzOmNvcHktYXMtaHNsYSc6IGNvcHlNZXRob2QgKG1hcmtlcikgLT5cbiAgICAgICAgbWFya2VyLmNvcHlDb250ZW50QXNIU0xBKCkgaWYgbWFya2VyP1xuXG4gICAgYXRvbS53b3Jrc3BhY2UuYWRkT3BlbmVyICh1cmlUb09wZW4pID0+XG4gICAgICB1cmwgfHw9IHJlcXVpcmUgJ3VybCdcblxuICAgICAge3Byb3RvY29sLCBob3N0fSA9IHVybC5wYXJzZSB1cmlUb09wZW5cbiAgICAgIHJldHVybiB1bmxlc3MgcHJvdG9jb2wgaXMgJ3BpZ21lbnRzOidcblxuICAgICAgc3dpdGNoIGhvc3RcbiAgICAgICAgd2hlbiAnc2VhcmNoJyB0aGVuIEBwcm9qZWN0LmZpbmRBbGxDb2xvcnMoKVxuICAgICAgICB3aGVuICdwYWxldHRlJyB0aGVuIEBwcm9qZWN0LmdldFBhbGV0dGUoKVxuICAgICAgICB3aGVuICdzZXR0aW5ncycgdGhlbiBhdG9tLnZpZXdzLmdldFZpZXcoQHByb2plY3QpXG5cbiAgICBhdG9tLmNvbnRleHRNZW51LmFkZFxuICAgICAgJ2F0b20tdGV4dC1lZGl0b3InOiBbe1xuICAgICAgICBsYWJlbDogJ1BpZ21lbnRzJ1xuICAgICAgICBzdWJtZW51OiBbXG4gICAgICAgICAge2xhYmVsOiAnQ29udmVydCB0byBoZXhhZGVjaW1hbCcsIGNvbW1hbmQ6ICdwaWdtZW50czpjb252ZXJ0LXRvLWhleCd9XG4gICAgICAgICAge2xhYmVsOiAnQ29udmVydCB0byBSR0InLCBjb21tYW5kOiAncGlnbWVudHM6Y29udmVydC10by1yZ2InfVxuICAgICAgICAgIHtsYWJlbDogJ0NvbnZlcnQgdG8gUkdCQScsIGNvbW1hbmQ6ICdwaWdtZW50czpjb252ZXJ0LXRvLXJnYmEnfVxuICAgICAgICAgIHtsYWJlbDogJ0NvbnZlcnQgdG8gSFNMJywgY29tbWFuZDogJ3BpZ21lbnRzOmNvbnZlcnQtdG8taHNsJ31cbiAgICAgICAgICB7bGFiZWw6ICdDb252ZXJ0IHRvIEhTTEEnLCBjb21tYW5kOiAncGlnbWVudHM6Y29udmVydC10by1oc2xhJ31cbiAgICAgICAgICB7dHlwZTogJ3NlcGFyYXRvcid9XG4gICAgICAgICAge2xhYmVsOiAnQ29weSBhcyBoZXhhZGVjaW1hbCcsIGNvbW1hbmQ6ICdwaWdtZW50czpjb3B5LWFzLWhleCd9XG4gICAgICAgICAge2xhYmVsOiAnQ29weSBhcyBSR0InLCBjb21tYW5kOiAncGlnbWVudHM6Y29weS1hcy1yZ2InfVxuICAgICAgICAgIHtsYWJlbDogJ0NvcHkgYXMgUkdCQScsIGNvbW1hbmQ6ICdwaWdtZW50czpjb3B5LWFzLXJnYmEnfVxuICAgICAgICAgIHtsYWJlbDogJ0NvcHkgYXMgSFNMJywgY29tbWFuZDogJ3BpZ21lbnRzOmNvcHktYXMtaHNsJ31cbiAgICAgICAgICB7bGFiZWw6ICdDb3B5IGFzIEhTTEEnLCBjb21tYW5kOiAncGlnbWVudHM6Y29weS1hcy1oc2xhJ31cbiAgICAgICAgXVxuICAgICAgICBzaG91bGREaXNwbGF5OiAoZXZlbnQpID0+IEBzaG91bGREaXNwbGF5Q29udGV4dE1lbnUoZXZlbnQpXG4gICAgICB9XVxuXG4gIGRlYWN0aXZhdGU6IC0+XG4gICAgQGdldFByb2plY3QoKT8uZGVzdHJveT8oKVxuXG4gIHByb3ZpZGVBdXRvY29tcGxldGU6IC0+XG4gICAgUGlnbWVudHNQcm92aWRlciA/PSByZXF1aXJlICcuL3BpZ21lbnRzLXByb3ZpZGVyJ1xuICAgIG5ldyBQaWdtZW50c1Byb3ZpZGVyKHRoaXMpXG5cbiAgcHJvdmlkZUFQSTogLT5cbiAgICBQaWdtZW50c0FQSSA/PSByZXF1aXJlICcuL3BpZ21lbnRzLWFwaSdcbiAgICBuZXcgUGlnbWVudHNBUEkoQGdldFByb2plY3QoKSlcblxuICBjb25zdW1lQ29sb3JQaWNrZXI6IChhcGkpIC0+XG4gICAgRGlzcG9zYWJsZSA/PSByZXF1aXJlKCdhdG9tJykuRGlzcG9zYWJsZVxuXG4gICAgQGdldFByb2plY3QoKS5zZXRDb2xvclBpY2tlckFQSShhcGkpXG5cbiAgICBuZXcgRGlzcG9zYWJsZSA9PlxuICAgICAgQGdldFByb2plY3QoKS5zZXRDb2xvclBpY2tlckFQSShudWxsKVxuXG4gIGNvbnN1bWVDb2xvckV4cHJlc3Npb25zOiAob3B0aW9ucz17fSkgLT5cbiAgICBEaXNwb3NhYmxlID89IHJlcXVpcmUoJ2F0b20nKS5EaXNwb3NhYmxlXG5cbiAgICByZWdpc3RyeSA9IEBnZXRQcm9qZWN0KCkuZ2V0Q29sb3JFeHByZXNzaW9uc1JlZ2lzdHJ5KClcblxuICAgIGlmIG9wdGlvbnMuZXhwcmVzc2lvbnM/XG4gICAgICBuYW1lcyA9IG9wdGlvbnMuZXhwcmVzc2lvbnMubWFwIChlKSAtPiBlLm5hbWVcbiAgICAgIHJlZ2lzdHJ5LmNyZWF0ZUV4cHJlc3Npb25zKG9wdGlvbnMuZXhwcmVzc2lvbnMpXG5cbiAgICAgIG5ldyBEaXNwb3NhYmxlIC0+IHJlZ2lzdHJ5LnJlbW92ZUV4cHJlc3Npb24obmFtZSkgZm9yIG5hbWUgaW4gbmFtZXNcbiAgICBlbHNlXG4gICAgICB7bmFtZSwgcmVnZXhwU3RyaW5nLCBoYW5kbGUsIHNjb3BlcywgcHJpb3JpdHl9ID0gb3B0aW9uc1xuICAgICAgcmVnaXN0cnkuY3JlYXRlRXhwcmVzc2lvbihuYW1lLCByZWdleHBTdHJpbmcsIHByaW9yaXR5LCBzY29wZXMsIGhhbmRsZSlcblxuICAgICAgbmV3IERpc3Bvc2FibGUgLT4gcmVnaXN0cnkucmVtb3ZlRXhwcmVzc2lvbihuYW1lKVxuXG4gIGNvbnN1bWVWYXJpYWJsZUV4cHJlc3Npb25zOiAob3B0aW9ucz17fSkgLT5cbiAgICBEaXNwb3NhYmxlID89IHJlcXVpcmUoJ2F0b20nKS5EaXNwb3NhYmxlXG5cbiAgICByZWdpc3RyeSA9IEBnZXRQcm9qZWN0KCkuZ2V0VmFyaWFibGVFeHByZXNzaW9uc1JlZ2lzdHJ5KClcblxuICAgIGlmIG9wdGlvbnMuZXhwcmVzc2lvbnM/XG4gICAgICBuYW1lcyA9IG9wdGlvbnMuZXhwcmVzc2lvbnMubWFwIChlKSAtPiBlLm5hbWVcbiAgICAgIHJlZ2lzdHJ5LmNyZWF0ZUV4cHJlc3Npb25zKG9wdGlvbnMuZXhwcmVzc2lvbnMpXG5cbiAgICAgIG5ldyBEaXNwb3NhYmxlIC0+IHJlZ2lzdHJ5LnJlbW92ZUV4cHJlc3Npb24obmFtZSkgZm9yIG5hbWUgaW4gbmFtZXNcbiAgICBlbHNlXG4gICAgICB7bmFtZSwgcmVnZXhwU3RyaW5nLCBoYW5kbGUsIHNjb3BlcywgcHJpb3JpdHl9ID0gb3B0aW9uc1xuICAgICAgcmVnaXN0cnkuY3JlYXRlRXhwcmVzc2lvbihuYW1lLCByZWdleHBTdHJpbmcsIHByaW9yaXR5LCBzY29wZXMsIGhhbmRsZSlcblxuICAgICAgbmV3IERpc3Bvc2FibGUgLT4gcmVnaXN0cnkucmVtb3ZlRXhwcmVzc2lvbihuYW1lKVxuXG4gIGRlc2VyaWFsaXplUGFsZXR0ZTogKHN0YXRlKSAtPlxuICAgIFBhbGV0dGUgPz0gcmVxdWlyZSAnLi9wYWxldHRlJ1xuICAgIFBhbGV0dGUuZGVzZXJpYWxpemUoc3RhdGUpXG5cbiAgZGVzZXJpYWxpemVDb2xvclNlYXJjaDogKHN0YXRlKSAtPlxuICAgIENvbG9yU2VhcmNoID89IHJlcXVpcmUgJy4vY29sb3Itc2VhcmNoJ1xuICAgIENvbG9yU2VhcmNoLmRlc2VyaWFsaXplKHN0YXRlKVxuXG4gIGRlc2VyaWFsaXplQ29sb3JQcm9qZWN0OiAoc3RhdGUpIC0+XG4gICAgQ29sb3JQcm9qZWN0ID89IHJlcXVpcmUgJy4vY29sb3ItcHJvamVjdCdcbiAgICBDb2xvclByb2plY3QuZGVzZXJpYWxpemUoc3RhdGUpXG5cbiAgZGVzZXJpYWxpemVDb2xvclByb2plY3RFbGVtZW50OiAoc3RhdGUpIC0+XG4gICAgQ29sb3JQcm9qZWN0RWxlbWVudCA/PSByZXF1aXJlICcuL2NvbG9yLXByb2plY3QtZWxlbWVudCdcbiAgICBlbGVtZW50ID0gbmV3IENvbG9yUHJvamVjdEVsZW1lbnRcblxuICAgIGlmIEBwcm9qZWN0P1xuICAgICAgZWxlbWVudC5zZXRNb2RlbChAZ2V0UHJvamVjdCgpKVxuICAgIGVsc2VcbiAgICAgIHN1YnNjcmlwdGlvbiA9IGF0b20ucGFja2FnZXMub25EaWRBY3RpdmF0ZVBhY2thZ2UgKHBrZykgPT5cbiAgICAgICAgaWYgcGtnLm5hbWUgaXMgJ3BpZ21lbnRzJ1xuICAgICAgICAgIHN1YnNjcmlwdGlvbi5kaXNwb3NlKClcbiAgICAgICAgICBlbGVtZW50LnNldE1vZGVsKEBnZXRQcm9qZWN0KCkpXG5cbiAgICBlbGVtZW50XG5cbiAgZGVzZXJpYWxpemVWYXJpYWJsZXNDb2xsZWN0aW9uOiAoc3RhdGUpIC0+XG4gICAgVmFyaWFibGVzQ29sbGVjdGlvbiA/PSByZXF1aXJlICcuL3ZhcmlhYmxlcy1jb2xsZWN0aW9uJ1xuICAgIFZhcmlhYmxlc0NvbGxlY3Rpb24uZGVzZXJpYWxpemUoc3RhdGUpXG5cbiAgcGlnbWVudHNWaWV3UHJvdmlkZXI6IChtb2RlbCkgLT5cbiAgICBlbGVtZW50ID0gaWYgbW9kZWwgaW5zdGFuY2VvZiAoQ29sb3JCdWZmZXIgPz0gcmVxdWlyZSAnLi9jb2xvci1idWZmZXInKVxuICAgICAgQ29sb3JCdWZmZXJFbGVtZW50ID89IHJlcXVpcmUgJy4vY29sb3ItYnVmZmVyLWVsZW1lbnQnXG4gICAgICBlbGVtZW50ID0gbmV3IENvbG9yQnVmZmVyRWxlbWVudFxuICAgIGVsc2UgaWYgbW9kZWwgaW5zdGFuY2VvZiAoQ29sb3JTZWFyY2ggPz0gcmVxdWlyZSAnLi9jb2xvci1zZWFyY2gnKVxuICAgICAgQ29sb3JSZXN1bHRzRWxlbWVudCA/PSByZXF1aXJlICcuL2NvbG9yLXJlc3VsdHMtZWxlbWVudCdcbiAgICAgIGVsZW1lbnQgPSBuZXcgQ29sb3JSZXN1bHRzRWxlbWVudFxuICAgIGVsc2UgaWYgbW9kZWwgaW5zdGFuY2VvZiAoQ29sb3JQcm9qZWN0ID89IHJlcXVpcmUgJy4vY29sb3ItcHJvamVjdCcpXG4gICAgICBDb2xvclByb2plY3RFbGVtZW50ID89IHJlcXVpcmUgJy4vY29sb3ItcHJvamVjdC1lbGVtZW50J1xuICAgICAgZWxlbWVudCA9IG5ldyBDb2xvclByb2plY3RFbGVtZW50XG4gICAgZWxzZSBpZiBtb2RlbCBpbnN0YW5jZW9mIChQYWxldHRlID89IHJlcXVpcmUgJy4vcGFsZXR0ZScpXG4gICAgICBQYWxldHRlRWxlbWVudCA/PSByZXF1aXJlICcuL3BhbGV0dGUtZWxlbWVudCdcbiAgICAgIGVsZW1lbnQgPSBuZXcgUGFsZXR0ZUVsZW1lbnRcblxuICAgIGVsZW1lbnQuc2V0TW9kZWwobW9kZWwpIGlmIGVsZW1lbnQ/XG4gICAgZWxlbWVudFxuXG4gIHNob3VsZERpc3BsYXlDb250ZXh0TWVudTogKGV2ZW50KSAtPlxuICAgIEBsYXN0RXZlbnQgPSBldmVudFxuICAgIHNldFRpbWVvdXQgKD0+IEBsYXN0RXZlbnQgPSBudWxsKSwgMTBcbiAgICBAY29sb3JNYXJrZXJGb3JNb3VzZUV2ZW50KGV2ZW50KT9cblxuICBjb2xvck1hcmtlckZvck1vdXNlRXZlbnQ6IChldmVudCkgLT5cbiAgICBlZGl0b3IgPSBhdG9tLndvcmtzcGFjZS5nZXRBY3RpdmVUZXh0RWRpdG9yKClcbiAgICBjb2xvckJ1ZmZlciA9IEBwcm9qZWN0LmNvbG9yQnVmZmVyRm9yRWRpdG9yKGVkaXRvcilcbiAgICBjb2xvckJ1ZmZlckVsZW1lbnQgPSBhdG9tLnZpZXdzLmdldFZpZXcoY29sb3JCdWZmZXIpXG4gICAgY29sb3JCdWZmZXJFbGVtZW50Py5jb2xvck1hcmtlckZvck1vdXNlRXZlbnQoZXZlbnQpXG5cbiAgc2VyaWFsaXplOiAtPiB7cHJvamVjdDogQHByb2plY3Quc2VyaWFsaXplKCl9XG5cbiAgZ2V0UHJvamVjdDogLT4gQHByb2plY3RcblxuICBmaW5kQ29sb3JzOiAtPlxuICAgIHVyaXMgPz0gcmVxdWlyZSAnLi91cmlzJ1xuXG4gICAgcGFuZSA9IGF0b20ud29ya3NwYWNlLnBhbmVGb3JVUkkodXJpcy5TRUFSQ0gpXG4gICAgcGFuZSB8fD0gYXRvbS53b3Jrc3BhY2UuZ2V0QWN0aXZlUGFuZSgpXG5cbiAgICBhdG9tLndvcmtzcGFjZS5vcGVuVVJJSW5QYW5lKHVyaXMuU0VBUkNILCBwYW5lLCB7fSlcblxuICBzaG93UGFsZXR0ZTogLT5cbiAgICB1cmlzID89IHJlcXVpcmUgJy4vdXJpcydcblxuICAgIEBwcm9qZWN0LmluaXRpYWxpemUoKS50aGVuIC0+XG4gICAgICBwYW5lID0gYXRvbS53b3Jrc3BhY2UucGFuZUZvclVSSSh1cmlzLlBBTEVUVEUpXG4gICAgICBwYW5lIHx8PSBhdG9tLndvcmtzcGFjZS5nZXRBY3RpdmVQYW5lKClcblxuICAgICAgYXRvbS53b3Jrc3BhY2Uub3BlblVSSUluUGFuZSh1cmlzLlBBTEVUVEUsIHBhbmUsIHt9KVxuICAgIC5jYXRjaCAocmVhc29uKSAtPlxuICAgICAgY29uc29sZS5lcnJvciByZWFzb25cblxuICBzaG93U2V0dGluZ3M6IC0+XG4gICAgdXJpcyA/PSByZXF1aXJlICcuL3VyaXMnXG5cbiAgICBAcHJvamVjdC5pbml0aWFsaXplKCkudGhlbiAtPlxuICAgICAgcGFuZSA9IGF0b20ud29ya3NwYWNlLnBhbmVGb3JVUkkodXJpcy5TRVRUSU5HUylcbiAgICAgIHBhbmUgfHw9IGF0b20ud29ya3NwYWNlLmdldEFjdGl2ZVBhbmUoKVxuXG4gICAgICBhdG9tLndvcmtzcGFjZS5vcGVuVVJJSW5QYW5lKHVyaXMuU0VUVElOR1MsIHBhbmUsIHt9KVxuICAgIC5jYXRjaCAocmVhc29uKSAtPlxuICAgICAgY29uc29sZS5lcnJvciByZWFzb25cblxuICByZWxvYWRQcm9qZWN0VmFyaWFibGVzOiAtPiBAcHJvamVjdC5yZWxvYWQoKVxuXG4gIGNyZWF0ZVBpZ21lbnRzUmVwb3J0OiAtPlxuICAgIGF0b20ud29ya3NwYWNlLm9wZW4oJ3BpZ21lbnRzLXJlcG9ydC5qc29uJykudGhlbiAoZWRpdG9yKSA9PlxuICAgICAgZWRpdG9yLnNldFRleHQoQGNyZWF0ZVJlcG9ydCgpKVxuXG4gIGNyZWF0ZVJlcG9ydDogLT5cbiAgICBvID1cbiAgICAgIGF0b206IGF0b20uZ2V0VmVyc2lvbigpXG4gICAgICBwaWdtZW50czogYXRvbS5wYWNrYWdlcy5nZXRMb2FkZWRQYWNrYWdlKCdwaWdtZW50cycpLm1ldGFkYXRhLnZlcnNpb25cbiAgICAgIHBsYXRmb3JtOiByZXF1aXJlKCdvcycpLnBsYXRmb3JtKClcbiAgICAgIGNvbmZpZzogYXRvbS5jb25maWcuZ2V0KCdwaWdtZW50cycpXG4gICAgICBwcm9qZWN0OlxuICAgICAgICBjb25maWc6XG4gICAgICAgICAgc291cmNlTmFtZXM6IEBwcm9qZWN0LnNvdXJjZU5hbWVzXG4gICAgICAgICAgc2VhcmNoTmFtZXM6IEBwcm9qZWN0LnNlYXJjaE5hbWVzXG4gICAgICAgICAgaWdub3JlZE5hbWVzOiBAcHJvamVjdC5pZ25vcmVkTmFtZXNcbiAgICAgICAgICBpZ25vcmVkU2NvcGVzOiBAcHJvamVjdC5pZ25vcmVkU2NvcGVzXG4gICAgICAgICAgaW5jbHVkZVRoZW1lczogQHByb2plY3QuaW5jbHVkZVRoZW1lc1xuICAgICAgICAgIGlnbm9yZUdsb2JhbFNvdXJjZU5hbWVzOiBAcHJvamVjdC5pZ25vcmVHbG9iYWxTb3VyY2VOYW1lc1xuICAgICAgICAgIGlnbm9yZUdsb2JhbFNlYXJjaE5hbWVzOiBAcHJvamVjdC5pZ25vcmVHbG9iYWxTZWFyY2hOYW1lc1xuICAgICAgICAgIGlnbm9yZUdsb2JhbElnbm9yZWROYW1lczogQHByb2plY3QuaWdub3JlR2xvYmFsSWdub3JlZE5hbWVzXG4gICAgICAgICAgaWdub3JlR2xvYmFsSWdub3JlZFNjb3BlczogQHByb2plY3QuaWdub3JlR2xvYmFsSWdub3JlZFNjb3Blc1xuICAgICAgICBwYXRoczogQHByb2plY3QuZ2V0UGF0aHMoKVxuICAgICAgICB2YXJpYWJsZXM6XG4gICAgICAgICAgY29sb3JzOiBAcHJvamVjdC5nZXRDb2xvclZhcmlhYmxlcygpLmxlbmd0aFxuICAgICAgICAgIHRvdGFsOiBAcHJvamVjdC5nZXRWYXJpYWJsZXMoKS5sZW5ndGhcblxuICAgIEpTT04uc3RyaW5naWZ5KG8sIG51bGwsIDIpXG4gICAgLnJlcGxhY2UoLy8vI3thdG9tLnByb2plY3QuZ2V0UGF0aHMoKS5qb2luKCd8Jyl9Ly8vZywgJzxyb290PicpXG4iXX0=
