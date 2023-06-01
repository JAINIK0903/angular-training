import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';

@Pipe({
    name: 'filterProductPipe',
})
export class FilterPipe implements PipeTransform {
    transform(products: IProduct[], filterText: string) {
        if (products.length === 0 || filterText === '') {
            return products;
        } else {
            return products.filter((product) => {
                return product.name.toLowerCase().includes(filterText.toLowerCase());
            });
        }
    }
}
