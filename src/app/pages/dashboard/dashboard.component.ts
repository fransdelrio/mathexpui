import { HttpParams } from '@angular/common/http';
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

  constructor(private MathexpService: MathexpService) {

   }

  ngOnInit(): void {   }

  showResult(){
    this.MathexpService.obtainResult(this.expression, this.presicion).subscribe( data => {
      this.result = data ;
    })
  }

}
