import { KeyMaps, KeyType } from './KeyMaps';

export class KeyGroup {
    private keys: KeyType[];

    constructor(str: string) {
        const keys = KeyMaps[str.toLowerCase()];

        if (!keys) {
            throw Error(`KeyMaps for "${str}" not found.`);
        }

        this.keys = keys;
    }

    public static from(str: string) {
        return new KeyGroup(str);
    }

    public size() {
        return this.keys.length;
    }

    public toJSON() {
        return JSON.parse(JSON.stringify(this.keys));
    }

    // appearedIn(event: KeyboardEvent) {
    //     const index = this.keys.findIndex(
    //         (key) =>
    //             key.code === event.code &&
    //             key.key === event.key &&
    //             key.keyCode === event.keyCode &&
    //             key.location === event.location &&
    //             key.which === event.which
    //     );
    //     return index >= 0;
    // }
}
