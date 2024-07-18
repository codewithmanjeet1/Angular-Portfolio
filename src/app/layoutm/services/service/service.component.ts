import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  happyclient: number = 100;
  projects: number = 18000;
  eprenceyr: number = 5;
  counter: number = 0;
    input:any;




}





















// const counters = document.querySelectorAll(".counter");
// counters.forEach((counter) => {
//   counter.innerHTML = 0;

//   const updateCounter = () => {
//     const targetCount = +counter.getAttribute("data-target");

//     // console.log(targetCount)
//     const startingCount = Number(counter.innerHTML);

//     // console.log(startingCount);

//     const incr = targetCount / 100;

//     if (startingCount < targetCount) {
//       counter.innerHTML = `${Math.round(startingCount + incr)}`;

//       setTimeout(updateCounter, 10);
//     } else {
//       counter.innerHTML = targetCount;
//     }
//   };

//   updateCounter();
// });
