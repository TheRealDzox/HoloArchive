"use client";
import React, { useRef } from 'react'
import Image from 'next/image'
import ScrollInto from 'react-scroll-into-view';
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer'

export default function Home() {


  return (
    <div>
        <Navbar />
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <Image className='pointer-events-none' src="/content/images/HoloArchive.png" alt="HoloArchive" width={500} height={500} />
                    <h1 className='pt-6 font-bold text-xl'>Welcome to the HoloArchive!</h1>
                    <p className="pb-6">Here you can search for your favourite StarWars Characters and get information about them.</p>
                    <ScrollInto selector="#inputs">
                        <button className="btn btn-primary">Get Started</button>
                    </ScrollInto>
                </div>
            </div>
        </div>
        <div id='inputs' className='bg-base-100 text-center py-72'>
            <select className='select select-primary w-full max-w-xs'>
                <option disabled selected>Choose a category</option>
                <option>Characters</option>
                <option>Creatures</option>
                <option>Droids</option>
                <option>Locations</option>
                <option>Organisations</option>
                <option>Species</option>
                <option>Vehicles</option>
            </select>
            <input type='text' placeholder='Type here' className='input input-bordered w-full max-w-xs' />
        </div>
        <Footer />
    </div>
  )
}
