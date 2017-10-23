import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
import { ConfigProvider } from '../../providers/config';
import { MykiProvider } from '../../providers/myki';
import { Myki } from '../../models/myki';

/*
  Generated class for the SelectCard component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'select-card',
  templateUrl: 'select-card.html'
})
export class SelectCardComponent {

  constructor(
    public mykiProvider: MykiProvider,
    public menuCtrl: MenuController,
    public configProvider: ConfigProvider,
  ) {

  }

  account() {
    return this.mykiProvider.mykiAccount;
  }

  selectCard(card: Myki.Card) {
    this.mykiProvider.setActiveCard(card.id);
    this.menuCtrl.close()
  }

  cardNickname(card: Myki.Card) {
    return this.configProvider.cardNicknameGet(card.id)
  }

  isActiveCard(cardId: string) {
    return this.mykiProvider.activeCardId === cardId;
  }

  activeCards() {
    return this.mykiProvider.mykiAccount.cards.filter(x => x.status === Myki.CardStatus.Active)
  }

  inactiveCards() {
    return this.mykiProvider.mykiAccount.cards.filter(x => x.status !== Myki.CardStatus.Active)
  }

  trackCard(index, card: Myki.Card) {
    return card ? card.id : undefined
  }

}
