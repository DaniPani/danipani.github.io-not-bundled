import {LitElement, html} from '@polymer/lit-element';

class lazyImage extends LitElement {

    constructor(){
      super()
      this.addEventListener('imageLoaded', e => this.shadowRoot.querySelector('.lazy').classList.add('hidden'))
    }

    static get properties() { return { url: String }}

    async _fetchImage(url){
        let response = await fetch(url)
        let blob = await response.blob()
        this.dispatchEvent(new CustomEvent('imageLoaded'))
        return `url(${URL.createObjectURL(blob)})`
    }

  _render({url}) {
      return html`
        <style>
        .lazy, .lazy::before, .lazy::after {
          height: var(--lazy-height, auto);
          width: 100%;
          display: block;
        }

        .lazy::before, .lazy::after {
          content: '';
        }

        .lazy::before {
          background-attachment: var(--lazy-attachment);
          background-repeat: no-repeat;
          background-size: cover;
          background: ${this._fetchImage(url)}
        }

        .lazy::after {
          background: var(--lazy-color);
          transition: opacity .2s linear .1s;
        }

        .lazy::after{
          position: absolute;
          top:0;
        }

        ::slotted(*){
          z-index:1     
        }

        .lazy.hidden::after {
          opacity: 0
        }
        </style>
        <div class="lazy"><slot></slot></div>
        `
  }
}

customElements.define('lazy-image', lazyImage)