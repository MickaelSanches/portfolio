import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent, d as createAstro, e as renderHead } from '../chunks/astro/server_CuKvNVxB.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                 */
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_DcDd7sZD.mjs';
export { renderers } from '../renderers.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header"> <a href="#accueil"> <img src="/LogoMike.webp" alt="Logo de Mickael Sanches Loureiro" id="accueil-logo" class="logo"> </a> <nav class="nav"> <ul class="ul-nav"> <a href="#accueil"> <li class="li-nav">Accueil</li> </a> <a href="#projets"> <li class="li-nav">Projets</li> </a> <a href="#hardskills"> <li class="li-nav">Hard Skills</li> </a> <a href="#études"> <li class="li-nav">Études</li> </a> <a href="#àpropos"> <li class="li-nav">À propos</li> </a> <a href="#contact"> <li class="li-nav">Contact</li> </a> </ul> </nav> <div class="container-bnt-menu"> <div class="btn-menu"> <span class="line-menu" id="line1"></span> <span class="line-menu" id="line2"></span> <span class="line-menu" id="line3"></span> </div> </div> <div class="menu-drop"></div>  </header> `;
}, "/Users/mickaelsanchesloureiro/Desktop/Portfolio/portfolio/src/components/header/Header.astro", void 0);

const studies = [
    {
        title: "Métiers de la relation aux clients et aux usagers",
        corporation: "LPP le Margériaz - Barberaz (Savoie-France)",
        date: "09/2012 – 07/2014",
    },
    {
        title: "Développeur Web & Web Mobile",
        corporation: "O'Clock - Remote",
        date: "10/2023 – 04/2024",
    },
    {
        title: "Développeur Solana",
        corporation: "Alyra avec la participation de la Solana Foundation - Remote",
        date: "06/2024 – 07/2024",
    },
];

const IconKeys = {
    html: "html",
    css: "css",
    javaScript: "javaScript",
    react: "react",
    astro: "astro",
    tailwind: "tailwind",
    typeScript: "typeScript",
    git: "git",
    github: "github",
    shadcn: "shadcn",
    nodejs: "nodejs",
    solana: "solana",
    rust: "rust",
    anchor: "anchor",
};

const skills = [
    {
        title: "Html",
        icon: IconKeys.html,
    },
    {
        title: "Css",
        icon: IconKeys.css,
    },
    {
        title: "JavaScript",
        icon: IconKeys.javaScript,
    },
    {
        title: "Astro",
        icon: IconKeys.astro,
    },
    {
        title: "Tailwindcss",
        icon: IconKeys.tailwind,
    },
    {
        title: "React Js",
        icon: IconKeys.react,
    },
    {
        title: "Git",
        icon: IconKeys.git,
    },

    {
        title: "Github",
        icon: IconKeys.github,
    },
    {
        title: "Node Js",
        icon: IconKeys.nodejs,
    },
    {
        title: "TypeScript",
        icon: IconKeys.typeScript,
    },
    {
        title: "Shadcn UI",
        icon: IconKeys.shadcn,
    },
    {
        title: "Solana",
        icon: IconKeys.solana,
    },
    {
        title: "Rust",
        icon: IconKeys.rust,
    },
    {
        title: "Anchor",
        icon: IconKeys.anchor,
    },
];

const projects = [
    {
        img: "../../../img/O’Coloc.webp",
        title: "Cohabit",
        link: "https://o-coloc-front.onrender.com/",
        description: `Projet d'école - Développeur back-end & Lead dev back`,
        technologies: [
            {
                icon: IconKeys.react,
            },
            {
                icon: IconKeys.typeScript,
            },
            {
                icon: IconKeys.nodejs,
            },
            {
                icon: IconKeys.tailwind,
            },
            {
                icon: IconKeys.javaScript,
            },
            {
                icon: IconKeys.shadcn,
            },
        ],
    },
    {
        img: "../../../img/MCS.webp",
        title: "Mon Comptoir Secret",
        link: "https://moncomptoirsecret.com/",
        description: `Site pour un institut de beauté`,
        technologies: [
            {
                icon: IconKeys.react,
            },
            {
                icon: IconKeys.typeScript,
            },
            {
                icon: IconKeys.nodejs,
            },
            {
                icon: IconKeys.tailwind,
            },
            {
                icon: IconKeys.javaScript,
            },
            {
                icon: IconKeys.astro,
            },
            {
                icon: IconKeys.html,
            },
            {
                icon: IconKeys.css,
            },
            {
                icon: IconKeys.github,
            },
        ],
    },
    {
        img: "../../../img/ASAP.webp",
        title: "ASAP",
        link: "",
        description: `En construction`,
        technologies: [
        ],
    },
    {
        img: "../../../img/JL.webp",
        title: "Jimmy Lalin - Boxeur Professionnel",
        link: "",
        description: `À venir`,
        technologies: [
        ],
    },
    {
        img: "../../../img/NovaPay.webp",
        title: "NovaPay",
        link: "",
        description: `Projet`,
        technologies: [
        ],
    },
    {
        img: "../../../img/Snap-Games.webp",
        title: "Snap",
        link: "",
        description: `Projet`,
        technologies: [
        ],
    },

];

