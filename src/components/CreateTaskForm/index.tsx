import { useForm } from 'react-hook-form';
import styles from './styles.module.css';
import { Input } from '../ui/Input';

type CreateTaskFormData = {
  task: string;
};

export function CreateTaskForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTaskFormData>();

  const onSubmit = () => {
    console.log('submit');
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.row}>
        <Input
          label='Task'
          id='task'
          type='text'
          registration={register('task', { required: true })}
        />
        {errors.task && <span>This field is required</span>}
      </div>
      <div className={styles.row}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          libero.
        </p>
      </div>
      <div className={styles.row}>
        <p>Ciclos</p>
        <p>0 0 0 0 0 0</p>
      </div>
      <div className={styles.row}>
        <button type='submit'>Criar Task</button>
      </div>
    </form>
  );
}
