import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppModule } from './app.module';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ClistComponent } from './clist/clist.component';
import { GroupComponent } from './group/group.component';
import { DepositComponent } from './deposit/deposit.component';
import { ExpenseComponent } from './expense/expense.component';
import { TransferComponent } from './transfer/transfer.component';
import { ViewTransactionComponent } from './view-transaction/view-transaction.component';
import { BalanceSheetComponent } from './balance-sheet/balance-sheet.component';
import { TransferReportComponent } from './transfer-report/transfer-report.component';
import { RtaskComponent } from './rtask/rtask.component';
import { AtaskComponent } from './atask/atask.component';
import { NoteComponent } from './note/note.component';
import { MessageComponent } from './message/message.component';
import { NoticeComponent } from './notice/notice.component';
import { CalenderComponent } from './calender/calender.component';
import { TrainComponent } from './train/train.component';
import { DocumentComponent } from './document/document.component';
import { DepartmentComponent } from './department/department.component';
import { ItemsComponent } from './items/items.component';
import { UserComponent } from './user/user.component';
import { HolidayComponent } from './holiday/holiday.component';
import { CompanyComponent } from './company/company.component';
import { PaysettingComponent } from './paysetting/paysetting.component';
import { EmailsettingComponent } from './emailsetting/emailsetting.component';
import { StfsettingComponent } from './stfsetting/stfsetting.component';
import { GsettingComponent } from './gsetting/gsetting.component';
import { ModalsComponent } from './modals/modals.component';
import { PanelsComponent } from './panels/panels.component';
import { TypographyComponent } from './typography/typography.component';
import { ListComponent } from './list/list.component';
import { ProgressbarsComponent } from './progressbars/progressbars.component';
import { TreeComponent } from './tree/tree.component';
import { NotificationComponent } from './notification/notification.component';
import { TabsComponent } from './tabs/tabs.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { LockscreenComponent } from './lockscreen/lockscreen.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SystemstsComponent } from './systemsts/systemsts.component';
import { EmailmesComponent } from './emailmes/emailmes.component';
import { AtivitylogComponent } from './ativitylog/ativitylog.component';
import { CloseComponent } from './close/close.component';
import { IprocessComponent } from './iprocess/iprocess.component';
import { TicopenComponent } from './ticopen/ticopen.component';
import { TicanswerComponent } from './ticanswer/ticanswer.component';
import { AstockComponent } from './astock/astock.component';
import { ManstockComponent } from './manstock/manstock.component';
import { StockcatComponent } from './stockcat/stockcat.component';
import { PaysumComponent } from './paysum/paysum.component';
import { GeneratepayComponent } from './generatepay/generatepay.component';
import { MpaymentComponent } from './mpayment/mpayment.component';
import { EmpsallistComponent } from './empsallist/empsallist.component';
import { ManagesalComponent } from './managesal/managesal.component';
import { HourlyComponent } from './hourly/hourly.component';
import { SalaryComponent } from './salary/salary.component';
import { JappComponent } from './japp/japp.component';
import { JpostComponent } from './jpost/jpost.component';
import { AtreportComponent } from './atreport/atreport.component';
import { TimechangeComponent } from './timechange/timechange.component';
import { ThistoryComponent } from './thistory/thistory.component';
import { IncomexpComponent } from './incomexp/incomexp.component';
import { EreportComponent } from './ereport/ereport.component';
import { CreportComponent } from './creport/creport.component';
import { PreportComponent } from './preport/preport.component';
import { EcategoryComponent } from './ecategory/ecategory.component';
import { EmanageComponent } from './emanage/emanage.component';
import { CpaymentComponent } from './cpayment/cpayment.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { NinvoicesComponent } from './ninvoices/ninvoices.component';
import { RecurringComponent } from './recurring/recurring.component';
import { NrecurringComponent } from './nrecurring/nrecurring.component';
import { QuoteComponent } from './quote/quote.component';
import { NquoteComponent } from './nquote/nquote.component';
import { PaymentComponent } from './payment/payment.component';
import { TaxeportComponent } from './taxeport/taxeport.component';

const appRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'add-customer',
        component: AddCustomerComponent,
    },
    {
        path: 'clist',
        component: ClistComponent,
    },
    {
        path: 'group',
        component: GroupComponent,
    },
    {
        path: 'deposit',
        component: DepositComponent,
    },
    {
        path: 'expense',
        component: ExpenseComponent,
    },
    {
        path: 'transfer',
        component: TransferComponent,
    },
    {
        path: 'view-transaction',
        component: ViewTransactionComponent,
    },
    {
        path: 'balance-sheet',
        component: BalanceSheetComponent,
    },
    {
        path: 'transfer-report',
        component: TransferReportComponent,
    },
    { path: 'invoice', component: InvoiceComponent, },
    { path: 'ninvoices', component: NinvoicesComponent, },
    { path: 'recurring', component: RecurringComponent, },
    { path: 'nrecurring', component: NrecurringComponent, },
    { path: 'quote', component: QuoteComponent, },
    { path: 'nquote', component: NquoteComponent, },
    { path: 'payment', component: PaymentComponent, },
    { path: 'taxeport', component: TaxeportComponent , },
    { path: 'transfer-report', component: TransferReportComponent, },
    { path: 'rtask', component: RtaskComponent, },
    { path: 'atask', component: AtaskComponent, },
    { path: 'cpayment', component: CpaymentComponent, },
    { path: 'emanage', component: EmanageComponent, },
    { path: 'ecategory', component: EcategoryComponent, },
    { path: 'preport', component: PreportComponent, },
    { path: 'creport', component: CreportComponent, },
    { path: 'ereport', component: EreportComponent, },
    { path: 'incomexp', component: IncomexpComponent, },
    { path: 'thistory', component: ThistoryComponent, },
    { path: 'timechange', component: TimechangeComponent, },
    { path: 'atreport', component: AtreportComponent, },
    { path: 'jpost', component: JpostComponent, },
    { path: 'japp', component: JappComponent, },
    { path: 'salary', component: SalaryComponent, },
    { path: 'hourly', component: HourlyComponent, },
    { path: 'managesal', component: ManagesalComponent, },
    { path: 'empsallist', component: EmpsallistComponent, },
    { path: 'mpayment', component: MpaymentComponent, },
    { path: 'generatepay', component: GeneratepayComponent, },
    { path: 'paysum', component: PaysumComponent, },
    { path: 'stockcat', component: StockcatComponent, },
    { path: 'manstock', component: ManstockComponent, },
    { path: 'astock', component: AstockComponent, },
    { path: 'ticanswer', component: TicanswerComponent, },
    { path: 'ticopen', component: TicopenComponent, },
    { path: 'iprocess', component: IprocessComponent, },
    { path: 'close', component: CloseComponent, },
    // { path: 'allticket', component: AllticketComponent, },
    { path: 'ativitylog', component: AtivitylogComponent, },
    { path: 'emailmes', component: EmailmesComponent, },
    { path: 'systemsts', component: SystemstsComponent, },
    // { path: 'charts_flot', component: Charts_FlotComponent, },
    // { path: 'charts_Js', component: Charts_JsComponent, },
    // { path: 'charts_morris', component: Charts_MorrisComponent, },
    // { path: 'charts_sparkline', component: Charts_SparklineComponent, },
    // { path: 'icons_bootstrap', component: Icons_BootstrapComponent, },
    // { path: 'icons_fontawesome', component: Icons_FontawesomeComponent, },
    // { path: 'icons_flag', component: Icons_FlagComponent, },
    // { path: 'icons_material', component: Icons_MaterialComponent, },
    // { path: 'icons_weather', component: Icons_WeatherComponent, },
    // { path: 'icons_line', component: Icons_LineComponent, },
    // { path: 'icons_pe', component: Icons_PeComponent, },
    // { path: 'icon_socicon', component: Icon_SociconComponent, },
    { path: 'login', component: LoginComponent, },
    { path: 'register', component: RegisterComponent, },
    { path: 'profile', component: ProfileComponent, },
    // { path: 'forget_password', component: Forget_PasswordComponent, },
    { path: 'lockscreen', component: LockscreenComponent, },
    // { path: '404', component: 404Component, },
    // { path: '505', component: 505Component, },
    // { path: 'blank        ', component: blank        Blank       Component, },
    { path: 'buttons', component: ButtonsComponent, },
    { path: 'tabs', component: TabsComponent, },
    { path: 'notification', component: NotificationComponent, },
    { path: 'tree', component: TreeComponent, },
    { path: 'progressbars', component: ProgressbarsComponent, },
    { path: 'list', component: ListComponent, },
    { path: 'typography', component: TypographyComponent, },
    { path: 'panels', component: PanelsComponent, },
    { path: 'modals', component: ModalsComponent, },
    // { path: 'icheck_toggle_pagination', component: Icheck_Toggle_PaginationComponent, },
    // { path: 'labels        ', component: labels        Labels       Component, },
    { path: 'gsetting', component: GsettingComponent, },
    { path: 'stfsetting', component: StfsettingComponent, },
    { path: 'emailsetting', component: EmailsettingComponent, },
    { path: 'paysetting', component: PaysettingComponent, },
    { path: 'company', component: CompanyComponent, },
    { path: 'holiday', component: HolidayComponent, },
    { path: 'user', component: UserComponent, },
    { path: 'items', component: ItemsComponent, },
    { path: 'department', component: DepartmentComponent, },
    { path: 'document', component: DocumentComponent, },
    { path: 'train', component: TrainComponent, },
    { path: 'calender', component: CalenderComponent, },
    { path: 'notice', component: NoticeComponent, },
    { path: 'message', component: MessageComponent, },
    { path: 'note', component: NoteComponent, },
    {
        path: '**',
        redirectTo: '/dashboard'
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
