import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule, BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-default-layout',

  standalone: true,
  imports: [CommonModule, RouterModule, BreadcrumbModule],
  templateUrl: './default.layout.html',
  styleUrls: ['./default.layout.scss'],
})
export class DefaultLayout implements OnInit {
  constructor(private readonly breadcrumbService: BreadcrumbService) {}
  ngOnInit(): void {}
}
