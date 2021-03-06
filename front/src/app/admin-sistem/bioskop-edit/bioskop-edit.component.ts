import { Location } from '@angular/common';
import { NoviBioskop } from './../../models/novi-bioskop.model';
import { Component, OnInit, Input } from '@angular/core';
import { BioskopiService } from '../../bioskopi.service';
import { NgForm } from '@angular/forms';
import { Bioskopi } from '../../models/bioskopi';


@Component({
  selector: 'app-bioskop-edit',
  templateUrl: './bioskop-edit.component.html',
  styleUrls: ['./bioskop-edit.component.css']
})
export class BioskopEditComponent implements OnInit {
  noviBioskop: NoviBioskop = new NoviBioskop("","","",[], [], "");
  updtBioskop: Bioskopi;
  editFlag: boolean;
  bioskopId: string;
  bioskopEdit : Bioskopi;
  bioskopi: Bioskopi[];

  onNoviBioskopSubmit(forma: NgForm) {
    this.noviBioskop.naziv = forma.value.naziv;
    this.noviBioskop.adresa = forma.value.adresa;
    this.noviBioskop.opis = forma.value.opis;
    this.noviBioskop.repertoar = [];
    this.noviBioskop.brmesta = [];
    this.noviBioskop.admin = forma.value.admin;
    this.bioskopiService.insertBioskop(this.noviBioskop).subscribe();
    forma.reset();
    this.location.back();
  }

  constructor(
    private bioskopiService: BioskopiService,
    private location: Location,
  ) { }

  ngOnInit() {

  }


  getBioskop() {
    this.bioskopiService.getBioskop(this.bioskopId).subscribe(
      (bioskop) => this.updtBioskop = bioskop
    );
  }


}
