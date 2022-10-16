import { Controller, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import DatePicker from 'react-datepicker';
import * as yup from "yup";
import { createEvent } from '../../services/events/createEvent';

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  date: Date;
}

const schema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  date: yup.date().required(),
}).required();

const AddEventForm = () => {

  const { control, register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });
  const onSubmit = async (data: IFormInputs) => {
    try {
      const response = await createEvent(data);
      console.log(response.data);

    } catch(error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <p>{errors.firstName?.message}</p>
      
      <input {...register("lastName")} />
      <p>{errors.lastName?.message}</p>
      <input {...register("email")} />
      <p>{errors.email?.message}</p>
      
      <Controller
        control={control}
        name="date"
        render={({field}) => {
          return (
            <DatePicker
              onChange={(date) => field.onChange(date)}
              showTimeInput
              placeholderText="Select date"
              selected={field.value}
            />
          );
        }}
      />
      {<p className="error">{errors.date?.message}</p>}
      
      <input type="submit" />
    </form>

  );
}

export default AddEventForm;