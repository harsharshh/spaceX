import {Component, OnInit} from '@angular/core';
import {HomeService} from './service/home.service';
import {filters} from './entity/filters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) {
  }


  spaceXdata: any;
  years = [];
  activeYear: number;
  successFulLaunch = [{value: true, label: 'True'}, {value: false, label: 'False'}];
  launchFlag: boolean;
  landFlag: boolean;
  filters = filters;
  perPageLimit = 100;
  options = {};

  ngOnInit(): void {
    this.setYears();
    this.loadPage();
  }


  setYears() {
    const date = new Date();
    for (let i = 2006; i <= date.getFullYear(); i++) {
      this.years.push(i);
    }
  }


  loadPage(options?) {
    if (options) {
      options['limit'] = this.perPageLimit;
      this.options = options;
    } else {
      this.options['limit'] = this.perPageLimit;
    }
    this.homeService.getSpaceXData(this.options).subscribe(res => {
      this.spaceXdata = res;
    })
  }

  setActiveYear(year, type) {
    this.activeYear = year;
    this.filter(year, type);
  }

  setLaunchFlag(flag, type) {
    this.launchFlag = flag;
    this.filter(flag, type);
  }

  setLandFlag(flag, type) {
    this.landFlag = flag;
    this.filter(flag, type);
  }

  filter(value, filter) {
    this.options[this.filters[filter]] = value;
    this.loadPage(this.options);
  }

  clearFilters() {
    this.options = {};
    this.landFlag = null;
    this.launchFlag = null;
    this.activeYear = null;
    this.loadPage();
  }


}
