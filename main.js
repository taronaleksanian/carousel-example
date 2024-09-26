import { CaseStudyCarousel } from "./js/CaseStudyCarousel";
import "./styles/style.scss";

const caseStudyCarousel = new CaseStudyCarousel({
  containerSelector: ".caseStudy__carousel",
  initialSlide: 4,
  control: {
    prevSelector: ".carouselControl__prev",
    nextSelector: ".carouselControl__next",
  },
});
caseStudyCarousel.build();
