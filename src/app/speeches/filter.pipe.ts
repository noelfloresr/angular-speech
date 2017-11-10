import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, keywords: any): any {
    //check in the keywords input is empty or undefined
    if(keywords === undefined){
    	return value;	
    } 

    keywords = keywords.toLowerCase();

    return value.filter((x)=>{
    	return x.title.toLowerCase().includes(keywords);
    })

  }

}
