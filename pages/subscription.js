import { FaCheck } from 'react-icons/fa'
import Button from '../components/Button'

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

export default function Example() {
  return (
    <section className="w-full py-10 lg:gap-6 lg:py-16">
    <div className="mx-auto w-full lg:py-16 lg:px-6">
        <div className="mx-auto w-full text-center mb-8 lg:mb-12">
            <h2 className="font-volkhov mb-4 text-4xl tracking-tight font-extrabold text-brand">Designed for business teams like yours</h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        </div>
        <div className="w-full flex flex-wrap gap-8">
            {/* <!-- Pricing Card --> */}
            <div className="shadow-xl hover:shadow-lightRed flex flex-col p-6 mx-auto max-w-md text-center text-gray-900 bg-white rounded-lg border border-gray-100xl:p-8">
                <h3 className="font-volkhov mb-4 text-2xl font-semibold">Starter</h3>
                <p className="font-light text-gray-500 sm:text-lg">Best option for personal use & for your next project.</p>
                <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">$79</span>
                    <span className="text-gray-500">/month</span>
                </div>
                {/* <!-- List --> */}
                <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Individual configuration</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>No setup, or hidden fees</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Team size: <span className="font-semibold">1 developer</span></span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Premium support: <span className="font-semibold">6 months</span></span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Free updates: <span className="font-semibold">6 months</span></span>
                    </li>
                </ul>
                <Button text='Subscribe' />
            </div>
            {/* <!-- Pricing Card --> */}
            <div className="shadow-xl hover:shadow-lightRed flex flex-col p-6 mx-auto max-w-md text-center text-gray-900 bg-white rounded-lg border border-gray-100">
                <h3 className="font-volkhov mb-4 text-2xl font-semibold">Company</h3>
                <p className="font-light text-gray-500 sm:text-lg">Relevant for multiple users, extended & premium support.</p>
                <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">$799</span>
                    <span className="text-gray-500">/year</span>
                </div>
                {/* <!-- List --> */}
                <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Individual configuration</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>No setup, or hidden fees</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Team size: <span className="font-semibold">10 developers</span></span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Premium support: <span className="font-semibold">24 months</span></span>
                    </li>
                    <li className="flex items-center space-x-3">
                        {/* <!-- Icon --> */}
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        <span>Free updates: <span className="font-semibold">24 months</span></span>
                    </li>
                </ul>
                <Button text='Subscribe' />

            </div>
        </div>
    </div>
  </section>
    )
}

