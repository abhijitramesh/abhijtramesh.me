import Timeline from '../components/Timeline';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, this is Abhijit Ramesh
        </h1>
        <h2 className="text-gray-600 dark:text-gray-400 mb-16">
          I'm a developer, I live mostly on the internet learning and building solutions using Machine Learning otherwise I would be working out or attending classes. 
          The best feeling in the world for me is when my code comes to life to serve purpose and make the lives of others easy.
        </h2>
        {/* <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Most Popular
        </h3>
        <BlogPost
          title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
          summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
          slug="style-guides-component-libraries-design-systems"
        />
        <BlogPost
          title="How Stripe Designs Beautiful Websites"
          summary="Examining the tips and tricks used to make Stripe's website design a notch above the rest."
          slug="how-stripe-designs-beautiful-websites"
        />
        <BlogPost
          title="Creating a Monorepo with Lerna & Yarn Workspaces"
          summary="In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process."
          slug="monorepo-lerna-yarn-workspaces"
        /> */}
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>
        <ProjectCard
          title="Semantic Similairy"
          description="State of the art implementation of sematic similarity using T5 using SNLI corpus of Stranford."
          href="https://github.com/abhijitramesh/semantic-similarity"
          icon='sematicsimilariy'
        />
        <ProjectCard
          title="tableQA"
          description="AI Tool for querying natural language on tabular data. TableQA uses huggingface transformers under the hood"
          href="https://github.com/abhijitramesh/tableQA"
          icon="tableqa"
        />
        <ProjectCard
          title="Psycic - CCTV"
          description="A video analysis tool which can analyse low quality video from CCTV footage which can enhance video quality using super resolution. The tool also provides features to extract objects using YOLO and split background audio to do forensics"
          href="https://github.com/Fireboltz/Psychic-CCTV"
          icon="fastfeedback"
        />
        <Timeline />
        <Subscribe />
      </div>
    </Container>
  );
}
