export const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT'
}

// ACTIONS
export const serverRenderClock = () => {
  return { type: actionTypes.TICK, light: false, ts: Date.now() }
}
