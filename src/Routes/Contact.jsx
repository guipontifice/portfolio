import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { send } from 'emailjs-com';
import emailjs from '@emailjs/browser';

function Contact() {
  const { t } = useTranslation();
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Form data:', data);
    const name = e.target.name;
    const value = e.target;
    emailjs.sendForm(
      'service_u8izo9r',
      'template_dxcy0cs',
      '#form',
      'Gl_x2lye0DN17h_E9'
    )
      .then((response) => {
        console.log('IT WORKED', response.status, response.text)
      })
      .catch((err) => {
        console.log("IT DIDN'T WORKED", err)
      })
  }
  return (
    <>
      <div className='xxs:hidden xs:hidden sm:hidden flex flex-col justify-start mt-40 font-roboto w-8/12 dark:text-white text-black'>
        <div className='ml-5'>
          <h1 className='font-bold text-4xl dark:text-white text-black w-9/12'>{t('contact_title')}</h1>
        </div>
        <div className='m-5  flex flex-col justify-start'>
          <div className='flex flex-col mt-2'>
            <form method='post' id='form' className='w-3/6' onSubmit={handleSubmit}>
              <label className='flex flex-col'>
                {t('contact_name')}
                <input type="text" name="name" onChange={handleChange} value={data.name} className='hover:border rounded-md dark:bg-zinc800 text-gray cursor-pointer mt-2' />
              </label>
              <label className='flex flex-col mt-2'>
                {t('contact_email')}
                <input type="text" name="email" onChange={handleChange} value={data.email} className='hover:border rounded-md dark:bg-zinc800 text-gray cursor-pointer mt-2' placeholder='username@email.com' />
              </label>
              <label className='flex flex-col mt-2'>
                {t('contact_message')}
                <input type="text" name="message" onChange={handleChange} cols='30' value={data.message} className='hover:border rounded-md dark:bg-zinc800 text-gray cursor-pointer mt-2 h-32' />
              </label>
              <input type="file"
                name='file'
                onChange={handleChange}
                className="file:cursor-pointer block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100 mt-3 cursor-pointer" />
              <button onClick={handleSubmit} type='button' className='mt-3 py-2 px-4 border-2 rounded-full text-sm font-bold dark:hover:bg-white hover:bg-black dark:hover:text-zinc900 hover:text-gray dark:hover:border-zinc900 hover:border-gray'>{t('contact_submit')}</button>
            </form>
          </div>

          <div className='flex flex-row justify-start mt-10'>
            <a
              href='mailto:guipontifice.dev@gmail.com'
              className=' text-2xl m-2 cursor-pointer'
              aria-label='Email'
              rel='noopener'
              target='_blank'
            >
              <ion-icon name="mail-outline"></ion-icon>
            </a>
            <a
              href='https://github.com/guipontifice'
              className=' text-2xl m-2 cursor-pointer'
              aria-label='GitHub'
              rel='noopener'
              target='_blank'
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
            <a
              href='https://www.linkedin.com/in/guilhermepontifice'
              className=' text-2xl m-2 cursor-pointer'
              aria-label='Linkedin'
              rel='noopener'
              target='_blank'
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </div>
        </div>
      </div>
      <div className='md:hidden lg:hidden xl:hidden 2xl:hidden mr-4 mt-20 font-roboto w-11/12  flex flex-col'>
        <div className='mt-5'>
          <h1 className='font-bold text-4xl dark:text-white text-black w-11/12'>{t('contact_title')}</h1>
        </div>
        <form method='post' id='form' className='w-4/6 dark:text-white text-black' onSubmit={handleSubmit}>
          <label className='flex flex-col'>
            {t('contact_name')}
            <input type="text" name="name" onChange={handleChange} value={data.name} className='hover:border rounded-md dark:bg-zinc800 bg-gray cursor-pointer mt-2' />
          </label>
          <label className='flex flex-col mt-2'>
            {t('contact_email')}
            <input type="text" name="email" onChange={handleChange} value={data.email} className='hover:border rounded-md dark:bg-zinc800 bg-white cursor-pointer mt-2' placeholder='username@email.com' />
          </label>
          <label className='flex flex-col mt-2'>
            {t('contact_message')}
            <input type="text" name="message" onChange={handleChange} cols='30' value={data.message} className='hover:border rounded-md dark:bg-zinc800 bg-gray cursor-pointer mt-2 h-32' />
          </label>
          <input type="file"
            name='file'
            onChange={handleChange}
            className="file:cursor-pointer block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100 mt-3 cursor-pointer" />
          <button onClick={handleSubmit} type='button' className='mt-3 py-2 px-4 border-2 rounded-full text-sm font-bold dark:hover:bg-white hover:bg-black dark:hover:text-zinc900 hover:text-gray dark:hover:border-zinc900 hover:border-gray '>{t('contact_submit')}</button>
        </form>
      </div>
    </>
  )
}

export default Contact