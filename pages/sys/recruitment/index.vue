<template>
  <div>
    <div @click="handleOpenReport" class="btn btn--lasso" style="display:inline-block; margin-bottom: 15px; outline: 3px solid teal;">暫時報告另開分頁按鈕</div>
    <div class="toolbar">
      <div class="btn toolbar__btn" 
        @click="handleSendInvitationMultiple"
        :class="{'btn--disabled': checked.length <= 1, 'btn--primary': checked.length > 0 }"
      >
        批次邀請
      </div>
      <div class="btn btn--primary toolbar__btn">批次匯入</div>
      <div class="btn btn--primary toolbar__btn" @click="handleOpenAddNewPersonnelModal">新進人員</div>
      <div class="tip toolbar__tip" @mouseover="hoverTooltip = true" @mouseleave="hoverTooltip = false">
        <div class="tip__icon"></div>
        <div class="tip__text tooltip__parent">顏色狀態說明
          <div class="tooltip" v-show="hoverTooltip">
            <div class="tooltip__data">
              <div class="tooltip__dataCircle"></div>
              <div class="tooltip__dataText">未邀請</div>
            </div>
            <div class="tooltip__data tooltip__data--consequtive">
              <div class="tooltip__dataCircle tooltip__dataCircle--warning"></div>
              <div class="tooltip__dataText">已發送</div>
            </div>
            <div class="tooltip__data tooltip__data--consequtive">
              <div class="tooltip__dataCircle tooltip__dataCircle--danger"></div>
              <div class="tooltip__dataText">已逾期、已取消</div>
            </div>
            <div class="tooltip__data tooltip__data--consequtive">
              <div class="tooltip__dataIcon"></div>
              <div class="tooltip__dataText">已完成</div>
            </div>
          </div>
        </div>
      </div>
      <div class="search toolbar__search">
        <input type="text" placeholder="請輸入部門/應徵職缺/姓名" class="search__input" v-model="searchForm.keyword" @keydown.enter="getAndMapTableData">
        <div class="search__btn" @click="getAndMapTableData">
          <div class="search__btnIcon"></div>
        </div>
      </div>
    </div>
    <table class="table">
      <thead class="table__header">
        <tr>
          <th class="table__headerCell">
            <div class="table__headerCellText">
              <input type="checkbox" name="" id="">
            </div>
          </th>
          <th class="table__headerCell">
            <div class="table__headerCellText">部門</div>
          </th>
          <th class="table__headerCell">
            <div class="table__headerCellText">姓名</div>
          </th>
          <th class="table__headerCell">
            <div class="table__headerCellText">信箱</div>
          </th>
          <th class="table__headerCell">
            <div class="table__headerCellText">職位</div>
          </th>
          <th class="table__headerCell">
            <div class="table__headerCellText">階層</div>
          </th>
          <th class="table__headerCell">
            <div class="table__headerCellText">MAYO測評</div>
          </th>
          <th class="table__headerCell">
            <div class="table__headerCellText">功能</div>
          </th>
        </tr>
      </thead>
      <div class="table__divider"></div>
      <tbody class="table__body">
        <tr class="table__row table__row--selected table__row--selectable"  v-for="(row, index) in tableData" :key="index">
          <td class="table__cell">
            <input type="checkbox" @change="handleCheck($event, row)">
          </td>
          <td class="table__cell" @click="handleRowClick" v-for="(colValue, colKey) in row" :key="colKey" v-show="colKey !== 'SubjectId' && colKey !== 'CATId'">
            <div v-if="colKey !== 'CAT' && colKey !== 'SubjectId'">{{ colValue }}</div>
            <div class="table__cellCircle" v-if="colKey === 'CAT' && colKey !== 'SubjectId'">
              <div class="circle"
                :class="{
                  'circle--red': colValue === 9 || colValue === 99,
                  'circle--yellow': colValue === 2 || colValue === 3 || colValue === 4,
                  'circle--white': colValue === 0 || colValue === 1
                }"
                v-if="colValue === 9 || colValue === 99 || colValue === 2 || colValue === 3 || colValue === 4 || colValue === 0 || colValue === 1"
              >
              </div>
              <div class="report" v-else @click="handleOpenReport(row)"></div>
            </div>
          </td>
          <td class="table__cell">
            <div class="table__toolbar">
              <div class="tableBtn" @click.stop="handleToggleSendInviteModal(row)">
                <div class="tableBtn__icon tableBtn--iconInvite"></div>
                <div class="tableBtn__text">測評邀請</div>
              </div>
              <div class="tableBtn" @click.stop="toggleSendReportModal = true">
                <div class="tableBtn__icon tableBtn--iconSent"></div>
                <div class="tableBtn__text">寄送報告</div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="table__footer">
      <div class="table__pagination">
        <div class="table__paginationText">1 - 30 列 (共 {{ tableData.length }} 列)</div>
        <div class="table__paginationBtnbox">
          <div class="table__paginationBtn table__paginationBtn--prev table__paginationBtn--disabledPrev" @click="handleUpdatePage(-1)"></div>
          <div class="table__paginationBtn table__paginationBtn--next" @click="handleUpdatePage(-1)"></div>
        </div>
      </div>
    </div>
    <div class="modal modal--center" v-show="toggleAddNewPersonnelModal">
      <div class="modal__title">
        <div class="modal__titleText">新進人員</div>
        <div class="modal__times" @click="toggleAddNewPersonnelModal = false"></div>
      </div>
      <div class="modal__body">
        <div class="modal__section">
          <div class="modal__sectionTitle">基本資料</div>
          <div class="inputWrapper">
            <div class="inputWrapper__row">
              <div class="input">
                <div class="input__label">姓名</div>
                <div class="input__input">
                  <input type="text" class="input__inputBox" v-model="addNewPersonnelForm.Name" />
                </div>
              </div>
              <div class="input">
                <div class="input__label">手機</div>
                <div class="input__input">
                  <input type="text" class="input__inputBox" v-model="addNewPersonnelForm.Phone"/>
                </div>
              </div>
              <div class="input">
                <div class="input__label">信箱</div>
                <div class="input__input">
                  <input type="text" class="input__inputBox" v-model="addNewPersonnelForm.Email"/>
                </div>
              </div>
              <div class="input">
                <div class="input__label">學歷</div>
                <div class="input__input">
                  <input type="text" class="input__inputBox" v-model="addNewPersonnelForm.Graduation"/>
                </div>
              </div>
              <div class="input">
                <div class="input__label">績效</div>
                <div class="input__input">
                  <select class="input__inputBox" v-model="addNewPersonnelForm.Graduation">
                    <option :value="item.Key" v-for="item in performanceList" :key="item.Key">{{ item.Value }}</option>
                  </select>
                </div>
              </div>
            </div>         
          </div>
        </div>
        <div class="modal__section model__section--consequtive">
          <div class="modal__sectionTitle">招募資料</div>
          <div class="inputWrapper">
            <div class="inputWrapper__row">
              <div class="input">
                <div class="input__label">部門</div>
                <div class="input__input">
                  <select class="input__inputBox" v-model="addNewPersonnelForm.Department">
                    <option value="aaa">123</option>
                  </select>
                </div>
              </div>
              <div class="input">
                <div class="input__label">階層</div>
                <div class="input__input">
                  <select class="input__inputBox" v-model="addNewPersonnelForm.Class">
                    <option :value="item.Key" v-for="item in classList" :key="item.Key">{{ item.Value }}</option>
                  </select>
                </div>
              </div>
              <div class="input">
                <div class="input__label">職系</div>
                <div class="input__input">
                  <select class="input__inputBox" v-model="addNewPersonnelForm.Profession">
                    <option :value="item.Key" v-for="item in professionList" :key="item.Key">{{ item.Value }}</option>
                  </select>
                </div>
              </div>
              <div class="input">
                <div class="input__label">工號</div>
                <div class="input__input">
                  <input type="text" class="input__inputBox" v-model="addNewPersonnelForm.EmployNumber"/>
                </div>
              </div>
              <div class="input">
                <div class="input__label">職位</div>
                <div class="input__input">
                  <input type="text" class="input__inputBox" v-model="addNewPersonnelForm.Position"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal__section model__section--consequtive">
          <div class="modal__sectionTitle">選擇測評類型 ( 可複選 )</div>
          <div class="inputWrapper">
            <div class="inputWrapper__row">
              <div class="input input--block">
                <div class="input__input input__checkbox">
                  <input type="checkbox" id="mayo" v-model="surveyForm.MAYO"/>
                  <div class="input__label input__label--checkbox" for="mayo">MAYO測評</div>
                </div>
              </div>
              <div class="input input--block">
                <div class="input__input input__checkbox">
                  <input type="checkbox" id="ddi" v-model="surveyForm.DDI"/>
                  <div class="input__label input__label--checkbox" for="ddi">DDI測評</div>
                </div>
              </div>
              <div class="input input--block">
                <div class="input__multipleInputsBox">
                  <div class="input__input input__checkbox">
                    <input type="checkbox" id="capp" v-model="surveyForm.CAT"/>
                    <div class="input__label input__label--checkbox">Lasso AI</div>
                  </div>
                  <div class="input__input input__multipleInputs--consequtive">
                    <select class="input__inputBox">
                      <option value="aaa">請選擇AI測評類型</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal__footer">
        <div class="modal__footerToolbar">
          <div class="btn btn--wide btn--lassoOutlined btn--rounded" @click="toggleAddNewPersonnelModal = false">取消</div>
          <div class="btn btn--lasso btn--wide2x btn--rounded modal__footerToolbarBtn--consequtive" @click="handleAddNewPersonnel">確定</div>
        </div>
      </div>
    </div>
    <div class="modal modal--center" v-show="toggleSendInviteModal">
      <div class="modal__title">
        <div class="modal__titleText">發送測評邀請</div>
        <div class="modal__times" @click="toggleSendInviteModal = false"></div>
      </div>
      <div class="modal__body">
        <div class="modal__section">
          <div class="modal__sectionTitle">
            <div class="modal__sectionTitleMainText">發送人選</div>
            <div class="modal__sectionTitleSubText">選取人選：{{ this.selectMode === 0 ? '1' : this.checked.length }} 人</div>
          </div>
          <div class="inputWrapper">
            <div class="inputWrapper__row">
              <div class="list" v-if="selectedPersonnel.length">
                <div class="list__listitem" v-for="item in selectedPersonnel" :key="item.SubjectId">
                  <div>職位：{{ item.Position }}</div>
                  <div>受測者：{{ item.Name }}</div>
                  <div class="list__icon"></div>
                </div>
              </div>
            </div>         
          </div>
        </div>
        <div class="modal__section model__section--consequtive">
          <div class="modal__sectionTitle">選擇測評類型 ( 可複選 )</div>
          <div class="inputWrapper">
            <div class="inputWrapper__row">
              <div class="input input--block">
                <div class="input__input input__checkbox">
                  <input type="checkbox" id="mayo" v-model="surveyForm.MAYO"/>
                  <div class="input__label input__label--checkbox" for="mayo">MAYO測評</div>
                </div>
              </div>
              <div class="input input--block">
                <div class="input__input input__checkbox">
                  <input type="checkbox" id="ddi" v-model="surveyForm.DDI"/>
                  <div class="input__label input__label--checkbox" for="ddi">DDI測評</div>
                </div>
              </div>
              <div class="input input--block">
                <div class="input__multipleInputsBox">
                  <div class="input__input input__checkbox">
                    <input type="checkbox" id="CAT" v-model="surveyForm.CAT"/>
                    <div class="input__label input__label--checkbox">Lasso AI</div>
                  </div>
                  <div class="input__input input__multipleInputs--consequtive">
                    <select class="input__inputBox">
                      <option value="aaa">請選擇AI測評類型</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal__footer">
        <div class="modal__footerToolbar">
          <div class="btn btn--wide btn--lassoOutlined btn--rounded" @click="toggleSendInviteModal = false">取消</div>
          <div class="btn btn--lasso btn--wide2x btn--rounded modal__footerToolbarBtn--consequtive" @click="handleSendInvitation">確定</div>
        </div>
      </div>
    </div>
    <div class="modal modal--center" v-show="toggleSendReportModal">
      <div class="modal__title">
        <div class="modal__titleText">寄送報告</div>
        <div class="modal__times" @click="toggleSendReportModal = false"></div>
      </div>
      <div class="modal__body">
        <div class="modal__section">
          <div class="modal__sectionTitle">
            <div class="modal__sectionTitleMainText">發送人選</div>
            <div class="modal__sectionTitleSubText">選取人選：5人</div>
          </div>
          <div class="inputWrapper">
            <div class="inputWrapper__row">
              <div class="list">
                <div class="list__listitem">
                  <div>職位：產品經理</div>
                  <div>受測者：王昭棟</div>
                  <div class="list__icon"></div>
                </div>
                <div class="list__listitem">
                  <div>職位：產品經理</div>
                  <div>受測者：王昭棟</div>
                  <div class="list__icon"></div>
                </div>
                <div class="list__listitem list__listitem--last">
                  <div>職位：產品經理</div>
                  <div>受測者：王昭棟</div>
                  <div class="list__icon"></div>
                </div>
              </div>
            </div>         
          </div>
        </div>
      </div>
      <div class="modal__footer">
        <div class="modal__footerToolbar">
          <div class="btn btn--wide btn--lassoOutlined btn--rounded" @click="toggleSendReportModal = false">取消</div>
          <div class="btn btn--lasso btn--wide2x btn--rounded modal__footerToolbarBtn--consequtive">確定</div>
        </div>
      </div>
    </div>
    <div class="modal modal--right" v-show="toggleBasicDetailModal">
      <div class="modal__title modal__title--right">
        <div class="modal__titleText"></div>
        <div class="modal__times modal__times--right" @click="toggleBasicDetailModal = false"></div>
      </div>
      <div class="modal__body">
        <div class="modal__section">
          <div class="modal__sectionTitle">
            <div class="modal__sectionTitleMainText">基本資料</div>
            <div class="modal__sectionTitleSubText modal__sectionTitleSubText--clickable" @click="toggleBasicDetailEdit = true">
              <div class="modal__sectionTitleSubTextIcon"></div>
              編輯
            </div>
          </div>
          <div class="inputWrapper">
            <div class="inputWrapper__row">
              <div class="input">
                <div class="input__label">姓名</div>
                <div class="input__input">
                  <input type="text" class="input__inputBox"/>
                </div>
              </div>
              <div class="input">
                <div class="input__label">手機</div>
                <div class="input__input">
                  <input type="text" class="input__inputBox"/>
                </div>
              </div>
              <div class="input">
                <div class="input__label">信箱</div>
                <div class="input__input">
                  <input type="text" class="input__inputBox"/>
                </div>
              </div>
              <div class="input">
                <div class="input__label">學歷</div>
                <div class="input__input">
                  <input type="text" class="input__inputBox"/>
                </div>
              </div>
              <div class="input">
                <div class="input__label">學歷</div>
                <div class="input__input">
                  <select class="input__inputBox">
                    <option value="aaa">123</option>
                  </select>
                </div>
              </div>
            </div>         
          </div>
        </div>
        <div class="modal__section model__section--consequtive">
          <div class="modal__sectionTitle">測評紀錄</div>
          <div class="inputWrapper">
            <table class="simpleTable">
              <thead class="simpleTable__header">
                <tr>
                  <th class="simpleTable__headerCell">項目</th>
                  <th class="simpleTable__headerCell">完成時間</th>
                  <th class="simpleTable__headerCell">狀態</th>
                </tr>
              </thead>
              <div class="simpleTable__divider"></div>
              <tbody class="simpleTable__body">
                <tr class="simpleTable__row simpleTable__row--odd">
                  <td class="simpleTable__col">The table body</td>
                  <td class="simpleTable__col">with two columns</td>
                  <td class="simpleTable__col">The table body</td>
                </tr>
                <tr class="simpleTable__row simpleTable__row--even">
                  <td class="simpleTable__col">The table body</td>
                  <td class="simpleTable__col">with two columns</td>
                  <td class="simpleTable__col">The table body</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="modal__footer" v-show="toggleBasicDetailEdit">
        <div class="modal__footerToolbar">
          <div class="btn btn--wide btn--lassoOutlined btn--rounded" @click="toggleBasicDetailModal = false">取消</div>
          <div class="btn btn--lasso btn--wide2x btn--rounded modal__footerToolbarBtn--consequtive">確定</div>
        </div>
      </div>
    </div>
    <div class="mask" v-show="toggleAddNewPersonnelModal || toggleSendInviteModal || toggleSendReportModal || toggleBasicDetailModal"></div>
  </div>
