import { useState } from 'react';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
      <Year>2018</Year>
      <ul>
      <Step title="Took my first workshop 🔨 ">
          Applied for Google Summer of Code with Mifos Initative for the mifos-mobile-cn project.
        </Step>
      <Step title="Applied for GSoC with Mifos Initative 😇">
          Applied for Google Summer of Code with Mifos Initative for the mifos-mobile-cn project.
        </Step>
        <Step title="First Hackathon">
          Participated in First Hackathon, Galileo Hackathon by GNSS.
        </Step>
        <Step title="Contributing to Mifos Initiative">
          Found a really good project the fits me mifos-mobile-cn,
           the project is in its initial phase of development seems like a good choice to start with this will help me
            paralley apply the new things I am learning in Android.
        </Step>
        <Step title="Started Learning Android Developemnt 👾">
          Having some past experience with Java this seems like a pertty easy choics for me, This is my first introduction to the world of Software Engineering.
        </Step>
        <Step title="Joind amFOSS">
          amFOSS is the student run open source club of Amrita Vishwa Vidyapeethem, Amritapuri.
        </Step>
        <Step title="Joined Amrtia Vishwa Vidyapeethem 👨‍🎓">
          After writing so many examinations and studying hard for a long time got into
          Amrita School of Enginnering for a manjor in Computer Science and Engineering.
        </Step>
      </ul>
    <Divider />
    <Year>2000</Year>
    <ul>
      <Step title="Born 👶🏼🍼" />
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2020</Year>
      <ul>
        <Step title="Moving to NLP 🤭">
          Recently I am very excited by Natual language processing, 
          started working on tableQA an AI tool for querying natual langauge on tabluar data. 
        </Step>
        <Step title="Invited to attend mentor summit for google Summer of Code 2020 💯">
          Generally only a few mentors are invited to this event,
           all thanks to COVID-19 this time all mentors are invited to the event.
        </Step>
        <Step title="Completed Nano Degree 🏆">
          Completed deep learning nanodegree, this is just the beginning and I have yet to learn a lot.
        </Step>
        <Step title="Got Selected for HackMIT 🥳">
          This was the second time I applied for HackMIT,
           last time I was rejected felt really bad but decided to figure out what we were missing out,
            It was stupid decision to optmize myself for clearing an application but In the process I was mostly improving myself.
            Lesson learned is to keep learning always and improve yourself.
        </Step>
        <Step title="Got Selected for Pytoch Hackathon 🥳">
          Started building Psychic CCTV, 
          I have high hopes for this project took a problem I faced in real life and solving the same.
        </Step>
        <Step title="Selected for AI Summer School">
          Got selected for AI summer school by singapore AI.
        </Step>
        <Step title="Participating in HackKP">
          Building an application using Deep Learning to classify android application as benign or malicious.
        </Step>
        <Step title="Mentoring for Google Summer of Code 🕴️">
        Mentored for the Mifos Mobile CN project, a reference mobile banking app on top of the ApacheFineract CN architecture, 
        which allows a client to securely authenticate against the micro services architecture and interact with his/her accounts. 
        Guided and helped in implementing Open BankingAPIs on top of WS02 API Gateway.  
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
      <Step title="Got a fully funded scholarship by Bertlasmann Tech">
          After three months of introduction challenge got selected for the Bertlsmann scholarship to 
          do deep-leanring nanodegree by Udacity.
        </Step>
        <Step title="Mentoring for Google Code-in 👨‍🏫">
        Mentored pre-university students under the Google Code-In program to help them contribute toopen source for all of the Android Projects in the Mifos Initiative.
        </Step>
        <Step title="Started Learning Deep Learning 🤔">
          Started Learning Deep Learning, fast.ai seems to be a good place for someone like me to begin with.
          Also following the tradition and going with the Andrew Ng course.
        </Step>
        <Step title="Participating in InOut 7.0">
          One of the Best Hackathon's I have even been to,
           building an Android Application which gamifies planintng trees.
        </Step>
        <Step title="Completed GSoC 2019 🎁">
          Its a wrap, Completed Google Summer of Code sucessfully and submited work report.
        </Step>
        <Step title="Took 2nd workshop">
          This time I am taking a workshop in my college as part of CIR road to excellence this workshop is also about Android Development 
          but with inclusion of Software Engineering practices.
        </Step>
        <Step title="Started working on Google Summer of Project">
          I got selected for Google Summer of Code with Mifos Initiative, My goals are to implementing the 
          client side screens by taking the Fineract CN APIs,
           figuring out consumer APIs and worked onimplementing data models along with migration of the entire project to Android-X
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
