import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(texto: any, limit: any): any {

    return (texto.length > limit) ?
    texto.substr(0, limit) + '...' : texto;
  }

}
