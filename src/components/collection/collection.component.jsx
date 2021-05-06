import {Cards, Card, ImageContainer, ContentContainer, Image, CardTitle, CardText, Button, AddToCart} from './collection.styles';

import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux/features/cart/cartSlice';

const Collection = ({items, title}) => {

    const dispatch = useDispatch()

    return (
        <div className="collection">
            <h2>{title}</h2>
            <Cards>
                {items.map(item => {
                    return (
                    <Card>
                        <ImageContainer><Image imageUrl={item.imageUrl}></Image></ImageContainer>
                        <ContentContainer>
                            <CardTitle>{item.name}</CardTitle>
                            <CardText>{item.price}</CardText>
                        </ContentContainer>
                        <Button>Add To Cart</Button>
                        <AddToCart onClick={() => dispatch(addToCart(item))}><i className="fas fa-shopping-cart"></i></AddToCart>
                    </Card>
                    )
                })}
            </Cards>
        </div> 
    )
}

export default Collection;