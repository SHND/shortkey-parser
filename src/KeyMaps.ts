/**
 * RULES:
 *  - Initial definition of the KEY_MAPS should contain exactly one item in its array
 *  - Aliases (extensions) can have one or more KeyTypes.
 *  - Non-modifiers should not grouped (aliased) with modifiers (like alt and 'a')
 */

import { KeyLocation } from './KeyLocation';

export interface KeyType {
    which: number;
    keyCode: number;
    code: string;
    key: string;
    location: KeyLocation;
}

let KEY_MAPS: Record<string, KeyType[]> = {
    /**
     * .....
     * xxxx xxx xxx
     * xxxx     xxx
     * xxxx xx  xxx
     */
    escape: [
        {
            which: 27,
            keyCode: 27,
            code: 'Escape',
            key: 'Escape',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    f1: [
        {
            which: 112,
            keyCode: 112,
            code: 'F1',
            key: 'F1',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    f2: [
        {
            which: 113,
            keyCode: 113,
            code: 'F2',
            key: 'F2',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    f3: [
        {
            which: 114,
            keyCode: 114,
            code: 'F3',
            key: 'F3',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    f4: [
        {
            which: 115,
            keyCode: 115,
            code: 'F4',
            key: 'F4',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    f5: [
        {
            which: 116,
            keyCode: 116,
            code: 'F5',
            key: 'F5',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    f6: [
        {
            which: 117,
            keyCode: 117,
            code: 'F6',
            key: 'F6',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    f7: [
        {
            which: 118,
            keyCode: 118,
            code: 'F7',
            key: 'F7',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    f8: [
        {
            which: 119,
            keyCode: 119,
            code: 'F8',
            key: 'F8',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    f9: [
        {
            which: 120,
            keyCode: 120,
            code: 'F9',
            key: 'F9',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    f10: [
        {
            which: 121,
            keyCode: 121,
            code: 'F10',
            key: 'F10',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    f11: [
        {
            which: 122,
            keyCode: 122,
            code: 'F11',
            key: 'F11',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    f12: [
        {
            which: 123,
            keyCode: 123,
            code: 'F12',
            key: 'F12',
            location: KeyLocation.GENERAL_KEY,
        },
    ],

    /**
     * xxxxx
     * ...x xxx xxx
     * xxxx     xxx
     * xxxx xx  xxx
     */
    backquote: [
        {
            which: 192,
            keyCode: 192,
            code: 'Backquote',
            key: '`',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    'general-0': [
        {
            which: 48,
            keyCode: 48,
            code: 'Digit0',
            key: '0',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    'general-1': [
        {
            which: 49,
            keyCode: 49,
            code: 'Digit1',
            key: '1',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    'general-2': [
        {
            which: 50,
            keyCode: 50,
            code: 'Digit2',
            key: '2',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    'general-3': [
        {
            which: 51,
            keyCode: 51,
            code: 'Digit3',
            key: '3',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    'general-4': [
        {
            which: 52,
            keyCode: 52,
            code: 'Digit4',
            key: '4',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    'general-5': [
        {
            which: 53,
            keyCode: 53,
            code: 'Digit5',
            key: '5',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    'general-6': [
        {
            which: 54,
            keyCode: 54,
            code: 'Digit6',
            key: '6',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    'general-7': [
        {
            which: 55,
            keyCode: 55,
            code: 'Digit7',
            key: '7',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    'general-8': [
        {
            which: 56,
            keyCode: 56,
            code: 'Digit8',
            key: '8',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    'general-9': [
        {
            which: 57,
            keyCode: 57,
            code: 'Digit9',
            key: '9',
            location: KeyLocation.GENERAL_KEY,
        },
    ],

    /**
     * xxxxx
     * xxxx xxx xxx
     * x..x     xxx
     * xxxx xx  xxx
     */
    a: [
        {
            which: 65,
            keyCode: 65,
            code: 'KeyA',
            key: 'a',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    b: [
        {
            which: 66,
            keyCode: 66,
            code: 'KeyB',
            key: 'b',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    c: [
        {
            which: 67,
            keyCode: 67,
            code: 'KeyC',
            key: 'c',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    d: [
        {
            which: 68,
            keyCode: 68,
            code: 'KeyD',
            key: 'd',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    e: [
        {
            which: 69,
            keyCode: 69,
            code: 'KeyE',
            key: 'e',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    f: [
        {
            which: 70,
            keyCode: 70,
            code: 'KeyF',
            key: 'f',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    g: [
        {
            which: 71,
            keyCode: 71,
            code: 'KeyG',
            key: 'g',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    h: [
        {
            which: 72,
            keyCode: 72,
            code: 'KeyH',
            key: 'h',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    i: [
        {
            which: 73,
            keyCode: 73,
            code: 'KeyI',
            key: 'i',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    j: [
        {
            which: 74,
            keyCode: 74,
            code: 'KeyJ',
            key: 'j',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    k: [
        {
            which: 75,
            keyCode: 75,
            code: 'KeyK',
            key: 'k',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    l: [
        {
            which: 76,
            keyCode: 76,
            code: 'KeyL',
            key: 'l',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    m: [
        {
            which: 77,
            keyCode: 77,
            code: 'KeyM',
            key: 'm',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    n: [
        {
            which: 78,
            keyCode: 78,
            code: 'KeyN',
            key: 'n',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    o: [
        {
            which: 79,
            keyCode: 79,
            code: 'KeyO',
            key: 'o',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    p: [
        {
            which: 80,
            keyCode: 80,
            code: 'KeyP',
            key: 'p',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    q: [
        {
            which: 81,
            keyCode: 81,
            code: 'KeyQ',
            key: 'q',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    r: [
        {
            which: 82,
            keyCode: 82,
            code: 'KeyR',
            key: 'r',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    s: [
        {
            which: 83,
            keyCode: 83,
            code: 'KeyS',
            key: 's',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    t: [
        {
            which: 84,
            keyCode: 84,
            code: 'KeyT',
            key: 't',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    u: [
        {
            which: 85,
            keyCode: 85,
            code: 'KeyU',
            key: 'u',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    v: [
        {
            which: 86,
            keyCode: 86,
            code: 'KeyV',
            key: 'v',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    w: [
        {
            which: 87,
            keyCode: 87,
            code: 'KeyW',
            key: 'w',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    x: [
        {
            which: 88,
            keyCode: 88,
            code: 'KeyX',
            key: 'x',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    y: [
        {
            which: 89,
            keyCode: 89,
            code: 'KeyY',
            key: 'y',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    z: [
        {
            which: 90,
            keyCode: 90,
            code: 'KeyZ',
            key: 'z',
            location: KeyLocation.GENERAL_KEY,
        },
    ],

    /**
     * xxxxx
     * .xxx xxx xxx
     * .xxx     xxx
     * .... xx  xxx
     */
    tab: [
        {
            which: 9,
            keyCode: 9,
            code: 'Tab',
            key: 'Tab',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    capslock: [
        {
            which: 20,
            keyCode: 20,
            code: 'CapsLock',
            key: 'CapsLock',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    'left-shift': [
        {
            which: 16,
            keyCode: 16,
            code: 'ShiftLeft',
            key: 'Shift',
            location: KeyLocation.LEFT_SIDE_MODIFIER_KEY,
        },
    ],
    'right-shift': [
        {
            which: 16,
            keyCode: 16,
            code: 'ShiftRight',
            key: 'Shift',
            location: KeyLocation.RIGHT_SIDE_MODIFIER_KEY,
        },
    ],
    'left-ctrl': [
        {
            which: 17,
            keyCode: 17,
            code: 'ControlLeft',
            key: 'Control',
            location: KeyLocation.LEFT_SIDE_MODIFIER_KEY,
        },
    ],
    'right-ctrl': [
        {
            which: 17,
            keyCode: 17,
            code: 'ControlRight',
            key: 'Control',
            location: KeyLocation.RIGHT_SIDE_MODIFIER_KEY,
        },
    ],
    'left-alt': [
        {
            which: 18,
            keyCode: 18,
            code: 'AltLeft',
            key: 'Alt',
            location: KeyLocation.LEFT_SIDE_MODIFIER_KEY,
        },
    ],
    'right-alt': [
        {
            which: 18,
            keyCode: 18,
            code: 'AltRight',
            key: 'Alt',
            location: KeyLocation.RIGHT_SIDE_MODIFIER_KEY,
        },
    ],
    'left-meta': [
        {
            which: 224,
            keyCode: 224,
            code: 'OSLeft',
            key: 'Meta',
            location: KeyLocation.LEFT_SIDE_MODIFIER_KEY,
        },
    ],
    'right-meta': [
        {
            which: 224,
            keyCode: 224,
            code: 'OSRight',
            key: 'Meta',
            location: KeyLocation.RIGHT_SIDE_MODIFIER_KEY,
        },
    ],
    space: [
        {
            which: 32,
            keyCode: 32,
            code: 'Space',
            key: ' ',
            location: KeyLocation.GENERAL_KEY,
        },
    ],

    /**
     * xxxxx
     * .xxx ... xxx
     * xxxx     xxx
     * xxxx xx  xxx
     */
    pageup: [
        {
            which: 33,
            keyCode: 33,
            code: 'PageUp',
            key: 'PageUp',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    pagedown: [
        {
            which: 34,
            keyCode: 34,
            code: 'PageDown',
            key: 'PageDown',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    end: [
        {
            which: 35,
            keyCode: 35,
            code: 'End',
            key: 'End',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    home: [
        {
            which: 36,
            keyCode: 36,
            code: 'Home',
            key: 'Home',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    delete: [
        {
            which: 46,
            keyCode: 46,
            code: 'Delete',
            key: 'Delete',
            location: KeyLocation.GENERAL_KEY,
        },
    ],

    /**
     * xxxxx
     * .xxx xxx xxx
     * xxxx     xxx
     * xxxx ..  xxx
     */
    left: [
        {
            which: 37,
            keyCode: 37,
            code: 'ArrowLeft',
            key: 'ArrowLeft',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    up: [
        {
            which: 38,
            keyCode: 38,
            code: 'ArrowUp',
            key: 'ArrowUp',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    right: [
        {
            which: 39,
            keyCode: 39,
            code: 'ArrowRight',
            key: 'ArrowRight',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    down: [
        {
            which: 40,
            keyCode: 40,
            code: 'ArrowDown',
            key: 'ArrowDown',
            location: KeyLocation.GENERAL_KEY,
        },
    ],

    /**
     * xxxxx
     * xxxx xxx ...
     * xxxx     ...
     * xxxx xx  ...
     */
    numlock: [
        {
            which: 12,
            keyCode: 12,
            code: 'NumLock',
            key: 'Clear',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    'numpad-divide': [
        {
            which: 111,
            keyCode: 111,
            code: 'NumpadDivide',
            key: '/',
            location: KeyLocation.NUMPAD,
        },
    ],
    'numpad-multiply': [
        {
            which: 106,
            keyCode: 106,
            code: 'NumpadMultiply',
            key: '*',
            location: KeyLocation.NUMPAD,
        },
    ],
    'numpad-subtract': [
        {
            which: 109,
            keyCode: 109,
            code: 'NumpadSubtract',
            key: '-',
            location: KeyLocation.NUMPAD,
        },
    ],
    'numpad-add': [
        {
            which: 107,
            keyCode: 107,
            code: 'NumpadAdd',
            key: '+',
            location: KeyLocation.NUMPAD,
        },
    ],
    'numpad-enter': [
        {
            which: 13,
            keyCode: 13,
            code: 'NumpadEnter',
            key: 'Enter',
            location: KeyLocation.NUMPAD,
        },
    ],
    'numpad-period': [
        {
            which: 110,
            keyCode: 110,
            code: 'NumpadDecimal',
            key: '.',
            location: KeyLocation.NUMPAD,
        },
    ],
    'numpad-0': [
        {
            which: 96,
            keyCode: 96,
            code: 'Numpad0',
            key: '0',
            location: KeyLocation.NUMPAD,
        },
    ],
    'numpad-1': [
        {
            which: 97,
            keyCode: 97,
            code: 'Numpad1',
            key: '1',
            location: KeyLocation.NUMPAD,
        },
    ],
    'numpad-2': [
        {
            which: 98,
            keyCode: 98,
            code: 'Numpad2',
            key: '2',
            location: KeyLocation.NUMPAD,
        },
    ],
    'numpad-3': [
        {
            which: 99,
            keyCode: 99,
            code: 'Numpad3',
            key: '3',
            location: KeyLocation.NUMPAD,
        },
    ],
    'numpad-4': [
        {
            which: 100,
            keyCode: 100,
            code: 'Numpad4',
            key: '4',
            location: KeyLocation.NUMPAD,
        },
    ],
    'numpad-5': [
        {
            which: 101,
            keyCode: 101,
            code: 'Numpad5',
            key: '5',
            location: KeyLocation.NUMPAD,
        },
    ],
    'numpad-6': [
        {
            which: 102,
            keyCode: 102,
            code: 'Numpad6',
            key: '6',
            location: KeyLocation.NUMPAD,
        },
    ],
    'numpad-7': [
        {
            which: 103,
            keyCode: 103,
            code: 'Numpad7',
            key: '7',
            location: KeyLocation.NUMPAD,
        },
    ],
    'numpad-8': [
        {
            which: 104,
            keyCode: 104,
            code: 'Numpad8',
            key: '8',
            location: KeyLocation.NUMPAD,
        },
    ],
    'numpad-9': [
        {
            which: 105,
            keyCode: 105,
            code: 'Numpad9',
            key: '9',
            location: KeyLocation.NUMPAD,
        },
    ],

    /**
     * xxxxx
     * xxx. xxx xxx
     * xxx.     xxx
     * xxxx xx  xxx
     */
    'general-subtract': [
        {
            which: 173,
            keyCode: 173,
            code: 'Minus',
            key: '-',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    equal: [
        {
            which: 61,
            keyCode: 61,
            code: 'Equal',
            key: '=',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    backspace: [
        {
            which: 8,
            keyCode: 8,
            code: 'Backspace',
            key: 'Backspace',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    bracketleft: [
        {
            which: 219,
            keyCode: 219,
            code: 'BracketLeft',
            key: '[',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    bracketright: [
        {
            which: 221,
            keyCode: 221,
            code: 'BracketRight',
            key: ']',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    backslash: [
        {
            which: 220,
            keyCode: 220,
            code: 'Backslash',
            key: '\\',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    semicolon: [
        {
            which: 59,
            keyCode: 59,
            code: 'Semicolon',
            key: ';',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    quote: [
        {
            which: 222,
            keyCode: 222,
            code: 'Quote',
            key: "'",
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    'general-enter': [
        {
            which: 13,
            keyCode: 13,
            code: 'Enter',
            key: 'Enter',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    comma: [
        {
            which: 188,
            keyCode: 188,
            code: 'Comma',
            key: ',',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    'general-period': [
        {
            which: 190,
            keyCode: 190,
            code: 'Period',
            key: '.',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
    'general-divide': [
        {
            which: 191,
            keyCode: 191,
            code: 'Slash',
            key: '/',
            location: KeyLocation.GENERAL_KEY,
        },
    ],
};

// ESCAPE
KEY_MAPS['esc'] = [...KEY_MAPS.escape];

// BACKQUOTE
KEY_MAPS['backtick'] = [...KEY_MAPS.backquote];

// EQUAL
KEY_MAPS['='] = [...KEY_MAPS.equal];

// SEMICOLON
KEY_MAPS[';'] = [...KEY_MAPS['semicolon']];

// SPACE
KEY_MAPS[' '] = [...KEY_MAPS['space']];

// BRACKET
KEY_MAPS['['] = [...KEY_MAPS['bracketleft']];
KEY_MAPS[']'] = [...KEY_MAPS['bracketright']];

// ENTER
KEY_MAPS['enter'] = [...KEY_MAPS['general-enter'], ...KEY_MAPS['numpad-enter']];

// DIVIDE
KEY_MAPS['general-slash'] = [...KEY_MAPS['general-divide']];
KEY_MAPS['numpad-slash'] = [...KEY_MAPS['numpad-divide']];
KEY_MAPS['divide'] = [...KEY_MAPS['numpad-divide'], ...KEY_MAPS['general-divide']];
KEY_MAPS['slash'] = [...KEY_MAPS['numpad-divide'], ...KEY_MAPS['general-divide']];

// PLUS
KEY_MAPS['+'] = [...KEY_MAPS['numpad-add']];
KEY_MAPS['add'] = [...KEY_MAPS['numpad-add']];
KEY_MAPS['plus'] = [...KEY_MAPS['numpad-add']];

// DASH
KEY_MAPS['general-minus'] = [...KEY_MAPS['general-subtract']];
KEY_MAPS['general-dash'] = [...KEY_MAPS['general-subtract']];
KEY_MAPS['numpad-minus'] = [...KEY_MAPS['numpad-subtract']];
KEY_MAPS['numpad-dash'] = [...KEY_MAPS['numpad-subtract']];
KEY_MAPS['subtract'] = [
    ...KEY_MAPS['general-subtract'],
    ...KEY_MAPS['numpad-subtract'],
];
KEY_MAPS['minus'] = [
    ...KEY_MAPS['general-subtract'],
    ...KEY_MAPS['numpad-subtract'],
];
KEY_MAPS['dash'] = [
    ...KEY_MAPS['general-subtract'],
    ...KEY_MAPS['numpad-subtract'],
];

// DOT
KEY_MAPS['numpad-dot'] = [...KEY_MAPS['numpad-period']];
KEY_MAPS['general-dot'] = [...KEY_MAPS['general-period']];
KEY_MAPS['period'] = [...KEY_MAPS['general-period'], ...KEY_MAPS['numpad-period']];
KEY_MAPS['dot'] = [...KEY_MAPS['general-period'], ...KEY_MAPS['numpad-period']];
KEY_MAPS['.'] = [...KEY_MAPS['general-period'], ...KEY_MAPS['numpad-period']];

// NUMBER
KEY_MAPS['0'] = [...KEY_MAPS['general-0'], ...KEY_MAPS['numpad-0']];
KEY_MAPS['1'] = [...KEY_MAPS['general-1'], ...KEY_MAPS['numpad-1']];
KEY_MAPS['2'] = [...KEY_MAPS['general-2'], ...KEY_MAPS['numpad-2']];
KEY_MAPS['3'] = [...KEY_MAPS['general-3'], ...KEY_MAPS['numpad-3']];
KEY_MAPS['4'] = [...KEY_MAPS['general-4'], ...KEY_MAPS['numpad-4']];
KEY_MAPS['5'] = [...KEY_MAPS['general-5'], ...KEY_MAPS['numpad-5']];
KEY_MAPS['6'] = [...KEY_MAPS['general-6'], ...KEY_MAPS['numpad-6']];
KEY_MAPS['7'] = [...KEY_MAPS['general-7'], ...KEY_MAPS['numpad-7']];
KEY_MAPS['8'] = [...KEY_MAPS['general-8'], ...KEY_MAPS['numpad-8']];
KEY_MAPS['9'] = [...KEY_MAPS['general-9'], ...KEY_MAPS['numpad-9']];

// SHIFT
KEY_MAPS['lshift'] = [...KEY_MAPS['left-shift']];
KEY_MAPS['rshift'] = [...KEY_MAPS['right-shift']];
KEY_MAPS['shift'] = [...KEY_MAPS['left-shift'], ...KEY_MAPS['right-shift']];

// CTRL
KEY_MAPS['lctrl'] = [...KEY_MAPS['left-ctrl']];
KEY_MAPS['rctrl'] = [...KEY_MAPS['right-ctrl']];
KEY_MAPS['ctrl'] = [...KEY_MAPS['left-ctrl'], ...KEY_MAPS['right-ctrl']];
KEY_MAPS['left-control'] = [...KEY_MAPS['left-ctrl']];
KEY_MAPS['right-control'] = [...KEY_MAPS['right-ctrl']];
KEY_MAPS['lcontrol'] = [...KEY_MAPS['left-ctrl']];
KEY_MAPS['rcontrol'] = [...KEY_MAPS['right-ctrl']];
KEY_MAPS['control'] = [...KEY_MAPS['left-ctrl'], ...KEY_MAPS['right-ctrl']];

// ALT
KEY_MAPS['lalt'] = [...KEY_MAPS['left-alt']];
KEY_MAPS['ralt'] = [...KEY_MAPS['right-alt']];
KEY_MAPS['alt'] = [...KEY_MAPS['left-alt'], ...KEY_MAPS['right-alt']];

// META
KEY_MAPS['lmeta'] = [...KEY_MAPS['left-meta']];
KEY_MAPS['rmeta'] = [...KEY_MAPS['right-meta']];
KEY_MAPS['meta'] = [...KEY_MAPS['left-meta'], ...KEY_MAPS['right-meta']];

export const KeyMaps: Record<string, KeyType[]> = Object.freeze(KEY_MAPS);
