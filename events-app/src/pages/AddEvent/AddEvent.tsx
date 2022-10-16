import styles from './index.module.css';
import AddEventForm from '../../components/AddEventForm/AddEventForm';
import EventsList from '../EventsList/EventsList';

const AddEvent = () => {
  return (
    <div className={styles.container}>
      <AddEventForm />
      <EventsList/>
    </div>
  );
}

export default AddEvent;