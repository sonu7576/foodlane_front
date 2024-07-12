import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usersearch'
})
export class UsersearchPipe implements PipeTransform {

  transform(allbookings:any[],searchTerm:string,property:string): any[] {


    let result:any=[]

    if (!allbookings||searchTerm===""||property==="") {

      return allbookings
      
    } else {

      allbookings.forEach((item:any)=>{
        if (item[property].trim().toLowerCase().includes(searchTerm.trim().toLowerCase())) {

          result.push(item)
          
        }
      })
      


    }




    return result;
  }

}
