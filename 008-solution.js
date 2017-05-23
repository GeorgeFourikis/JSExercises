function changeMoney(money){
	var coin25 = 0;
	var coin10 = 0;
	var coin5 = 0;
	var coin2 = 0;
	var coin1 = 0;

	while(money >= 25) {
		money-= 25;
		coin25++;
	}
	while(money >= 10) {
		money-= 10;
		coin10++;
	}
	while(money >= 5) {
		money-= 5;
		coin5++;
	}
	while(money >= 2) {
		money-= 2;
		coin2++;
	}
	while(money >= 1) {
		money-= 1;
		coin1++;
	}
	console.log("coin 25 : " + coin25 + " " + " coin 10 : " + coin10 + " " + " coin 5 : " + coin5 + " " + " coin 2 : " + coin2 + " " + " coin 1 : " + coin1);
}
   

changeMoney(41);