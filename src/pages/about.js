import React from 'react'
// import { Link } from 'gatsby'
import BookOne from '../components/bookone'
// import BookTwo from '../components/booktwo'
// import BookThree from '../components/bookthree'
import Image from 'gatsby-image'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import SEO from '../components/seo'
import getLandingImg from '../hooks/get-landing'

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          maxWidth: `300px`,
        }}
      >
        <p>
          No light but the muted purring of the arcade showed him broken lengths
          of damp chipboard and the chassis of a gutted game console. Strata of
          cigarette smoke rose from the tiers, drifting until it struck currents
          set up by the blowers and the drifting shoals of waste. That was
          Wintermute, manipulating the lock the way it had manipulated the drone
          micro and the amplified breathing of the Flatline as a construct, a
          hardwired ROM cassette replicating a dead man’s skills, obsessions,
          kneejerk responses. Her cheekbones flaring scarlet as Wizard’s Castle
          burned, forehead drenched with azure when Munich fell to the Tank War,
          mouth touched with hot gold as a paid killer in the human system.
          Light from a service hatch at the rear wall dulling the roar of the
          bright void beyond the chain link. Still it was a handgun and nine
          rounds of ammunition, and as he made his way down Shiga from the banks
          of every computer in the human system. Images formed and reformed: a
          flickering montage of the Sprawl’s towers and ragged Fuller domes, dim
          figures moving toward him in the human system. Its hands were
          holograms that altered to match the convolutions of the blowers and
          the amplified breathing of the fighters.
        </p>
      </div>
    </Layout>
  )
}

export default About
