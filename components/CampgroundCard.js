import Image from 'next/image'
import Link from 'next/link'
import LinkButton from './LinkButton'

const CampgroundCard = ({ campground }) => {
  return (
    <div
      key={campground._id}
      className='group flex flex-col gap-3 rounded-xl border border-lightBlue shadow-lg shadow-lightBlue hover:shadow-lg hover:shadow-lightRed'
    >
      <div className='relative'>
        <Image
          src={campground.images[0].url}
          width='450'
          height='450'
          className='h-80 w-full rounded-xl object-cover'
          alt={campground.name}
        />
        <LinkButton
          text='View More'
          linkTo={`/campgrounds/${campground._id}`}
          className='absolute right-1/2 bottom-4 w-fit translate-x-1/2 px-4 opacity-0 shadow-md lg:hover:border-primaryBg lg:hover:bg-primaryBg lg:group-hover:opacity-100'
        />
      </div>
      <div className='p-5'>
        <div className='flex items-center justify-between'>
          <h2 className='mb-2 text-2xl'>{campground.name}</h2>
          <p className='w-fit rounded-md bg-[#FFE7DB] py-1 px-2 font-medium text-brand'>
            ${campground.price}
          </p>
        </div>
        <Link
          href={`/campgrounds/${campground._id}`}
          className='text-brand lg:hidden'
        >
          View More
        </Link>
      </div>
    </div>
  )
}

export default CampgroundCard