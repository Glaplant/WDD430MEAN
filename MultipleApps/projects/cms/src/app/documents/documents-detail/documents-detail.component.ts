import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { WinRefService } from '../../win-ref.service';
import { Document} from  '../document.model';
import { DocumentService } from '../document.service';
@Component({
  selector: 'app-documents-detail',
  templateUrl: './documents-detail.component.html',
  styleUrls: ['./documents-detail.component.css']
})
export class DocumentsDetailComponent implements OnInit {

  documents:Document;
  id: string;
  nativeWindow: any;

  constructor(private documentSrv: DocumentService,
              private route: ActivatedRoute,
              private router: Router,
              private windowService: WinRefService) { 
                this.nativeWindow = this.windowService.getNativeWindow();
  }

  ngOnInit(): void {

    this.route.params 
    .subscribe(
      (params: Params) =>{
        this.id = params ['id'];
        this.documents = this.documentSrv.getDocument(this.id)

      }
    )
    
  }

  onView(){
if(this.documents.url){
  this.nativeWindow.open(this.documents.url);
        }
    }
 
    onDelete() {
      this.documentSrv.deleteDocument(this.documents);
      this.router.navigate(['/documents']);
   }

}
