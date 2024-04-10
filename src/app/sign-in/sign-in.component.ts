import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CognitoService } from '../cognito.service';
import { IUser } from '../user';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {

  user: IUser = {} as IUser;

  constructor(private router: Router, private cognitoService: CognitoService) {
  }

  public signIn(): void {
    this.cognitoService.signIn(this.user).then(() => {
      console.log('sig-in.component.ts signIn completed')
      this.cognitoService.notifyAuthStatus(true);
      window.location.href = 'https://www.google.co.in/';
     // this.router.navigate(['/profile']);
    }).catch((error) => {
      alert(error);
    })

  }

}