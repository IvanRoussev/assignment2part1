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



function cleanUpIndex() {
	let classmain = document.querySelector('.main')
	classmain.innerHTML= ''
}


function createSingleIndex(contact) {
	return `<a href="page3.html"><div class="contact"><p>${contact.name}</p></div></a>`
}



function renderindex(contactList) {
    let classmain = document.querySelector('.main')
    for (let i = 0; i < contactList.length; i++) {
        classmain.insertAdjacentHTML('beforeend', createSingleIndex(contactList[i]))
    }
}

function cleanUpView() {
    let viewclass  = document.querySelector('.main')
    viewclass.innerHTML = ''
}

function renderView(contactList) {
	let viewclass = document.querySelector('.main')
	for (let i = 0; i < contactList.length; i++) {
        viewclass.insertAdjacentHTML('beforeend', createSingleIndex(contactList[i]))
    }
}

function cleanUpCreate(){
	let classmain = document.querySelector('.main')
	classmain.innerHTML= ''
}

