import {
  BlockQuoteIcon,
  BulletedListIcon,
  CodeIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  HorizontalRuleIcon,
  OrderedListIcon,
  TableIcon,
  TodoListIcon,
  ImageIcon,
} from "outline-icons";
import { MenuItem } from "../types";

export default function blockMenuItems(): MenuItem[] {
  return [
    {
      name: "heading",
      title: "Heading",
      keywords: "h3 heading3",
      icon: Heading3Icon,
      shortcut: "^ ⇧ 3",
      attrs: { level: 3 },
    },
    {
      name: "blockquote",
      title: "Quote",
      icon: BlockQuoteIcon,
      shortcut: "⌘ ]",
      attrs: { level: 2 },
    },
    {
      name: "code_block",
      title: "Code block",
      icon: CodeIcon,
      shortcut: "^ ⇧ \\",
      keywords: "script",
    },
    {
      name: "hr",
      title: "Divider",
      icon: HorizontalRuleIcon,
      shortcut: "⌘ _",
      keywords: "horizontal rule break line",
    },
    {
      name: "separator",
    },
    {
      name: "bullet_list",
      title: "Bulleted list",
      icon: BulletedListIcon,
      shortcut: "^ ⇧ 8",
    },
    {
      name: "ordered_list",
      title: "Ordered list",
      icon: OrderedListIcon,
      shortcut: "^ ⇧ 9",
    }
  ];
}
