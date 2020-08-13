
// spec.ts
import {browser} from 'protractor';
describe('Browser API Demo', () => {
	it('Get current page title', () => {
		browser.get('https://material.angularjs.org')
		.then(() => (browser.getTitle()))
		.then((title)=>(console.log(title)));
	});
});

describe('Browser Navigation', () => {
	it('Exampe of to method', () => {
	   browser.get('https://material.angularjs.org')
	   .then(()=>(browser.sleep(5000))) //Sleep is added to pause the execution for sometime
	   .then(()=>(browser.navigate().to("https://protractortest.org/#/style-guide"))) // to() method is used here
	   .then(()=>(browser.sleep(5000)));
	});
 });

