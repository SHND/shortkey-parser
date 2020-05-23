import { expect } from 'chai'
import { Shortkey } from '../src/Shortkey';
import { KeyLocation } from '../src/KeyLocation';
import { KeyMaps } from '../src/KeyMaps';
// import { KeyMaps } from '../src/KeyMaps';

describe("Shortkey Class", () => {
    it('Shortkey with single key "a"', () => {
        const shortkey = Shortkey.from('a');

        expect(shortkey.size()).equals(1);

        expect(shortkey.toJSON()).deep.equals(
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
        )
    });

    it('Shortkey with single key "a" in single quotes', () => {
        const shortkey = Shortkey.from("'a'");

        expect(shortkey.size()).equals(1);

        expect(shortkey.toJSON()).deep.equals(
            [
                KeyMaps.a
            ]
        )
    });

    it('Shortkey with single key "\'" in double quotes', () => {
        const shortkey = Shortkey.from("\"'\"");

        expect(shortkey.size()).equals(1);

        expect(shortkey.toJSON()).deep.equals(
            [
                KeyMaps.quote
            ]
        )
    });

    it('Shortkey with single key \'"\' in single quotes', () => {

        const task = () => {
            Shortkey.from('\'"\'');
        }

        // double quote is not a keyboard key, but single quote
        expect(task).throws(Error, 'KeyMaps for """ not found.');
    });

    it('Shortkey with single key "a" in double quotes', () => {
        const shortkey = Shortkey.from('"a"');

        expect(shortkey.size()).equals(1);

        expect(shortkey.toJSON()).deep.equals(
            [
                KeyMaps.a
            ]
        )
    });

    it('Shortkey with single key "a" in quotes', () => {
        const shortkey = Shortkey.from("'a'");

        expect(shortkey.size()).equals(1);

        expect(shortkey.toJSON()).deep.equals(
            [
                KeyMaps.a
            ]
        )
    });

    it('Shortkey with single key "alt" in quotes', () => {
        const shortkey = Shortkey.from("'alt'");

        expect(shortkey.size()).equals(1);

        expect(shortkey.toJSON()).deep.equals(
            [
                KeyMaps.alt
            ]
        )
    });

    it('Shortkey for "+"', () => {
        const task = () => {
            Shortkey.from('+');
        }

        expect(task).throws(Error, 'parsing error');
    });

    it('Shortkey for "+" in quote', () => {
        const task = () => {
            Shortkey.from("'+'");
        }

        expect(task).throws(Error, 'parsing error');
    });

    it('Shortkey for "a+"', () => {
        const task = () => {
            Shortkey.from('a+');
        }

        expect(task).throws(Error, 'parsing error');
    });

    it('Shortkey for "+a"', () => {
        const task = () => {
            Shortkey.from('+a');
        }

        expect(task).throws(Error, 'KeyMaps for "" not found.');
    });

    it('Shorkeys whitespaces are ignored', () => {
        const shortkey = Shortkey.from('  a ');

        expect(shortkey.size()).equals(1);

        expect(shortkey.toJSON()).deep.equals(
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
        )
    });

    it('Shortkey with single key "alt"', () => {
        const shortkey = Shortkey.from('alt');

        expect(shortkey.size()).equals(1);

        expect(shortkey.toJSON()).deep.equals(
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
        )
    });

    it('Shortkey with single invalid key e.g. abc', () => {
        const task = () => {
            Shortkey.from('abc');
        }

        expect(task).throws(Error, 'KeyMaps for "abc" not found.');
    });

    it('Shortkey with two non-modifier keygroups "a+b"', () => {
        const shortkey = Shortkey.from('a+b');

        expect(shortkey.size()).equals(2);

        expect(shortkey.toJSON()).deep.equals(
            [
                KeyMaps.a,
                KeyMaps.b
            ]
        )
    });

    it('Shortkey with two non-modifier keygroups "a+a" should error', () => {
        const task = () => {
            Shortkey.from('a+a');
        }

        expect(task).throws(Error, 'Shortkey cannot contain more than one same key.');
    });

    it('Shortkey with two non-modifier keygroups "alt+ralt" should error', () => {
        const task = () => {
            Shortkey.from('alt+ralt');
        }

        expect(task).throws(Error, 'Shortkey cannot contain more than one same key.');
    });

    it('Shortkey with two keygroups "ralt+a"', () => {
        const shortkey = Shortkey.from('ralt+a');

        expect(shortkey.size()).equals(2);

        expect(shortkey.toJSON()).deep.equals([ KeyMaps.ralt, KeyMaps.a ]);
    });

    it('Shortkey with two keygroups "alt+a"', () => {
        const shortkey = Shortkey.from('alt+a');

        expect(shortkey.size()).equals(2);

        expect(shortkey.toJSON()).deep.equals([ KeyMaps.alt, KeyMaps.a ]);
    });

    it('Shortkey with two keygroups with same modifier "ralt+lalt+a"', () => {
        const shortkey = Shortkey.from('ralt+lalt+a');

        expect(shortkey.size()).equals(3);

        expect(shortkey.toJSON()).deep.equals(
            [
                KeyMaps.ralt,
                KeyMaps.lalt,
                KeyMaps.a
            ]
        )
    });

    

})
