import css from "./NavBar.css?inline";
import CloseIcon from "../../images/icon-menu-close.svg";
import HamburguerIcon from "../../images/icon-menu.svg";

export default class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();

    this.hamburgerIcon = this.shadow.getElementById("hamburger-icon");
    this.closeIcon = this.shadow.getElementById("close-icon");
    this.menu = this.shadow.getElementById("menu");
    this.linkList = this.shadow.querySelectorAll("nav a");

    this.setFocusableElements();
    this.handleEvents();
  }

  render() {
    this.shadow.innerHTML = `
      <style>
        ${css}
      </style>
      <button id="hamburger-icon" aria-expanded="false" aria-controls="menu">
        <img src="${HamburguerIcon}" alt="Menu" width="40" height="17" />
      </button>
      <nav id="menu" aria-label="Primary">
        <div class="overlay"></div>
        <div id="menu-content">
          <button id="close-icon" aria-expanded="false" aria-controls="menu">
            <img src="${CloseIcon}" alt="Close Menu" />
          </button>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#new-heading"> New </a>
            </li>
            <li>
              <a href="#popular"> Popular </a>
            </li>
            <li>
              <a href="#"> Trending </a>
            </li>
            <li>
              <a href="#"> Categories </a>
            </li>
          </ul>
        </div>
      </nav>
    `;
  }

  openMenu() {
    this.menu.classList.add("open");
    this.addFocusToMenuItems();
  }

  closeMenu() {
    this.menu.classList.remove("open");
    this.removeFocusFromMenuItems();
  }

  addFocusToMenuItems() {
    this.hamburgerIcon.setAttribute("aria-expanded", "true");
    this.hamburgerIcon.setAttribute("aria-hidden", "true");
    this.closeIcon.setAttribute("aria-expanded", "true");
    this.closeIcon.setAttribute("aria-hidden", "false");
    this.closeIcon.setAttribute("tabindex", "0");
    Array.from(this.linkList).forEach((link) => {
      link.setAttribute("tabindex", "0");
      link.setAttribute("aria-hidden", "false");
    });
  }

  removeFocusFromMenuItems() {
    this.hamburgerIcon.setAttribute("aria-expanded", "false");
    this.hamburgerIcon.setAttribute("aria-hidden", "false");
    this.closeIcon.setAttribute("aria-expanded", "false");
    this.closeIcon.setAttribute("aria-hidden", "true");
    this.closeIcon.setAttribute("tabindex", "-1");
    Array.from(this.linkList).forEach((link) => {
      link.setAttribute("tabindex", "-1");
      link.setAttribute("aria-hidden", "true");
    });
  }

  setFocusableElements() {
    const hamburgerIconVisible = getComputedStyle(this.hamburgerIcon).display;
    if (hamburgerIconVisible !== "none") {
      this.removeFocusFromMenuItems();
    } else {
      this.addFocusToMenuItems();
    }
  }

  handleEvents() {
    this.hamburgerIcon.addEventListener("click", () => {
      this.openMenu();
    });

    this.closeIcon.addEventListener("click", () => {
      this.closeMenu();
    });
  }
}
