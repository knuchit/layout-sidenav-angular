import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/animations';
import { Menu } from '../../models/menu.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  animations : [
    // trigger('slideToggle', [
    //   state('closed', style({ height: '0px', opacity: 0, overflow: 'hidden' })),
    //   state('open', style({ height: '*', opacity: 1, overflow: 'hidden' })),
    //   transition('closed <=> open', animate('300ms ease-in-out'))
    // ])
    trigger('slideToggle', [
      state('open', style({
        height: '*',
        opacity: 1,
        display: 'block',
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
        display: 'none',
      })),
      transition('open => closed', [group([
        animate('200ms ease-in-out', style({
          height: '0px'
        })),
        animate('200ms ease-in-out', style({
          display: 'none',
        })),
        animate('195ms ease-in-out', style({
          opacity: '0'
        })),
    ]
    )]),
    transition('closed => open', [group([
      animate('200ms ease-in-out', style({
        height: '*'
      })),
      animate('200ms ease-in-out', style({
        display: 'block',
      })),
      animate('195ms ease-in-out', style({
        opacity: '1'
      })),
  ]
  )])

    ])
  ]
})
export class SidebarComponent {
  activeIndex: number = 0;
  isExpanded:boolean = false;
  // menu
  menus:Menu[] = [
    {id:1,icon: "icon ph-bold ph-house-simple",name: "Dashboard",status:false},
    {id:2,icon: "icon ph-bold ph-user",name: "Audience",status:false , submenu: [{name: "Users"},{name: "Subscribers"}]},
    {id:1,icon: "icon ph-bold ph-file-text",name: "Posts",status:false },
    {id:1,icon: "icon ph-bold ph-calendar-blank",name: "Schedules",status:false },
    {id:1,icon: "icon ph-bold ph-chart-bar",name: "Income",status:false,submenu: [{name: "Earnings"},{name: "Funds"},{name: "Declines"},{name: "Payouts"}]},
  ];

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

  toggleMenu(index: number): void {
    // clear all active menu items
    this.menus.forEach(menu => menu.status = false);
    if (this.activeIndex === index) {
        this.activeIndex = -1;
    }
    else{
      this.activeIndex = index;
      this.menus[index].status = !this.menus[index].status;
    }
  }
}
