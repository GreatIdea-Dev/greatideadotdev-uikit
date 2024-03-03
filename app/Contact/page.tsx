'use client';
import CursorSpotlightCard from '../components/CursorSpotlight/CursorSpotlightCard';
import CursorSpotlightHeading from '../components/CursorSpotlight/CursorSpotlightHeading';
import CursorSpotlightText from '../components/CursorSpotlight/CursorSpotlightText';

export default function Contact() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: 'ea67efe1-0b54-4409-a013-e49ad616bfc6',
        name: formData.get('name'),
        email: formData.get('email'),
        projectType: formData.get('projectType'),
        message: formData.get('message'),
      }),
    });
    const result = await response.json();
    if (result.success) {
      window.alert(result);
    }
  }

  return (
    <div className='w-full h-full gap-8 p-16 flex flex-col justify-start items-center'>
      <div className='flex flex-col justify-start items-center w-full gap-5 px-4 text-center'>
        <CursorSpotlightHeading>Great Idea Development</CursorSpotlightHeading>
        <CursorSpotlightText>
          Interested in partnering with us for your next project? We would love to hear from you!
        </CursorSpotlightText>
      </div>
      <CursorSpotlightCard>
        <div className='w-full h-full'>
          <form
            className='flex flex-col justify-center items-center w-full h-full p-16 gap-5'
            onSubmit={handleSubmit}
          >
            <div className='formInputContainer'>
              <label htmlFor='name'>Name</label>
              <input
                className='formInput'
                type='text'
                name='name'
                required
                placeholder='Your name'
              />
            </div>
            <div className='formInputContainer'>
              <label htmlFor='email'>Email</label>
              <input
                className='formInput'
                type='email'
                name='email'
                required
                placeholder='email@example.com'
              />
            </div>
            <div className='formInputContainer'>
              <label htmlFor='projectType'>Project Type</label>
              <select className='formSelect' name='projectType'>
                <option value='Frontend Development'>Frontend Development</option>
                <option value='Backend Development'>Backend Development</option>
                <option value='Mobile Development'>Mobile Development</option>
                <option value='Consulting'>Consulting</option>
                <option value='Other'>Other (Specify Below)</option>
              </select>
            </div>
            <div className='formInputContainer'>
              <label htmlFor='message'>Message</label>
              <textarea
                className='formTextArea'
                name='message'
                required
                placeholder='Enter Message'
              ></textarea>
            </div>
            <button className='formButton' type='submit'>
              Submit Form
            </button>
          </form>
        </div>
      </CursorSpotlightCard>
    </div>
  );
}
