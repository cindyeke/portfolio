import "../public/assets/scss/styles.scss";
import "./theme";
import "./drag-to-scroll";
import "./navigation";
import "./nav-url-hash";
import pdfFile from "../public/assets/file/CINDY EKE - CV.pdf";

const body = document.getElementsByTagName("BODY")[0];
body.style.overflow = "hidden";

const resume = document.querySelector("[data-resume]");
resume.href = pdfFile;
