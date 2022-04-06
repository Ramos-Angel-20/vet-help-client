import { IoLocationSharp } from 'react-icons/io5';
import { FaClipboardList } from 'react-icons/fa';
import { GoFileDirectory } from 'react-icons/go';
import { RiMapPinUserFill } from 'react-icons/ri';
// https://www.marquisware.com/

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero__overlay">
        <div className="hero__overlay__content container">

          <div className='hero__overlay__content__main'>
            <p>We provide all the tools you need to manage your vet clinic and enhance your service.</p>

            <div className="hero__overlay__content__buttons-field">
              <button>Get Started!</button>
              <button>Find one of our affiliate clinics near to you <IoLocationSharp /></button>
            </div>
          </div>

          <div className="hero__overlay__content__services">
            <div className='hero__overlay__content__services__service'>
              <div className='hero__overlay__content__services__service__icon-field'>
                <FaClipboardList />
              </div>
              <p>Full control over your appointments.</p>
            </div>
            <div className='hero__overlay__content__services__service'>
              <div className='hero__overlay__content__services__service__icon-field'>
                <GoFileDirectory />
              </div>
              <p>Keep your patients records well organized.</p>
            </div>
            <div className='hero__overlay__content__services__service'>
              <div className='hero__overlay__content__services__service__icon-field'>
                <RiMapPinUserFill />
              </div>
              <p>Show information about your clinic on a public map.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;