import React from 'react'
import classes from './Pomodoro.module.css'
import Timer from 'react-compound-timer'

const Pomodoro = () => {
  return (
    <div className={classes.Pomodoro}>
      
      <Timer
        initialTime={25 * 60 * 1000}
        lastUnit="h"
        direction="backward"
        startImmediately={false}
        checkpoints={[
          {
            time: 25 * 60 * 1000 - 1,
            callback: () => console.log('Checkpoint A'),
          },
          {
            time: 25 * 60 * 1000 - 20000,
            callback: () => console.log('Checkpoint B'),
          }
        ]}
      >
        {({ start, resume, pause, stop, reset, timerState }) => (
          <React.Fragment>
            <div>
                <Timer.Hours />:
                <Timer.Minutes />:
                <Timer.Seconds />
            </div>
            <br />
            <div>
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={resume}>Resume</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
          </React.Fragment>
        )}
      </Timer>
      <input type="text" readOnly/>
    </div>
  )
}

export default Pomodoro