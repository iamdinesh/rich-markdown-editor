import {
  BoldIcon,
  CodeIcon,
  Heading1Icon,
  Heading2Icon,
  ItalicIcon,
  BlockQuoteIcon,
  LinkIcon,
  StrikethroughIcon,
  HighlightIcon,
} from "outline-icons";
import { isInTable } from "prosemirror-tables";
import { EditorState } from "prosemirror-state";
import isInList from "../queries/isInList";
import isMarkActive from "../queries/isMarkActive";
import isNodeActive from "../queries/isNodeActive";
import { MenuItem } from "../types";

export default function formattingMenuItems(state: EditorState): MenuItem[] {
  const { schema } = state;
  const isTable = isInTable(state);
  const isList = isInList(state);
  const allowBlocks = !isTable && !isList;

  return [
    {
      name: "strong",
      tooltip: "Bold",
      icon: BoldIcon,
      active: isMarkActive(schema.marks.strong),
    },
    {
      name: "em",
      tooltip: "Italic",
      icon: ItalicIcon,
      active: isMarkActive(schema.marks.em),
    },
    {
      name: "strikethrough",
      tooltip: "Strikethrough",
      icon: StrikethroughIcon,
      active: isMarkActive(schema.marks.strikethrough),
    },
    {
      name: "mark",
      tooltip: "Highlight",
      icon: HighlightIcon,
      active: isMarkActive(schema.marks.mark),
    },
    {
      name: "separator",
      visible: allowBlocks,
    },
    {
      name: "code_inline",
      tooltip: "Code",
      icon: CodeIcon,
      active: isMarkActive(schema.marks.code_inline),
    },
    {
      name: "blockquote",
      tooltip: "Quote",
      icon: BlockQuoteIcon,
      active: isNodeActive(schema.nodes.blockquote),
      attrs: { level: 2 },
      visible: allowBlocks,
    },
    {
      name: "link",
      tooltip: "Create link",
      icon: LinkIcon,
      active: isMarkActive(schema.marks.link),
      attrs: { href: "" },
    },
  ];
}
