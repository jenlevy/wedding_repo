export interface ThingToDo {
	name: string;
	category: 'eat' | 'drink' | 'do';
	description: string;
	link?: string;
}
export const thingsToDo: ThingToDo[] = [
	{
		name: 'Ideals',
		category: 'eat',
		description:
			'Truly life changing sandwiches in east Durham. Open from 12-3pm Thursdays through Mondays. I would recommend lining up at around 11:30am.',
		link: 'https://idealsdeli.com/'
	},
	{
		name: 'Pizzeria Toro',
		category: 'eat',
		description:
			'Great Pizza in Downtown Durham! Also good salads and other side dishes.',
		link: 'https://www.pizzeriatoro.com/'
	},
	{
		name: 'Pincho Loco',
		category: 'eat',
		description:
			"Adrian and Jenna's favorite Ice Cream shop! They also have Ice Scream Sandwiches, popsicles, ice cream cake slices, and other deserts! Located near dukes campus, take a stroll down ninth street while you eat your ice cream!",
		link: 'https://www.instagram.com/pincho_loco/'
	},
	{
		name: 'Carrburitos',
		category: 'eat',
		description:
			'Great places for tacos and burritos in Carrboro',
		link: 'https://carrburritos.com/'
	},
	{
		name: 'Aki Hana',
		category: 'eat',
		description:
			'Best place for sushi in all of Chapelboro',
		link: 'https://www.akaihana.com/'
	},
	{
		name: 'Carolina Coffee Shop',
		category: 'eat',
		description:
			'North Carolina\'s oldest continually running original restaurant located on Franklin Street in Chapel Hill. Perfect location to take a stroll around campus after your meal.',
		link: '#'
	},
	{
		name: 'Open Eye Cafe',
		category: 'drink',
		description:
			'Another Carborro classic, great coffee and tea lattes!',
		link: 'https://openeyecafe.com/'
	},
	{
		name: 'He\'s not here',
		category: 'drink',
		description:
			'Quintessential Chapel Hill dive bar with lots of indoor and outdoor space.',
		link: 'https://hesnotherenc.com/'
	},
	{
		name: 'Caffe Driade',
		category: 'drink',
		description: 'Tucked away off of E. Franklin Street, this little coffee shop offers so much calm and beauty. Grab a coffee and stroll on the trail located right next to the shop.',
		link: 'https://thepitnc.com/'
	},
	{
		name: 'Ponysaurus',
		category: 'drink',
		description:
			'Great brewery in Durham with a great outdoor patio. Also has some delicious pizza.',
		link: 'https://https://www.ponysaurusbrewing.com/'
	},
	{
		name: 'The Daily Beer Bar',
		category: 'drink',
		description: 'Located in the heart of downtown Durham, the Daily Beer bar serves both great coffee and great beer.',
		link: 'https://thepitnc.com/'
	},
	{
		name: 'Joe Van Gogh',
		category: 'drink',
		description: 'A triangle classic, with multiple locations in Durham and Chapel Hill.',
		link: 'https://joevangogh.com/'
	},
	{
		name: 'Weaver Street Market',
		category: 'do',
		description:
			'Eat, drink, do it all at the co-op. Yet again another Carborro staple - make sure to stop by and hang outside if the weather is nice!',
		link: 'https://www.weaverstreetmarket.coop/'
	},
	{
		name: 'The Carborro Farmers Market',
		category: 'do',
		description:
			'Cute little farmers market in Carborro with lots of local vendors.',
		link: 'https://www.carrborofarmersmarket.com/'
	},
	{
		name: 'North Carolina Botanical Garden',
		category: 'do',
		description:
			'Come check out the botanical garden before the wedding! Open to the public everyday, take a nice walk or have a nice little picnic.',
		link: 'https://ncbg.unc.edu/'
	},
	{
		name: 'Duke Gardens',
		category: 'do',
		description: 'The only good thing about Duke',
		link: 'https://gardens.duke.edu/'
	},
	{
		name: 'The Museum of Life and Science',
		category: 'do',
		description: 'A great museum for families! Jenna went to this museum all the time growing up.',
		link: 'https://www.lifeandscience.org/'
	},
	{
		name: 'Eno River State Park',
		category: 'do',
		description: 'Great hiking trails and swimming holes!',
		link: 'https://www.ncparks.gov/state-parks/eno-river-state-park'
	},
];
