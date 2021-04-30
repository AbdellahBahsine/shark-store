import {Cards, Card, ImageContainer, Image, CardTitle, CardText, AddToCart} from './collection.styles';

const Collection = ({items, title}) => {
    return (
        <div className="collection">
            <h2>{title}</h2>
            <Cards>
                {items.map(item => {
                    return (
                    <Card>
                        <ImageContainer><Image imageUrl={item.imageUrl}></Image></ImageContainer>
                        <CardTitle>{item.name}</CardTitle>
                        <CardText>{item.price}</CardText>
                        <AddToCart><i className="fas fa-shopping-cart"></i></AddToCart>
                    </Card>
                    )
                })}
            </Cards>
        </div>
    )
}

export default Collection;