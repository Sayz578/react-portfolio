import { FaPenToSquare, FaChartLine, FaChartSimple } from "react-icons/fa6";
import { AiOutlineProduct } from "react-icons/ai";
import portfolio1 from "../assets/portfolio1.jpg"
import portfolio2 from "../assets/portfolio2.jpg"
import portfolio3 from "../assets/portfolio3.jpg"
import testimonial from "../assets/testimonial.jpg"
import { chargebee, instagram, linkedin, mapbox, udemy, webflow, yahoo, zendesk,behance,slack,dribbble,twilio,github } from '../assets/images';

export const navItems = [
  { link: "/", label: "home" },
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


export const testimonialSlides = [
  {
    id: 1,
    image: testimonial,
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    name: 'Esther Howard',
    job: 'CEO of Adebe',
  },
  {
    id: 2,
    image: testimonial,
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    name: 'Esther Howard',
    job: 'CEO of Adebe',
  },
  {
    id: 3,
    image: testimonial,
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    name: 'Esther Howard',
    job: 'CEO of Adebe',
  },
  {
    id: 4,
    image: testimonial,
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    name: 'Esther Howard',
    job: 'CEO of Adebe',
  },
  {
    id: 5,
    image: testimonial,
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    name: 'Esther Howard',
    job: 'CEO of Adebe',
  },
];


export const skills = [
  {
    name: "UI/UX Design",
    levelClass: "ui-level", // класс для стилизации уровня
    percent: "90%",
  },
  {
    name: "Front End Developer",
    levelClass: "fr-level",
    percent: "85%",
  },
  {
    name: "Graphic Design",
    levelClass: "gr-level",
    percent: "70%",
  },
  {
    name: "Product Design",
    levelClass: "pr-level",
    percent: "65%",
  },
];

export const experiences = [
  {
    id: 'linkedin',                // уникальный id — нужен для key в map
    logo: linkedin,                // импортированная картинка (string -> путь после сборки)
    company: 'LinkedIn',           // название компании (для alt и/или текста)
    job: 'Lead Web Developer',     // должность
    period: '2016-2020',           // годы
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco',
    number: '01',                  // номер — отображается «01», «02»...
    extraClass: ''                 // дополнительный класс (например 'block-yahoo')
  },
  {
    id: 'yahoo',
    logo: yahoo,
    company: 'Yahoo',
    job: 'Lead Web Developer',
    period: '2016-2020',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco',
    number: '02',
    extraClass: 'block-yahoo'
  },
  {
    id: 'zendesk',
    logo: zendesk,
    company: 'Zendesk',
    job: 'Lead Web Developer',
    period: '2016-2020',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco',
    number: '03',
    extraClass: 'block-zen'
  },
  {
    id: 'webflow',
    logo: webflow,
    company: 'Webflow',
    job: 'Lead Web Developer',
    period: '2016-2020',
    description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Vuis enim velit ullamco',
    number: '04',
    extraClass: 'block-web'
  },
];


export const partnersImg = [
  { id: 1, name: "behance", image: behance },
  { id: 2, name: "slack", image: slack },
  { id: 3, name: "dribbble", image: dribbble },
  { id: 4, name: "twilio", image: twilio },
  { id: 5, name: "github", image: github },
  { id: 6, name: "chargebee", image: chargebee },
  { id: 7, name: "udemy", image: udemy },
  { id: 8, name: "instagram", image: instagram },
  { id: 9, name: "mapbox", image: mapbox },
];

export const faqData = [
  {
    id: 1,
    question: "Where Can I Find More Information?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 2,
    question: "What Kinds of Payment Do You Accept?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 3,
    question: "What Are Your Terms and Conditions?",
    answer:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];