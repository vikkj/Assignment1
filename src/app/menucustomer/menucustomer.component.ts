import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'menu-nav',
  templateUrl: './menucustomer.component.html',
  styleUrls: ['./menucustomer.component.css']
})
export class MenuComponent {
  constructor(private router:Router, private customers: CustomersService) { }

  goHome(){
    this.router.navigateByUrl('/');
  }
  // goAddCustomer(){
  //   this.customers.setIndex(-1);
  //   this.router.navigateByUrl('/editcustomer');
  // }
}
