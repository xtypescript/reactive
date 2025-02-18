// Rxjs.
import { Subscription } from 'rxjs';
/**
 * @description
 * @export
 * @class Subscriptions
 * @template {string} Names 
 * @extends {Map<Names, Subscription | undefined>}
 */
export class Subscriptions<Names extends string> extends Map<
  Names,
  Subscription | undefined
> {  
  /**
   * @description
   * @public
   * @param {Names} name 
   * @returns {boolean} 
   */
  public unsubscribe(name: Names): boolean {
    return (
      // Unsubscribe stored subscription.
      super.get(name)?.unsubscribe(),

      // Delete subscription.
      super.delete(name)
    );
  }

  /**
   * @description Unsubscribe all subscriptions.
   * @public
   * @returns {this} 
   */
  public unsubscribeAll(): this {
    this.forEach((subscription, name) => this.unsubscribe(name));
    return this;
  }
}
