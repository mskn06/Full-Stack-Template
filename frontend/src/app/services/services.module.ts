import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginService } from './login.service';
import { SignupService } from './signup.service';

const services = [LoginService, SignupService];

@NgModule({
  imports: [CommonModule],
  providers: [...services],
})
export class apiServices {}
