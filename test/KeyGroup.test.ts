import { expect } from 'chai'
import { KeyGroup } from '../src/KeyGroup';
import { KeyMaps } from '../src/KeyMaps';
import { KeyLocation } from '../src/KeyLocation';

describe("KeyGroup Class", () => {
    it('KeyGroup with single key e.g. a', () => {
        const keygroup = new KeyGroup('a');

        expect(keygroup.size()).equals(1);

        expect(keygroup.toJSON()).deep.equal(
            [
                {
                    which: 65,
                    keyCode: 65,
                    code: 'KeyA',
                    key: 'a',
                    location: KeyLocation.GENERAL_KEY,
                }
            ]
        );
    });

    it('KeyGroup with multiple keys e.g. alt', () => {
        const keygroup = new KeyGroup('alt');

        expect(keygroup.size()).equals(2);

        expect(keygroup.toJSON()).deep.equal(
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
        );
    });

    it('KeyGroup with key is not valid', () => {
        const task = () => {
            new KeyGroup('abc');
        }

        expect(task).throws(Error, 'KeyMaps for "abc" not found.');
    });

    it('KeyGroup for all existing KeyMaps', () => {
        for (let key of Object.keys(KeyMaps)) {
            const task = () => {
                const keygroup = new KeyGroup(key);

                expect(keygroup.size()).equals(KeyMaps[key].length);

                expect(keygroup.toJSON()).deep.equal(KeyMaps[key]);
            }

            expect(task).not.throws(Error);
        }
    });
})
