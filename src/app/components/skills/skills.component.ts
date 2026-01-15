import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillGroups = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'Angular', level: 80, icon: 'bi-patch-check-fill' },
        { name: 'Bootstrap', level: 90, icon: 'bi-bootstrap-fill' },
        { name: 'HTML/CSS/JS', level: 85, icon: 'bi-code-slash' }
      ]
    },
    {
      title: 'Hardware & IoT',
      skills: [
        { name: 'Arduino / Microcontroller', level: 85, icon: 'bi-cpu-fill' },
        { name: 'Electronics Circuit', level: 75, icon: 'bi-lightning-charge-fill' },
        { name: 'IoT Protocols (MQTT/HTTP)', level: 70, icon: 'bi-broadcast' }
      ]
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C / C++', level: 80, icon: 'bi-filetype-cpp' },
        { name: 'TypeScript', level: 75, icon: 'bi-filetype-tsx' },
        { name: 'Python', level: 65, icon: 'bi-terminal' }
      ]
    }
  ];
}