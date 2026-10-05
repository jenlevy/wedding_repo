const photoFiles = import.meta.glob<string>('$lib/assets/timeline_pics/*.{jpg,jpeg}', {
	eager: true,
	import: 'default'
});

// Returns every photo named `<prefix>_<n>.jpeg`, in filename order.
function photosFor(prefix: string): string[] {
	const matches = Object.entries(photoFiles)
		.filter(([path]) => path.split('/').pop()!.startsWith(`${prefix}_`))
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([, url]) => url);
	if (matches.length === 0) throw new Error(`No timeline photos found for "${prefix}"`);
	return matches;
}

export interface TimelineItem {
	date: string;
	title: string;
	description: string;
	images?: string[];
	imageAlt?: string;
}

export const timeline: TimelineItem[] = [
	{
		date: 'May 2021',
		title: 'We Met',
		description:
			'We meet at WXYC 89.3 FM, the student radio station at UNC! We quickly become friends',
	},
	{
		date: 'September 2021',
		title: 'First Date',
		description:
			'We go to hopscotch music festival together and see Animal Collective play live! Later in the month Jenna tells Adrian she has a crush on him and he says same!! We start dating wooohooo ',
		images: photosFor('hopscotch'),
		imageAlt: 'Adrian and Jenna and friends at hopscotch music festival',
	},
	{
		date: 'January 2022',
		title: 'Our first trip together',
		description:
			'We take our first trip together to Asheville and play in the snow.',
		images: photosFor('trip')
	},
	{
		date: 'March & April 2022',
		title: 'UNC Basketball',
		description:
			'Our firt UNC basketball season together ♥ UNC beats Duke twice!',
		images: photosFor('beat_duke')
	},
	{
		date: 'May 2022',
		title: 'Jenna Graduates',
		description:
			"Jenna graduates from UNC Chapel Hill!",
		images: photosFor('j_graduates')
	},
	{
		date: 'August 2022',
		title: 'Jenna Graduates',
		description:
			"Jenna moves to Durham and Adrian visits a whole lot!",
		images: photosFor('visiting')
	},
	{
		date: 'May 2023',
		title: 'Adrian Graduates and Moves in with Jenna',
		description:
			"Adrian graduates from UNC Chapel Hill! He also moves in with Jenna, first in Durham with her 3 roomates and then to Jeff and Rhonda's house!",
		images: photosFor('a_graduates')
	},
	{
		date: 'Febuary 2024',
		title: 'Jenna and Adrian move back to Durham',
		description:
			"We move back to Durham together, this time to our first place with just the two of us!",
		images: photosFor('back_2_durm')
	},
	{
		date: 'November 2024',
		title: 'Jenna and Adrian Visit Colombia',
		description:
			"We take our first international trip together to Medellin and it is so fun",
		images: photosFor('medellin')
	},
	{
		date: 'October 2025',
		title: 'Jenna and Adrian Visit Japan',
		description:
			"We explore Japan!!",
		images: photosFor('japan')
	},
	{
		date: 'April 2026',
		title: 'Jenna and Adrian Propose to each other',
		description:
			"Adrian proposes to Jenna after one of their kickball games, and Jenna proposes to Adrian a few days later with a book she made!",
		images: photosFor('proposal')
	},
];
