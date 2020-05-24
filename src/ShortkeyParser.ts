import { ShortkeySequence } from "./ShortkeySequence";

export class ShortkeyParser {

    public static parse(str: string) {
        return ShortkeySequence.from(str);
    }

}