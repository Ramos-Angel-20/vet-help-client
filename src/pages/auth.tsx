import { MdOutlinePets } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import googleSvg from '../assets/google.svg';
import { useEffect } from 'react';

type AuthProps = {
  type: 'LOGIN' | 'REGISTER'
};

type Inputs = {
  username?: string,
  email: string,
  password: string,
  password2?: string
}

const Auth = ({ type }: AuthProps) => {

  const { register, handleSubmit, formState: { errors }, clearErrors } = useForm<Inputs>();

  const formSubmitHandler: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  }

  useEffect(() => {
    clearErrors();
  }, [type]);

  return (
    <div className='auth'>
      <div className="auth__overlay">
        <div className="auth__overlay__content container">

          <div className='auth__overlay__content__main-text'>
            <p>Start using one of the best veterinary clinic management systems</p>
            <p>Total control of your clinic just a few clicks away...</p>
          </div>

          <form className="auth__overlay__content__form" onSubmit={handleSubmit(formSubmitHandler)}>
            <div className="auth__overlay__content__form__logo-field">
              <MdOutlinePets className="auth__overlay__content__form__logo-field__icon" />
              <h2>Vet-help</h2>
            </div>

            <div>
              {type === 'REGISTER' && <input type="text" placeholder="Username" autoComplete='off' {...register('username', { required: true })} />}
              {errors.username && <p className='auth__overlay__content__form__error-message'>Username is required.</p>}
            </div>

            <div>
              <input type="text" placeholder="Email" autoComplete='off' {...register('email', { required: true })} />
              {errors.email && <p className='auth__overlay__content__form__error-message'>Email is required.</p>}
            </div>

            <div>
              <input type="password" placeholder="Password" {...register('password', { required: true })} />
              {errors.password && <p className='auth__overlay__content__form__error-message'>Password is required.</p>}
            </div>

            <div>
              {type === 'REGISTER' && <input type="password" placeholder="Confirm your password" autoComplete='off' {...register('password2', { required: true })} />}
              {errors.password2 && <p className='auth__overlay__content__form__error-message'>Password confirmation is required.</p>}
            </div>

            <div className="auth__overlay__content__form__buttons-field">
              <button type='submit'>Login</button>
              <button> <img src={googleSvg} alt="google-icon" /> Continue with Google</button>
            </div>

            <div className='auth__overlay__content__form__link-field'>
              {type === 'LOGIN' ? <Link to="/auth/register">Dont have an account yet?</Link> : <Link to="/auth/login">Already have an account?</Link>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;