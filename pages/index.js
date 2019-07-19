import React, { useState } from 'react'
import Head from 'next/head'
import domToImage from 'dom-to-image'
import { saveAs } from 'file-saver'
import candidates from '../lib/candidates'

function getCandidate (id) {
  return candidates.find(candidate => candidate.id === id)
}

const Index = () => {
  const [candidate, setCandidate] = useState(getCandidate('cecilie'))
  
  const showCandidate = event => {
    event.preventDefault()
    setCandidate(getCandidate(event.target.id))
  }

  const saveCard = async event => {
    event.preventDefault()
    const blob = await domToImage.toBlob(window.document.getElementById('candidate-card'))
    saveAs(blob, `${candidate.id}-${new Date().getTime()}.png`)
  }

  return (
    <div>
      <Head>
        <link rel='apple-touch-icon' href='static/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='static/android-icon-192x192.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='static/favicon-32x32.png' />
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
        <div className={'wrapper'} id='candidate-card'>
          <div className="candidate">
            <h1>{candidate.name}</h1>
            <div className="img-wrapper">
              <img src={candidate.image} alt={`${candidate.name}: ${candidate.statement}`} className="candidate" />
            </div>
            <div className='statement'>
              {candidate.statement}
            </div>
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
            img.logo {
              width: 32px;
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
            .heading {
              display: flex;
              justify-content: center;
              margin-bottom: 10px;
            }
            .wrapper {
              padding-top: 10px 5px;
              width: 500px;
              display: flex;
              flex-direction: column;
            }
            .candidate {
              background-color: #e52437;
              width: 500px;
            }
            .description {
              width: 500px;
              text-align: left;
              font-weight: 500;
              font-size: 18px;
              padding: 15px;
              color: black;
            }
            .statement {
              text-align: left;
              font-weight: 500;
              font-size: 22px;
              padding: 15px;
              color: white;
            }
            .save-wrapper {
              width: 500px;
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
            .candidates {
              width: 600px;
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
        <div className='save-wrapper'>
          <img src='/static/floppy.png' className='save-link' alt='Trykk for å lagre som bilde' role='button' tabIndex='0' onClick={saveCard} />
        </div>
        <div className="description">
          {candidate.name} ({candidate.age}) - {candidate.description}
        </div>
        <div className='candidates'>
          <h2>Flere flotte kandidater</h2>
          {candidates.map(candidate => <p key={`candidate-${candidate.id}`}><a href='' onClick={showCandidate} id={candidate.id}>{candidate.name}</a></p>)}
        </div>
      </main>
    </div>
  )
}

export default Index
