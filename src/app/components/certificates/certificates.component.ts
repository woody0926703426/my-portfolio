import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
  selectedCategory: string = 'All';

  certificates = [
  {
    title: 'อาชีพผู้ปฏิบัติงานด้านวิศวกรรมข้อมูล ระดับ 4',
    issuer: 'สถาบันคุณวุฒิวิชาชีพ (TPQI)',
    year: '2568',
    image: 'assets/cert-tpqi.jpg' // อย่าลืมนำรูปใบประกาศไปวางใน assets นะครับ
  },
  {
    title: 'รางวัลเหรียญทองแดง นวัตกรรมซอฟต์แวร์ ระดับชาติ',
    issuer: 'สมาคมวิทยาลัยเทคโนโลยีและอาชีวศึกษาเอกชนฯ',
    year: '2566',
    image: 'assets/cert-national-2566.jpg'
  },
  {
    title: 'รางวัลเหรียญทองแดง พัดลมมือถือ ระดับชาติ',
    issuer: 'สมาคมวิทยาลัยเทคโนโลยีและอาชีวศึกษาเอกชนฯ',
    year: '2565',
    image: 'assets/cert-national-2565.jpg'
  }
];

}
