import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn>
          <h2 className="font-display text-3xl font-medium [text-wrap:balance] text-white sm:text-4xl">
            Tell us about your project
          </h2>
        </FadeIn>
        <div className="mt-10">
          <FadeIn>
            <div className="max-w-xl">
              <div className="mt-6 flex">
                <Button href="mailto:qualitybitshelp@gmail.com" invert>
                  Email us
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  )
}
