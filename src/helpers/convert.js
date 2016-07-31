export default (salary) => {
	if(salary === null) {
		return salary
	}

	if(salary.toString().length >= 10) {		
		return Number.parseInt(salary.toString().slice(0,10), 10)
	}
	
	return salary
}