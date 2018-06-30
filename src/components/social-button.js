import {LitElement, html} from '@polymer/lit-element';

import '@bit/danipani.projects.fa-icon-polymer.fa-icon'

class socialButton extends LitElement {

  _render() {
      return html`
        <style>
          .social-btns {
            font-size: 30px;
            --icon-background-color: transparent
          }
          .btn,
          .btn:before,
          fa-icon {
            transition: all 0.35s;
            transition-timing-function: cubic-bezier(0.31, -0.105, 0.43, 1.59);
          }
          .btn:before {
            top: 90%;
            left: -110%;
          }
          .btn:focus:before,
          .btn:hover:before {
            top: -10%;
            left: -10%;
          }
          .btn:focus fa-icon,
          .btn:hover fa-icon {
            --icon-color: #fff;
            -webkit-transform: scale(1);
                    transform: scale(1);
          }
          .social-btns {
            margin: auto;
            text-align: center;
          }
          .btn {
            display: inline-block;
            background-color: #fff;
            width: 90px;
            height: 90px;
            line-height: 90px;
            margin: 0 10px;
            margin-bottom: 20px;
            text-align: center;
            position: relative;
            overflow: hidden;
            border-radius: 28%;
            box-shadow: 0 5px 15px -5px rgba(0,0,0,0.1);
            opacity: 0.99;
          }
          .btn:before {
            content: '';
            width: 120%;
            height: 120%;
            position: absolute;
            -webkit-transform: rotate(45deg);
                    transform: rotate(45deg);
          }
          fa-icon {
            -webkit-transform: scale(0.8);
                    transform: scale(0.8);
          }

          .btn.instagram:before {
            background-color: #e4405f;
          }

          .btn.instagram {
            --icon-color: #e4405f;
          }

          .btn.github:before {
            background-color: #333;
          }

          .btn.github {
            --icon-color: #333;
          }

          .btn.stack-overflow:before {
            background-color: #f48024;
          }

          .btn.stack-overflow {
            --icon-color: #f48024;
          }

          .btn.google:before {
            background-color: #dc4a38;
          }

          .btn.google {
            --icon-color: #dc4a38;
          }

          
        </style>        
        <div class="social-btns">
            <a class="btn instagram"target="_blank" rel="noopener" href="https://www.instagram.com/_danipani_/" aria-label="instagram"><fa-icon icon-prefix="fab" icon-name="instagram"></fa-icon></a>
            <a class="btn github" target="_blank" rel="noopener" href="https://github.com/DaniPani" aria-label="github"><fa-icon icon-prefix="fab" icon-name="github"></fa-icon></a>
            <a class="btn stack-overflow" target="_blank" rel="noopener"  href="https://stackoverflow.com/users/9405824/dani-pani-danipani" aria-label="stack-overflow"><fa-icon icon-prefix="fab" icon-name="stack-overflow"></i></fa-icon></a>
            <a class="btn google" target="_blank" rel="noopener"  href="https://plus.google.com/u/0/+DaniPani-danipani13"><fa-icon icon-prefix="fab" icon-name="google-plus" aria-label="google-plus"></fa-icon></a>
        </div>
        `
  }
}

customElements.define('social-button', socialButton);
