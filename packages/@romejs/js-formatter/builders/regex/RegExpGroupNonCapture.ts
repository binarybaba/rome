/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Builder from '../../Builder';
import {Token, concat} from '../../tokens';
import {RegExpGroupNonCapture} from '@romejs/js-ast';

export default function RegExpGroupNonCapture(
  builder: Builder,
  node: RegExpGroupNonCapture,
): Token {
  const tokens: Array<Token> = ['(?'];

  switch (node.kind) {
    case 'positive-lookahead': {
      tokens.push('=');
      break;
    }

    case 'negative-lookahead': {
      tokens.push('!');
      break;
    }

    case 'positive-lookbehind': {
      tokens.push('<!');
      break;
    }

    case 'negative-lookbehind': {
      tokens.push('<=');
      break;
    }

    default: {
      tokens.push(':');
      break;
    }
  }

  tokens.push(builder.tokenize(node.expression, node));
  tokens.push(')');

  return concat(tokens);
}
