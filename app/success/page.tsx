'use client';
import CursorSpotlightHeading from '../components/CursorSpotlight/CursorSpotlightHeading';
import CursorSpotlightText from '../components/CursorSpotlight/CursorSpotlightText';

export default function Success() {
  return (
    <div className='w-full h-full gap-8 p-16 flex flex-col justify-start items-center'>
      <div className='flex flex-col justify-start items-center w-full gap-5 px-4 text-center'>
        <CursorSpotlightHeading>Message Successfully Sent!</CursorSpotlightHeading>
        <CursorSpotlightText>
          Thanks for reaching out! We will contact you as soon as possible to discuss all of the
          details regarding your request!
        </CursorSpotlightText>
      </div>
    </div>
  );
}
