import React, { Component } from 'react';
import {Card, CardHeader, CardText } from 'material-ui/Card';
import Feeds from "./Feeds.js"

class Post extends Component {
  constructor(props){
    super(props)
    this.state = {
      expand: 0,
      subtitle: this.props.post.subtitle,
    }
  }

  expand = () => {
    if(this.state.expand === 0){
      this.setState({
        expand: 1,
        subtitle: "",
      })
    }else{
      this.setState({
        expand: 0,
        subtitle: this.props.post.subtitle,
      })
    }
  }

  reply = (author, comment) => {
    this.props.onReply(this.props.post.id, author, comment)
  }

  render() {
    return (
      <div className="post">
        <Card>
          <CardHeader
            title={this.props.post.title}
            subtitle={this.state.subtitle}
            avatar={this.props.post.avatar}
            actAsExpander={true}
            showExpandableButton = {true}
          />
          <CardText expandable={true}>{this.props.post.text}</CardText>
          <CardText expandable={true}>
          <div className="comments-wrapper">
            <Feeds comments={this.props.post.comments} onReply={this.reply}/>
          </div>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default Post;