export interface Project {
  id: number;
  title: string;
  description: string;
  caseStudyLink: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
}

import wishlistImage from '../assets/images/wishlist.png';
import oasisImage from '../assets/images/oasis.png';
import kiranaImage from '../assets/images/kirana-store.png';
import dronezoneImage from '../assets/images/dronezone.png';

export const projects: Project[] = [
  {
    id: 1,
    title: "Wishlist User Onboarding Flow Revamped",
    description: "Revamped the Wishlist platform onboarding journey to reduce the drop off and increased the onboarding completion rate from 29% to 74%.",
    caseStudyLink: "#",
    image: wishlistImage,
    imageWidth: 314,
    imageHeight: 165
  },
  {
    id: 2,
    title: "OASIS - An AI Powered Mental Wellness Platform",
    description: "A complete case study of creating OASIS, an AI powered mental wellness platform which is emotionally intelligent and capable of guiding users with a personalised self-care journey.",
    caseStudyLink: "#",
    image: oasisImage,
    imageWidth: 206,
    imageHeight: 206
  },
  {
    id: 3,
    title: "What if my local kirana just had WhatsApp?",
    description: "A conversational UX case study on designing a grocery-buying experience with local vendors via WhatsApp.",
    caseStudyLink: "#",
    image: kiranaImage,
    imageWidth: 216,
    imageHeight: 283
  },
  {
    id: 4,
    title: "DroneZone Sales Dashboard Design",
    description: "DroneZone is an e-commerce marketplace for drone parts and hardware. This is project to develop a dashboard for the backend operations for the order execution.",
    caseStudyLink: "#",
    image: dronezoneImage,
    imageWidth: 243,
    imageHeight: 190
  }
];
