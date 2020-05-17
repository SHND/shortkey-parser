import { KeyGroup } from './KeyGroup';
import { KeyMaps, KeyType } from './KeyMaps';
import { KeyLocation } from './KeyLocation';

const KEYGROUP_NULL = 'Shortkey keyGroups cannot be null.';
const KEYGROUP_LENGTH_ZERO = 'Shortkey keyGroups cannot be empty.';
const KEYGROUP_MORE_THAN_ONE_NON_MODIFIER = 'Shortkey cannot contain more than one non-modifier.';
const KEYGROUP_MORE_THAN_ONE_SAME_MODIFIER = 'Shortkey cannot contain more than one same modifier. (use alias instead)';

export class Shortkey {
    private keyGroups: KeyGroup[];

    private constructor(keyGroups: KeyGroup[]) {
        this.validate(keyGroups);

        this.keyGroups = keyGroups;
    }

    public size(): number {
        return this.keyGroups.length;
    }

    public toJSON(): Array<Array<Record<string, KeyType>>> {
        return this.keyGroups.map(keygroup => keygroup.toJSON());
    }

    private validate(keyGroups: KeyGroup[]): void {
        if (!keyGroups) throw Error(KEYGROUP_NULL);
        if (keyGroups.length === 0) throw Error(KEYGROUP_LENGTH_ZERO);

        const json = [ ...keyGroups.map(keygroup => keygroup.toJSON()) ];
        const notModifiers = json.filter(shortkey => shortkey[0].location === KeyLocation.GENERAL_KEY || shortkey[0].location === KeyLocation.NUMPAD);

        if (notModifiers.length > 1) throw Error (KEYGROUP_MORE_THAN_ONE_NON_MODIFIER);

        json.reduce((acc, cur) => {
            if (acc[cur[0].keyCode]) {
                throw Error(KEYGROUP_MORE_THAN_ONE_SAME_MODIFIER);
            }

            acc[cur[0].keyCode] = cur;

            return acc;
        }, {});
    }

    public static from(str: string) {
        let trimmedStr = str
            .split('')
            .filter(c => ' \t\n\r\v'.indexOf(c) < 0)
            .join('');
        let inSingleQuote = false;
        let inDoubleQuote = false;
        let seenTokens = [];
        let currentToken = '';

        for (let c of trimmedStr) {
            if (c === '"') {
                if (inDoubleQuote) {
                    seenTokens.push(currentToken);
                    currentToken = '';
                    inDoubleQuote = false;
                } else if (inSingleQuote) {
                    currentToken += c;
                } else {
                    if (currentToken !== '') throw Error('Parsing error');
                    inDoubleQuote = true;
                }

                continue;
            }

            if (c === "'") {
                if (inSingleQuote) {
                    seenTokens.push(currentToken);
                    currentToken = '';
                    inSingleQuote = false;
                } else if (inDoubleQuote) {
                    currentToken += c;
                } else {
                    if (currentToken !== '') throw Error('Parsing error');
                    inSingleQuote = true;
                }

                continue;
            }

            if (c === '+' && !inSingleQuote && !inDoubleQuote) {
                seenTokens.push(currentToken);
                currentToken = '';
                continue;
            }

            currentToken += c;
        }

        if (trimmedStr.endsWith('+') || trimmedStr === "'+'" || trimmedStr === '"+"') {
            throw Error('parsing error');
        }

        if (currentToken !== '') {
            seenTokens.push(currentToken);
            currentToken = '';    
        }
        
        const keyGroups = [];
        for (let token of seenTokens) {
            const keyGroup = new KeyGroup(token);

            keyGroups.push(keyGroup);
        }

        return new Shortkey(keyGroups);
    }
}
