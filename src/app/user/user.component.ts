import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DataCrudService } from '../services/data-crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public imageURL = this.auth.user$['additionalUserInfo'].profile.picture;

  constructor(
    public auth: AuthService,
    private router: Router,
    private crud: DataCrudService
    ) { }

  public logOut(): void {
    this.auth.logOut().then( () => {
      // logged out successfully.
      this.addUser();
      this.router.navigate(['/']);
    }).catch( (error) => {
      console.log('logout ');
      console.log(error);
    })
  }

  public addUser() {
    var x: Object = {
      name: 'example',
      email: 'exampla@example.com',
      avatar: 'nothing'
    }
    this.crud.createUser('example',x);
  }

  public readUser() {
    this.crud.readUser('example').subscribe( (value) => {
      console.log(value);
    })
  }
  ngOnInit(): void {
    console.log(this.imageURL);
  }

}
