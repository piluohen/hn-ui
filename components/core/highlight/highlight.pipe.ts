import { Pipe, PipeTransform } from '@angular/core';

// Regular Expressions for parsing tags and attributes
const SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
// ! to ~ is the ASCII range.
const NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;

function encodeEntities(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(SURROGATE_PAIR_REGEXP, (match: string) => {
      const hi = match.charCodeAt(0);
      const low = match.charCodeAt(1);
      return `&#${(hi - 0xd800) * 0x400 + (low - 0xdc00) + 0x10000};`;
    })
    .replace(NON_ALPHANUMERIC_REGEXP, (match: string) => `&#${match.charCodeAt(0)};`)
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

@Pipe({
  name: 'hnHighlight',
  pure: true
})
export class HnHighlightPipe implements PipeTransform {
  private UNIQUE_WRAPPERS: [string, string] = ['##==-open_tag-==##', '##==-close_tag-==##'];

  transform(value: string, highlightValue: string, flags?: string, klass?: string): string | null {
    if (!highlightValue) {
      return value;
    }

    // Escapes regex keyword to interpret these characters literally
    const searchValue = new RegExp(highlightValue.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$&'), flags);
    const wrapValue = value.replace(searchValue, `${this.UNIQUE_WRAPPERS[0]}$&${this.UNIQUE_WRAPPERS[1]}`);
    return encodeEntities(wrapValue)
      .replace(new RegExp(this.UNIQUE_WRAPPERS[0], 'g'), klass ? `<span class="${klass}">` : '<span>')
      .replace(new RegExp(this.UNIQUE_WRAPPERS[1], 'g'), '</span>');
  }
}
