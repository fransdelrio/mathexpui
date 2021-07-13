import { Component, OnInit } from '@angular/core';
import { MathexpService } from 'src/app/ws/mathexp.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  expression = '';
  presicion  = 0;
  result     = 0;
  result2:any;
  myJson:any;
  errorMessage = '';

  constructor(private MathexpService: MathexpService) {

   }

  ngOnInit(): void {   }

  showResultGet(){
    this.MathexpService.obtainResultGet(this.expression, this.presicion).subscribe( data => {
      this.result = data ;
    })
  }

 showResultPost(){
    this.MathexpService.obtainResultPost(this.myJson).subscribe( { 
      next: (data2: any) => {
        this.result2 = data2;
        console.error('Resultado ok: ', data2);
      },
      error: (error: { message: string; }) => {
        this.result2 = ' ¡Problem with your JSON! ' + error.message;
        console.error('There was an error!', error);
      }
    })
  }
}
