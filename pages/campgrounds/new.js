import Head from 'next/head'
import axios from 'axios'
import { useRouter } from 'next/router'
import Form from '../../components/Form'
import Image from 'next/image'
import illustration from '../../public/camping.svg'
import { FaCampground } from 'react-icons/fa'
import { storage } from '../../util/firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'

const NewCampground = () => {
  const router = useRouter()

  const uploadAndGetImgUrls = async images => {
    return await Promise.all(
      images.map(async img => {
        const imageId = v4()
        const imgRef = ref(storage, `images/${imageId}`)
        await uploadBytes(imgRef, img)

        return await getDownloadURL(imgRef)
      })
    )
  }

  const addCampground = async (data, images) => {
    const imgUrls = await uploadAndGetImgUrls(images)
    await axios.post('/api/campgrounds', { ...data })
    router.push('/campgrounds')
  }

  return (
    <>
      <Head>
        <title>YelpCamp | New Campground</title>
      </Head>
      <section className='flex items-center gap-16 py-12'>
        <div className='mx-auto max-w-full lg:mx-0 lg:flex-1'>
          <h3 className='mb-8 flex items-center gap-2 text-left font-volkhov text-2xl font-bold md:gap-4 md:text-3xl lg:text-4xl'>
            <FaCampground />
            Add a Campground
          </h3>
          <Form
            btnText={'Submit'}
            submitForm={addCampground}
            className='mx-auto w-full lg:mx-0'
          />
        </div>
        <Image
          src={illustration}
          className='hidden max-w-[50%] flex-1 self-center lg:block'
          alt='man campging'
        />
      </section>
    </>
  )
}

export default NewCampground
