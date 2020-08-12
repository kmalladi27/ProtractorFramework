
// spec.ts
import {browser} from 'protractor';
describe('Browser API Demo', () => {
	it('Get current page title', () => {
		browser.get('https://material.angularjs.org')
		.then(() => (browser.getTitle()))
		.then((title)=>(console.log(title)));
	});
});

describe('Browser API Demo', () => {
	it('Get client session details', () => {
	browser.get('https://www.google.com/',10)
	.then(() => (browser.getSession()))
				   .then((session)=>((console.log(session.getId))));
	});
   });


