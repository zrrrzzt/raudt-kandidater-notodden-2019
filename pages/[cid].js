import { useRouter } from 'next/router'
import Head from 'next/head'
import getCandidate from '../lib/get-candidate'
import Candidate from '../components/Candidate'
import Candidates from '../components/Candidates'

const Details = ({ candidate }) => {
  const router = useRouter()
  const { cid, profile } = router.query
  candidate = getCandidate(cid)
  return (
    <div>
      <Head>
        <title>{candidate.name} - Rødt Notodden</title>
        <meta name='description' content={candidate.statement} />
        <meta property='og:title' content={`${candidate.name}`} />
        <meta property='og:description' content={candidate.statement} />
        <meta property='og:image' content={`https://2019.kandidater.notodden.raudt.party/static/images/${candidate.profileImage}`} />
        <meta property='og:type' content='article' />
        <meta property='og:site_name' content='Rødt Notodden - listekandidater til kommunevalget 2019' />
        <meta property='og:url' content={`https://2019.kandidater.notodden.raudt.party/${candidate.id}`} />
        <meta property='og:site_name' content='Rødt Notodden - valg 2019' />
      </Head>
      <main>
        <Candidate candidate={candidate} profile={profile} />
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

Details.getInitialProps = async ({ req }) => {
  const path = req ? req.url : window.location.pathname
  const query = req ? req.query : window.location.query
  const list = path.split('/')
  const cid = list.length > 0 ? list.pop() : 'cecilie'
  const candidate = getCandidate(cid)
  return { candidate: Object.assign({}, candidate, query) }
}

export default Details
