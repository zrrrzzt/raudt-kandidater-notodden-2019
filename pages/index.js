import React, { useState } from 'react'
import Head from 'next/head'
import candidates from '../lib/candidates'
import getCandidate from '../lib/get-candidate'
import Candidate from '../components/Candidate'

const Index = () => {
  const [candidate, setCandidate] = useState(getCandidate('cecilie'))

  const switchCandidate = event => {
    event.preventDefault()
    const cid = event.target.id
    setCandidate(getCandidate(cid))
  }

  return (
    <div>
      <Head>
        <title>Rødt Notodden valg 2019</title>
      </Head>
      <main>
        <h1>Rødt Notodden valg 2019</h1>
        <Candidate candidate={candidate} />
        <div className='candidates'>
          <h2>Flere flotte kandidater</h2>
          {candidates.map(candidate => <p key={`candidate-${candidate.id}`}>
            <a href='/' id={candidate.id} onClick={switchCandidate}>{candidate.name}</a></p>)}
        </div>
      </main>
      <style jsx global>
        {`
        body {
          margin: 0;
          padding: 0;
          font-family: GT Walsheim,Helvetica,sans-serif;
          background-color: white;
          color: #2e3c46;
          display: flex;
          justify-content: center;
        }
        main {
          width: 100%;
          margin: 0;
          padding: 0;
        }
        h1 {
          text-align: center;
        }
        .candidates {
          padding: 15px;
        }
        .candidates a, .candidates a:visited {
          color: #2e3c46;
        }
        .candidates a:hover, .candidates a:active {
          color: #e52437;
        }
        @media only screen and (min-width: 768px) {
          main {
            width: 500px;
          }
        }
      `}
      </style>
    </div>
  )
}

export default Index
