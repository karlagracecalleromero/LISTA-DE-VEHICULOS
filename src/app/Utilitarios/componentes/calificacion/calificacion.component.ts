import { Component, Input, OnInit, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrl: './calificacion.component.css'
})
export class CalificacionComponent  implements OnInit , OnChanges {
  @Input() calificacion:number=0;


  @Output() accionClick = new EventEmitter<any>();
  lista:Array<any>=[];


  constructor(){}
  ngOnInit() {
    //this.generar();


  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['calificacion'].currentValue){
      this.generar();

    }

  }
  generar() {
    console.log('Calificacion', this.calificacion)
    for(let i=0; i<this.calificacion; i++){
      this.lista.push(1);
    }

  }
  select(){
    this.accionClick.emit(this.calificacion)
  }

}
