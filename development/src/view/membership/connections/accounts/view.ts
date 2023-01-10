import { LitElement, html, css, TemplateResult } from 'lit';
import { customElement, property, query, } from 'lit/decorators.js';
import "@material/mwc-icon";
import "@material/mwc-icon-button";
import "../../../../assets/styles/views/home/dashboard.scss";
import { DELETE_UserConnectionAccount } from '@@addons/network/members/connections/accounts/delete';
import { UserConnectionAccount_I } from '@@addons/interfaces/members/connections/accounts';
import { FilterFieldBox } from '@@addons/classes/filter_field_box';
import { CONSTANTS } from '@@addons/constants';
import { getUserLoginInfoCookie } from '@@addons/functions/login';
import { urlQueryParams, urlQueryParamsJoin } from '@@addons/functions/url_query_params';
import { SelectInputProcessedAjaxResponse_I, SelectInputProcessedAjaxUrlParam_I } from '@@addons/interfaces/form/select-input';
import { Button } from '@material/mwc-button';
import { QueryOptions } from 'select2';
import '@@widgets/datatables';
import '@@interfaces/datatables';
import "@material/mwc-select";
import '@@addons/widgets/form/new/select';
import { UserConnectionType_I, UserConnectionType_S } from '@@addons/interfaces/members/connections/types';
import { GET_UserConnectionType } from '@@addons/network/members/connections/types';
import { show_selection_member_id_filter } from '../members_and_connections/view_members';
import { MembershipUser_I, MembershipUser_S } from '@@addons/interfaces/members/user';
import "@@addons/widgets/buttons/link-buttons/link-button";


@customElement("pdb-connections-accounts-view")
export class PdbConnectionsAccountsView extends LitElement {
  constructor() { super(); }

  @query('[filter-section-context="btn"]')
  private filterSectionContextBtn: Button;

  @query('[filter-section-context="container"]')
  private filterSectionContextContainer: Element;

  @query('[make-general-posts="submit_filter_form"]')
  private filterSectionContextForm: HTMLFormElement;

  @property({ type: Array })
  private _connection_accounts: UserConnectionAccount_I[] = [];

  @property({ type: Number })
  private startSearchPage1: number = 0;

  @property({ type: Number })
  private startSearchPage2: number = 0;

  private filterBox: FilterFieldBox;

  @property({ type: Array })
  private _connection_types: UserConnectionType_I[] = [];

  @property({ type: String })
  private datatablePathUrl: string = "members/user-connection-account";

  async connectedCallback() {
    super.connectedCallback();

    this.filterBox = new FilterFieldBox({
      selectors: {
        container: this.filterSectionContextContainer,
        form: this.filterSectionContextForm,
        filterSectionContextBtn: this.filterSectionContextBtn,
      }
    });

    await this.getConnectionTypes();
  }

  disconnectedCallback() { }
  static styles = [
    css`
   :host { display: block; }
  `
  ];

