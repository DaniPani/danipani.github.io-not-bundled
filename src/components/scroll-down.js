import {LitElement, html} from '@polymer/lit-element';

class scrollDown extends LitElement {

  static get properties() { return {}}

  _render() {
      return html`
        <style>       
        .scroll-down {
        cursor: pointer;
        position: absolute;
        bottom: 0;
        margin-bottom: 4em;
        left: 50%;
        width: 46px;
        height: 46px;
        margin-left: -23px;
        border: 1px solid #fff;
        border-radius: 100%;
        box-sizing: border-box;
        }

        .scroll-down::after {
        position: absolute;
        top: 50%;
        left: 50%;
        content: '';
        width: 16px;
        height: 16px;
        margin: -12px 0 0 -8px;
        border-left: 1px solid #fff;
        border-bottom: 1px solid #fff;
        transform: rotate(-45deg);
        box-sizing: border-box;
        }

        .scroll-down:before {
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        width: 44px;
        height: 44px;
        box-shadow: 0 0 0 0 rgba(255, 255, 255, .1);
        -webkit-box-shadow: 0 0 0 0 rgba(255, 255, 255, .1);
        border-radius: 100%;
        opacity: 0;
        -webkit-opacity: 0;
        animation: scrollDownAnimation 3s infinite;
        -webkit-animation: scrollDownAnimation 3s infinite;
        box-sizing: border-box;
        }

        @keyframes scrollDownAnimation {
        0% {
            opacity: 0;
        }
        30% {
            opacity: 1;
        }
        60% {
            box-shadow: 0 0 0 60px rgba(255, 255, 255, .1);
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
        }

        
        @-webkit-keyframes scrollDownAnimation {
        0% {
            -webkit-opacity: 0;
        }
        30% {
            -webkit-opacity: 1;
        }
        60% {
            -webkit-box-shadow: 0 0 0 60px rgba(255, 255, 255, .1);
            -webkit-opacity: 0;
        }
        100% {
            -webkit-opacity: 0;
        }
        }
        </style>
        <span class="scroll-down"></span>`
  }
}

customElements.define('scroll-down', scrollDown);
