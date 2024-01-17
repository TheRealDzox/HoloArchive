import Image from 'next/image'

export default function Home() {
  return (
    <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <Image className='pointer-events-none' src="/content/images/HoloArchive.png" alt="HoloArchive" width={500} height={500} />
                    <h1 className='pt-6 font-bold text-xl'>Welcome to the HoloArchive!</h1>
                    <p className="pb-6">Here you can search for your favourite StarWars Characters and get information about them.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
        <div className='bg-base-200 text-center pb-40'>
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
    </div>
  )
}
