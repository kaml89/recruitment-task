import styles from './index.module.css';
import { useState } from 'react';
import { EventsService } from '../../services/events';
import AddEventForm from '../../components/features/events/add-event-form/AddEventForm';
import { toast } from 'react-toastify';
import { SubmitHandler } from 'react-hook-form';

interface IFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  date: Date;
}

const AddEvent = () => {

  const [ loading, setLoading ] = useState<boolean>(false)

  const handleSubmit: SubmitHandler<IFormInputs> = async (data: any) => {
    try {

      setLoading(true);
      const response = await EventsService.create(data);
      // alert(`Event has been successfully added ${JSON.stringify(response.data)}`)
      toast('Event has been successfully added');
      setLoading(false);

    } catch(error: any) {
      error.response?.data?.errors?.forEach((item: any) => toast(item.msg));
      setLoading(false);
    }
  }
  
  return (
    <div className={styles.container}>
      <AddEventForm onSubmit={handleSubmit} loading={loading}/>
    </div>
  );
}

export default AddEvent;