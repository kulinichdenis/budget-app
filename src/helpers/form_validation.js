import yup from 'yup'

export default yup.object({
	name: yup.string().required('please enter Name'),
	cost: yup.number().label('Cost').positive().min(1).max(9999999, 'max number 9999999').required('please enter Cost'),
	percent: yup.string(),
	group: yup.string()  
});