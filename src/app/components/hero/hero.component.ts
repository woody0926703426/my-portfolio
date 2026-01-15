import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  name: string = 'CHAIWUT JAMAREE'; // ตามสะกดใน Port
title: string = 'Information Technology Student | Data Engineering Certified';
description: string = 'นักศึกษาสาขาเทคโนโลยีสารสนเทศ วิทยาลัยเทคโนโลยีอรรถวิทย์พณิชยการ ผู้ได้รับรางวัลเหรียญทองแดงนวัตกรรมระดับชาติ 2 ปีซ้อน และผ่านการรับรองสมรรถนะอาชีพด้านวิศวกรรมข้อมูล (Data Engineering) ระดับ 4';
}