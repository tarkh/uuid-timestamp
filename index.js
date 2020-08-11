"use strict";

/*
 * uuid-timestamp
 * UUID v4 based on timestamp
 *
 * Created by tarkh
 * tarkh.com (C) 2020
 */

module.exports = {
	// UUID emitter
	uuidEmit: () => {
		// Get now time
		const n = Date.now();
		// Generate random
		const r = Math.random();
		// Stringify now time and generate additional random number
		const s = String(n) + String(~~(r*9e4)+1e4);
		// Form UUID and return it
		return `${s.slice(0,8)}-${s.slice(8,12)}-4${s.slice(12,15)}-${[8,9,'a','b'][~~(r*3)]}${s.slice(15,18)}-${s.slice(s.length-12)}`;
	},
	// UUID parser
	uuidParse: (uuid) => {
		// Get current timestamp string length
		let tl = String(Date.now()).length;
		// Strip out timestamp from UUID
		let ts = '';
		let i = -1;
		while(tl--) {
			i++;
			// If special symbols, skip
			if(i===8||i===13||i===14||i===18||i===19||i===23) {
				tl++;
				continue;
			}
			// If timestamp, copy
			ts += uuid[i];
		}
		return Number(ts);
	}
};
