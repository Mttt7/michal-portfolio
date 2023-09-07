import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'michal-portfolio';
  name = 'M I C H A Ł';
  loaded: boolean = false;

  skills = [
    { name: 'Angular', img: '../../assets/angular.png', },
    { name: 'React', img: '../../assets/react.png', },
    { name: "MongoDB", img: '../../assets/mongodb.png', },
    { name: 'Firebase', img: '../../assets/firebase.png', },
    { name: 'NodeJS', img: '../../assets/nodejs.png', },
    { name: 'Git', img: '../../assets/git.png', },
    { name: 'TypeScript', img: '../../assets/typescript.png', },

  ]
  allSkills = [
    { name: 'Angular', img: '../../assets/angular.png', },
    { name: 'React', img: '../../assets/react.png', },
    { name: "MongoDB", img: '../../assets/mongodb.png', },
    { name: 'Firebase', img: '../../assets/firebase.png', },
    { name: 'NodeJS', img: '../../assets/nodejs.png', },
    { name: 'Git', img: '../../assets/git.png', },
    { name: 'TypeScript', img: '../../assets/typescript.png', },
    { name: 'JavaScript', img: '../../assets/javascript.png', },

  ]

  links = [
    { href: 'https://github.com/Mttt7', icon: '../../assets/github-logo.png' },
    { href: 'https://www.linkedin.com/in/michał-tomaszewski-858303271/', icon: '../../assets/linkedin-logo.png' },
    { href: 'https://www.instagram.com/mtt.jpeg/', icon: '../../assets/instagram-logo.png' },
  ]

  projects = [
    {
      name: 'Casino', img: '../../assets/casino-screen.png', link: 'https://github.com/Mttt7/casino',
      skills: ['Angular'], description: 'A simple Angular project, a casino game, created to refresh my knowledge of Angular.'
    },
    {
      name: 'Clinic Manager', img: '../../assets/clinic-screen.png', link: 'https://github.com/Mttt7/clinic-manager',
      skills: ['Angular', 'MongoDB', 'NodeJS'], description: 'CRUD application created with Angular, NodeJS, ExpressJS and MongoDB. It allows you to manage patients, doctors and appointments.'
    },
    {
      name: 'Weather App', img: '../../assets/weather-screen.png', link: 'https://github.com/Mttt7/weather-app-react',
      skills: ['React'], description: 'Weather app built in React using openweathermap and Pexels API.'
    },
    {
      name: 'DevTo Clone', img: '../../assets/devto-screen.png', link: 'https://github.com/Mttt7/devto-clone/',
      skills: ['React', 'Firebase'], description: 'A clone of dev.to website, created with React and Firebase.'
    },
    {
      name: 'To Do List', img: '../../assets/todolist-screen.png', link: 'https://github.com/Mttt7/todolist',
      skills: ['JavaScript'], description: 'A simple to do list created with Vanilla JavaScript.'
    },
    {
      name: 'Etch a Sketch', img: '../../assets/etch-screen.png', link: 'https://github.com/Mttt7/Etch-a-Sketch',
      skills: ['JavaScript'], description: 'A simple Etch a Sketch game created with Vanilla JavaScript.'
    },

  ]

  redirectToLink(link: string) {
    if (link) {
      window.location.href = link;
    }
  }


  getImgForSkill(skill: any) {
    return this.allSkills.find(x => x.name === skill)?.img;
  }

  hoverEffect(event: any) {
    if (event.target.classList.contains('typescriptLogo')) {

      event.target.children[0].src = '../../assets/javascript.png';
      event.target.classList.remove('typescriptLogo');
      event.target.classList.add('javascriptLogo');
    }
    else if (event.target.classList.contains('javascriptLogo')) {

      event.target.children[0].src = '../../assets/typescript.png';
      event.target.classList.remove('javascriptLogo');
      event.target.classList.add('typescriptLogo');
    }



  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loaded = true;
    }, 2000);




  }

  changetoMichael(): void {
    if (this.name === 'M I C H A E L') {
      this.name = 'M I C H A Ł';
    }
    else if (this.name === 'M I C H A Ł') {
      this.name = 'M I C H A E L';
    }

  }
}

