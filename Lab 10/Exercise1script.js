var start = new Date();
var startTime = start.getTime();

function stopTime(){
	var finish = new Date();
	var finishTime = finish.getTime();
	var loadTime = (finishTime - startTime)/1000;
    var myAlert = alert("You have been on the page for:" + loadTime + "seconds");
	console.log(myAlert);
}
