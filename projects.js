/* ==========================================================
   PROJECT DATABASE  -  edit this file to add or change projects.
   Leave a value as "" to show "Details to be added".
   Images: put files in assets/projects/project-XX/ and list them below.
   ========================================================== */

// Filter buttons. Add or remove names here; a project shows under a filter
// when that name appears in its "categories" list.
const CATEGORIES = ["Residential", "Commercial", "Kitchen", "Farmhouse", "Sustainable", "Concept Design", "3D Visualization"];

const projects = [
  {
    id: 1,
    title: "Sustainable & Eco-Friendly Interior Design",
    categories: ["Sustainable"],
    location: "", year: "", area: "",
    concept: "",
    description: "An interior design study focused on sustainable, eco-friendly choices.",
    folder: "assets/projects/project-01/",
    coverImage: "assets/projects/project-01/cover.jpg",
    images: ["image-01.jpg", "image-02.jpg", "image-03.jpg", "image-04.jpg"],
    software: []
  },
  {
    id: 2,
    title: "Farmhouse Interior Design",
    categories: ["Farmhouse", "Residential"],
    location: "", year: "", area: "",
    concept: "",
    description: "Interior design for a farmhouse.",
    coverImage: "assets/projects/project-02/cover.jpg",
    images: ["image-01.jpg", "image-02.jpg", "image-03.jpg"],
    software: []
  },
  {
    id: 3,
    title: "Modern / Rustic Theme - Concept Design",
    categories: ["Concept Design"],
    location: "", year: "", area: "",
    concept: "A concept exploring a modern and rustic theme.",
    description: "Concept design combining modern and rustic themes.",
    coverImage: "assets/projects/project-03/cover.jpg",
    images: ["image-01.jpg", "image-02.jpg"],
    software: []
  },
  {
    id: 4,
    title: "Kitchen Design & Kitchen Work Triangle",
    categories: ["Kitchen"],
    location: "", year: "", area: "",
    concept: "Kitchen planning around the work triangle.",
    description: "Kitchen design and layout based on the kitchen work triangle.",
    coverImage: "assets/projects/project-04/cover.jpg",
    images: ["image-01.jpg", "image-02.jpg"],
    software: []
  },
  {
    id: 5,
    title: "Commercial Interior Projects",
    categories: ["Commercial"],
    commercialTypes: ["Office", "Store", "Supermarket"],
    location: "", year: "", area: "",
    concept: "",
    description: "Commercial interiors including office, store and supermarket.",
    coverImage: "assets/projects/project-05/cover.jpg",
    images: ["image-01.jpg", "image-02.jpg"],
    software: []
  }
];

// Which projects appear in "Selected Works" (by id). Use [] to show all.
const FEATURED_IDS = [1, 2, 3, 4, 5];
