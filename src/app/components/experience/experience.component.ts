import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  // ประสบการณ์สายตรง (Frontend)
  techExp = [
    {
      company: '3DS INTERACTIVE CO., LTD.',
      position: 'Frontend Developer (Internship)',
      period: '3 Months',
      image: 'assets/intern-3dss.jpg',
      description: 'พัฒนาและปรับปรุง User Interface ของเว็บไซต์บริษัท รองรับการทำงานร่วมกับทีม UI/UX และแก้ไข Bug ในส่วนหน้าบ้าน',
      tools: ['HTML5', 'CSS3', 'JavaScript', 'Git']
    }
  ];

  // ประสบการณ์การทำงานอื่นๆ (แสดงถึงความรับผิดชอบและความอดทน)
  otherExp = [
    {
      company: 'CMD ADVANCED ACCOUNTING ASIA CO., LTD.',
      position: 'Bookkeeping Assistant',
      period: '2566 - Present (3 Years)',
      description: 'จัดการข้อมูลทางบัญชีที่มีความละเอียดสูงและเป็นระบบ ตรวจสอบความถูกต้องของเอกสารตัวเลข'
    },
    {
      company: 'CHOKDEE CUP COMPANY LIMITED',
      position: 'Senior Barista (Part-time)',
      period: '2564 - Present (5 Years)',
      description: 'บริหารจัดการงานบริการลูกค้า ทำงานภายใต้ความกดดัน และรักษามาตรฐานการบริการอย่างสม่ำเสมอ'
    }
  ];


}