import * as Login from './Login';

export interface ApplicationState {
    Login: Login.LoginState
}

export const reducers = {
    counter: Login.reducer
};

export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}