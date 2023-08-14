import { Component, ViewChild, ElementRef } from '@angular/core';
import { Observable, from, of, fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css']
})
export class RxjsLearningComponent {

  agents: Observable<string> = new Observable<string>();
  agentName: string = '';

  studentList = ['Mark', 'Ram', 'Sita', 'Lisa'];

  students: Observable<string[]> = of(this.studentList);

  orders$: Observable<string> = from(['fashion', 'electonics', 'moblie', 'househod']);

  orderName: string = '';

  @ViewChild('validate') validate: ElementRef = new ElementRef('')

  @ViewChild('getLinkData') getLinkData: ElementRef = new ElementRef('')

  firstName: string = '';

  dcmd: any = [
    {
      name: 'Angular Connect', date: '9/26/2036', time: '10am',
      location: {
        address: '1 London Rd', city: 'London', country: 'England'
      }
    },
    {
      name: 'ng-nl', date: '4/15/2037', time: '9am',
      location:
        { address: '127 DT ', city: 'Amsterdam', country: 'NL' }
    },
    {
      name: 'ng-conf 2037', date: '4/15/2037', time: '9am',
      location:
        { address: 'The Palatial America Hotel', city: 'Salt Lake City', country: 'USA' }
    },
    {
      name: 'UN Angular Summit', date: '6/10/2037', time: '8am',
      location:
        { address: 'The UN Angular Center', city: 'New York', country: 'USA' }
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
    // this.agents = new Observable(
    //   function(observer) {
    //     try {
    //       observer.next('Agent 1');
    //       setInterval(() => {
    //         observer.next('Agent 2');
    //       }, 3000)
    //       setInterval(() => {
    //         observer.next('Agent 3');
    //       }, 6000)
    //     } catch(err) {
    //       observer.error(err);
    //     }
    //   }
    // );

    // this.agents.subscribe(data => {
    //   console.log(data);
    //   this.agentName = data;
    // })

    this.students.subscribe(item => {
      console.log(item)
    })

    this.orders$.subscribe(data => {
      setInterval(() => {
        this.orderName = data;
      }, 3000)
      console.log(data)
    })

    this.orders$.subscribe(data => {
      const seqNum$ = interval(500)
    })

  }

  rxjsEventObservable() {
    const btnObservable$ = fromEvent(this.validate?.nativeElement, 'click');

    btnObservable$.subscribe(item => {
      console.log(item)
    })
  }

  getEventObservable() {
    const linkObservable$ = fromEvent(this.getLinkData?.nativeElement, 'mouseover');

    linkObservable$.subscribe(data => {
      console.log(data);

    })
  }

}
