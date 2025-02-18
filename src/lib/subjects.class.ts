// Rxjs.
import {
  ObservableInput,
  Observer,
  Subject,
  Subscription,
  takeUntil,
} from 'rxjs';

// Subscriptions.
import { Subscriptions } from './subscriptions.class';

/**
 * @description
 * @export
 * @class Subjects
 * @template {string} Names 
 * @template Type 
 * @extends {Map<Names, Subject<Type>>}
 */
export class Subjects<Names extends string, Type> extends Map<
  Names,
  Subject<Type>
> {
  public get subscriptions(): Subscriptions<Names> {
    return this.#subscriptions;
  }

  #subscriptions: Subscriptions<Names> = new Subscriptions();

  /**
   *
   * @param names
   * @param type
   */
  constructor(names: Names[], type?: Type[]) {
    super([]);
    names.forEach(name => this.set(name));
  }

  /**
   *
   * @param name
   * @returns
   */
  public override delete(name: Names): boolean {
    return this.get(name).unsubscribe(), super.delete(name);
  }

  /**
   *
   * @param name
   * @param value
   * @returns
   */
  public emit<T extends Type>(name: Names, value: T): this {
    this.get(name).next(value);
    return this;
  }

  /**
   *
   */
  public override get<T extends Type>(name: Names): Subject<T> {
    return super.get(name) as any;
  }

  /**
   *
   * @param name
   * @returns
   */
  public override set(name: Names): this {
    super.set(name, new Subject());
    return this;
  }

  /**
   *
   * @param to
   * @returns
   */
  public subscribe<T extends Type>(
    to: Names,
    observer: Partial<Observer<T>>
  ): Subscription {
    this.#subscriptions.has(to)
      ? this.#subscriptions.get(to)?.add(this.get<T>(to).subscribe(observer))
      : this.#subscriptions.set(to, this.get<T>(to).subscribe(observer));
    return this.#subscriptions.get(to) as Subscription;
  }

  /**
   *
   * @param notifier
   * @param to
   * @param observer
   * @returns
   */
  public subscribeUntil<T extends Type>(
    notifier: ObservableInput<any>,
    to: Names,
    observer: Partial<Observer<T>>
  ): Subscription {
    return this.get<T>(to).pipe(takeUntil(notifier)).subscribe(observer);
  }

  /**
   * @description Unsubscribes from stored under the given name subscription.
   * @public
   * @param {Names} name 
   * @returns {this} 
   */
  public unsubscribe(name: Names): this {
    this.#subscriptions.unsubscribe(name);
    return this;
  }

  /**
   * @description Unsubscribes from all stored subscriptions.
   * @public
   * @returns {this} 
   */
  public unsubscribeAll(): this {
    this.#subscriptions.unsubscribeAll();
    return this;
  }
}
