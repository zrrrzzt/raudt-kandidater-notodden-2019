import { useState } from 'react'
import Head from 'next/head'
import getCandidate from '../lib/get-candidate'
import Candidate from '../components/Candidate'
import Candidates from '../components/Candidates'

const Index = () => {
  const [candidate] = useState(getCandidate('cecilie'))

  return (
    <div>
      <Head>
        <meta name='description' content='Møt listekandidatene for Rødt Notodden til kommunevalget 2019' />
        <title>Rødt Notodden listekandidater valg 2019</title>
      </Head>
      <main>
        <h1>Rødt Notodden 2019</h1>
        <Candidate candidate={candidate} />
        <Candidates />
      </main>
      <style jsx global>
        {`
        body {
          margin: 0;
          padding: 0;
          font-family: Suisse, Helvetica, Arial;
          -webkit-font-smoothing: antialiased;
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