const $$IconAstro = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg viewBox="0 0 256 366" xmlns="http://www.w3.org/2000/svg" width="45px" height="45px" preserveAspectRatio="xMidYMid"><path fill="#fff" d="M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.467 276.467 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.017L79.784 219.11A276.453 276.453 0 0 0 0 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.541 24.541 0 0 1 9.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.545 24.545 0 0 1 9.95 7.373Z"></path><path fill="#FF5D01" d="M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751-30.904 0-56.807-9.621-63.68-22.56-2.458 7.415-3.009 15.903-3.009 21.324 0 0-1.619 26.623 16.898 45.14 0-9.615 7.795-17.41 17.41-17.41 16.48 0 16.46 14.378 16.446 26.043l-.001 1.041c0 17.705 10.82 32.883 26.21 39.28a35.685 35.685 0 0 1-3.588-15.647c0-16.886 9.913-23.173 21.435-30.48 9.167-5.814 19.353-12.274 26.372-25.232a47.588 47.588 0 0 0 5.742-22.735c0-5.06-.786-9.938-2.243-14.516Z"></path></svg> </i>`;
}, "/Users/mickaelsanchesloureiro/Desktop/Portfolio/portfolio/src/icons/IconAstro.astro", void 0);

const $$IconTailwind = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg viewBox="0 0 256 154" width="45" height="45" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <defs><linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="gradient"> <stop stop-color="#2298BD" offset="0%"></stop> <stop stop-color="#0ED7B5" offset="100%"></stop> </linearGradient></defs> <path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z" fill="url(#gradient)"></path></svg> </i>`;
}, "/Users/mickaelsanchesloureiro/Desktop/Portfolio/portfolio/src/icons/IconTailwind.astro", void 0);

const $$IconTypeScript = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="45px" height="45px" viewBox="0 0 400 400" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><style>.st0{fill:#007acc}.st1{fill:#fff}</style><path class="st0" d="M0 200V0h400v400H0"></path><path class="st1" d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"></path></svg>`;
}, "/Users/mickaelsanchesloureiro/Desktop/Portfolio/portfolio/src/icons/IconTypeScript.astro", void 0);

const $$IconHtml = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520" width="45px" height="45px"> <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#ef652a" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"></path> </svg> </i>`;
}, "/Users/mickaelsanchesloureiro/Desktop/Portfolio/portfolio/src/icons/IconHtml.astro", void 0);

const $$IconCss = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520" width="45px" height="45px"> <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52"></path> <path fill="#30a9dc" d="M226 472l149-41 35-394H226"></path> <path fill="#ecedee" d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"></path> <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z"></path> </svg> </i>`;
}, "/Users/mickaelsanchesloureiro/Desktop/Portfolio/portfolio/src/icons/IconCss.astro", void 0);

const $$IconReact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg viewBox="0 0 256 228" width="45" height="45" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345-3.24-10.257-7.612-21.163-12.963-32.432 5.106-11 9.31-21.767 12.459-31.957 2.619.758 5.16 1.557 7.61 2.4 23.69 8.156 38.14 20.213 38.14 29.504 0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787-1.524 8.219-4.59 13.698-8.382 15.893-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246 12.376-1.098 24.068-2.894 34.671-5.345.522 2.107.986 4.173 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994 7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863-6.35-5.437-9.555-10.836-9.555-15.216 0-9.322 13.897-21.212 37.076-29.293 2.813-.98 5.757-1.905 8.812-2.773 3.204 10.42 7.406 21.315 12.477 32.332-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789 8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152 7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793 2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433 4.902.192 9.899.29 14.978.29 5.218 0 10.376-.117 15.453-.343-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026 347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815 329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627 310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695 358.489 358.489 0 0 1 11.036 20.54 329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026-.344 1.668-.73 3.367-1.15 5.09-10.622-2.452-22.155-4.275-34.23-5.408-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86-22.86-10.235-22.86-22.86 10.235-22.86 22.86-22.86Z" fill="#00D8FF"></path></svg> </i>`;
}, "/Users/mickaelsanchesloureiro/Desktop/Portfolio/portfolio/src/icons/IconReact.astro", void 0);

const $$IconGit = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256" width="45px" height="45px"> <path d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33" fill="#DE4C36"></path> </svg> </i>`;
}, "/Users/mickaelsanchesloureiro/Desktop/Portfolio/portfolio/src/icons/IconGit.astro", void 0);

const $$IconGitHub = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg viewBox="0 0 256 250" width="45" height="45" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"></path> </svg> </i>`;
}, "/Users/mickaelsanchesloureiro/Desktop/Portfolio/portfolio/src/icons/IconGitHub.astro", void 0);

