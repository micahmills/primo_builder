/** @typedef {typeof __propDef.props}  EmptyFieldProps */
/** @typedef {typeof __propDef.events}  EmptyFieldEvents */
/** @typedef {typeof __propDef.slots}  EmptyFieldSlots */
export default class EmptyField extends SvelteComponentTyped<{
    field: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type EmptyFieldProps = typeof __propDef.props;
export type EmptyFieldEvents = typeof __propDef.events;
export type EmptyFieldSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        field: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
