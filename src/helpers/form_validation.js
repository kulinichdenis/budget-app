import yup from 'yup'

export default yup.object({
	name: yup.string().required('please enter name'),
	cost: yup.number().label('Cost').positive().min(1).max(10000000, 'max Cost 10000000'),
	percent: yup.string(),
	group: yup.string()  
});