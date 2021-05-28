//COPY EVENT////////////////////////////////////////

		const copy = document.querySelector('.copy-me');
		// console.log(copy);
		copy.addEventListener('copy', function(e){
			// console.log(e);
			// console.log('You copy me!');
			alert('Please Copyright!');
		});


//MOUSEOVER & MOUSEMOVE EVENT////////////////////////////////////

		const box = document.querySelector('.box');
		const boxTxt = document.querySelector('.box h2');
		// console.log(box);
		// console.log(boxTxt);

		box.addEventListener('mousemove' , function(e){
			// console.log(e.target);
			// console.log(e);
			// console.log(e.offsetX , e.offsetY);
			boxTxt.textContent = `x(${e.offsetX}) , y(${e.offsetY})`;

		});

//WHEEL EVENT/////////////////////////////////////////////////////
		const winCoords = document.querySelector('h5');
		// console.log(winCoords);
		document.addEventListener('wheel' , function(e){
			// console.log(e);
			// console.log(e.pageX , e.pageY);
			winCoords.innerHTML = `<h5>x(${e.pageX}) , y(${e.pageY}) in relation with the window (wheel event)</h5>`;

		});