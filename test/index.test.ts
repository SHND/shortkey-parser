import { expect } from 'chai'
import { parse, ShortkeyParser } from '../src';
import { KeyLocation } from '../src/KeyLocation';

describe("library exposed objects", () => {
    it('library exposed parse for "a"', () => {
        const shortkeySequence = parse('a');

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

    it('library exposed ShortkeyParser for "a"', () => {
        const shortkeySequence = ShortkeyParser.parse('a');

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
});