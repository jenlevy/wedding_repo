export interface FaqItem {
	question: string;
	answer: string;
}

export const faqs: FaqItem[] = [
	{
		question: 'What is the dress code?',
		answer:
			'Whatever you feel most yourself in! Suits, dresses, pants, whatever you want!'
	},
  {
		question: 'Where should I stay',
		answer: 'We recommend staying anywhere in the Chapel Hill/Durham area. The Hampton Inn of of Chapel Hill/Carborro - Downtown is a great option. There are also many lovely airbnb options in the area.'
	},
	{
		question: 'Are kids allowed?',
		answer:
			'Yes! We\'ve listed you and your kids on the guest list, but feel free to reach out if there are any questions.'
	},
	{
		question: 'Will there be parking?',
		answer:
			'Yes! There is parking on site, although we have been told parking might be tight while the venue is still open to the public until 5:00 PM. The venue is also extremely close to downtown Chapel Hill and Carborro so feel free to take an uber or lyft if you feel like you\'ll need it later in the evening.' 
	},
	{
		question: 'What time should I arrive?',
		answer:
			'We\'ll let you know the exact time closer to the wedding date, but likely around 5:00 PM. Definitely not earlier than that.'
	},
];
