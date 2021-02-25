import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  isRedColor = true;
  userClass = { fontBold: true };
  classTxtRed = false;
  isTxtBold = false;
  gender = '';
  number = 0;
  color = ''
  days = [
    {
      name: 'Sunday', value: 1
    },
    {
      name: 'Monday', value: 2
    },
    {
      name: 'Tuesday', value: 3
    },
    {
      name: 'Wed', value: 4
    },
    {
      name: 'Thur', value: 5
    },
    {
      name: 'Fri', value: 6
    },
    {
      name: 'Sat', value: 7
    }
  ]
  authors = [
    {
      id: 1,
      firstName: "Flora",
      lastName: "Twell",
      email: "ftwell0@phoca.cz",
      gender: "Male",
      ipAddress: "99.180.237.33",
    },
    {
      id: 2,
      firstName: "Priscella",
      lastName: "Signe",
      email: "psigne1@berkeley.edu",
      gender: "Female",
      ipAddress: "183.243.228.65",
    },
    {
      id: 3,
      firstName: "Flora",
      lastName: "Twell",
      email: "ftwell0@phoca.cz",
      gender: "Female",
      ipAddress: "99.180.237.33",
    },
    {
      id: 4,
      firstName: "Priscella",
      lastName: "Signe",
      email: "psigne1@berkeley.edu",
      gender: "Female",
      ipAddress: "183.243.228.65",
    },
    // more data
  ];
  constructor() { }

  ngOnInit(): void { }
}
