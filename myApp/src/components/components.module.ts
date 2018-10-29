import { NgModule } from '@angular/core';
import { WinMessageComponent } from './win-message/win-message';
import { LoseMessageComponent } from './lose-message/lose-message';
@NgModule({
	declarations: [WinMessageComponent,
    LoseMessageComponent],
	imports: [],
	exports: [WinMessageComponent,
    LoseMessageComponent]
})
export class ComponentsModule {}
