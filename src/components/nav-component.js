import { LitElement, css, html } from 'lit'

export class NavComponent extends LitElement {

  static styles = css`
    .nav{
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;  

      & figure{
        margin: 0;
        & a{
          display: flex;
          gap: 20px;
          align-items: center;
          text-decoration: none;
          color: var(--white);
          font-weight: 500;
          & img{
            width: 100%;
          }
        }
      }

      & ul{
        list-style: none;
        padding: 0;
        display: flex;
        align-items: center;
        gap: 32px;
        
        & li{
          & a{
            text-decoration: none;
            color: var(--white); 
          }
        }
      }

      .wrapper-btn{
        display: flex;
        gap: 12px;
        & a{
          border-radius: .5rem;
          padding: 12px 20px;
          font-weight: 600;
          text-align: center;
          text-decoration: none;
        }

        & .btn-primary{
          background-color: var(--clip-orange);
          color: var(--white);
        }

        & .btn-secondary{
          background-color: var(--clip-orange-clear);
          color: var(--clip-orange);
        }
      }
    }

    hr{
      margin-top: 14px;
      border: none;
      width: 100%;
      height: 1px;
      background-color: var(--gray);
    }

    @media (max-width: 740px){
      .nav{
        & ul, .wrapper-btn{
          display: none;
        }
      }
    }
  `;

  render() {
    return html`
      <nav class="nav">
        <figure>
          <a href="../../index.html">
            <img src="https://cdn.prod.website-files.com/640a110ff475260ce6551685/640b3788ce1a575625fd9f45_Logo-Clip.svg" />
            Developers
          </a>
        </figure>

        <ul>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Campaign</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>

        <div class="wrapper-btn">
          <a href="#" class="btn-secondary">Login</a>
          <a href="#" class="btn-primary">Sign up</a>
        </div>
      </nav>
      
      <hr>
    `
  }
}

window.customElements.define('nav-component', NavComponent)