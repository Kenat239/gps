import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfilusuario',
  templateUrl: './perfilusuario.component.html',
  
})
export class PerfilusuarioComponent implements OnInit {

  @Output() modalClose: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private router: Router,
    private r:ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  closeModal($event){
    console.log('click');
    this.router.navigate([{outlets: {modal: null}}]);
    this.modalClose.next($event)
  }

}