</template>

<script>
import { $axios } from '~/utils/api'

export default {
  layout: 'defaultNew',
  data() {
    return {
      checked: [],
      tableData: [],
      pageData: {
        currentPage: 1,
        rows: 10
      },
      searchForm: {
        keyword: ''
      },
      toggleAddNewPersonnelModal: false,
      toggleSendInviteModal: false,
      toggleSendReportModal: false,
      toggleBasicDetailModal: false,
      toggleBasicDetailEdit: false,
      modalView: 0,
      hoverTooltip: false,
      addNewPersonnelForm: {
        Name: '',
        Email: '',
        Phone: '',
        Photo: '',
        Identity: '',
        Position: '',
        Department: '',
        Graduation: '',
        Class: '',
        Profession: '',
        EmployNumber: ''
      },
      surveyForm: {
        CAT: false,
        MAYO: false,
        DDI: false
      },
      subjectId: '',
      performanceList: [],
      professionList: [],
      classList: [],
      departmentList: [],
      tableData: [],
      selectMode: 0
    }
  },
  computed: {
    selectedPersonnel() {
      const placeholder = { SubjectId: '', Name: '', Position: '' }
      if(this.tableData.length) {
        if(this.selectMode === 0) {
          const res = this.tableData.find(item => item.SubjectId === this.subjectId)
          return [ res !== undefined ? res : placeholder ]
        } else if(this.selectMode === 1) {
          return this.checked.map(item => {
            return this.tableData.find(tableItem => tableItem.SubjectId === item)
          })
        }
      } else {
        return [ placeholder ]
      }
    }
  },
  methods: {
    handleRowClick() {
      this.toggleBasicDetailModal = true
    },
    handleOpenReport(row) {
      window.open(`/sys/recruitment/report?SubjectId=${row.SubjectId}&AssessmentId=${row.CATId}`, '_blank')
    },
    async handleSendReport() {},
    handleSendInvitationMultiple() {
      if(this.checked.length > 0) {
        this.toggleSendInviteModal = true
        this.selectMode = 1
      }
    },
    handleToggleSendInviteModal(row) {
      this.toggleSendInviteModal = true
      this.selectMode = 0
      this.subjectId = row.SubjectId
    },
    async handleSendInvitation(row) {
      const confirmChecked = Object.values(this.surveyForm).find(item => item === true)
      if(confirmChecked) {
        await this.sendCreateAssessmentRequest('CAPP', 'invitation')
        this.toggleSendInviteModal = false
      }
    },
    async handleUpdatePage(type) {
      if(type === 1) {
        this.pageData.currentPage += 1
        await this.sendGetTableDataRequest()
      } else if(type === -1 && this.pageData.currentPage !== 1) {
        this.pageData.currentPage -=1
        await this.sendGetTableDataRequest()
      }
    },
    async handleOpenAddNewPersonnelModal() {
      this.toggleAddNewPersonnelModal = true
      const result = await this.sendGetParametersRequest('Platform', 'Performance')
      this.performanceList = [ ...result.data.Results ]
      const result2 = await this.sendGetParametersRequest('Platform', 'Profession')
      this.professionList = [ ...result2.data.Results ]
      const result3 = await this.sendGetParametersRequest('Platform', 'Class')
      this.classList = [ ...result3.data.Results ]
    },
    async handleAddNewPersonnel() {
      let iterator = Object.keys(this.surveyForm)
      iterator = iterator.filter(item => this.surveyForm[item] === true)

      await this.sendAddNewPersonnelRequest()
      if(iterator.length) {
        const result = await this.sendCreateAssessmentRequest(iterator)
        this.subjectId = result.data.Results[0].SubjectId
      }
      await this.getAndMapTableData()
      this.toggleAddNewPersonnelModal = false
    },
    handleCheck(e, row) {
      if(e.target.checked) {
        this.checked = [...this.checked, row.SubjectId]
      } else {
        this.checked = this.checked.filter(item => item !== row.SubjectId)
      }
    },
    async sendGetParametersRequest(type, code) {    
      try {
        const requestBody = {
                Conditions: [
            {
                ParameterType: type,
                TypeCode: code
            }
        ]
        }
        const result = await $axios.post('/Utility/QueryParameters', requestBody)
        return result
      } catch(e) {
        console.log(e)
      }
    },
    async sendCreateAssessmentRequest(list, type) {   
      let requestBody 
      try {
        if(type === 'invitation') {
          requestBody = {
            Contents: [
              { 
                SubjectId: this.subjectId,
                Type: 'CAT',
                EnableInvite: true,
                Version: '1.0',
                Period: 720,
                ReportViewers:[]
              }
            ]
          }
        } else {
          requestBody = {
            Contents: [
              { 
                SubjectId: this.subjectId,
                Type: list[0],
                EnableInvite: true,
                Version: '1.0',
                Period: 16,
                ReportViewers:[]
              }
            ]
          }
        }
        
        const result = await $axios.post('/Assessment/CreateAssessments', requestBody)
      } catch(e) {
        console.log(e)
      }
    },
    async sendAddNewPersonnelRequest() {    
      try {
        const requestBody = {
          Contents: [
            { ...this.addNewPersonnelForm, Identity: 1 }
          ]
        }
        const result = await $axios.post('/Assessment/CreateSubjects', requestBody)
        return result
      } catch(e) {
        console.log(e)
      }
    },
    async sendGetTableDataRequest() {
      try {
        const requestBody = {
          Conditions: [
            {
              IdentityFilter: 1,
              SortBy: '',
              Ordering: 'DESC',
              Keyword: this.searchForm.keyword === '' ? null : this.searchForm.keyword
            }
          ],
          Page: this.pageData.currentPage,
          RowsPerPage: this.pageData.rows
        }
        const result = await $axios.post('/Assessment/QuerySubjects', requestBody)
        return result
      } catch(e) {

      }
    },
    async getAndMapTableData() {
      const result = await this.sendGetTableDataRequest()
      this.tableData = result.data.Results.map(item => {
        return {
          SubjectId: item.SubjectId,
          Department: item.Department,
          Name: item.Name,
          Email: item.Email,
          Position: item.Position,
          Class: item.Class,
          CAT: item.CAT.length ? item.CAT[0].Status ? item.CAT[0].Status : 0 : 0,
          CATId: item.CAT.length ? item.CAT[0].AssessmentId ? item.CAT[0].AssessmentId : 0 : 0
        }
      })
    }
  },
  async created() {
    this.getAndMapTableData()
  }
}
</script>
