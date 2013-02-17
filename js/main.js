(function() {
	var yearago = genGmailLink(1);
	$('<button></button>', {
		text: 'One Year Ago',
		onclick: "location.href='" + yearago + "'",
		class: 'gmailLink'
	}).insertAfter('#btnLinksStart');
	var twoyearsago = genGmailLink(2);
	$('<button></button>', {
		text: 'Two Years Ago',
		onclick: "location.href='" + twoyearsago + "'",
		class: 'gmailLink'
	}).insertAfter('#btnLinksStart');
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