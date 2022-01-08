export const PROJECTS: ProjectInterface[] = [
  {
    id: '1',
    title: 'Hoomies',
    description:
      'Hoomies offre la possibilité aux clients de chercher une maison de manière rapide et efficace. C’est une plateforme immobilière qui permet de relier directement les propriétaires et les locataires sans intermédiaire.',
    image: {
      src: 'https://res.cloudinary.com/beanjara/image/upload/v1641138971/s7o46g5cniuce8gj23ey.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg=='
    },
    links: {
      site: 'https://hoomies.herokuapp.com/',
      repo: 'https://github.com/hbeanjarah/hoomies'
    },
    technologies: ['#ruby', '#rubyOnRails', '#jquery', '#ajax']
  },
  {
    id: '2',
    title: 'Hoomies',
    description:
      'Hoomies offre la possibilité aux clients de chercher une maison de manière rapide et efficace. C’est une plateforme immobilière qui permet de relier directement les propriétaires et les locataires sans intermédiaire.',
    image: {
      src: 'https://res.cloudinary.com/beanjara/image/upload/v1641138971/s7o46g5cniuce8gj23ey.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg=='
    },
    links: {
      site: 'https://hoomies.herokuapp.com/',
      repo: 'https://github.com/hbeanjarah/hoomies'
    },
    technologies: ['#ruby', '#rubyOnRails', '#jquery', '#ajax']
  },
  {
    id: '3',
    title: 'Hoomies',
    description:
      'Hoomies offre la possibilité aux clients de chercher une maison de manière rapide et efficace. C’est une plateforme immobilière qui permet de relier directement les propriétaires et les locataires sans intermédiaire.',
    image: {
      src: 'https://res.cloudinary.com/beanjara/image/upload/v1641138971/s7o46g5cniuce8gj23ey.png',
      placeholderSrc:
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzIDIiPjwvc3ZnPg=='
    },
    links: {
      site: 'https://hoomies.herokuapp.com/',
      repo: 'https://github.com/hbeanjarah/hoomies'
    },
    technologies: ['#ruby', '#rubyOnRails', '#jquery', '#ajax']
  }
];

export interface ProjectInterface {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    placeholderSrc: string;
  };
  links: {
    site: string;
    repo: string;
  };
  technologies: string[];
}

export const INIT_PROJECT: ProjectInterface = {
  id: '0',
  title: '',
  description: '',
  image: {
    src: '',
    placeholderSrc: ''
  },
  links: {
    site: '',
    repo: ''
  },
  technologies: ['']
};
