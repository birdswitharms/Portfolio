import React from 'react';
import '../app/globals.css'
import Link from 'next/link'

export default function Experience() {
  return (
    <section className="flex min-h-screen flex-col justify-between p-24">
      <div>
        <div>
          <Link className="hover:underline" href="https://altrio.com/">Altrio <span>&#8594;</span></Link>
          <div className="text-sm">Sept 2022 - Oct 2023</div>
          <div className="text-sm">Altrio is a Canadian Series A startup building real estate investment software.</div>
        </div>
        <br />
        <br />
        <div>
          <Link className="hover:underline" href="https://www.willful.co/">Willful <span>&#8594;</span></Link>
          <div className="text-sm">Jan 2020 - Oct 2021</div>
          <div className="text-sm">Willful is a Canadian online Estate planning company, generating legal wills.</div>
        </div>
        <br />
        <br />
        <div>
          <Link className="hover:underline" href="https://planswell.com/">Planswell <span>&#8594;</span></Link>
          <div className="text-sm">June 2018 - Nov 2019</div>
          <div className="text-sm">Planswell is a financial retirement planning tool aiming to help Canadians live the lifestyle they want until retirement.</div>
        </div>
      </div>
    </section>
  )
}
