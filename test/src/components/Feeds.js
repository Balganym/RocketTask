import React, { Component } from 'react';
import Feed from "./Feed.js"
import 'semantic-ui-css/semantic.min.css';
import {Input, TextArea, Button, Comment, Form, Header } from 'semantic-ui-react'
import {Facebook} from 'react-content-loader'

class Feeds extends Component {
  constructor(props){
    super(props)
    this.state = {
      number: 5,
      display: "block",
      author: "",
      comment: "",
    }
  }

  loadMoreComments = () => {
    if(this.state.number + 5 > this.props.comments.length){
      this.setState({
        number: this.state.number + 5,
        display: "none",
      })
    }else{
      this.setState({
        number: this.state.number + 5,
      })
    }
  }

  reply = () => {
    if(this.state.author !== "" && this.state.comment !== ""){
      this.props.onReply(this.state.author, this.state.comment)
      this.setState({
        comment: "",
      })
    }
  }

  handleName = (e) => {
    this.setState({author: e.target.value})
  }

  handleText = (e) => {
    this.setState({comment: e.target.value})
  }


  render() {
    return (
      <Comment.Group size='large'>
        <Header as='h1' dividing>Комментарии</Header>
        {this.props.comments.map(c => {
          if(this.state.number + c.id > this.props.comments.length)
            return <Feed key={c.id} comment={c}/>
          else{
            return <p key={c.id}></p> 
          }
        })}
        <a style={{display: this.state.display}} className="more" onClick={this.loadMoreComments}>Еще</a>
        <Form reply>
          <div className="lineItem">
            <p className="lineItem-title">Ваше имя:</p> 
            <Input value={this.state.author} onChange={this.handleName}/>
          </div>
          <TextArea value={this.state.comment} onChange={this.handleText} style={{marginBottom: 20}}/>
          <Button content='Отправить' labelPosition='left' icon='edit' primary onClick={this.reply} />
        </Form>
      </Comment.Group>
    );
  }
}

export default Feeds;