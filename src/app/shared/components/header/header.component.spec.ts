import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  /**
   * test if home is Here
  */
  it('Check if Home is Here',()=>{
    // const fixture = TestBed.createComponent(HeaderComponent);
    // fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    let el = compiled.querySelector('.nav-item a ')?.firstChild?.textContent;
    console.log("element is  : ");
    console.log(el);
    expect(el).toContain('Home');
  })
});
