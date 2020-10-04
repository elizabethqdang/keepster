export const createNote = (note, userId) => {
	return {
		method: 'POST',
		url: `/api/${userId}/notes`,
		processData: false,
		contentType: false,
		dataType: 'json',
		data: note
	}
}

export const deleteNote = (noteId) => {
	return {
		method: 'DELETE',
		url: `/api/notes/${noteId}`
	}
}