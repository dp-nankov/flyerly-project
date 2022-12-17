import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleFilter'
})
export class TitleFilterPipe implements PipeTransform {

  transform(list: any[], filterText: string): unknown {
    return list ? list.filter(item => item.title.search(new RegExp(filterText, 'i')) > -1) : [];
  }

}
