import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { NgxStripeModule } from 'ngx-stripe';
import { environment } from '../environments/environment';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ClistComponent } from './clist/clist.component';
import { GroupComponent } from './group/group.component';
import { DepositComponent } from './deposit/deposit.component';
import { ExpenseComponent } from './expense/expense.component';
import { TransferComponent } from './transfer/transfer.component';
import { ViewTransactionComponent } from './view-transaction/view-transaction.component';
import { BalanceSheetComponent } from './balance-sheet/balance-sheet.component';
import { TransferReportComponent } from './transfer-report/transfer-report.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { NinvoicesComponent } from './ninvoices/ninvoices.component';
import { RecurringComponent } from './recurring/recurring.component';
import { NrecurringComponent } from './nrecurring/nrecurring.component';
import { QuoteComponent } from './quote/quote.component';
import { NquoteComponent } from './nquote/nquote.component';
import { PaymentComponent } from './payment/payment.component';
import { TaxeportComponent } from './taxeport/taxeport.component';
import { RtaskComponent } from './rtask/rtask.component';
import { AtaskComponent } from './atask/atask.component';
import { CpaymentComponent } from './cpayment/cpayment.component';
import { EmanageComponent } from './emanage/emanage.component';
import { EcategoryComponent } from './ecategory/ecategory.component';
import { PreportComponent } from './preport/preport.component';
import { CreportComponent } from './creport/creport.component';
import { EreportComponent } from './ereport/ereport.component';
import { IncomexpComponent } from './incomexp/incomexp.component';
import { ThistoryComponent } from './thistory/thistory.component';
import { TimechangeComponent } from './timechange/timechange.component';
import { AtreportComponent } from './atreport/atreport.component';
import { JpostComponent } from './jpost/jpost.component';
import { JappComponent } from './japp/japp.component';
import { SalaryComponent } from './salary/salary.component';
import { HourlyComponent } from './hourly/hourly.component';
import { ManagesalComponent } from './managesal/managesal.component';
import { EmpsallistComponent } from './empsallist/empsallist.component';
import { MpaymentComponent } from './mpayment/mpayment.component';
import { GeneratepayComponent } from './generatepay/generatepay.component';
import { PaysumComponent } from './paysum/paysum.component';
import { StockcatComponent } from './stockcat/stockcat.component';
import { ManstockComponent } from './manstock/manstock.component';
import { AstockComponent } from './astock/astock.component';
import { TicanswerComponent } from './ticanswer/ticanswer.component';
import { TicopenComponent } from './ticopen/ticopen.component';
import { IprocessComponent } from './iprocess/iprocess.component';
import { CloseComponent } from './close/close.component';
import { AtivitylogComponent } from './ativitylog/ativitylog.component';
import { EmailmesComponent } from './emailmes/emailmes.component';
import { SystemstsComponent } from './systemsts/systemsts.component';
import { ChartsFlotComponent } from './charts-flot/charts-flot.component';
import { ChartsJsComponent } from './charts-js/charts-js.component';
import { ChartsMorrisComponent } from './charts-morris/charts-morris.component';
import { ChartsSparklineComponent } from './charts-sparkline/charts-sparkline.component';
import { IconsBootstrapComponent } from './icons-bootstrap/icons-bootstrap.component';
import { IconsFontawesomeComponent } from './icons-fontawesome/icons-fontawesome.component';
import { IconsFlagComponent } from './icons-flag/icons-flag.component';
import { IconsMaterialComponent } from './icons-material/icons-material.component';
import { IconsWeatherComponent } from './icons-weather/icons-weather.component';
import { IconsLineComponent } from './icons-line/icons-line.component';
import { IconsPeComponent } from './icons-pe/icons-pe.component';
import { IconSociconComponent } from './icon-socicon/icon-socicon.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { BlankComponent } from './blank/blank.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TabsComponent } from './tabs/tabs.component';
import { NotificationComponent } from './notification/notification.component';
import { TreeComponent } from './tree/tree.component';
import { ProgressbarsComponent } from './progressbars/progressbars.component';
import { ListComponent } from './list/list.component';
import { TypographyComponent } from './typography/typography.component';
import { PanelsComponent } from './panels/panels.component';
import { ModalsComponent } from './modals/modals.component';
import { IcheckTogglePaginationComponent } from './icheck-toggle-pagination/icheck-toggle-pagination.component';
import { LabelsComponent } from './labels/labels.component';
import { GsettingComponent } from './gsetting/gsetting.component';
import { StfsettingComponent } from './stfsetting/stfsetting.component';
import { EmailsettingComponent } from './emailsetting/emailsetting.component';
import { PaysettingComponent } from './paysetting/paysetting.component';
import { CompanyComponent } from './company/company.component';
import { HolidayComponent } from './holiday/holiday.component';
import { UserComponent } from './user/user.component';
import { ItemsComponent } from './items/items.component';
import { DepartmentComponent } from './department/department.component';
import { DocumentComponent } from './document/document.component';
import { TrainComponent } from './train/train.component';
import { CalenderComponent } from './calender/calender.component';
import { NoticeComponent } from './notice/notice.component';
import { MessageComponent } from './message/message.component';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeftmenuComponent,
    HeaderComponent,
    AddCustomerComponent,
    ClistComponent,
    GroupComponent,
    DepositComponent,
    ExpenseComponent,
    TransferComponent,
    ViewTransactionComponent,
    BalanceSheetComponent,
    TransferReportComponent,
    InvoiceComponent,
    NinvoicesComponent,
    RecurringComponent,
    NrecurringComponent,
    QuoteComponent,
    NquoteComponent,
    PaymentComponent,
    TaxeportComponent,
    RtaskComponent,
    AtaskComponent,
    CpaymentComponent,
    EmanageComponent,
    EcategoryComponent,
    PreportComponent,
    CreportComponent,
    EreportComponent,
    IncomexpComponent,
    ThistoryComponent,
    TimechangeComponent,
    AtreportComponent,
    JpostComponent,
    JappComponent,
    SalaryComponent,
    HourlyComponent,
    ManagesalComponent,
    EmpsallistComponent,
    MpaymentComponent,
    GeneratepayComponent,
    PaysumComponent,
    StockcatComponent,
    ManstockComponent,
    AstockComponent,
    TicanswerComponent,
    TicopenComponent,
    IprocessComponent,
    CloseComponent,
    AtivitylogComponent,
    EmailmesComponent,
    SystemstsComponent,
    ChartsFlotComponent,
    ChartsJsComponent,
    ChartsMorrisComponent,
    ChartsSparklineComponent,
    IconsBootstrapComponent,
    IconsFontawesomeComponent,
    IconsFlagComponent,
    IconsMaterialComponent,
    IconsWeatherComponent,
    IconsLineComponent,
    IconsPeComponent,
    IconSociconComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ForgetPasswordComponent,
    LockscreenComponent,
    BlankComponent,
    ButtonsComponent,
    TabsComponent,
    NotificationComponent,
    TreeComponent,
    ProgressbarsComponent,
    ListComponent,
    TypographyComponent,
    PanelsComponent,
    ModalsComponent,
    IcheckTogglePaginationComponent,
    LabelsComponent,
    GsettingComponent,
    StfsettingComponent,
    EmailsettingComponent,
    PaysettingComponent,
    CompanyComponent,
    HolidayComponent,
    UserComponent,
    ItemsComponent,
    DepartmentComponent,
    DocumentComponent,
    TrainComponent,
    CalenderComponent,
    NoticeComponent,
    MessageComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule, ReactiveFormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,

    Angular2FontawesomeModule,
    AngularMultiSelectModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ timeOut: 3000, progressBar: true, closeButton: true }),
  ],
  providers: [AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
