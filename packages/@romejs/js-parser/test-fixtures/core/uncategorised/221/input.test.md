# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 221`

```javascript
Program {
  comments: Array []
  corrupt: false
  diagnostics: Array []
  directives: Array []
  filename: 'input.js'
  hasHoistedVars: true
  interpreter: undefined
  mtime: undefined
  sourceType: 'script'
  syntax: Array []
  loc: Object {
    filename: 'input.js'
    end: Object {
      column: 34
      index: 34
      line: 1
    }
    start: Object {
      column: 0
      index: 0
      line: 1
    }
  }
  body: Array [
    VariableDeclarationStatement {
      loc: Object {
        filename: 'input.js'
        end: Object {
          column: 34
          index: 34
          line: 1
        }
        start: Object {
          column: 0
          index: 0
          line: 1
        }
      }
      declaration: VariableDeclaration {
        kind: 'var'
        loc: Object {
          filename: 'input.js'
          end: Object {
            column: 34
            index: 34
            line: 1
          }
          start: Object {
            column: 0
            index: 0
            line: 1
          }
        }
        declarations: Array [
          VariableDeclarator {
            id: BindingIdentifier {
              name: 'implements'
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 14
                  index: 14
                  line: 1
                }
                start: Object {
                  column: 4
                  index: 4
                  line: 1
                }
              }
            }
            init: undefined
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 14
                index: 14
                line: 1
              }
              start: Object {
                column: 4
                index: 4
                line: 1
              }
            }
          }
          VariableDeclarator {
            id: BindingIdentifier {
              name: 'interface'
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 25
                  index: 25
                  line: 1
                }
                start: Object {
                  column: 16
                  index: 16
                  line: 1
                }
              }
            }
            init: undefined
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 25
                index: 25
                line: 1
              }
              start: Object {
                column: 16
                index: 16
                line: 1
              }
            }
          }
          VariableDeclarator {
            id: BindingIdentifier {
              name: 'package'
              loc: Object {
                filename: 'input.js'
                end: Object {
                  column: 34
                  index: 34
                  line: 1
                }
                start: Object {
                  column: 27
                  index: 27
                  line: 1
                }
              }
            }
            init: undefined
            loc: Object {
              filename: 'input.js'
              end: Object {
                column: 34
                index: 34
                line: 1
              }
              start: Object {
                column: 27
                index: 27
                line: 1
              }
            }
          }
        ]
      }
    }
  ]
}
```
