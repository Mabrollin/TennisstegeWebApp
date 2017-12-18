import { Injectable }     from '@angular/core';



@Injectable()
export class ShadowService {
  constructor() {
  this.isShadow = false;
}

private isShadow: boolean;

  setShadow = (flag: boolean) => {this.isShadow = flag};
  getShadow = () => {return this.isShadow};

}
