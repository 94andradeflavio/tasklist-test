import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --endpoint-mobile: 450px;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 1rem;
        background-color: #333;
        color: #fff;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;

        animation: theme 21s linear infinite;
    
        &:after,
        &:before {
            content: '';
            display: block;
            position: fixed;
            z-index: -1;
            top: 0;
            width: 100vw;  // IE/Edge
            height: 100vh; // fallback
            width: 100vmax;
            height: 100vmax;
            background: rgba(0,0,0,0.05);
            animation: background 90s linear infinite;
        }

        &:after {
            left: 15vw;
        }

        &:before {
            right: 15vw;
            animation-delay: -30s;
            animation-direction: reverse;
        }

        @keyframes theme {
            0% {
                background: #74C390;
            }
            
            16% {
                background: #5DBDB6;
            }
            
            33% {
                background: #59D4E1;
            }
            
            50% {
                background: #51BCE8;
            }
            
            66% {
                background: #FA5374;
            }    
            
            83% {
                background: #E46653;
            }

            100% {
                background: #74C390;
            }
        }

        @keyframes background {
            0% {
                transform: rotate(0deg);
            }
            
            100% {
                transform: rotate(360deg);
            }
        }
    }

    #root {
        width: 100%;
        max-width: 780px;
        height: 90vh;
        margin: 0 .2rem;
        padding: 2rem;
        text-align: center;
        border-radius: 2rem;
        box-shadow: 5px 5px 15px #000;
        background-color: rgba(0,0,0,0.5);
        backdrop-filter: blur(5px);
        position: relative;
    }

    .App {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
`;

export const endpoints = {
  mobile: "500px",
};

export const colors = {
  orange: "#b97f15",
  red: "#931919",
  green: "#0d450d",
};
