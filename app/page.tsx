/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';
import { useRouter } from 'next/navigation';
import CursorSpotlightCard from './components/CursorSpotlight/CursorSpotlightCard';
import CursorSpotlightHeading from './components/CursorSpotlight/CursorSpotlightHeading';
import CursorSpotlightText from './components/CursorSpotlight/CursorSpotlightText';
import Logo from './Icons/Logo';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const [logoTextColor, setLogoTextColor] = useState('');
  const [logo, setLogo] = useState(<Logo color={logoTextColor} />);

  useEffect(() => {
    if (resolvedTheme) {
      resolvedTheme.includes('darkNeutral') && setLogoTextColor('#b3b3b3');
      resolvedTheme.includes('light') && setLogoTextColor('#262626');
      resolvedTheme.includes('darkSlate') && setLogoTextColor('#e1e7ef');
      resolvedTheme.includes('darkGray') && setLogoTextColor('#e5e7eb');
      resolvedTheme.includes('darkZinc') && setLogoTextColor('#e4e4e7');
      resolvedTheme.includes('darkStone') && setLogoTextColor('#e7e5e4');
    }
    setMounted(true);
  }, [resolvedTheme]);

  useEffect(() => setLogo(<Logo color={logoTextColor} />), [logoTextColor]);

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
      router.push('/success');
    }
  }

  return (
    <div className='w-full h-full gap-8 px-4 py-12 lg:px-16 lg:py-16 flex flex-col justify-start items-center max-w-4xl'>
      <div className='flex flex-col justify-start items-center w-full gap-5 px-4 text-center'>
        <div className='w-full px-8 max-w-lg logoColor'>{logo}</div>
        <CursorSpotlightHeading>Drop us a line!</CursorSpotlightHeading>
        <CursorSpotlightText>
          Interested in partnering with us for your next project? We would love to hear from you!
        </CursorSpotlightText>
        <CursorSpotlightText>
          If you are inquiring about Legends and Legacies, please select the 'Legends and Legacies'
          option in the Project Type dropdown and let us know how we can best assist you with your
          issue or question!
        </CursorSpotlightText>
      </div>
      <CursorSpotlightCard>
        <div className='w-full h-full'>
          <form
            className='flex flex-col justify-center items-center w-full h-full py-8 px-2 md:p-16 gap-5'
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
                <option value='Legends and Legacies'>Legends and Legacies</option>
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
