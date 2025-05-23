import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoStacerDark from '@/images/clients/stacer/stacer-on-dark.svg'
import logoLSD from '@/images/clients/lsd/lsd-on-dark.svg'
import imageLaptop from '@/images/laptop.jpg'

import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Stacer', logoStacerDark],
  ['LSD', logoLSD],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Helping satisfied customers
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client} className="flex items-center">
                <FadeIn>
                  <Image 
                    src={logo} 
                    alt={client} 
                    unoptimized 
                    className="h-8 w-auto max-w-full object-contain"
                  />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <div className="relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32 mt-20">
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <SectionIntro
        title="We don't hope it works. We know it works."
        className="mt-5 sm:mt-10 lg:mt-15"
      >
        <p>
          We've replaced wishful thinking with CI pipelines, multi-level test,
          and mild paranoia.
        </p>
      </SectionIntro>
      {/* <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container> */}
    </div>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We build things that work now, and work later."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Immediate results, long-term reliability. We develop systems that are
          engineered to handle the next challenge, before it even arrives.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              We specialise in crafting beautiful, high quality websites.
            </ListItem>
            <ListItem title="Application development">
              From beginng to end, we build custom applications that help you
              and your business get the job done.
            </ListItem>
            <ListItem title="Education">
              Empowering your team with the skills they need to thrive. We provide
              tailored training and hands-on learning experiences that turn knowledge
              into action.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    ' we understand the importance of quality and usability in software',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
            Crafting High-Quality Software Systems
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We understand the importance of quality and usability in software.
            Which is why, if we build it for you, it will be built right.
          </p>
        </FadeIn>
      </Container>

      <Clients />


      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'LSD', logo: logoLSD }}
      >
        The QualityBits team went above and beyond to find the rough edges in our product.
        They were able to increase our sells to ??%.
      </Testimonial> */}

      <Services />

      <CaseStudies caseStudies={caseStudies} />

      <ContactSection />
    </>
  )
}
