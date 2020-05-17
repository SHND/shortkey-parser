import { expect } from 'chai'
import { ShortkeyParser } from '../src/ShortkeyParser';
import { KeyLocation } from '../src/KeyLocation';
import { KeyMaps } from '../src/KeyMaps';
// import { KeyMaps } from '../src/KeyMaps';

describe("ShortkeyParser Class", () => {
    it('parse "alt+r,lshift+x"', () => {
        const parsed = ShortkeyParser.parse('alt+r,lctrl+lshift+x');

        expect(parsed.toJSON()).deep.equal([
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
                        which: 82,
                        keyCode: 82,
                        code: 'KeyR',
                        key: 'r',
                        location: KeyLocation.GENERAL_KEY,
                    },
                ]
            ],
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
                        which: 16,
                        keyCode: 16,
                        code: 'ShiftLeft',
                        key: 'Shift',
                        location: KeyLocation.LEFT_SIDE_MODIFIER_KEY,
                    },
                ],
                [
                    {
                        which: 88,
                        keyCode: 88,
                        code: 'KeyX',
                        key: 'x',
                        location: KeyLocation.GENERAL_KEY,
                    },
                ]
            ]
        ]);

        expect(parsed.toJSON()).deep.equal(
            [
                [
                    KeyMaps.alt,
                    KeyMaps.r
                ],
                [
                    KeyMaps.lctrl,
                    KeyMaps.lshift,
                    KeyMaps.x
                ]
            ]
        );

    });

    it('parse ShortkeySequence "alt+r,lshift+x" toString()', () => {
        const parsed = ShortkeyParser.parse('alt+r,lctrl+lshift+x');

        expect(parsed.toJSON()).deep.equal(
            [
                [
                    KeyMaps.alt,
                    KeyMaps.r
                ],
                [
                    KeyMaps.lctrl,
                    KeyMaps.lshift,
                    KeyMaps.x
                ]
            ]
        );

        expect(parsed.toString()).equal('[AltLeft|AltRight]+KeyR,ControlLeft+ShiftLeft+KeyX');

    });
});
