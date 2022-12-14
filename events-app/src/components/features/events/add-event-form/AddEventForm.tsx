import { Controller, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import DatePicker from 'react-datepicker';
import * as yup from "yup";
import styles from './index.module.css';
import Button from '../../../core/form/button/Button';

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  date: Date;
}

interface AddEventFormProps {
  onSubmit: SubmitHandler<IFormInputs>;
  loading: boolean;
}

const schema = yup.object({
  firstName: yup
    .string()
    .required('First name is required'),
  lastName: yup
    .string()
    .required('Last name is required'),
  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required'),
  date: yup
    .date()
    .required("Date is required")
    .min(new Date(),'Cannot pick past dates'),
}).required();

const AddEventForm = ({ onSubmit, loading }: AddEventFormProps) => {

  const { control, register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });

  return (
    <form 
      className={styles.form} 
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2>Add event</h2>
      <input 
        placeholder="First name"
        className={styles.input} 
        {...register("firstName")} 
      />
      <p className={styles.errorMessage}>
        {errors.firstName?.message}
      </p>
      <input 
        placeholder="Last name"
        className={styles.input} 
        {...register("lastName")} 
      />
      <p className={styles.errorMessage}>
        {errors.lastName?.message}
      </p>
      <input 
        type='email'
        placeholder="Email"
        className={styles.input} 
        {...register("email")} 
      />
      <p className={styles.errorMessage}>
        {errors.email?.message}
      </p>

      <div className={styles.dateInput}>
        <Controller 
          control={control}
          name="date"
          render={({field}) => {
            return (
              <DatePicker
                minDate={new Date()}
                customInput={<input className={styles.input}/>}
                onChange={(date) => field.onChange(date)}
                showTimeInput
                placeholderText="Select date"
                selected={field.value}
                />
            );
          }}
        />
        <p className={styles.errorMessage}>
          {errors.date?.message}
        </p>
      </div>
      
      <Button 
        style={{ marginTop: '20px'}}
        type='submit'
        onClick={()=>{}}
        isLoading={loading}
      >Submit
      </Button>

    </form>

  );
}

export default AddEventForm;