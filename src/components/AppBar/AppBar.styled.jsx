import styled from 'styled-components';


export const Header = styled.header`
    background-color: #007BFF;
    color: white;
    padding: 20px;
    display: flex;
    flex-wrap: wrap; /* Перенос на новую строку для маленьких экранов */
    justify-content: space-around; /* Центрирование по горизонтали */
    align-items: center; /* Центрирование по вертикали */
`;

export const Section = styled.section`
    margin-right: 20px;
    flex: 1; /* Растягиваем секции на всю доступную ширину */
    text-align: center; /* Центрирование текста в секции */
    
    h2 {
        margin-bottom: 10px;
        font-size: 18px;
    }
`;