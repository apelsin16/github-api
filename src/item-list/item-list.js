import React from 'react';
import styled from 'styled-components';
import Info from './../info/info';

const Ul = styled.ul`
margin: 0;
padding: 0
`

const Li = styled.li`
border-top: 2px solid #eee; 
display: flex;
padding: 0.5rem;
list-style: none;
margin: 0;
padding: 0
`

const Img = styled.img`
width: 150px;
hight: auto
`

const Figure = styled.figure`
display: inline-block
`

const Figcaption = styled.figcaption`
text-align: center
`

const ItemList = (props) => {    
    
    const { items } = props.data;

    const filtered = items.filter((item, idx) => idx <= 9);
    const accounts = filtered.map((item) => {
        const { login, 
                id, 
                avatar_url,
                html_url,
                url
        } = item;

        return (
            <Li key={id}>                
                <Figure>
                    <Img src={avatar_url} />
                    <Figcaption>{login}</Figcaption>
                </Figure>
                <div>
                    <a href={html_url} target="_blank" rel="noopener">{login}</a>
                    <Info info={url} />  
                </div>
            </Li>
        )
    })

    return (
        <Ul>
            {accounts}
        </Ul>
    )


}

export default ItemList; 