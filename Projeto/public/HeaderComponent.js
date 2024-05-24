class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `

        <style>
        .brand {
            width: 200px;
            height: 200px;
            position: relative;
            margin: 0 auto;
            
            }
            
            .brand:before {
            font-family: "Bebas Neue", sans-serif;
            background-size: 90% 90%;
            content: "InfoFLIX";
            line-height: 205px;
            color: #ffffff;
            font-size: 20px;
            font-weight: bold;
            text-align: center;
            width: 200px;
            height: 200px;
            margin: 0 auto;
            position: absolute;
            z-index: 99999 !important;
            }
            
            .logo{
            animation: 5s linear infinite;
            animation-name: rotate-0;
            animation-delay: 0s;
            transform-origin: 50% 50%;
            transform: rotate(0deg);
            
            }
            
            svg path{
            position:absolute;
            fill:none;
            stroke-width:2;
            top:0;
            left:0;
            /*mix-blend-mode: multiply;*/
            transform-origin: 50% 50%;
            transform: rotate(0deg) ;
            animation: 4s linear infinite;
            }
            
            .logo svg path:nth-child(1) {
            opacity: 1;
            animation-name: rotate-1;
            animation-delay: .5s;
            }
            .logo svg path:nth-child(2) {
            opacity: .5;
            animation-name: rotate-2;
            animation-delay: .6s;
            }
            .logo svg path:nth-child(3) {
            opacity: .8;
            animation-name: rotate-3;
            animation-delay: .7s;
            }
        
            @keyframes scale-1 {
              0%{
                transform: scale(1);
              }50% {
                transform: scale(.9);
              }100% {
                transform: scale(1);
              } 
              }
              
              @keyframes rotate-0 {
              from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              } 
              
              @keyframes rotate-1 {
              from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              
              @keyframes rotate-2 {
              from { transform: rotate(0deg); }
                to { transform: rotate(-360deg); }
              }
              
              @keyframes rotate-3 {
              from { transform: rotate(0deg); }
                to { transform: rotate(0deg); }
              }
          
          /*fadeInLeft*/
          @-webkit-keyframes fadeInLeft {
            0% {
              opacity: 0;
              -webkit-transform: translateX(-20px);
            }
            100% {
              opacity: 1;
              -webkit-transform: translateX(0);
            }
          }
          
          @keyframes fadeInLeft {
            0% {
              opacity: 0;
              transform: translateX(-20px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          /*fadeOutLeft*/
          @-webkit-keyframes fadeOutLeft {
            0% {
              opacity: 1;
              -webkit-transform: translateX(0);
            }
            100% {
              opacity: 0;
              -webkit-transform: translateX(-20px);
            }
          }
          
          @keyframes fadeOutLeft {
            0% {
              opacity: 1;
              transform: translateX(0);
            }
            100% {
              opacity: 0;
              transform: translateX(-20px);
            }
          }
        </style>

        <header>
    <div class="brand">
        <div class="logo">
            <svg  width="200px" height="200px" >
                
                    <path stroke="#ff004e" stroke-width="0" fill="#ff004e" d="M140.773,59.227C137.316,55.771,130.055,50,100,50
                    s-37.317,5.771-40.774,9.227C55.77,62.684,49.999,69.104,50,100c-0.001,30.896,5.77,37.316,9.227,40.773
                    C62.683,144.229,69.103,150,100,150c30.895,0,37.317-5.771,40.772-9.227C144.229,137.316,150,130.896,150,100
                    S144.229,62.683,140.773,59.227z"/>
            
                    <path stroke="#ff004e" stroke-width="0" fill="#ff004e" d="M140.773,59.227C137.316,55.771,130.055,50,100,50
                    s-37.317,5.771-40.774,9.227C55.77,62.684,49.999,69.104,50,100c-0.001,30.896,5.77,37.316,9.227,40.773
                    C62.683,144.229,69.103,150,100,150c30.895,0,37.317-5.771,40.772-9.227C144.229,137.316,150,130.896,150,100
                    S144.229,62.683,140.773,59.227z"/>
            
                    <path stroke="#ff004e" stroke-width="0" fill="#ff004e" d="M140.773,59.227C137.316,55.771,130.055,50,100,50
                    s-37.317,5.771-40.774,9.227C55.77,62.684,49.999,69.104,50,100c-0.001,30.896,5.77,37.316,9.227,40.773
                    C62.683,144.229,69.103,150,100,150c30.895,0,37.317-5.771,40.772-9.227C144.229,137.316,150,130.896,150,100
                    S144.229,62.683,140.773,59.227z"/>
            </svg>
        </div>
    </div>

        `;
        
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('header-component', HeaderComponent);