	const btns = document.querySelectorAll('button');

	btns.forEach((btn) => {

		btn.addEventListener('click', function(){

			// this.style.backgroundColor = "green";
			// console.log(this);


			// get the image of the product
			h4Node = this.parentNode;

			console.log(h4Node.previousSibling);
		})
	})