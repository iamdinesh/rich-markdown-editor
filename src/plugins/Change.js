// @flow
import { Plugin } from "prosemirror-state";
import Extension from "../lib/Extension";

export default class Change extends Extension {
  get name() {
    return "change";
  }

  get plugins() {
    return [
      new Plugin({
        view: () => {
          return {
            update: view => {
              this.options.onChange({
                view,
                selection: view.state.selection,
              });
            },
          };
        },
      }),
    ];
  }
}