import { ActionsObservable, StateObservable, ofType } from 'redux-observable'
import { map, switchMap } from 'rxjs/operators'

import { from } from 'rxjs'

const defaultEpic = (
  action$: ActionsObservable<any>,
  _state$: StateObservable<any>
) =>
  action$.pipe(
    ofType('TEST'),
    switchMap(() =>
      from([1]).pipe(
        map(_response => {
          return { type: '' }
        })
      )
    )
  )

export default [defaultEpic]
