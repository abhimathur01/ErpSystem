import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSortModule } from "@angular/material/sort";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from "@angular/material/select"
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRippleModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

const modules = [
  CommonModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatDialogModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatSelectModule,
  MatChipsModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatListModule,
  MatTreeModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  DragDropModule,
  MatPaginatorModule,
  MatStepperModule,
  MatRippleModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatRadioModule
]

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules
})
export class MaterialModule {
}
