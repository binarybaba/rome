# `noDuplicateCase.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-compiler/lint/rules/noDuplicateCase.test.ts --update-snapshots` to update.

## `no duplicated switch cases allowed`

### `0`

```

 unknown:11:7 lint/noDuplicateCase ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Duplicate case c not allowed.

     9 │   case 'd':
    10 │     break;
  > 11 │   case 'c':
       │        ^^^
    12 │     break;
    13 │   default:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```
const expr = 'a';
switch (expr) {
  case 'a':
    break;
  case 'b':
    break;
  case 'c':
    break;
  case 'd':
    break;
  case 'c':
    break;
  default:
    break;
}

```
