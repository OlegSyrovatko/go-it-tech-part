import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Sign-Up page</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>  
          <TextField required label="Name" variant="outlined" name="name" value={name} onChange={handleChange} />
        </label>

        <label style={styles.label}>
          <TextField required label="E-mail" variant="outlined" name="email" value={email} onChange={handleChange} />
        </label>

        <label style={styles.label}>
          <TextField required type="password" label="Password" variant="outlined" name="password" value={password} onChange={handleChange} />
        </label>

        <Button variant="contained" type="submit">Sign-up</Button>
      </form>
    </div>
  );
}