import React, { useState, useRef } from 'react'

const AudioRecorder = (props) => {

  const [mode, setMode] = useState(null)
  const [isRecording, setIsRecording] = useState(false)
  const [audioURLCopy, setAudioURLCopy] = useState(props.audioURL || null)
  const [fileName, setFileName] = useState('')

  const mediaRecorderRef = useRef(null)
  const audioChunksRef = useRef([])

  // --- Funções de Gravação ---
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      mediaRecorderRef.current = new MediaRecorder(stream)

      audioChunksRef.current = []

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data)
      }

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(audioChunksRef.current, { type: 'audio/mp3' })
        const url = URL.createObjectURL(blob)
        props.setAudioURL(blob)
        setAudioURLCopy(url)
        setFileName(props.question ? `${props.question}.mp3` : "Gravação.mp3")
        setMode('record')
      }

      mediaRecorderRef.current.start()
      setIsRecording(true)
      setMode('record')
    } catch (err) {
      console.error('Erro ao acessar o microfone:', err)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
    }
  }

  // --- Função para upload de arquivo ---
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith('audio/')) {
      const url = URL.createObjectURL(file)
      setAudioURLCopy(url)
      props.setAudioURL(file)
      setFileName(file.name)
      setMode('upload')
    } else {
      alert('Por favor, selecione um arquivo de áudio válido.')
    }
  }

  const resetRecorder = () => {
    props.setAudioURL(null)
    setAudioURLCopy(null)
    setFileName('')
    setMode(null)
    setIsRecording(false)
  }

  return (
    <div className='text-center mt-auto mb-auto'>
      {!mode && (
        <div className="">
          <button className='btn btn-outline-info rounded-circle p-3 me-4' type='button' onClick={startRecording}>
            <i className="fas fa-microphone display-6"></i>
          </button>

          <label htmlFor="audioUpload" className="btn btn-outline-secondary rounded-circle p-3">
            <i className="fas fa-upload display-6"></i>
          </label>
          <input id="audioUpload" type="file" accept="audio/*" onChange={handleFileChange} hidden/>
        </div>
      )}

      
      {audioURLCopy && (
        <div className='mt-3'>
          <small>Arquivo: <strong>{fileName}</strong></small>
          <div className='mt-2 position-relative'>
          <button onClick={resetRecorder} type="button" aria-label="Close" className='btn btn-close bg-danger rounded-circle position-absolute top-0 start-100 translate-middle'></button>
            <audio className='w-100' src={audioURLCopy} controls/>
          </div>
        </div>
      )}

     
      {isRecording && (
        <button className='btn btn-danger rounded-circle p-3 mt-3' type='button' onClick={stopRecording}>
          <div className='p-3 bg-white'></div>
        </button>
      )}
    </div>
  )
}

export default AudioRecorder