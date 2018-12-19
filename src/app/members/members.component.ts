import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  
  constructor(public appService: AppService, private router: Router) {}

  ngOnInit() {
    this.appService.getMembers().subscribe((members) => (this.appService.members = members));
  }

  goToAddMemberForm() {
    this.appService.memberDialog = true;
  }

  editMemberByID(id: number) {}

  deleteMemberById(id: number) {}
}
