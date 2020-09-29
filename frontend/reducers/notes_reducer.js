import { RECEIVE_NOTES,
         RECEIVE_NOTE,
         REMOVE_NOTE,
         NOTE_ERROR } from '../actions/note_actions';

const _initialState = {
	"1": {
    id: 1,
    title: "asdf",
    body: "wheee",
    done: false
  },
  "2": {
    id: 2,
    title: "test",
    body: "test",
    done: true
  },
}

const notesReducer = (state = _initialState, action) => {
  Object.freeze(state);
  let nextState = {};

  switch(action.type){
    case RECEIVE_NOTES:
      action.notes.forEach( note => {
        nextState[note.id] = note;
      });
      return nextState;
    case RECEIVE_NOTE:
      const newNote = {[action.note.id]: action.note};
      return Object.assign({}, state, newNote);
    case REMOVE_NOTE:
      nextState = Object.assign({}, state);
      delete nextState[action.note.id];
      return nextState;
    case NOTE_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default notesReducer;

