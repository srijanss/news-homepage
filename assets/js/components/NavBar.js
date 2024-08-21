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
              <slot name="home-link"></slot>
            </li>
            <li>
              <slot name="new-link"></slot>
            </li>
            <li>
              <slot name="popular-link"></slot>
            </li>
            <li>
              <slot name="trending-link"></slot>
            </li>
            <li>
              <slot name="categories-link"></slot>
            </li>
          </ul>
        </div>
      </nav>
    `;
  }

  handleEvents() {
    const hamburgerIcon = this.shadow.getElementById("hamburger-icon");
    const closeIcon = this.shadow.getElementById("close-icon");
    const menu = this.shadow.getElementById("menu");

    hamburgerIcon.addEventListener("click", () => {
      menu.classList.add("open");
      hamburgerIcon.setAttribute("aria-expanded", "true");
      closeIcon.setAttribute("aria-expanded", "true");
    });

    closeIcon.addEventListener("click", () => {
      menu.classList.remove("open");
      hamburgerIcon.setAttribute("aria-expanded", "false");
      closeIcon.setAttribute("aria-expanded", "false");
    });
  }
}
