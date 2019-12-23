import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


/**
 * 非安全加载URL,比如加载iframe url
 */
@Pipe({
  name: 'trustUrl'
})
  export class TrustUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {

  }
  transform(url: string): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

/**
 * 非安全加载HTML
 */
@Pipe({
  name: 'trustHtml'
})
export class TrustHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {

  }
  transform(html: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}

/**
 * 非安全调用Script
 */
@Pipe({
  name: 'trustScript'
})
export class TrustScriptPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {

  }
  transform(script: string): any {
    return this.sanitizer.bypassSecurityTrustScript(script);
  }
}

/**
 * 非安全调用Style
 */
@Pipe({
  name: 'trustStyle'
})
export class TrustStylePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {

  }
  transform(style: string): any {
    return this.sanitizer.bypassSecurityTrustStyle(style);
  }
}
