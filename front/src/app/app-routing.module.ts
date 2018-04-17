import { PrijateljiComponent } from './user/prijatelji/prijatelji.component';
import { ZahteviComponent } from './user/zahtevi/zahtevi.component';
import { Rezervacija4Component } from './rezervacija/rezervacija4/rezervacija4.component';
import { Rezervacija3Component } from './rezervacija/rezervacija3/rezervacija3.component';
import { Rezervacija2Component } from './rezervacija/rezervacija2/rezervacija2.component';
import { RezervacijaComponent } from './rezervacija/rezervacija.component';
import { SkalaComponent } from './admin-sistem/skala/skala.component';
import { SysadminAuthGuard } from './auth-guards/sysadmin-auth-guard.service';
import { RecenzijaComponent } from './admin-fanzona/recenzija/recenzija.component';
import { BpAdminEditComponent } from './admin-sistem/bp-admin-edit/bp-admin-edit.component';
import { FanzonaAdminEditComponent } from './admin-sistem/fanzona-admin-edit/fanzona-admin-edit.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { GmLokacijaComponent } from './gm-lokacija/gm-lokacija.component';
import { FanzonaAuthGuard } from './auth-guards/fanzona-auth-guard.service';

import { UserComponent } from './user/user.component';
import { NoviBioskop } from './models/novi-bioskop.model';
import { AdminSistemComponent } from './admin-sistem/admin-sistem.component';
import { PregledPonudaComponent } from './pregled-ponuda/pregled-ponuda.component';
import { NeodobreniOglasiComponent } from './admin-fanzona/neodobreni-oglasi/neodobreni-oglasi.component';
import { AdminFanzonaComponent } from './admin-fanzona/admin-fanzona.component';
import { RekvizitEditComponent } from './zvanicna-prodavnica/rekvizit-edit/rekvizit-edit.component';
import { NoviRekvizit } from './models/novi-rekvizit';
import { OglasEditComponent } from './oglasi/oglas-edit/oglas-edit.component';
import { NovaPonudaComponent } from './nova-ponuda/nova-ponuda.component';
import { OglasiComponent } from './oglasi/oglasi.component';
import { ZvanicnaProdavnicaComponent } from './zvanicna-prodavnica/zvanicna-prodavnica.component';
import { FanzonaComponent } from './fanzona/fanzona.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { SvePonudeComponent } from './sve-ponude/sve-ponude.component';
import { BioskopiComponent } from './bioskopi/bioskopi.component';
import { PozoristaComponent } from './pozorista/pozorista.component';
import { RepertoarComponent } from './repertoar/repertoar.component';
import { RepertoarPozoristaComponent } from './repertoar-pozorista/repertoar-pozorista.component';
import { RekvizitiComponent } from './admin-fanzona/rekviziti/rekviziti.component';
import { BioskopEditComponent } from './admin-sistem/bioskop-edit/bioskop-edit.component';
import { PozoristeEditComponent } from './admin-sistem/pozoriste-edit/pozoriste-edit.component';
import { FanAdminAuthGuard } from './auth-guards/fanadmin-auth-guard.service';
import { BioskopiEditComponent } from './bioskopi/bioskopi-edit/bioskopi-edit.component';
import { PozoristaEditComponent } from './pozorista/pozorista-edit/pozorista-edit.component';
import { BioskopiListComponent } from './bioskopi/bioskopi-list/bioskopi-list.component';
import { PozoristaListComponent } from './pozorista/pozorista-list/pozorista-list.component';
import { KarteComponent } from './karte/karte.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'fanzona', component: FanzonaComponent, canActivate: [FanzonaAuthGuard], children: [
    {path: 'prodavnica', component: ZvanicnaProdavnicaComponent},
    {path: 'oglasi', component: OglasiComponent},
    {path: 'novioglas', component: OglasEditComponent},
    {path: 'admin', component: AdminFanzonaComponent, canActivate: [FanAdminAuthGuard], children: [
      {path: 'novirekvizit', component: RekvizitEditComponent},
      {path: 'neodobreni', component: NeodobreniOglasiComponent},
      {path: 'rekviziti', component: RekvizitiComponent},
      {path: 'rekvizit/:rekvizitId', component: RekvizitEditComponent},
      {path: 'recenzija', component: RecenzijaComponent},

    ]}
  ]},
  {path: ':username/ponude', component: PregledPonudaComponent},
  {path: 'sysadmin', component: AdminSistemComponent, canActivate: [SysadminAuthGuard], children: [
    {path: 'novibioskop', component: BioskopEditComponent},
    {path: 'novopozoriste', component: PozoristeEditComponent},
    {path: 'novifanadmin', component: FanzonaAdminEditComponent},
    {path: 'novibpadmin', component: BpAdminEditComponent},
    {path: 'skala', component: SkalaComponent}
  ]},
  {path: 'bioskopi', component: BioskopiComponent},
  {path: 'pozorista', component: PozoristaComponent},
  {path: 'repertoar', component: RepertoarComponent},
  {path: 'repertoar-pozorista', component: RepertoarPozoristaComponent},
  {path: 'user', component: UserComponent},
  {path: 'user/edit-user', component: EditUserComponent},
  {path: 'gmlokacija', component: GmLokacijaComponent},
  {path: 'bioskopi/:bioskopId', component : BioskopiEditComponent},
  {path: 'pozorista/:pozoristeId', component : PozoristaEditComponent},
  {path: 'bioskopi-list', component : BioskopiListComponent},
  {path: 'pozorista-list', component : PozoristaListComponent},
  {path: 'karte', component : KarteComponent},
  {path: 'rezervacija', component: RezervacijaComponent},
  {path: 'rezervacija2/bioskop/:bioskopId', component: Rezervacija2Component},
  {path: 'rezervacija2/pozoriste/:pozoristeId', component: Rezervacija2Component},
  {path: 'rezervacija3', component: Rezervacija3Component},
  {path: 'rezervacija4', component: Rezervacija4Component},
  {path: 'user/zahtevi', component: ZahteviComponent},
  {path: 'prijatelji', component: PrijateljiComponent}

];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
