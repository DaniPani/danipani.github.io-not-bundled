import {LitElement, html} from '@polymer/lit-element';

//TODO: Icon

import '@bit/danipani.projects.components.scroll-down'
import '@bit/danipani.projects.components.social-button'
import '@bit/danipani.projects.components.button-3d'

class daniPani extends LitElement {

    async _firstRendered(){
        this.jump = await import('../node_modules/jump.js/dist/jump.module.js')
        this.jump = this.jump.default
    }

    async _fetchImage(url){
        let response = await fetch(url)
        let blob = await response.blob()
        return `url(${URL.createObjectURL(blob)})`
    }
    _render() {
      return html`
        <style>
          :host {
            --hero-font-size: 5.4em;
            --container-padding: 5em;
            --title-font: 3em;
            --subtitle-font: 2.5em;
            --background-attachment: fixed;
            --btn-3d-background-color: #e74c3c;
            --btn-3d-box-shadow-color: #CE3323
        }
        @media all and (max-width: 30em) {
            :host {
                --container-padding: 1.5em;
                --title-font: 2.5em;
                --subtitle-font: 1.5em;
                --background-attachment: scroll;
                --hero-font-size: 2.5em 
            }
        }
        section {
            width: 100%;
            margin: 0;
        }
        .hero {
            height: 100vh;
            position: relative;
            background: mediumpurple;
            background: ${this._fetchImage('src/image/abstract-wallpaper-47342-48869-hd-wallpapers.jpg')};
            background-attachment: var(--background-attachment);
            background-size: cover;
        }
        .hero-content {
            font-size: var(--hero-font-size);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
        }
        .parallax {
            height: 50vh;
            position: relative;
            background: grey;
            background: ${this._fetchImage('src/image/abstract-wallpaper-1442844111BON.jpg')};
            background-size: cover;
            background-repeat: no-repeat;
        }
        .parallax-content {
            font-size: var(--title-font);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
        }
        .gradient {
            background: #DAE2F8;
            background: -webkit-linear-gradient(to right, #D6A4A4, #DAE2F8);
            background: linear-gradient(to right, #D6A4A4, #DAE2F8);
            padding-top: 20px 
        }
        .container {
            padding-top: var(--container-padding);
            padding-right: var(--container-padding);
            padding-left: var(--container-padding);
        }
        .left {
            text-align: left;
        }
        .center {
            text-align: center;
        }
        .title {
            font-size: var(--title-font) 
        }
        .subtitle {
            font-size: var(--subtitle-font) 
        }
        .white {
            color: #fff 
        }
        .shadow {
            text-shadow: 6px 4px 1px black;
        }
        social-button {
            margin-top: 5vh 
        }
        </style>
        <section class="hero">
            <div class="hero-content">
            <h1>"Hi, I'm Daniel..."</h1>
            </div>
            <scroll-down on-click="${e => this.jump(this.shadowRoot.querySelector('.parallax'))}"></scroll-down>
        </section>
        <section class="parallax fixed">
          <div class="parallax-content">
            <h1 class="shadow white">And I love coding</h1>
          </div>
        </section>
        <section>
          <div class="container center">
            <h1 class="left title">But... What do I know?</h1>
            <ul class="left subtitle">
              <li>Javascript (ES8), NodeJS, HTML5, VueJS, CSS3, Python...</li>
              <li>In the past: Java Android, Visual Basic, C#</li>
            </ul>
            <button-3d href="mailto:panero.daniel@gmail.com">CONTACT ME!</button-3d>
          </div>
        </section>
        <section class="gradient">            
          <social-button></social-button>
        </section
      `
  }
}

customElements.define('dani-pani', daniPani);
