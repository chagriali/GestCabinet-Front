import {Component, OnInit} from "@angular/core";
import {DossierService} from "../../../services/dossier.service";
import {DossierModel} from "../../../models/dossier.model";
import {PatientModel} from "../../../models/patient.model";
import {ConsultationModel} from "../../../models/consultation.model";

@Component({
  selector : 'app-patient-list',
  templateUrl : 'patients-list.component.html'
})
export class PatientsListComponent implements OnInit{
  dossiers:DossierModel[] = [];
  constructor(private dossierService:DossierService){}
  ngOnInit(): void {
    this.dossierService.getDossiers().subscribe(
      (result)=>{
        let dossiers:DossierModel[] = [];
        let d : DossierModel;
        for (let dossier of result){
          console.log(dossier);
          d = new DossierModel(dossier.id_dossier_medical,new Date(dossier.date_creation),PatientModel.createPatient(dossier.patient));
          let consultations: ConsultationModel[]=[];
          for(let c of dossier.consultations){
            consultations.push(ConsultationModel.createConsultation(c));
          }
          d.consultations=consultations;
          dossiers.push(d);
        }
        this.dossiers = dossiers;
        console.log(this.dossiers);
      }
      ,
      (error)=>{
        console.log(error);
      }
    );

  }

}
