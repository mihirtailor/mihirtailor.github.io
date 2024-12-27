import { computed, effect, Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private count = signal(0);

  doubleCount: Signal<number> = computed(() => this.count() * 2);

  getCounter() {
    return this.count();
  }

  incrementCounter() {
    return this.count.update((value) => value + 1);
  }

  constructor() {
    effect(() => {
      console.log(
        'count: ',
        this.count(),
        'double count: ',
        this.doubleCount()
      );
    });
  }
}
