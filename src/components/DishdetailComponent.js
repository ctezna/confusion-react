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
                        <h3>{dish.name}</h3>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        } else {
            return (<div></div>);
        }
    }

    renderComments(comments) {
        if (comments != null)
          return (
            <div>
              <h4>Comments</h4>
              <ul className='list-unstyled'>
                {comments.map(comment => {
                  return (
                    <li key={comment.id} className='mt-3 mb-3'>
                      {comment.comment}
                      <br/>-- {comment.author}, {(comment.date)}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        else return <div></div>;
      }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className='col-12 col-md-5 m-1'>
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            </div>
        );
    }

}

export default DishDetial;