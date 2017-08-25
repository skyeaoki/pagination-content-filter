const page = document.querySelector('.page')
const studentUnorderedList = document.querySelector('ul.student-list');
const studentListItems = document.querySelectorAll('li.student-item');


function showPage(pageNumber, studentList) {
	// hide all students on the page
	for(let i = 0; i < studentList.length; i++) {
		studentList[i].style.display = 'none';
	}
	
	// loop through all students in the student list argument
	for(let i = 0; i < studentList.length; i++) {
		// if student belongs on this page show them
		if ( (i+1) >= (pageNumber * 10 - 9) && (i+1) <= (pageNumber * 10)  ) {
			let studentItem = studentList[i];
			studentItem.style.display = 'block';
		} 
	}
}


function appendPageLinks(studentList) {
    // determine how many pages for this student list 
	const numberOfPages = Math.ceil(studentList.length / 10);
   
	// create a pagination section and give it a class of pagination
	const pagination = document.createElement('div');
	pagination.className = 'pagination';
	
	// add an opening unordered list within the pagination section
	pagination.innerHTML += '<ul>';
		
    // add links for every page needed for the student list
	for(i=0; i < numberOfPages; i++) {
		pagination.innerHTML += '<li>' + '<a href="#">' + (i+1) + '</a>' + '</li>';
	}
	
	// add closing unordered list tag to the paination section
	pagination.innerHTML += '</ul>';
	
	// append the pagination section to the page
	page.appendChild(pagination);
	
	// store pagination links in a variable called paginationLinks
    const paginationLinks = document.querySelectorAll('.pagination a');	
		
	// apply the class 'active'to link 1 as default
	paginationLinks[0].className = 'active';	
	
	// apply an event listener for click to all the links
	for (let i =0; i < paginationLinks.length; i++) {
		paginationLinks[i].addEventListener('click', () => {
		
		// remove active class from all the links
		for (let i=0; i < paginationLinks.length; i++) {
			paginationLinks[i].className='';
		}
		
		// store the clicked number in a variable named clickedPageNumber
		let clickedPageNumber = paginationLinks[i].textContent;
		
		// use the showPage function to display the page for the link clicked
		showPage(clickedPageNumber, studentListItems);
		
		// mark that link as “active”
		paginationLinks[i].className = 'active';
		});
	}
}


// show first page by default
showPage(1, studentListItems);

// run appendPageLinks
appendPageLinks(studentListItems);