const $$IconJavaScript = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"></path><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"></path></svg> </i>`;
}, "/Users/mickaelsanchesloureiro/Desktop/Portfolio/portfolio/src/icons/IconJavaScript.astro", void 0);

const $$IconShadcn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="45px" height="45px"><path fill="#000" d="M0 0h256v256H0z"></path><path fill="none" stroke="#fff" d="M208 128l-80 80M192 40L40 192"></path></svg> </i>`;
}, "/Users/mickaelsanchesloureiro/Desktop/Portfolio/portfolio/src/icons/IconShadcn.astro", void 0);

const $$IconNodeJs = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg viewBox="0 0 256 292" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="45" height="45"><defs><linearGradient id="a" x1="68.188%" x2="27.823%" y1="17.487%" y2="89.755%"><stop offset="0%" stop-color="#41873F"></stop><stop offset="32.88%" stop-color="#418B3D"></stop><stop offset="63.52%" stop-color="#419637"></stop><stop offset="93.19%" stop-color="#3FA92D"></stop><stop offset="100%" stop-color="#3FAE2A"></stop></linearGradient><linearGradient id="c" x1="43.277%" x2="159.245%" y1="55.169%" y2="-18.306%"><stop offset="13.76%" stop-color="#41873F"></stop><stop offset="40.32%" stop-color="#54A044"></stop><stop offset="71.36%" stop-color="#66B848"></stop><stop offset="90.81%" stop-color="#6CC04A"></stop></linearGradient><linearGradient id="f" x1="-4.389%" x2="101.499%" y1="49.997%" y2="49.997%"><stop offset="9.192%" stop-color="#6CC04A"></stop><stop offset="28.64%" stop-color="#66B848"></stop><stop offset="59.68%" stop-color="#54A044"></stop><stop offset="86.24%" stop-color="#41873F"></stop></linearGradient><path id="b" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"></path><path id="e" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"></path></defs><path fill="url(#a)" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"></path><mask id="d" fill="#fff"><use xlink:href="#b"></use></mask><path fill="url(#c)" d="M249.485 67.8 134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714Z" mask="url(#d)"></path><mask id="g" fill="#fff"><use xlink:href="#e"></use></mask><path fill="url(#f)" d="M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63l114.833-66.239Z" mask="url(#g)"></path></svg> </i>`;
}, "/Users/mickaelsanchesloureiro/Desktop/Portfolio/portfolio/src/icons/IconNodeJs.astro", void 0);

const $$Astro$2 = createAstro();
const $$Project = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Project;
  const { technologies = [], title, img, description, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="li-project" data-astro-cid-zokcuhmf> <img${addAttribute(img, "src")}${addAttribute(title, "alt")} loading="lazy" data-astro-cid-zokcuhmf> <p class="title-project" data-astro-cid-zokcuhmf>${title}</p> <p class="description-project" data-astro-cid-zokcuhmf> ${description} </p> <p class="title-technologies" data-astro-cid-zokcuhmf>Technologies utilisées</p> <div class="container-technologies" data-astro-cid-zokcuhmf> ${technologies.map(({ icon }) => {
    return renderTemplate`<i data-astro-cid-zokcuhmf> ${icon === "html" && renderTemplate`${renderComponent($$result, "IconHtml", $$IconHtml, { "data-astro-cid-zokcuhmf": true })}`} ${icon === "css" && renderTemplate`${renderComponent($$result, "IconCss", $$IconCss, { "data-astro-cid-zokcuhmf": true })}`} ${icon === "javaScript" && renderTemplate`${renderComponent($$result, "IconJavaScript", $$IconJavaScript, { "data-astro-cid-zokcuhmf": true })}`} ${icon === "react" && renderTemplate`${renderComponent($$result, "IconReact", $$IconReact, { "data-astro-cid-zokcuhmf": true })}`} ${icon === "astro" && renderTemplate`${renderComponent($$result, "IconAstro", $$IconAstro, { "data-astro-cid-zokcuhmf": true })}`} ${icon === "tailwind" && renderTemplate`${renderComponent($$result, "IconTailwind", $$IconTailwind, { "data-astro-cid-zokcuhmf": true })}`} ${icon === "typeScript" && renderTemplate`${renderComponent($$result, "IconTypeScript", $$IconTypeScript, { "data-astro-cid-zokcuhmf": true })}`} ${icon === "git" && renderTemplate`${renderComponent($$result, "IconGit", $$IconGit, { "data-astro-cid-zokcuhmf": true })}`} ${icon === "github" && renderTemplate`${renderComponent($$result, "IconGitHub", $$IconGitHub, { "data-astro-cid-zokcuhmf": true })}`} ${icon === "shadcn" && renderTemplate`${renderComponent($$result, "IconShadcn", $$IconShadcn, { "data-astro-cid-zokcuhmf": true })}`} ${icon === "nodejs" && renderTemplate`${renderComponent($$result, "IconNodeJs", $$IconNodeJs, { "data-astro-cid-zokcuhmf": true })}`} </i>`;
  })} </div> <div class="container-link-project" data-astro-cid-zokcuhmf> <a${addAttribute(link, "href")} target="_blank" data-astro-cid-zokcuhmf>Voir plus</a> </div> </li> `;
}, "/Users/mickaelsanchesloureiro/Desktop/Portfolio/portfolio/src/components/main/projects/Project.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section-projects" data-astro-cid-pmnxldje> <div class="linear-grandient-1" data-astro-cid-pmnxldje></div> <div class="container-projects" data-astro-cid-pmnxldje> <h2 class="title-projects" id="projets" data-astro-cid-pmnxldje>Projets</h2> <div data-astro-cid-pmnxldje> <ul class="ul-projects" data-astro-cid-pmnxldje> ${projects.map(({ description, img, link, technologies, title }) => renderTemplate`${renderComponent($$result, "Project", $$Project, { "img": img, "description": description, "link": link, "title": title, "technologies": technologies, "data-astro-cid-pmnxldje": true })}`)} </ul> </div> </div> </section> `;
}, "/Users/mickaelsanchesloureiro/Desktop/Portfolio/portfolio/src/components/main/projects/Projects.astro", void 0);

