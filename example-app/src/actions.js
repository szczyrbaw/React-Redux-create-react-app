import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}

function editComment(id, text) {
	return {
		type: EDIT_COMMENT,
		text,
		id: id
	}
}

function deleteComment(id) {
	return {
		type: DELETE_COMMENT,
		id: id
	}
}

function thumbUpComment(commentId) {
	return {
		type: THUMB_UP_COMMENT,
		id: commentId
	}
}

function thumbDownComment(id) {
	return {
		type: THUMB_DOWN_COMMENT,
		id: id
	}
}

export {editComment};
export {deleteComment};
export {thumbUpComment};
export {thumbDownComment};
export {addComment};