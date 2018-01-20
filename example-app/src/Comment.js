import React from 'react';


const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, deleteComment, editComment}) => 
	<li>
		{text} <span>votes: {votes}</span> 
		<button onClick={() => thumbUpComment(id)}>Thumb Up </button>
		<button onClick={() => thumbDownComment(id)}>Thumb down</button>
		<button onClick={() => deleteComment(id)}>Delete Comment</button>
		<button onClick={() => editComment(id,)}>Edit Comment</button>
	</li>;

export default Comment;