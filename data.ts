export const skills = [
  {
    id: 1,
    name: "html",
    ratio: 98,
    image: "/html.svg",
  },
  {
    id: 2,
    name: "javascript",
    ratio: 98,
    image: "/Javascript.svg",
  },
  {
    id: 3,
    name: "laravel",
    ratio: 65,
    image: "/laravel.svg",
  },
  {
    id: 4,
    name: "nextjs",
    ratio: 95,
    image: "/NextJs.svg",
  },
];


export const projects: projectType[] = [
  {
     id: 1, 
     title: 'ReThink (document content searcher)',
     name: 'rethink',
     description: 'A Generative AI Website where you can upload your documents and ask or share something by interacting with AI.',
     repo: 'https://github.com/kenta23/rethinkapp',
     link: 'https://rethinkapp.vercel.app/',
     image: '/Rethink.svg',
     header: '/rethink-header.svg'
  },
  {
    id: 2, 
    title: 'Bookery (book library online)',
    name: 'bookery',
    description: 'An online book library that you can search and view ebooks, you can also buy a premium book or collect your books as favorites on a single account, it all works using Google Book API',
    repo: 'https://github.com/kenta23/bookery',
    link: 'https://https://bookeryapp.vercel.app/',
    image: '/Bookery.svg',
    header: '/bookery-header.svg'
  },
  {
    id: 3,
    title: 'Speechy (speech recognition AI)',
    name: 'speechy',
    description: 'A simple speech AI where you can record your voice and it automatically detects the language you speak and you can copy the text that shows up after the recording.',
    repo: 'https://github.com/kenta23/simple-Speech-AI',
    link: 'https://https://speechy.vercel.app/',
    image: '/Speechy.svg',
    header: '/speechy-header.svg'
  }
]


export type projectType = {
    id: number,
    title: string,
    name: string,
    description: string,
    repo: string,
    link: string,
    image: string | null,
    header: string | null
}


