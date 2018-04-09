import React, { Component } from 'react';
import { Comment } from 'semantic-ui-react'
import {Facebook} from 'react-content-loader'

class Feed extends Component {
  render() {
    return (
      <Comment>
        <Comment.Avatar src={this.props.comment.avatar} style={{height: 36, width: 40, borderRadius: 200}}/>
        <Comment.Content>
          <Comment.Author as='a'>{this.props.comment.author}</Comment.Author>
          <Comment.Metadata>
            <div>{this.props.comment.time}</div>
          </Comment.Metadata>
          <Comment.Text>{this.props.comment.text}</Comment.Text>
        </Comment.Content>
      </Comment>
    );
  }
}

export default Feed;