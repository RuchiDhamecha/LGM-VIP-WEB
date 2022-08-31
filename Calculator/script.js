let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
let ans = ''
for (item of buttons) {
  item.addEventListener('click', (e) => {
    buttonText = e.target.innerText;
    console.log('Button text is ', buttonText);
    if (buttonText == 'X') {
      buttonText = '*';
      screenValue += buttonText;
      screen.value = screenValue;
    }
    else if (buttonText == 'C') {
      screenValue = "";
      screen.value = screenValue;
    }
    else if (buttonText == '='){
			try{
				ans = eval(screenValue);	
				screen.value = ans;
				screenValue = ans;	
			}	
			catch{
				screen.value = "Error!";
				screenValue = ""
			}
		}
    else {
      screenValue += buttonText;
      screen.value = screenValue;
    }

  })
}