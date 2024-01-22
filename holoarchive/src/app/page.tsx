'use client';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import ScrollInto from 'react-scroll-into-view';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';

export default function Home() {
    const [output, setOutput] = React.useState<any[]>([]);
    const [inputValue, setInputValue] = React.useState<string>();
    const [selectValue, setSelectValue] = React.useState<string>();

    function fetchCharacters() {
        const url = `https://starwars-databank-server.vercel.app/api/v1/${selectValue}/${addPercent()}`;

        fetch(url)
            .then((response) => response.json())
            .then((output) => setOutput(output))
            .catch((error) => console.log(error));
    }

    function addPercent() {
        return inputValue?.replace(' ', '%20');
    }

    return (
        <div>
            <Navbar />
            <div className="hero min-h-screen bg-base-100">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <Image
                            className="pointer-events-none"
                            src="/content/images/HoloArchive.png"
                            alt="HoloArchive"
                            width={500}
                            height={500}
                        />
                        <h1 className="pt-6 font-bold text-xl">
                            Welcome to the HoloArchive!
                        </h1>
                        <p className="pb-6">
                            Here you can search for your favourite StarWars
                            Characters and get information about them.
                        </p>
                        <ScrollInto selector="#inputs">
                            <button className="btn btn-primary">
                                Get Started
                            </button>
                        </ScrollInto>
                    </div>
                </div>
            </div>
            <div id="inputs" className="bg-base-100 text-center pb-48">
                <select
                    onChange={(e) => setSelectValue(e.target.value)}
                    defaultValue={'DEFAULT'}
                    className="select select-primary w-full max-w-xs">
                    <option value="DEFAULT" disabled>
                        Choose a category
                    </option>
                    <option value="characters/name">Characters</option>
                    <option value="creatures/name">Creatures</option>
                    <option value="droids/name">Droids</option>
                    <option value="locations/name">Locations</option>
                    <option value="organizations/name">Organisations</option>
                    <option value="species/name">Species</option>
                </select>
                <input
                    type="text"
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                />
                <button
                    onClick={fetchCharacters}
                    className="btn btn-primary ml-3 mb-10">
                    Search
                </button>

                {output.map((item, index) => (
                    <div
                        key={index}
                        className="card card-side bg-base-300 shadow-xl md:mx-56">
                        <Image
                            placeholder="empty"
                            height={500}
                            width={500}
                            src={item.image}
                            alt="Character"
                        />
                        <div className="card-body text-left">
                            <h2 key={index} className="card-title">
                                {item.name}
                            </h2>
                            <p key={index}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}
