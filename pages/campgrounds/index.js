import { useState } from 'react'
import Head from 'next/head'
import { getCampgrounds } from '../../util/campgrounds'
import CampgroundCard from '../../components/CampgroundCard'
// map stuff
import ReactMapGl, { GeolocateControl, Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { FaMapMarked, FaListUl, FaThumbtack } from 'react-icons/fa'

const Campgrounds = ({ campgrounds, search, location }) => {
  // Map over the campgrounds to create JSX
  const renderCampgrounds = campgrounds.map(campground => (
    <li key={campground._id}>
      <CampgroundCard campground={campground} />
    </li>
  ))

  const renderMarkers = campgrounds.map(campground => (
    <Marker
      anchor='left'
      latitude={campground.location.coords.lat}
      longitude={campground.location.coords.long}
      children={<CampMarker camp={campground} />}
    />
  ))

  const [showMap, setShowMap] = useState(false)

  return (
    <>
      <Head>
        <title>YelpCamp | All Campgrounds</title>
      </Head>
      <section className='py-12'>
        <div className='mb-10 flex items-center justify-between'>
          <h2 className='font-volkhov text-3xl'>
            {search ? (
              <>
                Campgrounds in <span className='text-brand'>{location}</span>
              </>
            ) : (
              'Top Campgrounds'
            )}
          </h2>
          {showMap ? (
            <button
              className='flex items-center gap-2 rounded-md bg-blue p-2 text-white'
              onClick={() => setShowMap(false)}
            >
              <FaListUl />
              Show List
            </button>
          ) : (
            <button
              className='flex items-center gap-2 rounded-md bg-blue p-2 text-white'
              onClick={() => setShowMap(true)}
            >
              <FaMapMarked />
              Show Map
            </button>
          )}
        </div>

        {showMap ? (
          <div className='sticky top-0 right-0 hidden h-screen flex-[4] overflow-hidden rounded-xl lg:block'>
            <ReactMapGl
              mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_KEY}
              initialViewState={{
                latitude: campgrounds[0].location.coords.lat,
                longitude: campgrounds[0].location.coords.long,
                zoom: 4,
              }}
              mapStyle='mapbox://styles/dharmik403/cleh3wthw003g01qgpq5gxlk7'
              attributionControl={false}
            >
              {renderMarkers}
              <GeolocateControl position='top-left' trackUserLocation />
            </ReactMapGl>
          </div>
        ) : (
          <ul className='grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {renderCampgrounds}
          </ul>
        )}
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
  let { location } = context.query
  location = !!location ? location : null
  const search = !!location
  // Fetch campground data
  const campgrounds = await getCampgrounds({}, location)
  // Send the data as prop
  return {
    props: { campgrounds, search, location },
  }
}

const CampMarker = ({ camp }) => {
  return (
    <div className='flex items-center text-brand'>
      <FaThumbtack size={20} className='-rotate-45' />
      <p className='rounded-md bg-secondaryBg p-1'>{camp.name}</p>
    </div>
  )
}

export default Campgrounds
