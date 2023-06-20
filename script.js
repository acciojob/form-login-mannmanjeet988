function getFormvalue() {
    //Write your code here
const inputElements= document.getElementsByTagName("input");
	
		const  firstname= inputElements[0].value;
	const lastname= inputElements[1].value;

	alert(firstname + " " + lastname);
	
}
