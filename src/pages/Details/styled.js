import styled from 'styled-components';

export const Container = styled.div`

    padding: 3rem;

    h1{
        margin: 3rem 0;
    }

    .movie{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img{
        width: 300px;
        border-radius: 1rem;
    }

    .details{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 3rem;
        max-width: 50%;
    }

    span{
        line-height: 120%;
        margin-bottom: 1rem;
        font-size: 110%;
    }

    .releaseDate{
        opacity: 0.5;
    }


`