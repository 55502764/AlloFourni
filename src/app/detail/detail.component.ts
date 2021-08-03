import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Materiel } from '../materiel';
import { MaterielService } from '../materiel.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  materiel: Materiel = new Materiel;
  yy!: number;

  constructor (private materielService:MaterielService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    
    this.materiel = this.materielService.getMaterielById(this.activatedRoute.snapshot.params['yy']);
  }
  onRetour() {

    this.router.navigate(['/boutique']);
   }
   onAffiche() {
    alert("votre commande est confirmée !");
    this.onRetour();
  }

}
