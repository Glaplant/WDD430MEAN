import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesNewComponent } from './games-new.component';

describe('GamesNewComponent', () => {
  let component: GamesNewComponent;
  let fixture: ComponentFixture<GamesNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
