import Link from 'next/link'
import candidates from '../lib/candidates'

const Candidates = () => {
  return (
    <div>
      <div className='candidates'>
        <h2>Flere flotte kandidater</h2>
        {candidates.map(candidate => <p key={`candidate-${candidate.id}`}>
          <Link href='/[cid]' as={`/${candidate.id}`}><a>{candidate.name}</a></Link><br />{candidate.description}</p>)}
      </div>
      <style jsx global>
        {`
          .candidates {
            padding: 15px;
          }
          .candidates a {
            font-weight: 700;
          }
          .candidates a, .candidates a:visited {
            color: #2e3c46;
          }
          .candidates a:hover, .candidates a:active {
            color: #e52437;
          }
      `}
      </style>
    </div>
  )
}

export default Candidates
