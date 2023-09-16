export const skillsData = [
  {
    id: 1,
    name: "HTML",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png",
  },
  {
    id: 2,
    name: "CSS",
    img: "https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png",
  },
  {
    id: 3,
    name: "JavaScript",
    img: "https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png",
  },
  {
    id: 4,
    name: "React",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  },
  {
    id: 5,
    name: "Typescript",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
  },
  {
    id: 6,
    name: "Tailwind CSS",
    img: "data:image/png;base64,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",
  },
  {
    id: 7,
    name: "Git",
    img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  },
  {
    id: 8,
    name: "Cypress",
    img: "https://pbs.twimg.com/profile_images/1512090708181725184/KAPAXmDg_400x400.jpg",
  },
  {
    id: 9,
    name: "Mocha",
    img: "https://blog.knoldus.com/wp-content/uploads/2019/12/mocha.png",
  },
  {
    id: 10,
    name: "Chai",
    img: "https://camo.githubusercontent.com/7ecbd4531436e4f20c1dba52a4fd4ac367cfcc20a2f62cfe7a10f32da306afc6/687474703a2f2f636861696a732e636f6d2f696d672f636861692d6c6f676f2e706e67",
  },
  {
    id: 11,
    name: "Figma",
    img: "https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format",
  },
];

export const projectsData = [
  {
    id: 1,
    name: "MovieMania",
    img: "/movie-mania.png",
  },
  {
    id: 2,
    name: "Jadoo Website",
    img: "/travel-website.png",
  },
  {
    id: 3,
    name: "Contruction Website",
    img: "/construction-website.png",
  },
  {
    id: 4,
    name: "Tesla Clone",
    img: "/tesla-website.png",
  },
  {
    id: 5,
    name: "GoShop",
    img: "/e-commerce-app.png",
  },
  {
    id: 6,
    name: "News Reader",
    img: "/news-reader.png",
  },
];
