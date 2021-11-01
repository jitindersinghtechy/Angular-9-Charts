import { Component } from '@angular/core';
import { Color } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public agingData = [
    { label: 'AR Aging 0-30 days', value: '$1,045', profit: '+20%',isProfit:true },
    { label: '30-60 days', value: '$845', profit: '+20%' ,isProfit:true},
    { label: '30-60 days', value: '$445', profit: '-10%' ,isProfit:false},
    { label: '90-365 days', value: '$145', profit: '-10%',isProfit:false }
]

  // barChart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    type: 'horizontalBar',
    legend: { position: 'bottom' },
    scales: {
      xAxes: [{
        type: 'linear',
        position: 'top'}]}
  };
  public barChartLabels: string[] = ['Account A', 'Account B', 'Account C', 'Account D','Account E'];
  public barChartType = 'horizontalBar';
  public barChartLegend = true;

  public barChartData: any[] = [
    { data: [120,  180, 210, 160, 100], label: 'Product A', stack: 'a' },
    { data: [550,  520, 410, 279, 390], label: 'Product B', stack: 'a' },
    { data: [600,  540, 430, 355, 440], label: 'Product C', stack: 'a' }
  ];

  public barChartColors: Color[] = [
    { backgroundColor: '#2A98CF' },
    { backgroundColor: '#179ceaeb' },
     { backgroundColor: 'purple' },
  ]
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
