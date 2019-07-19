import React, { useState } from 'react'
import Head from 'next/head'
import domToImage from 'dom-to-image'
import { saveAs } from 'file-saver'
import candidates from '../lib/candidates'
import randomEntry from '../lib/random-entry'

function getCandidate () {
  return randomEntry(candidates)
}

const Index = () => {
  const [candidate, setCandidate] = useState(getCandidate())
  
  const showCandidate = event => {
    event.preventDefault()
    console.log(event.target.id)
    setCandidate(getCandidate())
  }

  const saveCard = async event => {
    event.preventDefault()
    const blob = await domToImage.toBlob(window.document.getElementById('hanna-card'))
    saveAs(blob, `hanna-${new Date().getTime()}.png`)
  }

  return (
    <div>
      <Head>
        <link rel='apple-touch-icon' sizes='57x57' href='static/apple-icon-57x57.png' />
        <link rel='apple-touch-icon' sizes='60x60' href='static/apple-icon-60x60.png' />
        <link rel='apple-touch-icon' sizes='72x72' href='static/apple-icon-72x72.png' />
        <link rel='apple-touch-icon' sizes='76x76' href='static/apple-icon-76x76.png' />
        <link rel='apple-touch-icon' sizes='114x114' href='static/apple-icon-114x114.png' />
        <link rel='apple-touch-icon' sizes='120x120' href='static/apple-icon-120x120.png' />
        <link rel='apple-touch-icon' sizes='144x144' href='static/apple-icon-144x144.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='static/apple-icon-152x152.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='static/apple-icon-180x180.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='static/android-icon-192x192.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='static/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='96x96' href='static/favicon-96x96.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='static/favicon-16x16.png' />
        <link rel='manifest' href='static/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='static/ms-icon-144x144.png' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Møt listekandidatene for Rødt Notodden' />
        <title>Rødt Notodden valg 2019</title>
      </Head>
      <main>
        <div className={'wrapper'} id='hanna-card'>
          <h1>{candidate.name}</h1>
          <div className="description">
            {candidate.description}
          </div>
          <div className="img-wrapper">
            <img src={candidate.image} alt={`${candidate.name}: ${candidate.statement}`} className="candidate" />
          </div>
          <div className='statement'>
            {candidate.statement}
          </div>
          <style jsx global>
            {`
            body {
              font-family: GT Walsheim,Helvetica,sans-serif;
              background-color: white;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            h1 {
              color: white;
              text-align: center;
            }
            img.candidate {
              width: 500px;
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
              padding-top: 10px 5px;
              width: 600px;
              display: flex;
              flex-direction: column;
              background-color: #e52437;
            }
            .description {
              text-align: left;
              font-weight: 500;
              font-size: 18px;
              padding: 15px;
              color: white;
            }
            .statement {
              text-align: left;
              font-weight: 500;
              font-size: 22px;
              padding: 15px;
              color: white;
            }
            .save-wrapper {
              margin-top: 10px;
              text-align: right;
            }
            .save-link {
              text-decoration: none;
              font-size: 2em;
              padding: 5px;
            }
            .save-link:hover, .save-link:active {
              outline: none;
            }
            .candidates.p {

            }
          `}
          </style>
        </div>
        <div className='save-wrapper'>
          <img src='/static/floppy.png' className='save-link' alt='Trykk for å lagre som bilde' role='button' tabIndex='0' onClick={saveCard} />
        </div>
        <div className='candidates'>
          {candidates.map(candidate => <a href='' onClick={showCandidate} id={candidate.id} key={`candidate-${candidate.id}`}>{candidate.name}</a>)}
        </div>
      </main>
    </div>
  )
}

export default Index
