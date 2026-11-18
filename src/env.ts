import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	PUBLIC_WEDDING_DATETIME: {
		public: true,
		static: true
	},
	PUBLIC_WEDDING_DATE: {
		public: true,
		static: true
	},
	PUBLIC_VENUE_NAME: {
		public: true,
		static: true
	},
	PUBLIC_VENUE_ADDRESS: {
		public: true,
		static: true
	},
	PUBLIC_PHOTOS_URL: {
		public: true,
		static: true
	}
});
