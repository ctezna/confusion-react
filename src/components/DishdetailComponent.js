import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetial extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    renderDish(dish){
        if (dish != null) {
            return (
                <Card>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (<div></div>);
        }
    }

    renderComments(dish) {
        if (dish != null){
            var comments = dish.comments;
            return (
                <div>
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                    {comments.map(comment => {
                    return (
                        <div className='container'>
                            <li key={comment.id} className='mt-3 mb-3'>
                            {comment.comment}
                            <br/>-- {comment.author}, {new Intl.DateTimeFormat('en-US',
                            {year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}
                            </li>
                        </div>
                    );
                    })}
                </ul>
                </div>
            );
        }else return <div></div>;
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            </div>
        );
    }

}

export default DishDetial;