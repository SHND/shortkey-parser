import { expect } from 'chai'
import { ShortkeySequence } from '../src/ShortkeySequence';
import { KeyMaps } from '../src/KeyMaps';
import { KeyLocation } from '../src/KeyLocation';

describe("ShortkeySequence Class", () => {
    it('ShortkeySequence with single key "a"', () => {
        const shortkeySequence = ShortkeySequence.from('a');

        expect(shortkeySequence.size()).equals(1);

        expect(shortkeySequence.toJSON()).deep.equal(
            [
                [
                    [
                        {
                            which: 65,
                            keyCode: 65,
                            code: 'KeyA',
                            key: 'a',
                            location: KeyLocation.GENERAL_KEY,
                        }
                    ]
                ]
            ]
        );
    });

    it('ShortkeySequence with single key "alt"', () => {
        const shortkeysequence = ShortkeySequence.from('alt');

        expect(shortkeysequence.size()).equals(1);

        expect(shortkeysequence.toJSON()).deep.equal(
            [
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
                    ]
                ]
            ]
        );
    });

    it('ShortkeySequence with "alt+a,b"', () => {
        const shortkeysequence = ShortkeySequence.from('alt+a,b');

        expect(shortkeysequence.size()).equals(2);

        expect(shortkeysequence.toJSON()).deep.equal(
            [
                [
                    KeyMaps.alt,
                    KeyMaps.a,
                ],
                [
                    KeyMaps.b
                ]
            ]
        );
    });

    it('ShortkeySequence ignores spaces " alt  + a ,  b "', () => {
        const shortkeysequence = ShortkeySequence.from(' alt  + a ,  b ');

        expect(shortkeysequence.size()).equals(2);

        expect(shortkeysequence.toJSON()).deep.equal(
            [
                [
                    KeyMaps.alt,
                    KeyMaps.a,
                ],
                [
                    KeyMaps.b
                ]
            ]
        );
    });

    it('ShortkeySequence empty string', () => {
        const task = () => {
            ShortkeySequence.from('');
        }

        expect(task).throws(Error, 'Shortkeys cannot be empty')
    });

    it('ShortkeySequence comma ","', () => {
        const task = () => {
            ShortkeySequence.from(',');
        }

        expect(task).throws(Error, 'parsing error')
    });

    it('ShortkeySequence comma "," in quote', () => {
        const task = () => {
            ShortkeySequence.from("','");
        }

        expect(task).throws(Error, 'parsing error')
    });

    it('ShortkeySequence comma ",a"', () => {
        const task = () => {
            ShortkeySequence.from(',');
        }

        expect(task).throws(Error, 'parsing error')
    });

    it('ShortkeySequence comma "a,"', () => {
        const task = () => {
            ShortkeySequence.from(',');
        }

        expect(task).throws(Error, 'parsing error')
    });

    it('ShortkeySequence "alt+\'+\'"', () => {
        const shortkeysequence = ShortkeySequence.from("alt+'+',b");
        expect(shortkeysequence.size()).equals(2);

        expect(shortkeysequence.toJSON()).deep.equal(
            [
                [
                    KeyMaps.alt,
                    KeyMaps.plus,
                ],
                [
                    KeyMaps.b
                ]
            ]
        );
    });
})
