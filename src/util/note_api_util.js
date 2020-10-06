export const createNote = (note) => {
	return {
		method: 'POST',
		url: `/api/notes`,
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