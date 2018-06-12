import {LitElement, html} from '@polymer/lit-element';

import {until} from 'lit-html/lib/until'

import './scroll-down'

class daniPani extends LitElement {

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
              --blockquote-font: 3em;
              --background-attachment: fixed;
            }      
            section {
            width: 100%;
            margin: 0;
            }

            .hero {
            height: 100vh;
            position: relative;
            background: ${until(this._fetchImage('src/image/abstract-wallpaper-47342-48869-hd-wallpapers.jpg'), `grey`)};
            background-attachment: var(--background-attachment);
            background-size: cover;
            }

            .parallax {
            height: 50vh;
            position: relative;
            background: ${until(this._fetchImage('src/image/abstract-wallpaper-1442844111BON.jpg'), `grey`)};
            background-attachment: var(--background-attachment);
            background-size: cover;
            background-repeat: no-repeat;
            }

            .parallax-content {
            font-size: var(--blockquote-font);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            }

            .hero-content {
            font-size: var(--hero-font-size);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            }

            @media all and (max-width: 30em){
                :host {
                  --container-padding: 1.5em;
                  --blockquote-font: 2.5em;
                  --background-attachment: scroll;
                  --hero-font-size: 2em
                }
            }

            .container {
              padding: var(--container-padding);
            }

            blockquote p {
              font-size: var(--blockquote-font);
              font-style: italic;
              color: #333;
              display: inline;
            }

            blockquote {
              position: relative;
              padding: 0.5em 20px;
              margin-left: 0;
              margin-right: 0;
            }

            .dark {
              background-color: #333;
            }

            .purple {
              background-color: rebeccapurple
            }

            .white {
              color: #fff
            }

            .shadow {
              text-shadow: 6px 4px 1px black;
            }

            .btn {
              margin:0;
              border-radius: 5px;
              padding: 15px 25px;
              font-size: 22px;
              text-decoration: none;
              margin: 20px;
              color: #fff;
              position: relative;
              display: inline-block;
            }

            .btn:active {
              transform: translate(0px, 5px);
              -webkit-transform: translate(0px, 5px);
              box-shadow: 0px 1px 0px 0px;
            }

            .red {
              background-color: #e74c3c;
              box-shadow: 0px 5px 0px 0px #CE3323;
            }

            .red:hover {
              background-color: #FF6656;
            }

            .center {
              text-align: center;
            }

            .left {
              text-align: left;
            }
        </style>
        <section class="hero">
            <div class="hero-content">
            <h1>"Hi, I'm Daniel..."</h1>
            </div>
            <scroll-down></scroll-down>
        </section>
        <section class="purple">
          <div class="container">
            <blockquote><p class="white">« Life is like a cookie when it rains... it gets wet »</p></blockquote>
          </div>
        </section>
        <section class="parallax">
          <div class="parallax-content">
            <h1 class="shadow white">And I love coding</h1>
          </div>
        </section>
        <section class="">
          <div class="container center">
            <h1 class="left">I'm a 17 student at Liceo Bellinzona specialized in Physics and Maths Application</h1>
            <a class="btn red" href="mailto:panero.daniel@gmail.com">CONTACT ME!</a>
          </div>
        </section>
      `
  }
}

customElements.define('dani-pani', daniPani);
