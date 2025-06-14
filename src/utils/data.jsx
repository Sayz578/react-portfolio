import behance from '../assets/behance.png';
import slack from '../assets/slack.png';
import dribbble from '../assets/dribbble.png';
import twilio from '../assets/twilio.png';
import github from '../assets/github.png';
import { FaPenToSquare, FaChartLine, FaChartSimple } from "react-icons/fa6";
import { AiOutlineProduct } from "react-icons/ai";
import portfolio1 from "../assets/portfolio1.jpg"
import portfolio2 from "../assets/portfolio2.jpg"
import portfolio3 from "../assets/portfolio3.jpg"

export const navItems = [
  { link: "/home", label: "home" },
  { link: "/about", label: "about" },
  { link: "/service", label: "service" },
  { link: "/portfolio", label: "portfolio" },
];


export const services = [
  {
    title: "UI/UX Design",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco",
    icon: <FaPenToSquare/>
  },
  {
    title: "Product Design",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco",
    icon: <AiOutlineProduct/>
  },
  {
    title: "Brand Identity",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco",
    icon: <FaChartSimple/>
  },
  {
    title: "Graphic Design",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco",
    icon: <FaChartLine/>
  }
];




export const partners = [
  { src: behance, alt: 'behance' },
  { src: slack, alt: 'slack' },
  { src: dribbble, alt: 'dribbble' },
  { src: twilio, alt: 'twilio' },
  { src: github, alt: 'github' },
];

export const contactInfo = [
  {
    type: 'phone',
    title: 'Phone',
    value: '(219) 555-0114',
  },
  {
    type: 'email',
    title: 'Email',
    value: 'robertfox@example.com',
  },
  {
    type: 'address',
    title: 'Address',
    value: '4517 Washington Ave. Manchester, Kentucky 39495',
  },
];

export const portfolioFilters = [
  { id: 'all', label: 'ALL' },
  { id: 'uiux', label: 'UI/UX DESIGN' },
  { id: 'product', label: 'PRODUCT DESIGN' },
  { id: 'branding', label: 'BRANDING' },
  { id: 'web', label: 'WEB DESIGN' },
];

export const portfolioSlides = [
  {
    id: 1,
    image: portfolio1,
    title: 'MOBILE DESIGN',
    subtitle: 'UI/UX Design',
  },
  {
    id: 2,
    image: portfolio2,
    title: 'MOBILE DESIGN',
    subtitle: 'UI/UX Design',
  },
  {
    id: 3,
    image: portfolio3,
    title: 'MOBILE DESIGN',
    subtitle: 'UI/UX Design',
  },
  {
    id: 4,
    image: portfolio2,
    title: 'MOBILE DESIGN',
    subtitle: 'UI/UX Design',
  },
];