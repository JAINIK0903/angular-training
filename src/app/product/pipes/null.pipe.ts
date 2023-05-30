import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'null',
})
export class NullPipe implements PipeTransform {
    transform(value: string | null | undefined): string {
        if (value) {
            return value;
        } else {
            return '---';
        }
    }
}
