import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
    name:'summary'
})
export class SummeryPipe implements PipeTransform{
    transform(value:string,args?:any){
        if(!value)
         return null;
         return value.substr(0,10)+" ...";
    }
}
