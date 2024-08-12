import { LitElement, css, html } from 'lit'

export class BannerComponent extends LitElement {

  static styles = css`
    .wrapper-link{
      position: relative;
      width: 100%;
      max-width: 1320px;
      border: 1px solid var(--white);
      border-radius: 24px;
      padding: 12px;

      & .wrapper-banner{
        width: 100%;
        height: 84lvh;  
        animation: opacity 1s ease-in-out forwards;  
  
        & img{
          object-fit: cover;
          width: 100%;
          height: 100%;
          border-radius: 16px;
          mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
        }
      }
      & .wrapper-info{
        position: absolute;
        bottom: 32px;
        left: 32px;
        padding: 32px;
        display: flex;
        flex-direction: column;
        gap: 8px;

        & h1{
          font-size: clamp(48px, 8vw, 128px);
          color: var(--white);
          margin: 0;
          transition: all .4s ease-in-out; 
          opacity: 0; /* Inicia con opacidad 0 */
          animation: fadeInUp 1s ease-in-out forwards;
        }

        & p{
          font-size: clamp(14px, 3.3vw, 24px);
          color: var(--white);
          opacity: 0; /* Inicia con opacidad 0 */
          animation: fadeInUp 1s ease-in-out forwards;
        }

        & .wrapper-btn{
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          & a{
            border-radius: .5rem;
            padding: 20px 32px;
            font-weight: 600;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 16px;
            width: 185px;
            opacity: 0; /* Inicia con opacidad 0 */
            animation: fadeInUp 1s ease-in-out forwards;
      
            & img{
              width: 32px;
              height: 32px;
            }
          }
          & .btn-primary{
            background-color: var(--clip-orange-clear);
            color: var(--clip-orange);
          }
      
          & .btn-secondary{
            /*background-color: var(--clip-orange-clear);*/
            color: var(--clip-orange);
            border: 1px solid var(--clip-orange)
          }
        }
      } 
    }

    @keyframes fadeInUp {
      0% {
          opacity: 0;
          transform: translateY(20px); /* Mueve el texto hacia abajo */
      }
      100% {
          opacity: 1;
          transform: translateY(0); /* Regresa a su posición original */
      }
    }

    @keyframes opacity {
      0% {
          opacity: 0;
      }
      100% {
          opacity: 1;
      }
    }
  `;

  render() {
    return html`
      <div class="wrapper-link">
        <div class="wrapper-banner">
          <img src="../../src/assets/banner.png"/>
        </div>
        <div class="wrapper-info">
          <h1>Do Somethings incredible now</h1>
          <p>Your support can make a world of difference for animals in need. By donating today, you help rescue, rehabilitate, and provide loving homes to animals who deserve a second chance. Together, we can give them the life they truly deserve. </p>
          <div class="wrapper-btn">
            <a class="btn-primary" href="https://pago.clip.mx/suscripcion/6b25994f-1fc0-41de-ab9c-1c5663e15a26">  
              <img src="https://cdn.prod.website-files.com/640a110ff475260ce6551685/640b3788ce1a575625fd9f45_Logo-Clip.svg"/>
              Subscribe with Clip $100/Month
            </a>
            <a class="btn-secondary" href="https://link.clip.mx/@tiendastestmiguel/pagar">
              <img src="https://cdn.prod.website-files.com/640a110ff475260ce6551685/640b3788ce1a575625fd9f45_Logo-Clip.svg"/>
              Donate with Clip
            </a>
          </div>
        </div>
      </div>
    `
  }
}

window.customElements.define('banner-component', BannerComponent)