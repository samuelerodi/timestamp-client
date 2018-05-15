import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

/**
 * Load the implementations that should be tested.
 */
import { TimestampComponent } from './timestamp.component';

describe('Timestamp', () => {
  /**
   * Provide our implementations or mocks to the dependency injector
   */
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      /**
       * Provide a better mock.
       */
      {
        provide: ActivatedRoute,
        useValue: {
          data: {
            subscribe: (fn: (value: Data) => void) => fn({
              yourData: 'yolo'
            })
          }
        }
      },
      TimestampComponent
    ]
  }));

  it('should log ngOnInit', inject([TimestampComponent], (Timestamp: TimestampComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    Timestamp.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
