const contactList = [  
	{ 
		name: "Oliver Queen", 
		phone: "778-555-1234", 
		address: "101 Main St, Star City, USA",    
		email: "greenarrow@watchtower.com",  
	},   
	{    
		name: "Jessica Cruz",    
		phone: "123-555-5555",    
		address: "Portland Oregon",    
		email: "greenlantern@watchtower.com",  
	}
]


/* done */
function cleanUpIndex() {
	let classmain = document.querySelector('.main')
	classmain.innerHTML= ''
}


/* Done */
function createSingleIndex(contactList) {
	return `<a href="page3.html"><div class="contact"><p>${contactList.name}</p></div></a>`
}

/* Done */
function renderindex(contactLists) {
    let classmain = document.querySelector('.main')
    for (let i = 0; i < contactList.length; i++) {
        classmain.insertAdjacentHTML('beforeend', createSingleIndex(contactList[i]))
    }
}

/* done */
function cleanUpView() {
    let viewclass  = document.querySelector('.main')
    viewclass.innerHTML = ''
}

/* Somewhat Done */
function renderView(contactList) {
	let viewclass = document.querySelector('.main')
	for (let i = 0; i < contactList.length; i++) {
        viewclass.insertAdjacentHTML('beforeend', createSingleIndex(contactList[i]))
    }
}

/* Done */
function cleanUpCreate(){
	let classmain = document.querySelector('.main')
	classmain.innerHTML= ''
}

function renderCreate(contact) {
	return 
}





