export interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

export function calculateTimeLeft(
	weddingDate: Date
): TimeLeft {
	let diff = weddingDate.getTime() - Date.now();
	if (diff >= 0) {
		let daysLeft = Math.floor(diff / 86400000);
		diff = diff % 86400000;

		let hoursLeft = Math.floor(diff / 3600000);
		diff = diff % 3600000;

		let minutesLeft = Math.floor(diff / 60000);
		diff = diff % 60000;

		let secondsLeft = Math.floor(diff / 1000);
		return {
			days: daysLeft,
			hours: hoursLeft,
			minutes: minutesLeft,
			seconds: secondsLeft
		};
	} else {
		return {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		};
	}
}
