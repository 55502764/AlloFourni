import { Injectable } from '@angular/core';
import { Materiel } from './materiel';

@Injectable({
  providedIn: 'root'
})
export class MaterielService {
  private materiels: Materiel[]=[
    {   
      id: '1',
      libelle: 'Appareil photo',
      photo: 'assets/imgs/canon.jpg',
      marque:'Canon',
      prix:100,
      description: 'APPAREIL PHOTO REFLEX CANON EOS 4000D',
      hautGamme: true,
      quantite: 7,
      
   },
  {   
      id: '2', 
      libelle: 'Appareil photo', 
      photo:'assets/imgs/gopro.jpg',
      marque: 'GOPRO', 
      prix: 60, 
      description: 'GOPRO HERO 6 BLACK Caméra de sport 4K60', 
      hautGamme: false,
      quantite: 5,
      
  },
  {   
      id: '3', 
      libelle: 'Jeux de Lumière', 
      photo:'assets/imgs/jeuxL.jpg',
      marque: 'BoomTone', 
      prix: 180, 
      description: 'Stand lumières avec 4 projecteurs de 12 LEDs RGBW 1W multicolores et son trépied.', 
      hautGamme: true,
      quantite: 1,
      
  },
  {   
      id: '5', 
      libelle: 'Projecteur', 
      photo:'../assets/imgs/projecteur.jpg',
      marque: 'PROLIGHTS', 
      prix: 70, 
      description: 'PROJECTEUR PAR LED STUDIOCOB PROLIGHTS 100 W BLANC CHAUD 3 100 K FINITION NOIRE', 
      hautGamme: false,
      quantite: 3,
      
  },
  {   
      id: '6', 
      libelle: 'Haut-parleurs', 
      photo:'../assets/imgs/sono.jpg',
      marque: 'SubZero', 
      prix: 400, 
      description: 'Pack SubZero Système de sono Portable 300 W avec supports et pieds d enceinte', 
      hautGamme: true,
      quantite: 2,
      
  },
  {   
      id: '7', 
      libelle: ' VR BoxLunettes', 
      photo:'../assets/imgs/lunette.jpg',
      marque: 'Tempo di saldi', 
      prix: 40, 
      description: 'VR Box Lunettes de réalité virtuelle 3D pour Smartphone Apple Android', 
      hautGamme: true,
      quantite: 12,
      
  },
  {   
      id: '8', 
      libelle: ' PS5 PlayStation5', 
      photo:'../assets/imgs/ps5.jpg',
      marque: 'Sony', 
      prix: 50, 
      description: 'PlayStation 5 Édition numérique sans lecteur de disque. ', 
      hautGamme: true,
      quantite: 9,
      
  },
  {   
      id: '9', 
      libelle: ' Xbox One', 
      photo:'../assets/imgs/xbox.jpg',
      marque: 'Microsoft', 
      prix: 45, 
      description: 'Pack Console Microsoft Xbox One S All Digital 1 To Blanc 3 Jeux inclus ', 
      hautGamme: true,
      quantite: 12,
      
  }
  ];

  constructor() { }
  getMateriels(){
    return this.materiels;
  }
  getMaterielById (id : string):Materiel{
    return <Materiel> this.materiels.find( idMat =>  idMat.id==id);
    // return this.materiels.filter(idMat =>idMat.id==id)[0];
  }
}
