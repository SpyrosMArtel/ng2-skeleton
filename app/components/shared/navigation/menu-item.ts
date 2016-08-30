/**
 * Created by spyrosmartel on 2016-06-27.
 */
export class MenuItem {
    label : string;
    options : {};

    constructor(label, options) {
        this.label = label;
        if (options != null) {
            this.options = options;
        }
    }
}