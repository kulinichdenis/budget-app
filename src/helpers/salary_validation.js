import yup from 'yup'

export default yup.object({
	salary: yup.number().max(10000000).positive().required()  
});