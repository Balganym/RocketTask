import React, { Component } from 'react';
import Post from "./Post.js"
import fire from '../server/fire';
const month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]

class Posts extends Component {

  constructor(props){
    super(props)
    this.state = {
      posts: [],
    }
  }

  componentWillMount(){
    let postsRef = fire.database().ref('posts').orderByKey().limitToLast(100);
    postsRef.on('child_added', snapshot => {
      let post = { text: snapshot.val(), id: snapshot.key };
      this.setState({ posts: [post["text"]].concat(this.state.posts)});
    })
  }

  addComment = (id, author, comment) => {
    var arr = this.state.posts
    arr.map(p => {
      if(p.id === id){
        var currentdate = new Date();
        var datetime = currentdate.getDate() + " " + month[currentdate.getMonth()] 
        + " в " + currentdate.getHours() + ":" + currentdate.getMinutes();
        p.comments = [...p.comments, {id: p.comments.length + 1, author: author,
         text: comment, avatar: "http://userpic.codeforces.com/no-avatar.jpg", 
         time: datetime}]
      }
      return <p></p>
    })
    fire.database().ref('posts').set(arr)
    this.setState({
      posts: arr,
    })
  }

  render() {
    return (
      <div className="posts-wrapper">
        {this.state.posts.map(p => {
          return <Post key={p.id} post={p} onReply={this.addComment}/>
        })}
      </div>
    );
  }
}

export default Posts;