const $$Studies = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="section_studies" data-astro-cid-iiherd3g> <div class="linear-grandient-1" data-astro-cid-iiherd3g></div> <div class="content_studies" data-astro-cid-iiherd3g> <h3 class="title-studies" id="études" data-astro-cid-iiherd3g>Études</h3> <ul class="ul-studies" data-astro-cid-iiherd3g> ${studies.map(({ date, title, corporation }) => renderTemplate`<li class="li-studies" data-astro-cid-iiherd3g> <span class="circle" data-astro-cid-iiherd3g></span> <div data-astro-cid-iiherd3g> <h3 data-astro-cid-iiherd3g>${title}</h3> <p data-astro-cid-iiherd3g>${corporation}</p> <span data-astro-cid-iiherd3g>${date}</span> </div> </li>`)} </ul> </div> </section> `;
}, "/Users/mickaelsanchesloureiro/Desktop/Portfolio/portfolio/src/components/main/studies/Studies.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<section class="section-about" data-astro-cid-s7v3hz27> <div class="linear-grandient-1" data-astro-cid-s7v3hz27></div> <div class="container-about" data-astro-cid-s7v3hz27> <div class="container-text-about" data-astro-cid-s7v3hz27> <h2 class="title-about" id="\xE0propos" data-astro-cid-s7v3hz27>\xC0 propos</h2> <p data-astro-cid-s7v3hz27>
Passionn\xE9 par le d\xE9veloppement et la cr\xE9ation num\xE9rique, je m'efforce de transformer des id\xE9es innovantes en solutions tangibles. Mon expertise repose sur une forte attention aux d\xE9tails et une compr\xE9hension profonde des besoins utilisateurs. Quand je ne suis pas en train de coder, vous me trouverez en train d'explorer les merveilles de la nature, de plonger dans des univers virtuels fascinants ou de d\xE9couvrir les derni\xE8res avanc\xE9es du Web3.
</p> </div> <div class="container-svg-about" data-astro-cid-s7v3hz27> <div class="container-svg" data-astro-cid-s7v3hz27> `, ' </div> </div> </div> </section> <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"><\/script> '])), maybeRenderHead(), renderComponent($$result, "dotlottie-player", "dotlottie-player", { "src": "https://lottie.host/f3c9e52e-a06c-48b1-b558-60c53b26cbbd/MdnMx9L5PM.json", "background": "transparent", "speed": "1", "style": "width: 380px; height: 380px;", "loop": true, "autoplay": true, "data-astro-cid-s7v3hz27": true }));
}, "/Users/mickaelsanchesloureiro/Desktop/Portfolio/portfolio/src/components/main/about/About.astro", void 0);

const $$IconSolana = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <!--?xml version="1.0" encoding="utf-8"?--><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --> <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.08398 5.22265C7.17671 5.08355 7.33282 5 7.5 5H18.5C18.6844 5 18.8538 5.10149 18.9408 5.26407C19.0278 5.42665 19.0183 5.62392 18.916 5.77735L16.916 8.77735C16.8233 8.91645 16.6672 9 16.5 9H5.5C5.3156 9 5.14617 8.89851 5.05916 8.73593C4.97215 8.57335 4.98169 8.37608 5.08398 8.22265L7.08398 5.22265ZM7.76759 6L6.43426 8H16.2324L17.5657 6H7.76759Z" fill="#47495F"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.08398 15.2226C7.17671 15.0836 7.33282 15 7.5 15H18.5C18.6844 15 18.8538 15.1015 18.9408 15.2641C19.0278 15.4267 19.0183 15.6239 18.916 15.7774L16.916 18.7774C16.8233 18.9164 16.6672 19 16.5 19H5.5C5.3156 19 5.14617 18.8985 5.05916 18.7359C4.97215 18.5734 4.98169 18.3761 5.08398 18.2226L7.08398 15.2226ZM7.76759 16L6.43426 18H16.2324L17.5657 16H7.76759Z" fill="#47495F"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.08398 13.7774C7.17671 13.9164 7.33282 14 7.5 14H18.5C18.6844 14 18.8538 13.8985 18.9408 13.7359C19.0278 13.5733 19.0183 13.3761 18.916 13.2226L16.916 10.2226C16.8233 10.0836 16.6672 10 16.5 10H5.5C5.3156 10 5.14617 10.1015 5.05916 10.2641C4.97215 10.4267 4.98169 10.6239 5.08398 10.7774L7.08398 13.7774ZM7.76759 13L6.43426 11H16.2324L17.5657 13H7.76759Z" fill="#47495F"></path> </svg> </i>`;
}, "/Users/mickaelsanchesloureiro/Desktop/Portfolio/portfolio/src/icons/IconSolana.astro", void 0);

