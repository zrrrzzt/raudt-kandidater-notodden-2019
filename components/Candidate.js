import domToImage from 'dom-to-image'
import { saveAs } from 'file-saver'

const Candidate = props => {
  const { candidate } = props

  const saveCard = async event => {
    event.preventDefault()
    const blob = await domToImage.toBlob(window.document.getElementById('candidate-card'))
    saveAs(blob, `${candidate.id}-${new Date().getTime()}.png`)
  }

  return (
    <div>
      <div className={'wrapper'} id='candidate-card'>
        <div className='candidate'>
          <div className='img-wrapper'>
            <img src={`static/images/${candidate.image}`} alt={`${candidate.name}: ${candidate.statement}`} className='candidate' />
          </div>
          <div className='statement'>
            {candidate.statement}
          </div>
        </div>
        <div className='footer'>
          <div className='name'>{candidate.name}</div>
          <div className='description'>{candidate.description}</div>
          <img src='static/logo.svg' alt='Rødt logo' className='logo' />
        </div>
      </div>
      <div className='save-wrapper'>
        <img src='/static/floppy.png' className='save-link' alt='Trykk for å lagre som bilde' role='button' tabIndex='0' onClick={saveCard} />
      </div>
      <style jsx global>
        {`
          img.candidate {
            width: 100%;
            align-self: center;
          }
          img.save-link {
            height: 40px;
            border-radius: 0px;
            border: 0px;
            margin-left: 5px;
            cursor: pointer;
          }
          .img-wrapper {
            display: flex;
            justify-content: center;
          }
          .wrapper {
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
          }
          .candidate {
            background-color: #e90302;
          }
          .name {
            text-align: left;
            font-size: 18px;
            font-weight: 700;
            padding: 15px 15px 0 15px;
            margin-bottom: 5px;
          }
          .description {
            text-align: left;
            font-size: 18px;
            padding: 0 15px 0 15px;
            margin-bottom: 5px;
          }
          .statement {
            text-align: left;
            font-size: 22px;
            padding: 15px;
            color: white;
          }
          .save-wrapper {
            margin-top: 10px;
            text-align: right;
            display: none;
          }
          .save-link {
            text-decoration: none;
            font-size: 2em;
            padding: 5px;
          }
          .save-link:hover, .save-link:active {
            outline: none;
          }
          .candidates {
            padding: 15px;
          }
          .candidates a, .candidates a:visited {
            color: #2e3c46;
          }
          .candidates a:hover, .candidates a:active {
            color: #e90302;
          }
          .header {
            color: white;
            text-align: center;
            font-size: 22px;
            padding: 15px;
          }
          .footer {
            margin:0;
            padding: 0;
            display: flex;
            flex-direction: column;
            text-align: center;
            background-color: #fdfcf8;
            justify-content: center;
            align-content: center;
          }
          .logo {
            align-self: center;
            width: 50px;
            padding-bottom: 15px;
          }
          @media only screen and (min-width: 768px) {
            img.candidate {
              width: 500px;
            }
            .save-wrapper {
              display: block;
            }
          }
      `}
      </style>
    </div>
  )
}

export default Candidate
