import { FaShoppingCart, FaPlane, FaBrain } from "react-icons/fa";
import BlueFly from "../assets/blue.png";
import Myntra from "../assets/myntaclone.png";
import Travel from "../assets/Travel.png";
import ScorEazy from "../assets/ScorEazy.png";

const projects = [
  {
    id: 1,
    name: "Myntra Clone",
    description: "A comprehensive e-commerce platform with advanced features including secure authentication, intelligent product filtering, responsive design, and seamless shopping experience.",
    fullDescription: "Built with React and Node.js, this full-stack application includes user authentication, product management, cart functionality, and payment integration.",
    stack: ["React", "JavaScript", "HTML5", "CSS3", "Node.js", "Express.js", "MongoDB", "RESTful APIs"],
    link: "https://myntra-frontend-henna.vercel.app/",
    github: "https://github.com/callmeprinceyadav",
    image: Myntra,
    category: "E-commerce",
    icon: FaShoppingCart,
    color: "from-pink-500 to-rose-500",
    featured: true,
    status: "Completed",
    year: "2024"
  },
  {
    id: 2,
    name: "BlueFly Fashion",
    description: "An elegant fashion e-commerce platform with smooth animations, intuitive product browsing, secure authentication, and premium shopping experience.",
    fullDescription: "A modern e-commerce solution focusing on user experience with smooth transitions, advanced search, and responsive design.",
    stack: ["React", "JavaScript", "Express.js", "MongoDB", "Node.js"],
    link: "https://bluefly-check.netlify.app",
    github: "https://github.com/callmeprinceyadav",
    image: BlueFly,
    category: "E-commerce",
    icon: FaShoppingCart,
    color: "from-blue-500 to-indigo-500",
    featured: false,
    status: "Completed",
    year: "2024"
  },
  {
    id: 3,
    name: "Travel Booking Platform",
    description: "A comprehensive travel booking solution that enables users to discover, compare, and book tours with an intuitive interface and seamless user experience.",
    fullDescription: "Full-featured travel platform with booking management, tour comparisons, user reviews, and integrated payment processing.",
    stack: ["React", "JavaScript", "Express.js", "MongoDB", "Node.js"],
    link: "https://travel-masai.netlify.app/",
    github: "https://github.com/callmeprinceyadav",
    image: Travel,
    category: "Travel",
    icon: FaPlane,
    color: "from-emerald-500 to-teal-500",
    featured: true,
    status: "Completed",
    year: "2025"
  },
  {
    id: 4,
    name: "ScorEazy Learning",
    description: "An innovative AI-powered educational platform that combines educational psychology with personalized, engaging lessons designed specifically for young learners.",
    fullDescription: "Revolutionary learning platform using AI to create personalized educational experiences with gamification and progress tracking.",
    stack: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
    link: "https://scoreazy-assign.netlify.app/",
    github: "https://github.com/callmeprinceyadav",
    image: ScorEazy,
    category: "Education",
    icon: FaBrain,
    color: "from-purple-500 to-pink-500",
    featured: false,
    status: "Completed",
    year: "2025"
  }
];

export default projects;
