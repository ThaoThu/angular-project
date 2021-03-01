import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterQuery'
})
export class FilterQueryPipe implements PipeTransform {

  transform(arrays : Array<any>, filter = ''): any {
    if(!filter){
      return arrays;
    }

    console.log(filter);
    
    return arrays.filter(item=>{
     return item.name.toLowerCase().includes(filter)
    })
  }

}
