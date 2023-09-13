import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'La Casona Mexicana';

  constructor(private formBuilder: FormBuilder,private http: HttpClient){}
  ngOnInit():void{
    
  }
}
