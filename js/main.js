(function() {
	var fiveyearsago = genGmailLink(5);
	$('<button></button>', {
		text: 'Five Years Ago',
		onclick: "location.href='" + fiveyearsago + "'",
		class: 'gmailLink'
	}).insertAfter('#btnLinksStart');
	$('<br/>').insertAfter('#btnLinksStart');
	var fouryearsago = genGmailLink(4);
	$('<button></button>', {
		text: 'Four Years Ago',
		onclick: "location.href='" + fouryearsago + "'",
		class: 'gmailLink'
	}).insertAfter('#btnLinksStart');
	$('<br/>').insertAfter('#btnLinksStart');
	var threeyearsago = genGmailLink(3);
	$('<button></button>', {
		text: 'Three Years Ago',
		onclick: "location.href='" + threeyearsago + "'",
		class: 'gmailLink'
	}).insertAfter('#btnLinksStart');
	$('<br/>').insertAfter('#btnLinksStart');
	var twoyearsago = genGmailLink(2);
	$('<button></button>', {
		text: 'Two Years Ago',
		onclick: "location.href='" + twoyearsago + "'",
		class: 'gmailLink'
	}).insertAfter('#btnLinksStart');
	$('<br/>').insertAfter('#btnLinksStart');
	var yearago = genGmailLink(1);
	$('<button></button>', {
		text: 'One Year Ago',
		onclick: "location.href='" + yearago + "'",
		class: 'gmailLink'
	}).insertAfter('#btnLinksStart');
	$('<br/>').insertAfter('#btnLinksStart');
})();

/*
17 yearago=`date -v-1y -v-1d +%Y/%m/%d`
 18 yesterday=`date -v-1y +%Y/%m/%d`
 19 gmailUrl='https://mail.google.com/mail/u/0/#apps/'
 20 url="after:$yearago before:$yesterday"
 21 echo URL: $url
 */
function  genGmailLink(numYears) {
	var today,
		yearAgo,
		yearAgoOneDay,
		gmailUrl = 'https://mail.google.com/mail/u/0/#apps/',
		encodedBeforAfter,
		beforeAfter;


	// yearAgo = Date.parse("t - 1 y").toString('yyyy/mm/dd');
	yearAgo = Date.today().add(-numYears).years().toString('yyyy/MM/dd');
	yearAgoOneDay = Date.today().add( {days: -numYears, years: -numYears}).toString('yyyy/MM/dd');
	beforeAfter = "after:" + yearAgoOneDay + " before:" + yearAgo;
	encodedBeforAfter =	encodeURIComponent(beforeAfter);
	return gmailUrl + encodedBeforAfter;
}