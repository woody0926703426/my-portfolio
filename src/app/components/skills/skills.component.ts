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
        { name: 'Angular', level: 70, icon: 'bi-patch-check-fill' },
        { name: 'Next.js', level: 70, icon: 'bi-gear' },
        { name: 'HTML/CSS/JS', level: 65, icon: 'bi-code-slash' }
      ]
    },
    {
      title: 'Hardware & IoT',
      skills: [
        { name: 'Arduino / Microcontroller', level: 85, icon: 'bi-cpu-fill' },
        { name: 'Electronics Circuit', level: 65, icon: 'bi-lightning-charge-fill' },
        { name: 'IoT Protocols (MQTT/HTTP)', level: 70, icon: 'bi-broadcast' }
      ]
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C / C++', level: 75, icon: 'bi-filetype-cpp' },
        { name: 'TypeScript', level: 70, icon: 'bi-filetype-tsx' },
        { name: 'AI/Machine Learning', level: 85, icon: 'bi-terminal' }
      ]
    }
  ];
}