const $$IconRust = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg width="45" height="45" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"> <g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g> <g id="SVGRepo_iconCarrier"> <title>file_type_light_rust</title> <path d="M15.124,5.3a.832.832,0,1,1,.832.832h0a.831.831,0,0,1-.832-.832M5.2,12.834a.832.832,0,1,1,.832.832h0a.832.832,0,0,1-.832-.832m19.856.039a.832.832,0,1,1,.832.832.831.831,0,0,1-.832-.832h0M7.605,14.013a.76.76,0,0,0,.386-1l-.369-.835H9.074v6.545H6.144a10.247,10.247,0,0,1-.332-3.911Zm6.074.161V12.245h3.458c.179,0,1.261.206,1.261,1.016,0,.672-.83.913-1.513.913ZM8.958,24.561a.832.832,0,1,1,.832.832.831.831,0,0,1-.832-.832h0m12.331.039a.832.832,0,1,1,.832.832.832.832,0,0,1-.832-.832h0m.257-1.887a.758.758,0,0,0-.9.584l-.418,1.949a10.249,10.249,0,0,1-8.545-.041l-.417-1.949a.759.759,0,0,0-.9-.583h0l-1.721.37a10.233,10.233,0,0,1-.89-1.049h8.374c.095,0,.158-.017.158-.1V18.928c0-.086-.063-.1-.158-.1h-2.45V16.947h2.649a1.665,1.665,0,0,1,1.629,1.412c.105.413.336,1.757.494,2.187.157.483.8,1.447,1.482,1.447h4.323a10.243,10.243,0,0,1-.949,1.1Zm4.65-7.821a10.261,10.261,0,0,1,.022,1.779H25.167c-.105,0-.148.069-.148.172v.483c0,1.136-.641,1.384-1.2,1.447-.535.06-1.128-.224-1.2-.551a3.616,3.616,0,0,0-1.671-2.808c1.03-.654,2.1-1.619,2.1-2.911A3.292,3.292,0,0,0,21.44,9.8a4.559,4.559,0,0,0-2.2-.724H8.367A10.246,10.246,0,0,1,14.1,5.84l1.282,1.344a.758.758,0,0,0,1.072.026h0l1.434-1.372a10.248,10.248,0,0,1,7.015,5l-.982,2.217a.761.761,0,0,0,.386,1Zm2.448.036-.033-.343,1.011-.943a.42.42,0,0,0-.013-.595.428.428,0,0,0-.121-.081L28.2,12.483l-.1-.334.806-1.12a.422.422,0,0,0-.13-.581.43.43,0,0,0-.133-.055l-1.363-.222-.164-.306.573-1.257a.419.419,0,0,0-.236-.544.426.426,0,0,0-.146-.029l-1.383.048L25.7,7.819l.318-1.347a.421.421,0,0,0-.343-.487.435.435,0,0,0-.144,0L24.183,6.3l-.266-.219L23.966,4.7a.421.421,0,0,0-.431-.411.426.426,0,0,0-.141.028l-1.257.573-.306-.164-.222-1.363a.421.421,0,0,0-.5-.318.43.43,0,0,0-.133.055l-1.121.806-.333-.1-.483-1.293a.421.421,0,0,0-.555-.215.442.442,0,0,0-.12.08L17.418,3.39l-.343-.033L16.347,2.18a.421.421,0,0,0-.688,0l-.728,1.177-.343.033-.943-1.012a.421.421,0,0,0-.595.015.442.442,0,0,0-.08.12L12.483,3.8l-.333.1-1.12-.8a.422.422,0,0,0-.581.13.43.43,0,0,0-.055.133l-.222,1.363-.306.164L8.608,4.317a.421.421,0,0,0-.544.239.444.444,0,0,0-.028.144l.048,1.383L7.818,6.3,6.471,5.984a.421.421,0,0,0-.487.343.435.435,0,0,0,0,.144L6.3,7.819l-.218.265L4.7,8.036a.422.422,0,0,0-.383.573L4.89,9.866l-.164.306-1.363.222a.42.42,0,0,0-.318.5.43.43,0,0,0,.055.133l.806,1.12-.1.334-1.293.483a.421.421,0,0,0-.215.555.414.414,0,0,0,.081.121l1.011.943-.033.343-1.177.728a.421.421,0,0,0,0,.688l1.177.728.033.343-1.011.943a.421.421,0,0,0,.015.595.436.436,0,0,0,.119.08l1.293.483.1.334L3.1,20.972a.421.421,0,0,0,.131.581.43.43,0,0,0,.133.055l1.363.222.164.307-.573,1.257a.422.422,0,0,0,.24.545.438.438,0,0,0,.143.028l1.383-.048.219.266-.317,1.348a.42.42,0,0,0,.341.486.4.4,0,0,0,.146,0L7.818,25.7l.266.218L8.035,27.3a.419.419,0,0,0,.429.41.413.413,0,0,0,.143-.028l1.257-.573.306.164.222,1.362a.421.421,0,0,0,.5.319.407.407,0,0,0,.133-.055l1.12-.807.334.1.483,1.292a.422.422,0,0,0,.556.214.436.436,0,0,0,.119-.08l.943-1.011.343.034.728,1.177a.422.422,0,0,0,.588.1.413.413,0,0,0,.1-.1l.728-1.177.343-.034.943,1.011a.421.421,0,0,0,.595-.015.436.436,0,0,0,.08-.119l.483-1.292.334-.1,1.12.807a.421.421,0,0,0,.581-.131.43.43,0,0,0,.055-.133l.222-1.362.306-.164,1.257.573a.421.421,0,0,0,.544-.239.438.438,0,0,0,.028-.143l-.048-1.384.265-.218,1.347.317a.421.421,0,0,0,.487-.34.447.447,0,0,0,0-.146L25.7,24.183l.218-.266,1.383.048a.421.421,0,0,0,.41-.431.4.4,0,0,0-.028-.142l-.573-1.257.164-.307,1.363-.222a.421.421,0,0,0,.319-.5.434.434,0,0,0-.056-.135l-.806-1.12.1-.334,1.293-.483a.42.42,0,0,0,.215-.554.414.414,0,0,0-.081-.121l-1.011-.943.033-.343,1.177-.728a.421.421,0,0,0,0-.688Z" style="fill:#ffffff"></path> </g> </svg> </i>`;
}, "/Users/mickaelsanchesloureiro/Desktop/Portfolio/portfolio/src/icons/IconRust.astro", void 0);

