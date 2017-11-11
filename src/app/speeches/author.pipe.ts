import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'author'
})
export class AuthorPipe implements PipeTransform {

  transform(value: any, author: any): any {
    if(author===undefined || author == ''){
      return value;
    }

    author = author.toLowerCase();
    return value.filter((x)=>{
      return x.author.toLowerCase().includes(author);
    })
  }

}
