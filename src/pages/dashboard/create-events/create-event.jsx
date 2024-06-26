import EventLayout from '../../../components/events/Layout/Layout'
import React, { useState } from 'react'
import { Field, Formik } from 'formik'
import { Button } from '../../../components/ui/button';
import { useRef } from 'react';
import { CreateEventSchema } from '../../../helpers/formValidation';
import axiosInstance from '../../../helpers/AxiosConfig';
import { ethers } from 'ethers';
import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers/react';
import toast from 'react-hot-toast';
import {sha256} from 'crypto-hash';


const CreateEvent = () => {
  const fileRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const { walletProvider } = useWeb3ModalProvider()
  const {address} = useWeb3ModalAccount()

  return (
    <EventLayout>
      <div className="flex flex-col mdl:flex-row justify-between mx-3 my-3">
        <h1 className="font-bold text-2xl mdl:text-4xl text-[#fff]">
          Create your next event
        </h1>
      </div>
      <Formik
        initialValues={
          {
            name: "",
            description: "",
            city: "",
            country: "",
            start_date: new Date(),
            end_date: new Date(),
            expiry_date: new Date(),
            event_url: "https://poap.xyz",
            virtual_event: false,
            image: "",
            email: "",
            event_template_id: 1,
            private_event: false,
            notify_issuer: true,
            requested_codes: 10,
            start_time: "00:00",
            end_time: "00:00",
            // secret_code: "",
            // signature: "",
            organizer: address,
          }}
        validationSchema={CreateEventSchema}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          const toast1 = toast.loading('Creating Events')
          // console.log(values)
          values.secret_code = (await sha256(values.description)).slice(0,6)
          values.expiry_date = values.end_time.split("T")[0];
          values.end_date = values.end_time.split("T")[0];
          values.start_date = values.start_time.split("T")[0];
          const formData = new FormData();
          Object.keys(values).forEach((key) => {
            if (key === 'image') {
              formData.append(key, values[key]); // Append the image file with filename
            } else {
              formData.append(key, values[key]); // Append other values
            }
          });
          const provider = new ethers.BrowserProvider(walletProvider)
          try {
            const signer = await provider.getSigner();
            const signature = await signer.signMessage(JSON.stringify(values))
            console.log(values)
            await axiosInstance.post('/events', formData);
            toast.remove(toast1);
            toast.success("Event Created")
            // console.log(formData)
          } catch (error) {
            toast.remove(toast1)
            toast.error("error creating event")
            console.log(error)
          }
        }
        }
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="grid gap-6 mdl:p-8 mdl:m-12 m-1 rounded-3xl bg-[#222222]/50" encType="multipart/form-data">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-4">

              <div className='flex flex-col gap-2'>
                <label className="text-white text-2xl font-normal whyte leading-loose ">
                  Event name
                </label>
                <Field type="text" name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name} placeholder={"input your name"} className=" text-white rounded-lg h-12 p-4 text-opacity-60 text-base font-normal leading-none font-mono bg-transparent border" />
                <div className='text-red'>
                  {errors.name && touched.name && errors.name}
                </div>

              </div>

              <div className='flex flex-col gap-2'>
                <label className="text-white text-2xl font-normal whyte leading-loose ">
                  Email
                </label>
                <Field type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email} placeholder={"input your mail"} className=" text-white rounded-lg h-12 p-4 text-opacity-60 text-base font-normal leading-none font-mono bg-transparent border" />
                <div className='text-red'>
                  {errors.email && touched.email && errors.email}
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <label className="text-white text-2xl font-normal whyte leading-loose ">
                  City
                </label>
                <Field
                  type="text"
                  name="city"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                  placeholder={"input event city"}
                  className=" text-white rounded-lg h-12 p-4 text-opacity-60 text-base font-normal leading-none font-mono bg-transparent border"
                />
                <div className='text-red'>
                  {errors.city && touched.city && errors.city}
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <label className="text-white text-2xl font-normal whyte leading-loose ">
                  Country
                </label>
                <Field
                  type="text"
                  name="country"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.country}
                  placeholder={"input event country"}
                  className=" text-white rounded-lg h-12 p-4 text-opacity-60 text-base font-normal leading-none font-mono bg-transparent border"
                />
                <div className='text-red'>
                  {errors.country && touched.country && errors.country}
                </div>
              </div>
            
              <div className='flex flex-col gap-2'>
                <label className="text-white text-2xl font-normal whyte leading-loose ">
                  Category
                </label>
                <Field as="select" name="eventCategory" onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.eventCategory}
                  placeholder={"Describe your event..."} className=" text-white rounded-lg h-12 p-4 pr-4 text-opacity-60 text-base font-normal leading-none font-mono bg-transparent border">
                  <option value={false} >Free</option>
                  <option value={false} >Paid</option>
                  <option value={true}>Private</option>
                </Field>
                <div className='text-red'>
                  {errors.eventCategory && touched.eventCategory && errors.eventCategory}
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <label className="text-white text-2xl font-normal whyte leading-loose ">
                  Type
                </label>
                <Field as="select" name="virtual_event" onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.virtual_event} className=" text-white rounded-lg h-12 p-4 text-opacity-60 text-base font-normal leading-none font-mono bg-transparent border"

                > <option value={false} >Physical</option>
                  <option value={true}>Virtual_event</option>
                </Field>
                <div className='text-red'>
                  {errors.virtual_event && touched.virtual_event && errors.virtual_event}
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <label className="text-white text-2xl font-normal whyte leading-loose ">
                  Start Date & Time
                </label>
                <Field name="start_time" type="datetime-local" onChange={handleChange} onBlur={handleBlur}
                  value={values.start_time} className=" text-white rounded-lg p-4 text-opacity-60 text-base font-normal leading-none font-mono bg-transparent border custom-calendar-icon"
                />
                <div className='text-red'>
                  {errors.start_time && touched.start_time && errors.start_time}
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <label className="text-white text-2xl font-normal whyte leading-loose ">
                  End Date & Time
                </label>
                <Field name="end_time" type="datetime-local" onChange={handleChange} onBlur={handleBlur}
                  value={values.end_time} className=" text-white rounded-lg p-4 text-opacity-60 text-base font-normal leading-none font-mono bg-transparent border "
                />
                <div className='text-red'>
                  {errors.end_time && touched.end_time && errors.end_time}
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-2 mx-4'>
              <label className="text-white text-2xl font-normal whyte leading-loose ">
                Description
              </label>
              <Field
                as="textarea"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                placeholder={"Describe your event..."}
                className=" text-white rounded-lg min-h-[150px] p-4 text-opacity-60 text-base font-normal leading-none font-mono bg-transparent border"
              />
              <div className='text-red'>
                {errors.description && touched.description && errors.description}
              </div>
            </div>
            <div className='flex flex-col gap-2 mx-4'>
              <label className="text-white text-2xl font-normal whyte leading-loose ">
                Event Banner
              </label>
              <input
  type="file"
  name="image"
  accept="image/*"
  ref={fileRef}
  onChange={(event) => {
    const file = event.target.files[0];
    handleChange({
      target: {
        name: "image",
        value: file, // Pass the file object itself
      },
    });
  }}
  onBlur={handleBlur}
  className="text-white rounded-lg h-12 p-4 text-opacity-60 text-base font-normal leading-none font-mono bg-transparent border"
/>
              {preview && <img src={preview} alt="Preview" className="w-[200px] h-[200px] mt-2" />}
              <div className='text-red'>
                {errors.image && touched.image && errors.image}
              </div>
            </div>

            <Button type="submit" disabled={isSubmitting} className="m-4 lg:w-2/5 rounded-xl bg-white text-black">
              {isSubmitting ? "Creating Event..." : "Create Event"}
            </Button>
          </form>
        )}
      </Formik>


    </EventLayout>
  )
}

export default CreateEvent