  render() {

    if (this._connection_accounts === null) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <mwc-circular-progress indeterminate></mwc-circular-progress>
          </div>
        </div>
      `;
    }
    if (this._connection_accounts === undefined) {
      return html`
        <div class="main-container">
          <div class="flex justify-center">
            <h4 class="text-red-600 text-lg">
              <span class="font-bold">Schedule </span>: undefined error</h4>
          </div>
        </div>
      `;
    }

    return html`
      <span class="flex flex-row md:flex-col w-100"></span>
      <div class="block my-1">
        <mwc-button icon="open_with" label="Filters" raised class="primary mt-1"
          filter-section-context="btn" @click="${this.filterBox.toggleFilterFields}">
        </mwc-button>
      </div>
      <div class="block my-1">
        ${this.filterForm}
      </div>
      <div class="block my-1 overflow-x-scroll">
        <hr class="my-2" />
        <link-button isblockcontent="false" aClass="" raised bClass="button success mr-2" 
          href="${CONSTANTS.URLS.PDB_CLIENT}member/connections/add-connection-account" label="Add Connetion Account">
        </link-button>
        <hr class="my-2" />
        ${this.table}
      </div>
    `;
  }

  firstUpdated() {
    this.filterBox = new FilterFieldBox({
      selectors: {
        container: this.filterSectionContextContainer,
        form: this.filterSectionContextForm,
        filterSectionContextBtn: this.filterSectionContextBtn,
      }, unmutableInputNames: [],
    });
  }

  private get filterForm() {
    let returnHtml = html``;
    const _urlQueryParams = urlQueryParams(),
      filterNameId_filter_memberId = "memberId",
      filterNameId_filter_connectionId = "connectionId",
      filterNameId_filter_type = "type";

    let filterNameId_filter_memberIdVal: string = null,
      filterNameId_filter_connectionIdVal: string = null,
      filterNameId_filter_typeVal: string = null;

    let ajaxHeader: { Authorization?: string } = {};
    // const _get_cookie = base64Decode(get_cookie('client_tokenLogin'));
    const _get_cookie = getUserLoginInfoCookie();
    ajaxHeader.Authorization = "Token " + _get_cookie.token;

    for (const key in _urlQueryParams) {
      let value = String(_urlQueryParams[key]);
      value = value === "" ? null : value;
      if (key === filterNameId_filter_memberId) {
        filterNameId_filter_memberIdVal = value;
      }
      if (key === filterNameId_filter_connectionId) {
        filterNameId_filter_connectionIdVal = value;
      }
      if (key === filterNameId_filter_type) {
        filterNameId_filter_typeVal = value;
      }
    }

    const memberField = html`
      <div class="col-xl-4 col-md-6">
        <h4 class="font-semibold my-2">Select Member</h4>
        ${show_selection_member_id_filter(Number(filterNameId_filter_memberIdVal))}
          <select-input class="w-100" id="${filterNameId_filter_memberId}" name="${filterNameId_filter_memberId}" label="Select Member"
            .ajaxFetchProcessResponse="${this.processClientUserSearch1}" startSearchPage="${this.startSearchPage1}"
            .ajaxHeader="${ajaxHeader}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams1}"
            ajaxFetchUrl="${CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
      </div>`;

    const connectionField = html`
      <div class="col-xl-4 col-md-6">
        <h4 class="font-semibold my-2">Select Connection</h4>
        ${show_selection_member_id_filter(Number(filterNameId_filter_connectionIdVal))}
          <select-input class="w-100" id="${filterNameId_filter_connectionId}" name="${filterNameId_filter_connectionId}" label="Select Connection"
            .ajaxFetchProcessResponse="${this.processClientUserSearch2}" startSearchPage="${this.startSearchPage2}"
            .ajaxHeader="${ajaxHeader}" .ajaxFetchUrlParams="${this.ajaxFetchUrlParams2}"
            ajaxFetchUrl="${CONSTANTS.URLS.AKWAABA_API_BASE_URL}members/user/search"></select-input>
      </div>`;

    const typeField = html`
      <div class="col-xl-4 col-md-6">
        <h4 class="font-semibold my-2">Select Connection Type</h4>
        <mwc-select name="type" class="w-full" id="type" label="Select Connection Type" outlined required>
          <mwc-list-item value="0">Select Connection Type</mwc-list-item>
          ${this._connection_types.map((item) => {
            if (filterNameId_filter_typeVal === null) {
              return html`<mwc-list-item value="${item.id}">${item.type}</mwc-list-item>`;
            } else {
              if (Number(filterNameId_filter_typeVal) === item.id) {
                return html`<mwc-list-item value="${item.id}" selected>${item.type}</mwc-list-item>`;
              } else {
                return html`<mwc-list-item value="${item.id}">${item.type}</mwc-list-item>`;
              }
            }
          })}
        </mwc-select>
      </div>`;

    returnHtml = html`<form method="get" class="form" make-general-posts="submit_filter_form" filter-section-context="container" hidden>
      <div class="container">
        <div class="row">
          ${memberField} ${connectionField} ${typeField}
          <div class="col-xl-12 col-md-10">
            <div class="form-input-container mt-1">
              <mwc-button label="Clear" @click="${this.filterBox.clear_filter}"></mwc-button>
              <mwc-button label="Filter" raised @click="${this.filterBox.submit}"></mwc-button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </form>`
    return returnHtml;
  }

  private processClientUserSearch1(data: any, params: QueryOptions): SelectInputProcessedAjaxResponse_I {
    params.page = params.page || 0;
    const TOTAL = data.count,
      RESULTS = data.results,
      SELECTOR = document.querySelector('[id="memberId"]');
    // console.log({ data, params, RESULTS, SELECTOR });

    let processedData: { id: number; text: string; }[] = [];
    if (TOTAL > 0) {
      var _data = RESULTS;
      // console.log({ "smbfl-_data": _data });
      for (let i = 0; i < _data.length; i++) {
        const item = _data[i];
        const member: MembershipUser_I = MembershipUser_S(item);
        
        const id = member.id;
        const fullName = `${member.firstname} ${member.middlename} ${member.surname}`;
        const _new = {
          id: id,
          text: fullName,
        }
        if (!processedData.includes(_new)) {
          processedData.push(_new)
        }
      }
    }
    // console.log({processedData});



    return {
      results: processedData,
      total: TOTAL,
      // @ts-ignore
      totalShowing: SELECTOR.totalShowing,
    };
  }

  private processClientUserSearch2(data: any, params: QueryOptions): SelectInputProcessedAjaxResponse_I {
    params.page = params.page || 0;
    const TOTAL = data.count,
      RESULTS = data.results,
      SELECTOR = document.querySelector('[id="connectionId"]');

    let processedData: { id: number; text: string; }[] = [];
    if (TOTAL > 0) {
      var _data = RESULTS;
      // console.log({ "smbfl-_data": _data });
      for (let i = 0; i < _data.length; i++) {
        const item = _data[i];
        const member: MembershipUser_I = MembershipUser_S(item);
        
        const id = member.id;
        const fullName = `${member.firstname} ${member.middlename} ${member.surname}`;
        const _new = {
          id: id,
          text: fullName,
        }
        if (!processedData.includes(_new)) {
          processedData.push(_new)
        }
      }
    }
    // console.log({processedData});

    return {
      results: processedData,
      total: TOTAL,
      // @ts-ignore
      totalShowing: SELECTOR.totalShowing,
    };
  }

  private get ajaxFetchUrlParams1(): SelectInputProcessedAjaxUrlParam_I[] {
    return [
      { param: "", value: "" }
    ]
  }

  private get ajaxFetchUrlParams2(): SelectInputProcessedAjaxUrlParam_I[] {
    return [
      { param: "", value: "" }
    ]
  }

  private get __tableHeaders(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'Connection', },
      { title: 'Action', },
    ];
  }

  private get __tableBody(): DataTables_ColumnSettings_I[][] {
    return [];
  }

  private get __tableFoot(): DataTables_ColumnSettings_I[] {
    return [
      { title: 'Connection', },
      { title: 'Action', },
    ];
  }

  private get table(): TemplateResult {
    let URL = CONSTANTS.URLS.AKWAABA_API_BASE_URL + "" + this.datatablePathUrl + "?datatable_plugin";

    const _urlQueryString = this.urlQueryString;
    // console.log({_urlQueryString});
    URL = URL + _urlQueryString;
    // console.log({URL});

    const __dataTable = this.__dataTable(URL);
    let ajaxHeader: { Authorization?: string } = {};
    const _get_cookie = getUserLoginInfoCookie();
    ajaxHeader.Authorization = "Token " + _get_cookie.token;
    return html`
      <datatables-new .datatable="${__dataTable}" .ajaxHeader="${ajaxHeader}" .dt_body="${this.__tableBody}"
        .dt_foot="${this.__tableFoot}" .dt_head="${this.__tableHeaders}"></datatables-new>
    `;
  }

  private renderMemberInfo(data: any, type: any, connectionInfo: UserConnectionAccount_I) {
    // console.log({connectionInfo});
    const memberId = connectionInfo.memberId;
    const connectionId = connectionInfo.connectionId;
    return `
      <div class="flex flex-col">
        <div class="flex flex-col lg:flex-row m-1 justify-start">
          <div class="flex">
            <h6 class="whitespace-nowrap text-sm font-bold mr-1">Connection Name</h6>
            <p class="whitespace-nowrap text-sm ml-1">${connectionId.firstname} ${connectionId.middlename}
              ${connectionId.surname}</p>
          </div>
          <div class="m-1"><mwc-icon>directions<mwc-icon/></div>
          <div class="flex">
            <h6 class="whitespace-nowrap text-sm font-bold mr-1">Member Name</h6>
            <p class="whitespace-nowrap text-sm ml-1">${memberId.firstname} ${memberId.middlename} ${memberId.surname}</p>
          </div>
        </div>
      </div>
    `;
  }

  private renderClockInInfo(data: any, type: any, connectionInfo: UserConnectionAccount_I) {
    // console.log({connectionInfo});
    const connectionType = connectionInfo.type;    
    return `
      <div class="justify-center content-center">
        <mwc-icon-button class="ml-1 danger" icon="delete_forever" 
          delete-this-item="${connectionInfo.id}" >
        </mwc-icon-button>
        <div class="flex flex-col">
          <h6 class="whitespace-nowrap text-sm font-bold mr-1">Connection Type:</h6>
          <div class="flex flex-col">
            <p class="whitespace-nowrap text-sm ml-1">${connectionType.type}</p>
            <p class="text-xs ml-1 whitespace-pre-wrap">${connectionType.description}</p>
          </div>
        </div>
      </div>
    `;
  }

  private get urlQueryString() {
    const _urlQueryParams = urlQueryParams(),
      filterNameId_filter_memberId = "memberId",
      filterNameId_filter_connectionId = "connectionId";

    let newObject: any = {};

    for (const key in _urlQueryParams) {
      let value = String(_urlQueryParams[key]);
      if ((key === filterNameId_filter_memberId) || (key === filterNameId_filter_connectionId)) {
        // console.log({value, });

        newObject[key] = value;
      }
    }

    let _urlQueryParamsJoin = urlQueryParamsJoin(newObject);

    return (_urlQueryParamsJoin.length === 0)
      ? _urlQueryParamsJoin : "&" + _urlQueryParamsJoin;
  }

  private __dataTable(url: string): DataTables_Settings_I {
    const __this = this;

    // console.log({ "__this": __this, url });

    let dataTable: DataTables_Settings_I = {
      'order': [[0, 'desc']],
      'processing': true,
      'serverSide': true,
      'ajax': {
        url: url,
        dataSrc: 'data',
        apiType: "akwaabaApp",
      },
      "columns": [
        {
          data: 'id',
          render: (data: any, type: any, connectionInfo: UserConnectionAccount_I) => __this.renderMemberInfo(data, type, connectionInfo),
          orderable: true
        },
        {
          data: 'inTime',
          render: (data: any, type: any, connectionInfo: UserConnectionAccount_I) => __this.renderClockInInfo(data, type, connectionInfo),
          orderable: true
        },

      ],
      'columnDefs': [
        {
          targets: ['_all'],
          className: 'mdc-data-table__cell',
          // @ts-ignore
          checkboxes: {
            selectRow: true
          },
        }
      ],
      'lengthMenu': [10, 25, 50, 100, 500, 1000],
      "drawCallback": async function (e) {
        const aoData = e.aoData;
        // console.log({ aoData })
        __this.deleteConnectionAction();
      },
      "responsive": false,
      "dom": 'Blfrtip',
      buttons: [
        'selected',
        'selectedSingle',
        'selectAll',
        'selectNone',
        'selectRows',
        'selectColumns',
        'selectCells',
        'pdf',
        'excel',
        'copy',
        'csv',
      ],
      select: true,
      // "select": {
      //   "style": "multi"
      // },
    };
    return dataTable;
  }

  private async getConnectionTypes() {
    const _networkResponse = await GET_UserConnectionType<UserConnectionType_I>(null);

    let __connection_types: UserConnectionType_I[] = [];

    if (_networkResponse === null) {
      __connection_types.push({ id: 0, type: "**NOT FOUND**" });
    } else {
      if ((_networkResponse.response.success === true) && ('length' in _networkResponse.response.data)) {
        const data: any[] = _networkResponse.response.data;

        const DATA: UserConnectionType_I[] = data.map(value => {
          return UserConnectionType_S(value)
        });
        // console.log({DATA});
        __connection_types = DATA;
      }
    }

    const new_data: Array<UserConnectionType_I> = [];
    new_data.push(...this._connection_types, ...__connection_types);
    this._connection_types = new_data;
  }

  private deleteConnectionAction() {
    document.querySelectorAll('[delete-this-item]').forEach((btn) => {
      // console.log({btn})
      btn.addEventListener('click', (e) => {
        // console.log({e})
        // e.preventDefault();
        this.deleteConnection(e);
      })
    });
  }

  async deleteConnection(e: Event) {
    e.preventDefault();
    // console.log({ e });

    // @ts-ignore
    const userConnectionId = Number(e.currentTarget.getAttribute('delete-this-item'));

    await DELETE_UserConnectionAccount(userConnectionId);
  }

  createRenderRoot() {
    return this;
  }
}
