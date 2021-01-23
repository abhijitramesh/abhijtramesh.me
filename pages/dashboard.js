import Link from 'next/link';

import Analytics from '@/components/metrics/Analytics';
import Buttondown from '@/components/metrics/Buttondown';
import Container from '@/components/Container';
import GitHub from '@/components/metrics/Github';
import YouTube from '@/components/metrics/Youtube';
import TopTracks from '@/components/TopTracks';


export default function Dashboard() {
  return (
    <Container
      title="Dashboard – Abhijit Ramesh"
      description="My personal dashboard"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Dashboard
        </h1>
        <div className="mb-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This is my personal dashboard, The goal of this dashboard is to track various metrices across platfroms like Youtube, Github and more.
              <a className="text-gray-900 dark:text-gray-100 underline">
              </a>
          </p>
        </div>
        <div className="flex flex-col w-full">
          <YouTube />
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full">
          <Analytics />
          <GitHub />
        </div>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 my-2 w-full">
          <Buttondown />
        </div>
        <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Curious what I'm currently jamming to? Here's my top tracks on Spotify
          updated daily.
        </p>
        <TopTracks />
      </div>
    </Container>
  );
}
