import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-dialog',
  standalone: false,
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.css',
})
export class ConfirmationDialogComponent implements OnInit {
  @Input() title : string | null = null;
  @Input() message : String | null = null;
  @Input() btnOkText : string | null = null;
  @Input() btnCancelText: string | null = null;

  constructor(private activeModal: NgbActiveModal){}

  ngOnInit(): void {
    
  }

  public decline(){
    this.activeModal.close(false);
  }

  public accept(){
    this.activeModal.close(true);
  }

  public dismiss(){
    this.activeModal.dismiss();
  }
}