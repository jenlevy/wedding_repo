import { photo } from '#lib/photos.ts';

// Files live in the `timeline/` folder of the R2 bucket.
function timelinePhotos(...files: string[]): string[] {
	return files.map((file) => photo(`timeline/${file}`));
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
			'We meet at WXYC 89.3 FM, the student radio station at UNC! We quickly become friends'
	},
	{
		date: 'September 2021',
		title: 'First Date',
		description:
			'We go to hopscotch music festival together and see Animal Collective play live! Later in the month Jenna tells Adrian she has a crush on him and he says same!! We start dating wooohooo ',
		images: timelinePhotos('hopscotch_1.jpeg', 'hopscotch_2.jpeg'),
		imageAlt:
			'Adrian and Jenna and friends at hopscotch music festival'
	},
	{
		date: 'January 2022',
		title: 'Our first trip together',
		description:
			'We take our first trip together to Asheville and play in the snow.',
		images: timelinePhotos('trip_1.jpeg', 'trip_2.jpeg')
	},
	{
		date: 'March & April 2022',
		title: 'UNC Basketball',
		description:
			'Our firt UNC basketball season together ♥ UNC beats Duke twice!',
		images: timelinePhotos('beat_duke_1.jpeg', 'beat_duke_2.jpeg')
	},
	{
		date: 'May 2022',
		title: 'Jenna Graduates',
		description:
			'Jenna graduates from UNC Chapel Hill!',
		images: timelinePhotos('j_graduates_1.jpeg', 'j_graduates_2.jpeg')
	},
	{
		date: 'August 2022',
		title: 'Jenna Graduates',
		description:
			'Jenna moves to Durham and Adrian visits a whole lot!',
		images: timelinePhotos('visiting_1.jpeg', 'visiting_2.jpeg')
	},
	{
		date: 'May 2023',
		title:
			'Adrian Graduates and Moves in with Jenna',
		description:
			"Adrian graduates from UNC Chapel Hill! He also moves in with Jenna, first in Durham with her 3 roomates and then to Jeff and Rhonda's house!",
		images: timelinePhotos('a_graduates_1.jpeg', 'a_graduates_2.jpeg')
	},
	{
		date: 'Febuary 2024',
		title: 'Jenna and Adrian move back to Durham',
		description:
			'We move back to Durham together, this time to our first place with just the two of us!',
		images: timelinePhotos('back_2_durm_1.jpeg', 'back_2_durm_2.jpeg')
	},
	{
		date: 'November 2024',
		title: 'Jenna and Adrian Visit Colombia',
		description:
			'We take our first international trip together to Medellin and it is so fun',
		images: timelinePhotos('medellin_1.jpeg', 'medellin_2.jpeg')
	},
	{
		date: 'October 2025',
		title: 'Jenna and Adrian Visit Japan',
		description: 'We explore Japan!!',
		images: timelinePhotos('japan_1.jpeg', 'japan_2.jpeg')
	},
	{
		date: 'April 2026',
		title:
			'Jenna and Adrian Propose to each other',
		description:
			'Adrian proposes to Jenna after one of their kickball games, and Jenna proposes to Adrian a few days later with a book she made!',
		images: timelinePhotos('proposal_1.jpeg', 'proposal_2.jpeg')
	}
];
