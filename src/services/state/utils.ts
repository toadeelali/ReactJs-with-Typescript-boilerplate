import { Action } from 'redux';

interface ActionCreator<P> {
  type: string;
  (payload: P): Action<P>;
}

// export default function actionCreator<P>(type: string): ActionCreator<P> {
//   return Object.assign((payload: P) => ({ type, payload }), { type });
// }

export function isType<P>(action: Action<any>, createdAction: ActionCreator<P>): action is Action<P> {
  return action.type === createdAction.type;
}

export function actionCreator<P>(type: string): unknown {
  const temp = (payload: P) => ({
    type,
    payload,
  });

  temp.type = type;

  return temp;
}
