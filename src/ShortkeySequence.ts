import { KeyType } from './KeyMaps';
import { Shortkey } from './Shortkey';

const SHORTKEY_NULL = 'Shortkeys cannot be null.';
const SHORTKEY_LENGTH_ZERO = 'Shortkeys cannot be empty.';

export class ShortkeySequence {
    private shortkeys: Shortkey[];

    private constructor(shortkeys: Shortkey[]) {
        this.shortkeys = shortkeys;

        this.validate(shortkeys)
    }

    public size(): number {
        return this.shortkeys.length;
    }

    public toJSON(): Array<Array<Array<Record<string, KeyType>>>> {
        return this.shortkeys.map(shortkey => shortkey.toJSON());
    }

    private validate(keyGroups: Shortkey[]): void {
        if (!keyGroups) throw Error(SHORTKEY_NULL);
        if (keyGroups.length === 0) throw Error(SHORTKEY_LENGTH_ZERO);
    }

    public static from(str: string) {
        let trimmedStr = str.split('').filter(c => ' \t\n\r\v'.indexOf(c) < 0).join('');
        let inSingleQuote = false;
        let inDoubleQuote = false;
        let seenTokens = [];
        let currentToken = '';

        for (let c of trimmedStr) {
            if (c === '"') {
                if (inDoubleQuote) {
                    inDoubleQuote = false;
                    currentToken += c;
                } else if (inSingleQuote) {
                    currentToken += c;
                } else {
                    currentToken += c;
                    inDoubleQuote = true;
                }

                continue;
            }

            if (c === "'") {
                if (inSingleQuote) {
                    inSingleQuote = false;
                    currentToken += c;
                } else if (inDoubleQuote) {
                    currentToken += c;
                } else {
                    currentToken += c;
                    inSingleQuote = true;
                }

                continue;
            }

            if (c === ',' && !inSingleQuote && !inDoubleQuote) {
                seenTokens.push(currentToken);
                currentToken = '';
                continue;
            }

            currentToken += c;
        }

        if (trimmedStr.endsWith(',') || trimmedStr === "','" || trimmedStr === '","') {
            throw Error('parsing error');
        }

        if (currentToken) {
            seenTokens.push(currentToken);
            currentToken = '';
        }

        let shortkeys = [];

        for (let token of seenTokens) {
            const shortkey = Shortkey.from(token);

            shortkeys.push(shortkey);
        }

        return new ShortkeySequence(shortkeys);
    }
}