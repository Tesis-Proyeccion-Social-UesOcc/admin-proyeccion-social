import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatNavComponent } from './mat-nav/mat-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatBoardComponent } from './mat-board/mat-board.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProyectoComponent } from './component/proyecto/proyecto.component';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {PortalModule} from '@angular/cdk/portal';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatTreeModule} from '@angular/material/tree';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NZ_I18N, NzI18nModule} from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import {CommonModule, registerLocaleData} from '@angular/common';
import es from '@angular/common/locales/es';
import { AgregarProyectoComponent } from './component/proyecto/agregar-proyecto/agregar-proyecto.component';
import {NzPipesModule} from 'ng-zorro-antd/pipes';
import {NzResizableModule} from 'ng-zorro-antd/resizable';
import {NzWaveModule} from 'ng-zorro-antd/core/wave';
import {NzUploadModule} from 'ng-zorro-antd/upload';
import {NzTypographyModule} from 'ng-zorro-antd/typography';
import {NzTreeSelectModule} from 'ng-zorro-antd/tree-select';
import {NzTreeViewModule} from 'ng-zorro-antd/tree-view';
import {NzTreeModule} from 'ng-zorro-antd/tree';
import {NzTransferModule} from 'ng-zorro-antd/transfer';
import {NzTransButtonModule} from 'ng-zorro-antd/core/trans-button';
import {NzToolTipModule} from 'ng-zorro-antd/tooltip';
import {NzTimelineModule} from 'ng-zorro-antd/timeline';
import {NzTimePickerModule} from 'ng-zorro-antd/time-picker';
import {NzTagModule} from 'ng-zorro-antd/tag';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzSwitchModule} from 'ng-zorro-antd/switch';
import {NzStepsModule} from 'ng-zorro-antd/steps';
import {NzStatisticModule} from 'ng-zorro-antd/statistic';
import {NzSpinModule} from 'ng-zorro-antd/spin';
import {NzSliderModule} from 'ng-zorro-antd/slider';
import {NzSkeletonModule} from 'ng-zorro-antd/skeleton';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzResultModule} from 'ng-zorro-antd/result';
import {NzRateModule} from 'ng-zorro-antd/rate';
import {NzRadioModule} from 'ng-zorro-antd/radio';
import {NzProgressModule} from 'ng-zorro-antd/progress';
import {NzPopoverModule} from 'ng-zorro-antd/popover';
import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';
import {NzPaginationModule} from 'ng-zorro-antd/pagination';
import {NzPageHeaderModule} from 'ng-zorro-antd/page-header';
import {NzNotificationModule} from 'ng-zorro-antd/notification';
import {NzNoAnimationModule} from 'ng-zorro-antd/core/no-animation';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzMentionModule} from 'ng-zorro-antd/mention';
import {NzListModule} from 'ng-zorro-antd/list';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzImageModule} from 'ng-zorro-antd/image';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzEmptyModule} from 'ng-zorro-antd/empty';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzDescriptionsModule} from 'ng-zorro-antd/descriptions';
import {NzDatePickerModule} from 'ng-zorro-antd/date-picker';
import {NzCollapseModule} from 'ng-zorro-antd/collapse';
import {NzCommentModule} from 'ng-zorro-antd/comment';
import {NzCascaderModule} from 'ng-zorro-antd/cascader';
import {NzCarouselModule} from 'ng-zorro-antd/carousel';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzCalendarModule} from 'ng-zorro-antd/calendar';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzBadgeModule} from 'ng-zorro-antd/badge';
import {NzBackTopModule} from 'ng-zorro-antd/back-top';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {NzAutocompleteModule} from 'ng-zorro-antd/auto-complete';
import {NzAnchorModule} from 'ng-zorro-antd/anchor';
import {NzAlertModule} from 'ng-zorro-antd/alert';
import {NzAffixModule} from 'ng-zorro-antd/affix';
import { ProyectoDetalleComponent } from './component/proyecto/proyecto-detalle/proyecto-detalle.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

registerLocaleData(es);


// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    MatNavComponent,
    MatBoardComponent,
    ProyectoComponent,
    AgregarProyectoComponent,
    ProyectoDetalleComponent
  ],
  imports: [
    FormsModule,
    NzCheckboxModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSortModule,
    MatPaginatorModule,
    MatTableModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
    NzAffixModule,
    NzAlertModule,
    NzAnchorModule,
    NzAutocompleteModule,
    NzAvatarModule,
    NzBackTopModule,
    NzBadgeModule,
    NzButtonModule,
    NzBreadCrumbModule,
    NzCalendarModule,
    NzCardModule,
    NzCarouselModule,
    NzCascaderModule,
    NzCollapseModule,
    NzCommentModule,
    NzDatePickerModule,
    NzDescriptionsModule,
    NzDividerModule,
    NzDrawerModule,
    NzDropDownModule,
    NzEmptyModule,
    NzFormModule,
    NzGridModule,
    NzI18nModule,
    NzIconModule,
    NzImageModule,
    NzInputModule,
    NzInputNumberModule,
    NzLayoutModule,
    NzListModule,
    NzMentionModule,
    NzMenuModule,
    NzMessageModule,
    NzModalModule,
    NzNoAnimationModule,
    NzNotificationModule,
    NzPageHeaderModule,
    NzPaginationModule,
    NzPopconfirmModule,
    NzPopoverModule,
    NzProgressModule,
    NzRadioModule,
    NzRateModule,
    NzResultModule,
    NzSelectModule,
    NzSkeletonModule,
    NzSliderModule,
    NzSpinModule,
    NzStatisticModule,
    NzStepsModule,
    NzSwitchModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzTimePickerModule,
    NzTimelineModule,
    NzToolTipModule,
    NzTransButtonModule,
    NzTransferModule,
    NzTreeModule,
    NzTreeViewModule,
    NzTreeSelectModule,
    NzTypographyModule,
    NzUploadModule,
    NzWaveModule,
    NzResizableModule,
    NzPipesModule,
    CommonModule
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
