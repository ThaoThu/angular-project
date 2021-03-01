import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText'
})
export class ShortenTextPipe implements PipeTransform {

  transform(value: string, args: number): string {
    console.log(args)
    if(value){
      return value.slice(0,args) + '...'
    }
    return ''
  }

}
