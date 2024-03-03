import styled from "styled-components";

export const DivGeral = styled.div`
    max-width: 1360px;
    width: 100%;
    margin: 0 auto;

    h3 {
        font-family: helvetica;
        margin-left: 45Px;
    }

    nav {
        background-color: #d9d9d9;
        max-width: 220px;
        height: 320px;
        padding-top: 10px;
        
        ul{
            display: flex;
            flex-direction: column;
            margin-left: -36px;
            
            li{
                padding: 2px;
                list-style: none;
                margin-bottom: 8px;
                cursor: pointer;
                
                a {
                    text-decoration: none;
                    color: #000;
                    font-family: sans-serif;
                    margin-top: 10px;
                }
            }
        }
    }

    img {
        margin-bottom:-4px;
    }
`