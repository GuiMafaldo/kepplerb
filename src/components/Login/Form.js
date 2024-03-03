import styled from "styled-components";

export const DivContainer = styled.div`
    max-width: 350px;
    width: 100%;
    display: block;
    margin: 0 auto;
    margin-top: 180px;
    text-align: center;
    background-color: #e3e3e3;
    padding-top: 37px;
    border-radius: 10px;
    font-family: helvetica;

`

export const DivForm = styled.div`
    p {
        font-size: 12px;
        margin: 0;
        margin-bottom: 16px;
        

        span{
            color: blue;
        }
    }

    a{
        padding: 10px;
        width: 120px;
        background-color: rgba(0, 0, 0, 0.9);
        color: #fff;
        cursor: pointer;
        text-decoration: none;
`

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    width: 55%;
    margin: 0 auto;
    margin-bottom: 10px;
    gap: 10px;

    input {
        padding: 10px;
        border: none;
        border-radius: 6px;
    }
`

export const SelectIdioma = styled.div`
    display: flex;
    justify-content: space-between;


    h2{
        margin-top: 60px;
        margin-left: 30px;
        padding-bottom: 20px;
    }

    select {
        height: 25px;
        margin-top: 60px;
        margin-left: 60px;
    }

    img{
        height: 25px;
        margin-top: 60px;
        margin-right: 70px;
    }
`
