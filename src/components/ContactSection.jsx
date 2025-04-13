import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 p-10 sm:mx-0 sm:py-12">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-medium [text-wrap:balance] text-white sm:text-4xl">
            Tell us about your project
          </h2>
          <div className="mt-6 flex">
            <Button href="/contact" invert>
              Say Hey
            </Button>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
