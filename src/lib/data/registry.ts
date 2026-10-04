export interface RegistryItem {
	name: string;
	description: string;
	url: string;
}

export const registries: RegistryItem[] = [
	{
		name: 'Down Payment Fund',
		description:
			'Help us buy a house one day!',
		url: '#'
	},
	{
		name: 'Travel Fund',
		description:
			'Help us travel the world one day!',
		url: '#'
	},
	{
		name: 'Honeymoon Fund',
		description:
			'Help us create unforgettable memories on our honeymoon!',
		url: '#'
	}
];
