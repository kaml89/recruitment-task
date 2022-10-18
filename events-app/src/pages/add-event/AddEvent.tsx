import styles from './index.module.css';
import AddEventForm from '../../components/features/events/add-event-form/AddEventForm';
import EventsList from '../events-list/EventsList';

const AddEvent = () => {
  return (
    <div className={styles.container}>
      <AddEventForm />
      <EventsList/>
    </div>
  );
}

export default AddEvent;