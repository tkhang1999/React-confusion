import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem, ListGroupItemText, ListGroupItemHeading } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>
                        {dish.name}
                    </CardTitle>
                    <CardText>
                        {dish.description}
                    </CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments) {
        return (
            <ListGroup>
                <ListGroupItemHeading>
                    Comments
                </ListGroupItemHeading>
                {comments.map((comment) => {
                    return (
                        <ListGroupItem key={comment.id} className="border-0 p-0">
                            <ListGroupItemText>
                                {comment.comment}
                            </ListGroupItemText>                             
                            <ListGroupItemText>
                                -- {comment.author}, {comment.date}
                            </ListGroupItemText>      
                        </ListGroupItem>
                    );
                })}
            </ListGroup>
        );
    }

    render() {
        if (this.props.selectedDish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.selectedDish)}
                        </div>                    
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(this.props.selectedDish.comments)}
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;