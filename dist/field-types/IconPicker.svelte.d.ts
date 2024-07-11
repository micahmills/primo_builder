/** @typedef {typeof __propDef.props}  IconPickerProps */
/** @typedef {typeof __propDef.events}  IconPickerEvents */
/** @typedef {typeof __propDef.slots}  IconPickerSlots */
export default class IconPicker extends SvelteComponentTyped<{
    field: any;
}, {
    input: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type IconPickerProps = typeof __propDef.props;
export type IconPickerEvents = typeof __propDef.events;
export type IconPickerSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        field: any;
    };
    events: {
        input: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
