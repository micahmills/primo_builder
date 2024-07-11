/** @typedef {typeof __propDef.props}  DropdownButtonProps */
/** @typedef {typeof __propDef.events}  DropdownButtonEvents */
/** @typedef {typeof __propDef.slots}  DropdownButtonSlots */
export default class DropdownButton extends SvelteComponentTyped<{
    primary_button: any;
    buttons?: any[];
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type DropdownButtonProps = typeof __propDef.props;
export type DropdownButtonEvents = typeof __propDef.events;
export type DropdownButtonSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        primary_button: any;
        buttons?: any[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
