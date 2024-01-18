"use client";
import React, { use } from 'react'
import Navbar from '@/components/ui/navbar'
import Footer from '@/components/ui/footer';
import { useState, useEffect } from 'react';

export default function Home() {

  return (
    <div>
        <Navbar />
        <div className='bg-base-100 text-center py-32'>
            <article>
                <div className=' mx-48 text-left'>
                    <h1 className='pt-6 font-bold text-3xl'>About</h1>
                    <div className='divider'></div>
                    <h2 className='pt-6 font-bold text-xl'>Copyright</h2>
                    <p>HoloArchive and Its Affiliation with Disney and Lucasfilm </p>
                    <br/>
                    <p>HoloArchive, including its website, products, and services, is an independent entity and is not endorsed, sponsored, or affiliated in any way with Disney or Lucasfilm. Any references to Disney, Lucasfilm, or their respective intellectual properties are made solely for descriptive purposes and do not imply any endorsement or partnership.</p>
                    <br/>
                    <p>All trademarks, logos, and copyrighted material pertaining to Disney and Lucasfilm remain the exclusive property of their respective owners. HoloArchive does not claim ownership of any Disney or Lucasfilm intellectual property and operates as a separate and distinct entity.</p>
                </div>
            </article>
        </div>
        <Footer />
    </div>
  )
}
