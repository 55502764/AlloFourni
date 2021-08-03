import { Component, OnInit } from '@angular/core';
import { Materiel } from '../materiel';
import { MaterielService } from '../materiel.service';

@Component({
  selector: 'app-fourthpage',
  templateUrl: './fourthpage.component.html',
  styleUrls: ['./fourthpage.component.css']
})
export class FourthpageComponent implements OnInit {
  materiels: Materiel[] = [];

  constructor(private materielService:MaterielService) { }

  ngOnInit(): void {this.materiels=this.materielService.getMateriels();
  }

}
