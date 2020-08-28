import React, { Component } from 'react';
import { Button, Label, Modal, ModalBody, ModalHeader, FormGroup } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {

    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    handleSubmit(values){
        console.log(JSON.stringify(values));
        alert(JSON.stringify(values));
    }

    toggleModal(){
        this.setState({isModalOpen:!this.state.isModalOpen});
    }

    renderModal(){
        return(
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <FormGroup>
                            <Label htmlFor='rating'>Rating</Label>
                            <Control.select model='.rating' name='rating'
                                className='form-control' >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='author'>Your Name</Label>
                            <Control.text model='.author' id='author' name='author'
                                placeholder='Your Name' className='form-control'
                                validators={{required, minLength: minLength(3), maxLength: maxLength(15)}} />
                            <Errors className='text-danger' model='.author' show='touched'
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }} />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='comment'>Comment</Label>
                            <Control.textarea model='.comment' id='comment' name='comment'
                                rows='6' className='form-control' />
                        </FormGroup>
                        <Button type='submit' value='submit' color='primary'>Submit</Button>
                    </LocalForm>
                </ModalBody>
            </Modal>
        );
    }

    render() {
        return(
            <>
            {this.renderModal()}
            <Button outline onClick={this.toggleModal} className='ml-3'>
                <span className='fa fa-pencil fa-lg'></span> Submit Comment
            </Button>
            </>
        );
    }

}

export default CommentForm;