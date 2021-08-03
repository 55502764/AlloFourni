import { Component, Input, OnInit } from '@angular/core';
import { Materiel } from '../materiel';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
  @Input("materiel")
  mat: Materiel = new Materiel;

  constructor() { }

  ngOnInit(): void {
  }

}
