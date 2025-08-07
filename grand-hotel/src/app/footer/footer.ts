import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  email : string = 'grand-hotel-support@gmail.com';

  address : string = 'Ney York, Main Street 123'

  number : string = 'Tel: +123 456 895'
}
