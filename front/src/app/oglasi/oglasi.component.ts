import { Router } from '@angular/router';
import { ApplicationDataSharingServiceService } from './../services/application-data-sharing-service.service';
import { Ponuda } from './../models/ponuda';
import { PonudeService } from './../services/ponude.service';
import { Component, OnInit } from '@angular/core';
import { Oglas } from '../models/oglas';
import { OglasService } from '../oglas.service';

@Component({
  selector: 'app-oglasi',
  templateUrl: './oglasi.component.html',
  styleUrls: ['./oglasi.component.css']
})
export class OglasiComponent implements OnInit {
  oglasi: Oglas[];

  getOglasi(): void {
    this.oglasiService.getOglasi()
      .subscribe(oglasi => this.oglasi = oglasi);
  }

  dodajPonudu(iznos: number, oglasId: String): void{
    var ponuda =
                {
                  "userId": "tempUserId",
                  "userName": "tempUserName",
                  "oglasId": oglasId,
                  "iznos": iznos
                };
    this.ponudeService.insertPonuda(ponuda as Ponuda).subscribe();
  }

  prikaziSvePonudeOglasa(oglas: Oglas): void{
    this.appDataSharing.oglas = oglas;

  }

  constructor(
    private oglasiService: OglasService,
    private ponudeService: PonudeService,
    private appDataSharing: ApplicationDataSharingServiceService
  ) { }

  ngOnInit() {
    this.getOglasi();
  }

}
