import {AiFillCaretDown, AiFillCaretUp} from "react-icons/ai";
import {SORT_DIRECTION} from "@/constants";
import type {SortIconProps} from "./types";

export const SortIcon = ({ dir }: SortIconProps) => {
  return dir === SORT_DIRECTION.ascend ? <AiFillCaretUp /> : <AiFillCaretDown />;
};
