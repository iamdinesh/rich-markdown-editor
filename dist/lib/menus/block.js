"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const outline_icons_1 = require("outline-icons");
function blockMenuItems() {
    return [
        {
            name: "heading",
            title: "Heading",
            keywords: "h3 heading3",
            icon: outline_icons_1.Heading3Icon,
            shortcut: "^ ⇧ 3",
            attrs: { level: 3 },
        },
        {
            name: "blockquote",
            title: "Quote",
            icon: outline_icons_1.BlockQuoteIcon,
            shortcut: "⌘ ]",
            attrs: { level: 2 },
        },
        {
            name: "code_block",
            title: "Code block",
            icon: outline_icons_1.CodeIcon,
            shortcut: "^ ⇧ \\",
            keywords: "script",
        },
        {
            name: "hr",
            title: "Divider",
            icon: outline_icons_1.HorizontalRuleIcon,
            shortcut: "⌘ _",
            keywords: "horizontal rule break line",
        },
        {
            name: "separator",
        },
        {
            name: "bullet_list",
            title: "Bulleted list",
            icon: outline_icons_1.BulletedListIcon,
            shortcut: "^ ⇧ 8",
        },
        {
            name: "ordered_list",
            title: "Ordered list",
            icon: outline_icons_1.OrderedListIcon,
            shortcut: "^ ⇧ 9",
        }
    ];
}
exports.default = blockMenuItems;
//# sourceMappingURL=block.js.map