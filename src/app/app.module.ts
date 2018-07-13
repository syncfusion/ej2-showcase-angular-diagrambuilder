import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ContextMenuModule, ToolbarModule } from '@syncfusion/ej2-ng-navigations';
import { DialogModule, TooltipModule } from '@syncfusion/ej2-ng-popups';
import { DropDownButtonModule } from '@syncfusion/ej2-ng-splitbuttons';
import { DropDownListModule, MultiSelectModule } from '@syncfusion/ej2-ng-dropdowns';
import { ButtonModule, RadioButtonModule, CheckBoxModule } from '@syncfusion/ej2-ng-buttons';
import { NumericTextBoxModule, SliderModule, UploaderModule, ColorPickerModule } from '@syncfusion/ej2-ng-inputs';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        FormsModule, NumericTextBoxModule, DropDownButtonModule, ContextMenuModule, SliderModule,
        ToolbarModule, DropDownListModule, ButtonModule, RadioButtonModule, UploaderModule,
        DialogModule, CheckBoxModule, MultiSelectModule, TooltipModule, ColorPickerModule, BrowserModule
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}