# shortkey-parser

Keyboard shortkey parser.

![GitHub](https://img.shields.io/github/license/SHND/shortkey-parser)
[![Build Status](https://travis-ci.org/SHND/shortkey-parser.svg?branch=master)](https://travis-ci.org/SHND/shortkey-parser)
[![Coverage Status](https://coveralls.io/repos/github/SHND/shortkey-parser/badge.svg?branch=master)](https://coveralls.io/github/SHND/shortkey-parser?branch=master)

## Installation

```bash
npm install shortkey-parser
```

## Usage

shortkey-parser is exposing a parse method, which can be used to parse shortkey strings.

```javascript
import { parse } from 'shortkey-parser';

const shortkeys = parse('ctrl+k, a');

const json = shortkeys.toJSON();
```


## Definitions

### Key

Key represents a single key on the keyboard. It has a type of **KeyType** which is represented as a most basic object in *shortkey-parser*.

Keys are represented in a flat object. As an example this is a *A* key on the keyboard:
```javascript
// key A on keyboard
{
    which: 65,
    keyCode: 65,
    code: 'KeyA',
    key: 'a',
    location: KeyLocation.GENERAL_KEY,
},
```

### KeyGroup

KeyGroups are groups of keyboard keys. Each Key has its own group and some keys are grouped under same alias names:
```javascript
// Left alt key on keyboard
'left-alt': [
    {
        which: 18,
        keyCode: 18,
        code: 'AltLeft',
        key: 'Alt',
        location: KeyLocation.LEFT_SIDE_MODIFIER_KEY,
    },
],

// alt Keys
'alt': [
    {
        which: 18,
        keyCode: 18,
        code: 'AltLeft',
        key: 'Alt',
        location: KeyLocation.LEFT_SIDE_MODIFIER_KEY,
    },
    {
        which: 18,
        keyCode: 18,
        code: 'AltRight',
        key: 'Alt',
        location: KeyLocation.RIGHT_SIDE_MODIFIER_KEY,
    },
]
```

**KeyGroup** has methods below:
- **size()**: number of Keys in the KeyGroup.
- **toJSON()**: Json representation of the KeyGroup.
- **from(str)**: static method which grabs an string (representing the key or alias) and returns a KeyGroup.

### Shortkey

Shortkeys are combination of KeyGroups separated by "+". Here is an example of **alt+d** Shortkey.

```javascript
// "alt+d" Shortkey
[
    [
        {
            which: 18,
            keyCode: 18,
            code: 'AltLeft',
            key: 'Alt',
            location: KeyLocation.LEFT_SIDE_MODIFIER_KEY,
        },
        {
            which: 18,
            keyCode: 18,
            code: 'AltRight',
            key: 'Alt',
            location: KeyLocation.RIGHT_SIDE_MODIFIER_KEY,
        },
    ],
    [
        {
            which: 68,
            keyCode: 68,
            code: 'KeyD',
            key: 'd',
            location: KeyLocation.GENERAL_KEY,
        },
    ]
]
```

In our convention, you are not tied to modifiers like alt and only one general key. Here is an example of **a+d** Shortkey.

```javascript
// "a+d" Shortkey
[
    [
        {
            which: 65,
            keyCode: 65,
            code: 'KeyA',
            key: 'a',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    [
        {
            which: 68,
            keyCode: 68,
            code: 'KeyD',
            key: 'd',
            location: KeyLocation.GENERAL_KEY,
        },
    ]
]
```

**Shortkey** has methods below:
- **size()**: number of KeyGroups in the Shortkey.
- **toJSON()**: Json representation of the Shortkey.
- **from(str)**: static method which grabs an string representing a shortkey and returns a Shortkey.

### ShortkeySequence

ShortkeySequences are list of Shortkeys separated by ",". Here is an example of **ctrl+k, d** Shortkey.

```javascript
// "alt+d" Shortkey
[

    [
        [
            [
                {
                    which: 17,
                    keyCode: 17,
                    code: 'ControlLeft',
                    key: 'Control',
                    location: KeyLocation.LEFT_SIDE_MODIFIER_KEY,
                },
            ],
            [
                {
                    which: 17,
                    keyCode: 17,
                    code: 'ControlRight',
                    key: 'Control',
                    location: KeyLocation.RIGHT_SIDE_MODIFIER_KEY,
                },
            ]
        ],
        [
            {
                which: 75,
                keyCode: 75,
                code: 'KeyK',
                key: 'k',
                location: KeyLocation.GENERAL_KEY,
            },
        ]
    ],
    [
        [
            {
                which: 68,
                keyCode: 68,
                code: 'KeyD',
                key: 'd',
                location: KeyLocation.GENERAL_KEY,
            },
        ]
    ]

]
```

**ShortkeySequence** has methods below:
- **first()**: returns the first Shortkey in the ShortkeySequence.
- **last()**: returns the last Shortkey in the ShortkeySequence.
- **get(n)**: returns the nth Shortkey in the ShortkeySequence.
- **size()**: number of Shortkeys in the ShortkeySequence.
- **toJSON()**: Json representation of the ShortkeySequence.
- **toString()**: String representation of the ShortkeySequence. This is only for testing and cannot be passed to ShortkeySequence for parsing again.
- **from(str)**: static method which grabs an string representing a shortkeySequence and returns a ShortkeySequence.

## Special Cases
### Whitespaces

All whitespaces are ignored

### Special Characters

You can put special characters inside quotes or double quotes. Also remember that almost always in this cases there is an equivalent alias.

```
alt+'+'
alt+plus
```

Any Key can be put inside a quote or double quote. If you are not sure you need one, you can always put it in quotes or use an alias.
