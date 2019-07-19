import candidates from './candidates'

export default id => {
  return candidates.find(candidate => candidate.id === id)
}
