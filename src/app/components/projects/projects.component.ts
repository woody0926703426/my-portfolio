import { Component, OnInit } from '@angular/core';

// 1. สร้าง Interface เพื่อกำหนดโครงสร้างที่แน่นอน
interface Project {
  title: string;
  category: string;
  description: string;      // รายละเอียดสั้นหน้า Card
  fullDescription: string;  // รายละเอียดแบบเต็มใน Modal
  image: string;
  link: string;
  tags: string[];           // รายชื่อเทคโนโลยีที่ใช้
  challenges: string[];     // หัวข้อความท้าทายใน Modal
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {
  selectedCategory: string = 'All';

allProjects = [
  { 
    title: 'Smart Fan Control via Mobile', 
    category: 'IoT', 
    desc: 'พัดลมเปิด-ปิดผ่านมือถือ รางวัลเหรียญทองแดงระดับชาติ ประจำปี 2565 ', 
    tech: ['IoT', 'Mobile Control', 'Microcontroller'],
    imageUrl: 'assets/Projects/fan2.jpg', // ใส่ Path รูปที่นี่
    link: '#',
    tags: ['IoT', 'Mobile Control', 'Microcontroller'],
    challenges: [
      'พัดลมเปิดปิดผ่านมือถือ พัฒนาจาก Node MCU ESP8266 เป็นตัวควบคุมหลักในการทำงาน',
      'ซึ่งหลักการทำการคือ เมื่อเสียบปลั๊กแล้ว Node จะทำการเชื่อมต่อ WiFi ก่อนอันดับแรก',
      'Step ต่อไปรอคำสั่งจากมือถือ สามารถสั่ง เปิด เบอร์ 1 - 3 และ ปิด'
      ] 
  },
  { 
    title: 'Web Application Online Meeting', 
    category: 'Web', 
    desc: 'เว็บแอพพลิเคชั่นสำหรับการประชุมออนไลน์ รางวัลเหรียญทองแดงระดับชาติ ประจำปี 2566 ', 
    tech: ['Web App', 'Real-time', 'Software Innovation'],
    imageUrl: 'assets/Projects/meeting.jpg',
    link: '#',
    tags: ['Web App', 'Real-time', 'Software Innovation'],
    challenges: [
      'เว็บนี้พัฒนามาเมื่อ ยุค โควิค ระบาดได้ซักพัก จึงคิดโปรเจ็ก การประชุมออนไลน์ เว้นระยะห่าง กันโรคระบาด หลักการทำงาน',
      'เมื่อเข้าสู่หน้าแรก จะมีให้ กรอก ชื่อ และ เลขห้อง เมื่อกด Join จะเข้าสุ่ห้อง วิดีโอคอล',
      ] 
  },
  { 
    title: 'Smart Box Notify by Telegram', 
    category: 'IoT', 
    desc: 'ระบบกล่องรับพัสดุอัจฉริยะ แจ้งเตือนผ่าน Telegram เมื่อมีพัสดุมาส่ง ', 
    tech: ['Telegram API', 'Embedded Systems', 'Network'],
    imageUrl: 'assets/Projects/box2.jpg',
    link: '#',
    tags: ['Telegram API', 'Arduino', 'Sensor','ESP8266'],
    challenges: [
      'เมื่อมีพัสดุมาส่งใส่ภายในกล่อง จะมี Ultrasonic Sensor รอจับวัตถุ ',
      'เมื่อกล่องพัสดุกระทบวัตถุ จะทำการแจ้งเตือน แบบเรียลไทม์ ผ่าน เทเลแกรมบอท'
      ] 
  },
  { 
    title: 'Steakhouse Management System', 
    category: 'Web', 
    desc: 'ระบบบริหารจัดการโต๊ะอาหารและออเดอร์แบบจำลอง โชว์การจัดการสถานะโต๊ะว่าง-ไม่ว่างแบบ Real-time', 
    tech: ['Angular', 'Bootstrap', 'State Management'],
    imageUrl: 'assets/Projects/steakhouse.jpg', // แคปภาพหน้าจอตอนโต๊ะเป็นสีเทามาใส่
    link: '#',
    tags: ['Angular', 'Bootstrap', 'State Management'],
    challenges: [
      'Real-time Table Status: ระบบจัดการสถานะโต๊ะ (Available/Occupied) ด้วยสี Order Flow',
      'Logic: การจัดการตะกร้าสินค้าและการยืนยันออเดอร์ Payment Simulation: การจำลองการชำระเงินแบบ Cash และ QR Scan',
      ] 
  },
  { 
    title: 'Egg Recipe Interactive Portal', 
    category: 'Web', 
    desc: 'เว็บรวบรวมสูตรอาหารจากไข่ เน้นการใช้งาน Component Modal เพื่อโชว์ข้อมูลรายละเอียดแบบ Pop-up', 
    fullDescription: 'โปรเจกต์นี้ใช้ TensorFlow.js เพื่อจำแนกวัตถุได้มากกว่า 1,000 ชนิด โดยเน้นความเป็นส่วนตัวของข้อมูลผู้ใช้เพราะประมวลผลที่ฝั่ง Client ทั้งหมด',
    imageUrl: 'assets/Projects/menu-egg.jpg',
    tech: ['Angular', 'Bootstrap', 'Responsive Design'],
    link: '#',
    tags: ['Angular', 'Bootstrap', 'Responsive Design'],
    challenges: [
      'UI/UX Design: การใช้ Modal/Pop-up แสดงข้อมูลแบบ Dynamic Clean ',
      'Design: เน้นความง่ายในการใช้งาน (Simplicity)'
      ]
    },
    {
      title: 'AI Neural Vision Core',
      category: 'AI',
      desc: 'ระบบจำแนกวัตถุอัจฉริยะประมวลผลผ่าน Browser',
      fullDescription: 'โปรเจกต์นี้ใช้ TensorFlow.js เพื่อจำแนกวัตถุได้มากกว่า 1,000 ชนิด โดยเน้นความเป็นส่วนตัวของข้อมูลผู้ใช้เพราะประมวลผลที่ฝั่ง Client ทั้งหมด',
      imageUrl: 'assets/Projects/ai-object2.jpg',
      link: '#',
      tags: ['Angular', 'TensorFlow.js', 'Bootstrap'],
      challenges: [
        'การดักจับรูปจาก Clipboard (Paste Event)',
        'การจัดการประสิทธิภาพการรัน Model บนเครื่องผู้ใช้',
        'การออกแบบ UI ให้แสดงผลความมั่นใจ (Probability) แบบ Real-time'
      ]
    }
];


  // ฟังก์ชันกรองข้อมูล
  get filteredProjects() {
    if (this.selectedCategory === 'All') return this.allProjects;
    return this.allProjects.filter(p => p.category === this.selectedCategory);
  }


}
