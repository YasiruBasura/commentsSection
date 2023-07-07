import React, { useEffect, useState } from 'react'
import CommentService from '../Services/CommentService';
import Comment from './Comment';

const Comments = ({currentUserId}) => {
  
    const [loading, setloading] = useState(true);
    const [comments, setcomments] = useState([]);

  const [showSuccess, setShowSuccess] = useState(false);
  const rootComments = comments.filter((comments) => comments.parentId === 0);
    console.log("comments" , comments);

  const getReplies= (commendId) =>{
    return comments
    .filter((comments)=>comments.parentId===commendId)
    .sort(
      (a,b)=>
      new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()

    );
  };

  // fetching the data from the backend
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      try {
        const response = await CommentService.getComment();
        setcomments(response.data);
      } catch (error) {
        console.log(error);
      }
      setloading(false);
    };
    fetchData();
  }, []);




  return (
    <div className='comments'>
      <h3 className='comments-title'>Comments</h3>
      <div className='comments-container'>
        {rootComments.map((rootComment)=>(
          // <div key={rootComment.id}>{rootComment.body}</div>
          <Comment key={rootComment.id} comment = {rootComment} replies={getReplies(rootComment.id)}/>
          
        ))}
      </div>
    </div>
  )
}

export default Comments