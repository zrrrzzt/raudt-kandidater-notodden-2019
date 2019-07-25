import domToImage from 'dom-to-image'
import { saveAs } from 'file-saver'

const Candidate = props => {
  const { candidate, profile } = props

  const saveCard = async event => {
    event.preventDefault()
    const blob = await domToImage.toBlob(window.document.getElementById('candidate-card'))
    saveAs(blob, `${candidate.id}-${profile ? 'profile' : new Date().getTime()}.png`)
  }

  const shareToFacebook = event => {
    const shareUrl = `https://www.facebook.com/sharer.php?u=${encodeURI(window.location.href)}`
    window.location = shareUrl
  }

  const shareToTwitter = event => {
    const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURI(window.location.href)}`
    window.location = shareUrl
  }

  return (
    <div>
      <div className={'wrapper'} id='candidate-card'>
        <div className='candidate'>
          <div className='img-wrapper'>
            <div className='overlay' />
            <img src={`static/images/${candidate.image}`} alt={`${candidate.name}: ${candidate.statement}`} className='candidate' />
          </div>
          <div className='floatingLogo'>
            <svg width='56' height='56' viewBox='0 0 359 359' version='1.1'>
              <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                <g transform='translate(0.000000, 7.000000)' fill='#e31d26'>
                  <path d='M227.082346,272.454907 C253.864286,247.214238 281.063709,217.636777 309.718028,187.344915 C327.19386,223.62101 350.180657,286.257962 343.894108,291.90389 C335.174637,299.72811 267.63495,287.759644 227.082346,272.454907' />
                  <path d='M228.272714,60.6107168 C189.661769,66.4896792 136.31293,78.603005 111.717381,84.7410952 C123.168491,45.9600977 146.921875,2.14410276 155.166278,0.376994987 C162.747566,-1.22365915 197.537276,25.1686892 228.272714,60.6107168' />
                  <path d='M312.214832,162.198719 C292.578702,126.947439 273.225992,100.213185 253.313639,70.6456216 C306.209905,64.5156291 353.835439,73.5671078 358.014774,80.9585489 C360.518777,85.3304311 342.482401,123.095612 312.214832,162.198719' />
                  <path d='M87.2432982,234.079697 C120.647393,249.334048 157.567709,264.337368 196.310018,279.426165 C156.902794,314.73503 105.550499,348.628589 96.3199699,343.227393 C89.6339323,339.318882 84.724,273.277278 87.2432982,234.079697' />
                  <path d='M92.8271429,103.964241 C85.072203,139.009479 76.8898822,183.995148 74.6414085,211.944063 C33.5264612,188.733228 -0.582137845,162.621602 0.348203008,155.330033 C1.32263158,147.574193 41.4010677,119.049439 92.8271429,103.964241' />
                  <path d='M106.926216,99.6310476 C100.720644,122.731213 88.0926617,172.711391 87.4727343,218.639997 C123.023632,238.150163 175.770539,258.575373 209.995206,267.015922 C242.994414,240.832316 286.111303,196.377499 303.076977,173.782992 C288.215817,143.190614 262.025013,97.328589 237.632807,71.9574561 C198.616075,75.8227794 128.62817,92.4204561 106.926216,99.6310476' />
                </g>
              </g>
            </svg>
          </div>
          {profile ? false : <div className='statement'>{candidate.statement}</div>}
        </div>
        <div className='footer'>
          <div className='name'>{candidate.name}</div>
          <div className='description'>{candidate.description}</div>
        </div>
      </div>
      <div className='save-wrapper'>
        <img src='/static/twitter-logo.png' className='share-link' alt='Del på Twitter' role='button' tabIndex='0' onClick={shareToTwitter} />
        <img src='/static/facebook-logo.png' className='share-link' alt='Del på Facebook' role='button' tabIndex='0' onClick={shareToFacebook} />
        <img src='/static/floppy-disk.png' className='save-link' alt='Trykk for å lagre som bilde' role='button' tabIndex='0' onClick={saveCard} />
      </div>
      <style jsx global>
        {`
          div.floatingLogo {
            position: relative;
            top: -80px;
            left: 50%;
            transform: translate(-50%, 50%);
            width: 90px;
            height: 90px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: -50px;
            border-radius: 50%;
            background-color: rgb(253, 252, 248);
            z-index: 3;
          }
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
            display: none;
          }
          img.share-link {
            height: 40px;
            border-radius: 0px;
            border: 0px;
            margin-left: 5px;
            cursor: pointer;
          }
          .img-wrapper {
            position: relative;
            display: flex;
            justify-content: center;
          }
          .overlay {
            position:absolute;
            bottom:0px;
            left:0px;
            background: linear-gradient(rgba(227, 29, 38, 0) 0%, rgba(227, 29, 38, 0.5) 100%);
            width: 100%;
            height: 50%;
            z-index: 2;
          }
          .wrapper {
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            background-color: rgb(253, 252, 248);
          }
          .candidate {
            background-color: rgb(253, 252, 248);
          }
          .name {
            text-align: center;
            font-size: ${profile ? 20 : 18}px;
            font-weight: 400;
            padding: 15px 15px 0 15px;
            margin-bottom: 5px;
            color: rgb(227, 29, 38);
          }
          .description {
            text-align: center;
            font-size: ${profile ? 20 : 18}px;
            padding: 0 15px 0 15px;
            margin-bottom: 5px;
          }
          .statement {
            text-align: center;
            font-size: 20px;
            line-height: 1.25em;
            padding: 10px;
          }
          .save-wrapper {
            margin-top: 10px;
            padding-right: 10px;
            text-align: right;
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
            padding: 0 0 15px 0;
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
            img.save-link {
              display: inline;
            }
          }
      `}
      </style>
    </div>
  )
}

export default Candidate
