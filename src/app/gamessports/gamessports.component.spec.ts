import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamessportsComponent } from './gamessports.component';

describe('GamessportsComponent', () => {
  let component: GamessportsComponent;
  let fixture: ComponentFixture<GamessportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamessportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamessportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
