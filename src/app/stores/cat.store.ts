import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
export class SetCat {
  static readonly type = '[Cat] Set';
  constructor(public readonly cat: string) {}
}
export type CatStateModel = {
  cat: string | null;
};
@State<CatStateModel>({
  name: 'cat',
  defaults: {
    cat: null,
  },
})
@Injectable()
export class CatState {
  @Selector()
  static getCat(state: CatStateModel) {
    return state.cat;
  }

  @Action(SetCat)
  setCat(ctx: StateContext<CatStateModel>, action: SetCat) {
    ctx.setState({ cat: action.cat });
  }
}
