export const CommentCard = ({ comment }) => {
    return (
      <div className="comment-card">
        <p><strong>Body:</strong> {comment.body}</p>
        <p><strong>Likes:</strong> {comment.likes}</p>
        <h6>Post ID: {comment.postId}</h6>
  
        <div className="user-section">
          <p><strong>User</strong></p>
          <h3>{comment.user.username}</h3>
          <p>ID: {comment.user.id}</p>
          <h2>{comment.user.fullName}</h2>
        </div>
      </div>
    );
  };