const $$IconAnchor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<i> <svg fill="#ffffff" width="45" height="45" viewBox="-1.6 -1.6 19.20 19.20" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00016"> <g id="SVGRepo_bgCarrier" stroke-width="0"> <rect x="-1.6" y="-1.6" width="19.20" height="19.20" rx="9.6" fill="#1a44f7" stroke-width="0"></rect> </g> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g> <g id="SVGRepo_iconCarrier"> <path d="M7 5.829A3.004 3.004 0 0 1 5 3c0-1.657 1.347-3 3-3 1.657 0 3 1.347 3 3a3.003 3.003 0 0 1-2 2.829v8.088A6.016 6.016 0 0 0 13.658 10H13V8h3v2h-.253A8.017 8.017 0 0 1 9 15.938V16H7v-.062A8.016 8.016 0 0 1 .253 10H0V8h3v2h-.658A6.015 6.015 0 0 0 7 13.917V5.829zM7 2v2h2V2H7z" fill-rule="evenodd"></path> </g> </svg> </i>`;
}, "/Users/mickaelsanchesloureiro/Desktop/Portfolio/portfolio/src/icons/IconAnchor.astro", void 0);

const $$Astro$1 = createAstro();
const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Skills;
  return renderTemplate`${maybeRenderHead()}<section class="section-skill" data-astro-cid-y3b77nrg> <div class="linear-grandient-1" data-astro-cid-y3b77nrg></div> <div class="container-skill" data-astro-cid-y3b77nrg> <h2 class="title-skills" id="hardskills" data-astro-cid-y3b77nrg>Hard Skills</h2> <ul class="ul-skill" data-astro-cid-y3b77nrg> ${skills.map(({ icon, title }) => {
    return renderTemplate`<li class="li-skills" data-astro-cid-y3b77nrg> ${icon === "html" && renderTemplate`${renderComponent($$result, "IconHtml", $$IconHtml, { "data-astro-cid-y3b77nrg": true })}`} ${icon === "css" && renderTemplate`${renderComponent($$result, "IconCss", $$IconCss, { "data-astro-cid-y3b77nrg": true })}`} ${icon === "javaScript" && renderTemplate`${renderComponent($$result, "IconJavaScript", $$IconJavaScript, { "data-astro-cid-y3b77nrg": true })}`} ${icon === "react" && renderTemplate`${renderComponent($$result, "IconReact", $$IconReact, { "data-astro-cid-y3b77nrg": true })}`} ${icon === "astro" && renderTemplate`${renderComponent($$result, "IconAstro", $$IconAstro, { "data-astro-cid-y3b77nrg": true })}`} ${icon === "tailwind" && renderTemplate`${renderComponent($$result, "IconTailwind", $$IconTailwind, { "data-astro-cid-y3b77nrg": true })}`} ${icon === "typeScript" && renderTemplate`${renderComponent($$result, "IconTypeScript", $$IconTypeScript, { "data-astro-cid-y3b77nrg": true })}`} ${icon === "git" && renderTemplate`${renderComponent($$result, "IconGit", $$IconGit, { "data-astro-cid-y3b77nrg": true })}`} ${icon === "github" && renderTemplate`${renderComponent($$result, "IconGitHub", $$IconGitHub, { "data-astro-cid-y3b77nrg": true })}`} ${icon === "shadcn" && renderTemplate`${renderComponent($$result, "IconShadcn", $$IconShadcn, { "data-astro-cid-y3b77nrg": true })}`} ${icon === "nodejs" && renderTemplate`${renderComponent($$result, "IconNodeJs", $$IconNodeJs, { "data-astro-cid-y3b77nrg": true })}`} ${icon === "solana" && renderTemplate`${renderComponent($$result, "IconSolana", $$IconSolana, { "data-astro-cid-y3b77nrg": true })}`} ${icon === "rust" && renderTemplate`${renderComponent($$result, "IconRust", $$IconRust, { "data-astro-cid-y3b77nrg": true })}`} ${icon === "anchor" && renderTemplate`${renderComponent($$result, "IconAnchor", $$IconAnchor, { "data-astro-cid-y3b77nrg": true })}`} <p class="p-skill" data-astro-cid-y3b77nrg>${title}</p> </li>`;
  })} </ul> </div> </section> `;
}, "/Users/mickaelsanchesloureiro/Desktop/Portfolio/portfolio/src/components/main/skills/Skills.astro", void 0);

