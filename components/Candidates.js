import candidates from '../lib/candidates'

const Candidates = props => {
  const { switchCandidate } = props
  return (
    <div>
      <div className='candidates'>
        <h2>Flere flotte kandidater</h2>
        {candidates.map(candidate => <p key={`candidate-${candidate.id}`}>
          <a href='/' id={candidate.id} onClick={switchCandidate}>{candidate.name}</a></p>)}
      </div>
      <style jsx global>
        {`
          .candidates {
            padding: 15px;
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
