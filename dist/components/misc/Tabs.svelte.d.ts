/** @typedef {typeof __propDef.props}  TabsProps */
/** @typedef {typeof __propDef.events}  TabsEvents */
/** @typedef {typeof __propDef.slots}  TabsSlots */
export default class Tabs extends SvelteComponentTyped<{
    tabs: any;
    active_tab_id?: any;
}, {
    switch: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TabsProps = typeof __propDef.props;
export type TabsEvents = typeof __propDef.events;
export type TabsSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        tabs: any;
        active_tab_id?: any;
    };
    events: {
        switch: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