const photoprofil = new Proxy({"src":"/_astro/Photo-CV.CUxKovuk.webp","width":1414,"height":2000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/mickaelsanchesloureiro/Desktop/Portfolio/portfolio/public/Photo-CV.webp";
							}
							
							return target[name];
						}
					});

const $$Home = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="content-presentation" data-astro-cid-q5kz5pjk> <div class="linear-gradient-2" data-astro-cid-q5kz5pjk></div> <div class="linear-gradient-1" data-astro-cid-q5kz5pjk></div> <dir class="container-persentation" data-astro-cid-q5kz5pjk> <div class="container-text" data-astro-cid-q5kz5pjk> <h2 class="text-name" data-astro-cid-q5kz5pjk>Mickael Sanches Loureiro</h2> <div class="container-profession" data-astro-cid-q5kz5pjk> <div data-astro-cid-q5kz5pjk> <span class="p-profession" data-astro-cid-q5kz5pjk>D</span> <span class="p-profession" data-astro-cid-q5kz5pjk>é</span> <span class="p-profession" data-astro-cid-q5kz5pjk>v</span> <span class="p-profession" data-astro-cid-q5kz5pjk>e</span> <span class="p-profession" data-astro-cid-q5kz5pjk>l</span> <span class="p-profession" data-astro-cid-q5kz5pjk>o</span> <span class="p-profession" data-astro-cid-q5kz5pjk>p</span> <span class="p-profession" data-astro-cid-q5kz5pjk>p</span> <span class="p-profession" data-astro-cid-q5kz5pjk>e</span> <span class="p-profession" data-astro-cid-q5kz5pjk>u</span> <span class="p-profession" data-astro-cid-q5kz5pjk>r</span> <span class="" data-astro-cid-q5kz5pjk>&nbsp;</span> </div> <div class="" data-astro-cid-q5kz5pjk> <span class="p-profession" data-astro-cid-q5kz5pjk>F</span> <span class="p-profession" data-astro-cid-q5kz5pjk>u</span> <span class="p-profession" data-astro-cid-q5kz5pjk>l</span> <span class="p-profession" data-astro-cid-q5kz5pjk>l</span> <span class="p-profession" data-astro-cid-q5kz5pjk>l</span> <span class="p-profession" data-astro-cid-q5kz5pjk>s</span> <span class="p-profession" data-astro-cid-q5kz5pjk>t</span> <span class="p-profession" data-astro-cid-q5kz5pjk>a</span> <span class="p-profession" data-astro-cid-q5kz5pjk>c</span> <span class="p-profession" data-astro-cid-q5kz5pjk>k</span> <span class="" data-astro-cid-q5kz5pjk>&nbsp;</span> <span class="p-profession" data-astro-cid-q5kz5pjk>&</span> <span class="" data-astro-cid-q5kz5pjk>&nbsp;</span> <span class="p-profession" data-astro-cid-q5kz5pjk>W</span> <span class="p-profession" data-astro-cid-q5kz5pjk>e</span> <span class="p-profession" data-astro-cid-q5kz5pjk>b</span> <span class="p-profession" data-astro-cid-q5kz5pjk>3</span> </div> </div>
Fort de mon expertise en développement et de mon souci constant du détail, je crée des solutions innovantes qui placent les utilisateurs au cœur de la conception. En dehors de mon travail, je suis passionné par la nature, les jeux vidéo, et l'univers en pleine évolution du Web3.
<div class="container-curriculum" data-astro-cid-q5kz5pjk> <a href="https://wa.me/+33763680304" target="_blank" class="a-action" data-astro-cid-q5kz5pjk>Me Contacter</a> <a href="https://drive.google.com/file/d/1X5V1-8Yy5oq-wj35xLsHpmJmlDnGQyWo/view?usp=drive_link" class="a-curriculum" target="_blank" data-astro-cid-q5kz5pjk>Curriculum Français</a> <a href="https://drive.google.com/file/d/1wlYIybiBKxIAaFdioOsFdubZHlAInQiw/view?usp=drive_link" class="a-curriculum" target="_blank" data-astro-cid-q5kz5pjk>English Curriculum</a> </div> <div class="container-social" data-astro-cid-q5kz5pjk> <p class="" data-astro-cid-q5kz5pjk>Mes réseaux</p> <a href="https://github.com/MickaelSanches" target="_blank" data-astro-cid-q5kz5pjk> <li class="li-social" data-astro-cid-q5kz5pjk> <i class="fa-brands fa-github" data-astro-cid-q5kz5pjk></i> </li> </a> <a href="https://www.linkedin.com/in/mickael-sanches-loureiro" target="_blank" data-astro-cid-q5kz5pjk> <li class="li-social" data-astro-cid-q5kz5pjk> <i class="fa-brands fa-linkedin" data-astro-cid-q5kz5pjk></i> </li> </a> </div> </div> <div class="container-photo-profile" data-astro-cid-q5kz5pjk> <div class="photo-profil" data-astro-cid-q5kz5pjk> <picture data-astro-cid-q5kz5pjk> ${renderComponent($$result, "Image", $$Image, { "src": photoprofil, "alt": "Mickael Sanches Loureiro", "id": "inicio", "data-astro-cid-q5kz5pjk": true })} </picture> </div> </div> </dir> </div>  `;
}, "/Users/mickaelsanchesloureiro/Desktop/Portfolio/portfolio/src/components/main/home/Home.astro", void 0);

const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main> <div class="container_p"> ${renderComponent($$result, "Home", $$Home, {})} ${renderComponent($$result, "Projects", $$Projects, {})} ${renderComponent($$result, "Skills", $$Skills, {})} ${renderComponent($$result, "Studies", $$Studies, {})} ${renderComponent($$result, "About", $$About, {})} </div> </main>`;
}, "/Users/mickaelsanchesloureiro/Desktop/Portfolio/portfolio/src/components/main/main.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-dwl4onjj> <section class="section-footer" data-astro-cid-dwl4onjj> <div class="linear-grandient-1" data-astro-cid-dwl4onjj></div> <div class="container-footer" data-astro-cid-dwl4onjj> <h2 class="title-contact" id="contact" data-astro-cid-dwl4onjj>Contact</h2> <div class="container-redes" data-astro-cid-dwl4onjj> <a href="https://wa.me/+33763680304" target="_blank" data-astro-cid-dwl4onjj> <li class="li-contact" data-astro-cid-dwl4onjj> <i class="fa-brands fa-whatsapp icon-whatsapp" data-astro-cid-dwl4onjj></i> <p data-astro-cid-dwl4onjj>Whatsapp</p> </li> </a> <a href="https://github.com/MickaelSanches" target="_blank" data-astro-cid-dwl4onjj> <li class="li-contact" data-astro-cid-dwl4onjj> <i class="fa-brands fa-github" data-astro-cid-dwl4onjj></i> <p data-astro-cid-dwl4onjj>Github</p> </li> </a> <!-- <a href="https://www.instagram.com/osnaider_m19/" target="_blank">
          <li class="li-contact">
            <i class="fa-brands fa-instagram"></i>
            <p>Instagram</p>
          </li>
        </a> !--> <a href="https://www.linkedin.com/in/mickael-sanches-loureiro/" target="_blank" data-astro-cid-dwl4onjj> <li class="li-contact" data-astro-cid-dwl4onjj> <i class="fa-brands fa-linkedin" data-astro-cid-dwl4onjj></i> <p data-astro-cid-dwl4onjj>Linkedin</p> </li> </a> </div> </div> </section> </footer> `;
}, "/Users/mickaelsanchesloureiro/Desktop/Portfolio/portfolio/src/components/footer/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(['<html lang="fr"> <head><meta charset="utf-8"><link rel="icon" type="image/png" href="/LogoMike.webp"><meta name="viewport" content="width=device-width"><meta name="generator"', '><meta name="description" content="Mickael Sanches Loureiro D\xE9veloppeur FullStack."><meta name="robots" content="index, follow"><meta name="google-site-verification" content="JI3xFvrdaIQN21J9oVJx6GgMX2tg7-TNXoOBtArVVLo"><meta property="og:type" content="website"><meta property="og:url" content="https://mickaelsanchesloureiro.netlify.app/"><meta property="og:site_name" content="Mickael Sanches Loureiro"><meta property="og:title" content="Mickael Sanches Loureiro Portfolio"><script src="https://kit.fontawesome.com/2898a0ac51.js" crossorigin="anonymous"><\/script><title>Portfolio | Mickael Sanches Loureiro</title>', "</head> <body> ", " ", " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "Main", $$Main, {}), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/mickaelsanchesloureiro/Desktop/Portfolio/portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/mickaelsanchesloureiro/Desktop/Portfolio/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
