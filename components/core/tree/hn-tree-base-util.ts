import { HnTreeNode } from './hn-tree-base-node';

export function isCheckDisabled(node: HnTreeNode): boolean {
  const { isDisabled, isDisableCheckbox } = node;
  return !!(isDisabled || isDisableCheckbox);
}

// tslint:disable-next-line:no-any
export function isInArray(needle: any, haystack: any[]): boolean {
  return haystack.length > 0 && haystack.indexOf(needle) > -1;
}
