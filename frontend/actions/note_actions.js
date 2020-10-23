export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const ALL_NOTES = 'ALL_NOTES';
export const NOTE_ERROR = 'NOTE_ERROR';

export const receiveNotes = notes => ({
  type: RECEIVE_NOTES,
  notes,
});

export const receiveNote = note => ({
  type: RECEIVE_NOTE,
  note,
});

export const removeNote = note => ({
  type: REMOVE_NOTE,
  note,
});

// export const pinnedNotes = ({ notes }) =>

// });

export const allNotes = ({ notes }) => Object.keys(notes).map(id => notes[id]);

export const noteError = error => ({
  type: NOTE_ERROR,
  error,
});
