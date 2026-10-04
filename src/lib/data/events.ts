export interface TimelineEvent {
	date: string;
	title: string;
	description: string;
}

export const timeline: TimelineEvent[] = [
	{
		date: 'May 2021',
		title: 'We Met',
		description:
			'We met at WXYC 89.3 FM, the student radio station at UNC!!'
	},
	{
		date: 'December 2021',
		title: 'First Date',
		description:
			'Coffee turned into dinner, which turned into a long walk. We knew this was something special.'
	},
	{
		date: 'June 2023',
		title: 'Moved In Together',
		description:
			'We took the leap and found a cozy place to call ours. It finally felt like home.'
	},
	{
		date: 'March 2025',
		title: 'The Proposal',
		description:
			'A sunset, a question, and a tearful "yes!" — the happiest moment of our lives (so far).'
	},
	{
		date: 'October 2026',
		title: 'The Big Day!',
		description:
			"We can't wait to say 'I do' surrounded by the people we love most."
	}
];

export interface FaqItem {
	question: string;
	answer: string;
}

export const faqs: FaqItem[] = [
	{
		question: 'What is the dress code?',
		answer:
			'We suggest semi-formal / cocktail attire, but feel free to wear anything you feel best in'
	},
  {
		question: 'Where should I stay',
		answer: 'We recommend staying anywhere in the Chapel Hill/Durham area. Some specific hotels we like are xxxx and yyyy. There are also many lovely airbnb options in the area.'
	},
	{
		question: 'Is the venue accessible?',
		answer:
			'Yes! The ceremony and reception spaces are fully wheelchair accessible. Please reach out if you have specific needs.'
	},
	{
		question: 'Will there be parking?',
		answer:
			'Free parking is available on-site. Rideshare is also a great option as the venue is well-served by Uber and Lyft.'
	},
	{
		question: 'What time should I arrive?',
		answer:
			'The ceremony begins at 5:30 PM. We recommend arriving 15–20 minutes early to find your seat. The venue will be open to the public until 5:00 PM - if you want to check out the gardens before hand feel free to arrive anytime earlier.'
	},
	{
		question: 'Are children welcome?',
		answer:
			'yes!'
	}
];

export interface ThingToDo {
	name: string;
	category: 'eat' | 'see' | 'do';
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
		name: 'Waterfront Trail',
		category: 'do',
		description:
			'A gorgeous 3-mile walk along the harbor. Perfect for a morning stroll.',
		link: '#'
	},
	{
		name: 'City Botanical Garden',
		category: 'see',
		description:
			'Stunning seasonal gardens and a lovely café. Free entry on weekends.',
		link: '#'
	},
	{
		name: 'Craft Brewery District',
		category: 'eat',
		description:
			'A half-dozen taprooms within walking distance. Great for an afternoon crawl.',
		link: '#'
	},
	{
		name: 'Historic Downtown Walk',
		category: 'see',
		description:
			'Beautiful architecture and quirky shops. Guided tours available daily.',
		link: '#'
	},
	{
		name: 'Kayak Rentals',
		category: 'do',
		description:
			'See the coast from the water. Rentals by the hour, no experience needed.',
		link: '#'
	}
];
