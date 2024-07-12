import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allrestaurant:any[],searchTerm:string,property:string): any[] {

    let result:any=[]

    if (!allrestaurant||searchTerm===""||property==="") {

      return allrestaurant
      
    } else {

      allrestaurant.forEach((item:any)=>{
        if (item[property].trim().toLowerCase().includes(searchTerm.trim().toLowerCase())) {

          result.push(item)
          
        }
      })
      


    }


    return result;
  }

}
