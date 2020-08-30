import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(tel, args)
    {
        var value = tel.toString().trim().replace(/^\+/, '');

        if (value.match(/[^0-9]/)) {
            return tel;
        }

        var city, number;
        city = value.slice(0, 2);
        number = value.slice(2);

        switch (value.length) {
            case 10: // +1PPP####### -> C (PP) ####-####
                number = number.slice(0, 4) + '-' + number.slice(4);
                break;

            case 11: // +CPPP####### -> CCC (PP) #####-####
                number = number.slice(0, 5) + '-' + number.slice(5);
                break;

            default:
                return tel;
        }


        return (" (" + city + ") " + number).trim();
    }

}
