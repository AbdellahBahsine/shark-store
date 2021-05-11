import {TrendingContainer, Card, ImageContainer, Image, ContentContainer, CardTitle, CardText, AddToCart} from './trending.styles';

import {useDispatch} from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';

import styled from 'styled-components';
import CustomButton from '../button/button.component';

const ModifiedCustomButton = styled(CustomButton)`
    width: 100%;
`;

const Product = ({items}) => {

    const dispatch = useDispatch()

    return (
        <TrendingContainer>
            {items.map(item => {
                return (<Card key={item.id}>
                    <ImageContainer><Image imageUrl={item.imageUrl}></Image></ImageContainer>
                    <ContentContainer>
                        <CardTitle>{item.name}</CardTitle>
                        <CardText>${item.price}</CardText>
                    </ContentContainer>
                    <ModifiedCustomButton onClick={() => dispatch(addToCart(item))}>Add To Cart</ModifiedCustomButton>
                    <AddToCart onClick={() => dispatch(addToCart(item))}><i className="fas fa-shopping-cart"></i></AddToCart>
                </Card>)
            })}
        </TrendingContainer>
    )
}

export default Product;