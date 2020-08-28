import { RECEIVE_NOTES, RECEIVE_NOTE, REMOVE_NOTE, NOTE_ERROR } from '../actions/note_actions';

const _initialState = {
	"1": {
    id: 1,
    title: "asdf",
    body: "jkl;",
		color: "",
		pinned: true,
		created_at: "",
		updated_at: "",
		owner: 1,
  },
  "2": {
    id: 2,
    title: "biggy",
		body: "Fuck all you hoes Get a grip motherfucker. Yeah, this album is dedicated to all the teachers that told me I'd never amount to nothin', to all the people that lived above the buildings that I was hustlin' in front of that called the police on me when I was just tryin' to make some money to feed my daughter, and all the niggas in the struggle, you know what I'm sayin'? Uh-ha, it's all good baby bay-bee, uh It was all a dream I used to read Word Up magazine Salt'n'Pepa and Heavy D up in the limousine Hangin' pictures on my wall Every Saturday Rap Attack, Mr. Magic, Marley Marl I let my tape rock 'til my tape pop Smokin' weed and bamboo, sippin' on private stock Way back, when I had the red and black lumberjack With the hat to match Remember Rappin' Duke, duh-ha, duh-ha You never thought that hip hop would take it this far Now I'm in the limelight 'cause I rhyme tight Time to get paid, blow up like the World Trade Born sinner, the opposite of a winner Remember when I used to eat sardines for dinner Peace to Ron G, Brucey B, Kid Capri Funkmaster Flex, Lovebug Starsky I'm blowin' up like you thought I would Call the crib, same number same hood It's all good Uh, and if you don't know, now you know, nigga, uh You know very well who you are Don't let em hold you down, reach for the stars You had a goal, but not that many 'cause you're the only one I'll give you good and plenty I made the change from a common thief To up close and personal with Robin Leach And I'm far from cheap, I smoke skunk with my peeps all day Spread love, it's the Brooklyn way The Moet and Alize keep me pissy Girls used to diss me Now they write letters 'cause they miss me I never thought it could happen, this rappin' stuff I was too used to packin' gats and stuff Now honies play me close like butter played toast From the Mississippi down to the east coast Condos in Queens, indo for weeks Sold out seats to hear Biggie Smalls speak Livin' life without fear Puttin' 5 karats in my baby girl's ear Lunches, brunches, interviews by the pool Considered a fool 'cause I dropped out of high school Stereotypes of a black male misunderstood And it's still all good Uh...and if you don't know, now you know, nigga You know very well who you are Don't let em hold you down, reach for the stars You had a goal, but not that many 'cause you're the only one I'll give you good and plenty Super Nintendo, Sega Genesis When I was dead broke, man I couldn't picture this 50 inch screen, money green leather sofa Got two rides, a limousine with a chauffeur Phone bill about two G's flat No need to worry, my accountant handles that And my whole crew is loungin' Celebratin' every day, no more public housin' Thinkin' back on my one-room shack Now my mom pimps a Ac' with minks on her back And she loves to show me off, of course Smiles every time my face is up in The Source We used to fuss when the landlord dissed us No heat, wonder why Christmas missed us Birthdays was the worst days Now we sip champagne when we thirst-ay Uh, damn right I like the life I live 'Cause I went from negative to positive And it's all... It's all good ...and if you don't know, now you know, nigga, uh Uh, uh...and if you don't know, now you know, nigga Uh...and if you don't know, now you know, nigga, uh Representin' B-Town in the house, Junior Mafia, mad flavor, uh Uh, yeah, a-ightll you hoes Get a grip motherfucker. Yeah, this album is dedicated to all the teachers that told me I'd never amount to nothin', to all the people that lived above the buildings that I was hustlin' in front of that called the police on me when I was just tryin' to make some money to feed my daughter, and all the niggas in the struggle, you know what I'm sayin'? Uh-ha, it's all good baby bay-bee, uh It was all a dream I used to read Word Up magazine Salt'n'Pepa and Heavy D up in the limousine Hangin' pictures on my wall Every Saturday Rap Attack, Mr. Magic, Marley Marl I let my tape rock 'til my tape pop Smokin' weed and bamboo, sippin' on private stock Way back, when I had the red and black lumberjack With the hat to match Remember Rappin' Duke, duh-ha, duh-ha You never thought that hip hop would take it this far Now I'm in the limelight 'cause I rhyme tight Time to get paid, blow up like the World Trade Born sinner, the opposite of a winner Remember when I used to eat sardines for dinner Peace to Ron G, Brucey B, Kid Capri Funkmaster Flex, Lovebug Starsky I'm blowin' up like you thought I would Call the crib, same number same hood It's all good Uh, and if you don't know, now you know, nigga, uh You know very well who you are Don't let em hold you down, reach for the stars You had a goal, but not that many 'cause you're the only one I'll give you good and plenty I made the change from a common thief To up close and personal with Robin Leach And I'm far from cheap, I smoke skunk with my peeps all day Spread love, it's the Brooklyn way The Moet and Alize keep me pissy Girls used to diss me Now they write letters 'cause they miss me I never thought it could happen, this rappin' stuff I was too used to packin' gats and stuff Now honies play me close like butter played toast From the Mississippi down to the east coast Condos in Queens, indo for weeks Sold out seats to hear Biggie Smalls speak Livin' life without fear Puttin' 5 karats in my baby girl's ear Lunches, brunches, interviews by the pool Considered a fool 'cause I dropped out of high school Stereotypes of a black male misunderstood And it's still all good Uh...and if you don't know, now you know, nigga You know very well who you are Don't let em hold you down, reach for the stars You had a goal, but not that many 'cause you're the only one I'll give you good and plenty Super Nintendo, Sega Genesis When I was dead broke, man I couldn't picture this 50 inch screen, money green leather sofa Got two rides, a limousine with a chauffeur Phone bill about two G's flat No need to worry, my accountant handles that And my whole crew is loungin' Celebratin' every day, no more public housin' Thinkin' back on my one-room shack Now my mom pimps a Ac' with minks on her back And she loves to show me off, of course Smiles every time my face is up in The Source We used to fuss when the landlord dissed us No heat, wonder why Christmas missed us Birthdays was the worst days Now we sip champagne when we thirst-ay Uh, damn right I like the life I live 'Cause I went from negative to positive And it's all... It's all good ...and if you don't know, now you know, nigga, uh Uh, uh...and if you don't know, now you know, nigga Uh...and if you don't know, now you know, nigga, uh Representin' B-Town in the house, Junior Mafia, mad flavor, uh Uh, yeah, a-ight",
		color: "",
		pinned: false,
		created_at: "",
		updated_at: "",
		owner: 1,
	},
	"3": {
		id: 3,
		title: "wheeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
		body: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
		color: "",
		pinned: true,
		created_at: "",
		updated_at: "",
		owner: 1,
	},
	"4": { id: 4, title: "4", body: "test", color: "", pinned: false, created_at: "", updated_at: "", owner: 1,
	},
	"5": { id: 5, title: "5", body: "whoop thur it is", color: "", pinned: false, created_at: "", updated_at: "", owner: 1,
	},
	"6": { id: 6, title: "test 6", body: "test", color: "", pinned: false, created_at: "", updated_at: "", owner: 1,
	},
	"7": {
		id: 7, title: "#f28b82", body: "#f28b82", color: "#f28b82", pinned: false, created_at: Date("10/10/2020"), updated_at: "", owner: 1,
	},
	"8": {
		id: 8, title: "#f28b82", body: "#f28b82", color: "#f28b82", pinned: false, created_at: Date("01/19/2020"), updated_at: "", owner: 1,
	},
	"9": {
		id: 9, title: "#fbbc04", body: "#fbbc04", color: "#fbbc04", pinned: false, created_at: Date("01/19/2020"), updated_at: "", owner: 1,
	},
	"10": {
		id: 10, title: "#fff475", body: "#fff475", color: "#fff475", pinned: false, created_at: Date("01/19/2020"), updated_at: "", owner: 1,
	},
	"11": {
		id: 11, title: "#ccff90", body: "#ccff90", color: "#ccff90", pinned: false, created_at: Date("01/19/2020"), updated_at: "", owner: 1,
	},
	"12": {
		id: 12, title: "#a7ffeb", body: "#a7ffeb", color: "#a7ffeb", pinned: false, created_at: Date("08/04/2020"), updated_at: "", owner: 1,
	},
	"13": {
		id: 13, title: "#cbf0f8", body: "#cbf0f8", color: "#cbf0f8", pinned: false, created_at: Date("09/10/2020"), updated_at: "", owner: 1,
	},
	"14": {
		id: 14, title: "#aecbfa", body: "#aecbfa", color: "#aecbfa", pinned: false, created_at: Date("09/10/2020"), updated_at: "", owner: 1,
	},
	"15": {
		id: 15, title: "#d7aefb", body: "#d7aefb", color: "#d7aefb", pinned: false, created_at: Date("09/10/2020"), updated_at: "", owner: 1,
	},
	"16": {
		id: 16, title: "#fdcfe8", body: "#fdcfe8", color: "#fdcfe8", pinned: false, created_at: new Date(), updated_at: "", owner: 1,
	},
	"17": {
		id: 17, title: "#e6c9a8", body: "#e6c9a8", color: "#e6c9a8", pinned: false, created_at: Date("010/10/2020"), updated_at: "", owner: 1,
	},
	"18": {
		id: 18, title: "#e8eaed", body: "#e8eaed", color: "#e8eaed", pinned: false, created_at: Date("010/10/2020"), updated_at: "", owner: 1,
	},
}

const notesReducer = (state = _initialState, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_NOTES:
			const notes = {}
      action.notes.forEach(note => {
        notes[note.id] = note;
			});
      return notes;
    case RECEIVE_NOTE:
			return Object.assign({}, state, { [action.note.id]: action.note });
    case REMOVE_NOTE:
			const nextState = Object.assign({}, state);
      delete nextState[action.note.id];
      return nextState;
    case NOTE_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default notesReducer;

