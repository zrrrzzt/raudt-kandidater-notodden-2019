import { useRouter } from 'next/router'
import Head from 'next/head'
import getCandidate from '../lib/get-candidate'
import Candidate from '../components/Candidate'
import Candidates from '../components/Candidates'

const Details = ({ candidate }) => {
  const router = useRouter()
  const { cid } = router.query
  candidate = getCandidate(cid)

  return (
    <div>
      <Head>
        <title>Rødt Notodden valg 2019</title>
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

Details.getInitialProps = async ({ req }) => {
  const path = req ? req.url : window.location.pathname
  const list = path.split('/')
  const cid = list.length > 0 ? list.pop() : 'cecilie'
  const candidate = getCandidate(cid)
  return { candidate: candidate }
}

export default Details
