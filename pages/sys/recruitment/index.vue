<template>
  <div>
    <div class="toolbar">
      <div class="btn toolbar__btn" 
        @click="handleSendInvitationMultiple"
        :class="{'btn--disabled': checked.length === 0, 'btn--primary': checked.length > 0 }"
      >
        批次邀請
      </div>
      <div class="btn btn--primary toolbar__btn">批次匯入</div>
      <div class="btn btn--primary toolbar__btn" @click="toggleAddNewPersonnelModal = true">新進人員</div>
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
        <input type="text" placeholder="請輸入部門/應徵職缺/姓名" class="search__input" v-model="searchForm.keyword">
        <div class="search__btn">
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
        <tr class="table__row table__row--selected table__row--selectable" @click="handleRowClick">
          <td class="table__cell">
            <input type="checkbox" @change="handleCheck">
          </td>
          <td class="table__cell">研發部</td>
          <td class="table__cell">王昭棟</td>
          <td class="table__cell">Wanddundun@gmail.com</td>
          <td class="table__cell">會計</td>
          <td class="table__cell">會計</td>
          <td class="table__cell">
            <div class="table__cellCircle">
              <div class="circle"></div>
            </div>
          </td>
          <td class="table__cell">
            <div class="table__toolbar">
              <div class="tableBtn" @click.stop="toggleSendInviteModal = true">
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
        <tr class="table__row">
          <td class="table__cell">
            <input type="checkbox" name="" id="">
          </td>
          <td class="table__cell">研發部</td>
          <td class="table__cell">王昭棟</td>
          <td class="table__cell">Wanddundun@gmail.com</td>
          <td class="table__cell">會計</td>
          <td class="table__cell">會計</td>
          <td class="table__cell">
            <div class="circle"></div>
          </td>
          <td class="table__cell">
            <div class="table__toolbar">
              <div class="tableBtn" @click.stop="toggleSendInviteModal = true">
                <div class="tableBtn__icon tableBtn--iconInvite"></div>
                <div class="tableBtn__text">測評邀請</div>
              </div>
              <div class="tableBtn" @click="toggleSendReportModal = true">
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
        <div class="table__paginationText">1 - 30 列 (共1,200列)</div>
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
          <div class="modal__sectionTitle">招募資料</div>
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
                <div class="input__label">部門</div>
                <div class="input__input">
                  <select class="input__inputBox">
                    <option value="aaa">123</option>
                  </select>
                </div>
              </div>
              <div class="input">
                <div class="input__label">階層</div>
                <div class="input__input">
                  <select class="input__inputBox">
                    <option value="aaa">123</option>
                  </select>
                </div>
              </div>
              <div class="input">
                <div class="input__label">職系</div>
                <div class="input__input">
                  <select class="input__inputBox">
                    <option value="aaa">123</option>
                  </select>
                </div>
              </div>
              <div class="input">
                <div class="input__label">工號</div>
                <div class="input__input">
                  <input type="text" class="input__inputBox"/>
                </div>
              </div>
              <div class="input">
                <div class="input__label">職位</div>
                <div class="input__input">
                  <input type="text" class="input__inputBox"/>
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
                  <input type="checkbox" />
                  <div class="input__label input__label--checkbox">MAYO測評</div>
                </div>
              </div>
              <div class="input input--block">
                <div class="input__input input__checkbox">
                  <input type="checkbox" />
                  <div class="input__label input__label--checkbox">DDI測評</div>
                </div>
              </div>
              <div class="input input--block">
                <div class="input__multipleInputsBox">
                  <div class="input__input input__checkbox">
                    <input type="checkbox" />
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
          <div class="btn btn--lasso btn--wide2x btn--rounded modal__footerToolbarBtn--consequtive">確定</div>
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
        <div class="modal__section model__section--consequtive">
          <div class="modal__sectionTitle">選擇測評類型 ( 可複選 )</div>
          <div class="inputWrapper">
            <div class="inputWrapper__row">
              <div class="input input--block">
                <div class="input__input input__checkbox">
                  <input type="checkbox" />
                  <div class="input__label input__label--checkbox">MAYO測評</div>
                </div>
              </div>
              <div class="input input--block">
                <div class="input__input input__checkbox">
                  <input type="checkbox" />
                  <div class="input__label input__label--checkbox">DDI測評</div>
                </div>
              </div>
              <div class="input input--block">
                <div class="input__multipleInputsBox">
                  <div class="input__input input__checkbox">
                    <input type="checkbox" />
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
          <div class="btn btn--lasso btn--wide2x btn--rounded modal__footerToolbarBtn--consequtive">確定</div>
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
    <div class="modal modal--center modal--wide" v-show="toggleViewReport">
      <div class="modal__title">
        <div class="modal__titleText"> 
          <span @click="modalView = 0" :class="{ 'modal__titleText--focused': modalView === 0, 'modal__titleText--blurred': modalView === 1 }">
            新增人員</span>&nbsp;&nbsp;|&nbsp;&nbsp;
          <span @click="modalView = 1" :class="{ 'modal__titleText--focused': modalView === 1, 'modal__titleText--blurred': modalView === 0 }">
            完整數據
          </span>
        </div>
        <div class="modal__times" @click="toggleViewReport = false"></div>
      </div>
      <div class="modal__body" v-show="modalView === 0">
        <div class="modal__bodyTitle">當前報告 : 未來員工職能測評</div>
        <div class="modal__section">
          <div class="modal__sectionTitle">
            <div class="modal__sectionTitleMainText">人員資料 ( 5 )</div>
          </div>
          <div class="inputWrapper">
            <div class="inputWrapper__row">
              <table class="simpleTable simpleTable--small">
                <thead class="simpleTable__header">
                  <tr>
                    <th class="simpleTable__headerCell">姓名</th>
                    <th class="simpleTable__headerCell">身分</th>
                    <th class="simpleTable__headerCell">工號</th>
                    <th class="simpleTable__headerCell">信箱</th>
                    <th class="simpleTable__headerCell">學歷</th>
                    <th class="simpleTable__headerCell">職位</th>
                    <th class="simpleTable__headerCell">職系</th>
                    <th class="simpleTable__headerCell">階層</th>
                    <th class="simpleTable__headerCell">地區</th>
                    <th class="simpleTable__headerCell">部門</th>
                    <th class="simpleTable__headerCell">測評歷史紀錄</th>
                  </tr>
                </thead>
                <div class="simpleTable__divider"></div>
                <tbody class="simpleTable__body">
                  <tr class="simpleTable__row simpleTable__row--odd">
                    <td class="simpleTable__col">王昭棟</td>
                    <td class="simpleTable__col">在職</td>
                    <td class="simpleTable__col">A008786</td>
                    <td class="simpleTable__col">Wanddundun@gmail.com</td>
                    <td class="simpleTable__col">碩士</td>
                    <td class="simpleTable__col">產品經理</td>
                    <td class="simpleTable__col">專案管理</td>
                    <td class="simpleTable__col">中階</td>
                    <td class="simpleTable__col">台北</td>
                    <td class="simpleTable__col">台北研發一部</td>
                    <td class="simpleTable__col">職能測評0702</td>
                    <td class="simpleTable__col">></td>
                  </tr>
                  <tr class="simpleTable__row simpleTable__row--even">
                     <td class="simpleTable__col">王昭棟</td>
                    <td class="simpleTable__col">在職</td>
                    <td class="simpleTable__col">A008786</td>
                    <td class="simpleTable__col">Wanddundun@gmail.com</td>
                    <td class="simpleTable__col">碩士</td>
                    <td class="simpleTable__col">產品經理</td>
                    <td class="simpleTable__col">專案管理</td>
                    <td class="simpleTable__col">中階</td>
                    <td class="simpleTable__col">台北</td>
                    <td class="simpleTable__col">台北研發一部</td>
                    <td class="simpleTable__col">職能測評0702</td>
                    <td class="simpleTable__col">></td>
                  </tr>
                </tbody>
              </table>
            </div>         
          </div>
        </div>
        <div class="modal__banner">
          <div class="modal__bannerIcon"></div>
          <div class="modal__bannerText">
            作答時間：整體作答所花時間是否異常。謹慎認真：是否仔細看題作答。 <br />
            印象管理：是否刻意想展現良好形象。作答傾向：是否太過中庸或極端。
          </div>
        </div>
        <div class="modal__section model__section--consequtive">
          <div class="modal__sectionTitle">報告可信度指標</div>
          <div class="inputWrapper boxWrapper">
            <div class="modal__box">
              <div class="modal__boxTitle">報告可信度</div>
              <div class="modal__boxContent">中</div>
            </div>
            <div class="modal__box modal__box--consequtive">
              <div class="modal__boxTitle">作答時間</div>
              <div class="modal__boxContent">正常</div>
            </div>
            <div class="modal__box modal__box--consequtive">
              <div class="modal__boxTitle">謹慎認真</div>
              <div class="modal__boxContent">認真</div>
            </div>
            <div class="modal__box modal__box--consequtive">
              <div class="modal__boxTitle">印象管理</div>
              <div class="modal__boxContent">偏高</div>
            </div>
             <div class="modal__box modal__box--consequtive">
              <div class="modal__boxTitle">作答傾向</div>
              <div class="modal__boxContent">中</div>
            </div>
          </div>
        </div>
        <div class="modal__section model__section--consequtive">
          <div class="modal__sectionTitle">職能匹配九宮格</div>
          <div class="divideWrapper">
            <div class="modal__graph">
              <div class="modal__graphNumber">79</div>
              <div id="graph" style="height: 150px; width: 150px;"></div>
              <div class="modal__graphDesc">
                <div class="modal__graphDescTitle modal__graphDescTitle--success">高於平均值</div>
                <div class="modal__graphDescBody">當前對比職系：專案管理</div>
              </div>
            </div>
            <table class="simpleTable simpleTable--small">
                <thead class="simpleTable__header">
                  <tr>
                    <th class="simpleTable__headerCell">當前職系：專案管理</th>
                    <th class="simpleTable__headerCell">重要</th>
                    <th class="simpleTable__headerCell">普通</th>
                    <th class="simpleTable__headerCell">不重要</th>
                  </tr>
                </thead>
                <div class="simpleTable__divider"></div>
                <tbody class="simpleTable__body">
                  <tr class="simpleTable__row simpleTable__row--even">
                    <td class="simpleTable__col">優勢</td>
                    <td class="simpleTable__col">溝通</td>
                    <td class="simpleTable__col">溝通</td>
                    <td class="simpleTable__col">溝通</td>
                  </tr>
                   <tr class="simpleTable__row simpleTable__row--even">
                    <td class="simpleTable__col">優勢</td>
                    <td class="simpleTable__col">溝通</td>
                    <td class="simpleTable__col">溝通</td>
                    <td class="simpleTable__col">溝通</td>
                  </tr>
                   <tr class="simpleTable__row simpleTable__row--even">
                    <td class="simpleTable__col">優勢</td>
                    <td class="simpleTable__col">溝通</td>
                    <td class="simpleTable__col">溝通</td>
                    <td class="simpleTable__col">溝通</td>
                  </tr>
                </tbody>
            </table>
          </div>
        </div>
        <div class="modal__section model__section--consequtive">
          <div class="modal__sectionTitle">職位適性指標</div>
          <div class="modal__sectionSubtitle">推薦職位Top5</div>
          <div class="inputWrapper boxWrapper">
            <div class="modal__box">
              <div class="modal__boxTitle">報告可信度</div>
              <div class="modal__boxContent">
                <div>
                  <span class="modal__boxContentHighlight modal__boxContentHighlight--success">92</span>分
                </div>
              </div>
            </div>
            <div class="modal__box modal__box--consequtive">
              <div class="modal__boxTitle">作答時間</div>
              <div class="modal__boxContent">
                <div>
                  <span class="modal__boxContentHighlight modal__boxContentHighlight--success">92</span>分
                </div>
              </div>
            </div>
            <div class="modal__box modal__box--consequtive">
              <div class="modal__boxTitle">謹慎認真</div>
              <div class="modal__boxContent">
                <div>
                  <span class="modal__boxContentHighlight modal__boxContentHighlight--success">92</span>分
                </div>
              </div>
            </div>
            <div class="modal__box modal__box--consequtive">
              <div class="modal__boxTitle">印象管理</div>
              <div class="modal__boxContent">
                <div>
                  <span class="modal__boxContentHighlight modal__boxContentHighlight--success">92</span>分
                </div>
              </div>
            </div>
             <div class="modal__box modal__box--consequtive">
              <div class="modal__boxTitle">作答傾向</div>
              <div class="modal__boxContent">
                <div>
                  <span class="modal__boxContentHighlight modal__boxContentHighlight--success">92</span>分
                </div>
              </div>
            </div>
          </div>
          <div class="modal__sectionSubtitle modal__sectionSubtitle--consequtive">推薦職位Top5</div>
          <div class="inputWrapper boxWrapper">
            <div class="modal__box">
              <div class="modal__boxTitle">報告可信度</div>
              <div class="modal__boxContent">
                <div>
                  <span class="modal__boxContentHighlight modal__boxContentHighlight--success">92</span>分
                </div>
              </div>
            </div>
            <div class="modal__box modal__box--consequtive">
              <div class="modal__boxTitle">作答時間</div>
              <div class="modal__boxContent">
                <div>
                  <span class="modal__boxContentHighlight modal__boxContentHighlight--success">92</span>分
                </div>
              </div>
            </div>
            <div class="modal__box modal__box--consequtive">
              <div class="modal__boxTitle">謹慎認真</div>
              <div class="modal__boxContent">
                <div>
                  <span class="modal__boxContentHighlight modal__boxContentHighlight--success">92</span>分
                </div>
              </div>
            </div>
            <div class="modal__box modal__box--consequtive">
              <div class="modal__boxTitle">印象管理</div>
              <div class="modal__boxContent">
                <div>
                  <span class="modal__boxContentHighlight modal__boxContentHighlight--success">92</span>分
                </div>
              </div>
            </div>
             <div class="modal__box modal__box--consequtive">
              <div class="modal__boxTitle">作答傾向</div>
              <div class="modal__boxContent">
                <div>
                  <span class="modal__boxContentHighlight modal__boxContentHighlight--success">92</span>分
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal__section model__section--consequtive">
          <div class="modal__sectionTitle">優勢職能</div>
          <div class="categoryDivider">
            <div class="categoryBox">
              <div class="categoryTitle">
                <div class="catrgoryTitleText">創新思維</div>
                <div class="categoryProgBar categoryProgBar--success"></div>
                <div class="categoryNumber">90</div>
              </div>
              <div class="categoryBody">
                <div class="categoryBody__title">定義</div>
                <div>
                  能掌握客戶的需求，提供便捷與高品質的服務，以贏得客 <br /> 戶 
                  的認同、滿意、忠誠與口碑，進而與客戶建立場遠與互利的 
                  關係。
                </div>
              </div>
              <div class="categoryFooter">
                <div class="categoryBody__title">面談問題參考</div>
                <div>
                  如果你在電梯裡碰到一位大客戶，你想了解某一件產品，<br /> 你 
                  的任務是想辦法在電梯達到目的樓層前，把產品推銷給  <br /> 他。
                  再30秒鐘內，必須要清楚表達你的想法，還要讓客戶認同你 
                  的產品，你會如何做？
                </div>
                <div class="categoryFooter__pagination">
                  <div class="categoryFooter__prev">&lt;&nbsp;</div>
                  <div>2 / 8</div>
                  <div class="categoryFooter__next">&nbsp;&gt;</div>
                </div>
              </div>
            </div>
            <div class="categoryBox categoryBox--consequtive">
              <div class="categoryTitle">
                <div class="catrgoryTitleText">創新思維</div>
                <div class="categoryProgBar categoryProgBar--success"></div>
                <div class="categoryNumber">90</div>
              </div>
              <div class="categoryBody">
                <div class="categoryBody__title">定義</div>
                <div>
                  能掌握客戶的需求，提供便捷與高品質的服務，以贏得客 <br /> 戶 
                  的認同、滿意、忠誠與口碑，進而與客戶建立場遠與互利的 
                  關係。
                </div>
              </div>
              <div class="categoryFooter">
                <div class="categoryBody__title">面談問題參考</div>
                <div>
                  如果你在電梯裡碰到一位大客戶，你想了解某一件產品，<br /> 你 
                  的任務是想辦法在電梯達到目的樓層前，把產品推銷給  <br /> 他。
                  再30秒鐘內，必須要清楚表達你的想法，還要讓客戶認同你 
                  的產品，你會如何做？
                </div>
                <div class="categoryFooter__pagination">
                  <div class="categoryFooter__prev">&lt;&nbsp;</div>
                  <div>2 / 8</div>
                  <div class="categoryFooter__next">&nbsp;&gt;</div>
                </div>
              </div>
            </div>
            <div class="categoryBox categoryBox--consequtive">
            <div class="categoryTitle">
              <div class="catrgoryTitleText">創新思維</div>
              <div class="categoryProgBar categoryProgBar--success"></div>
              <div class="categoryNumber">90</div>
            </div>
            <div class="categoryBody">
              <div class="categoryBody__title">定義</div>
              <div>
                能掌握客戶的需求，提供便捷與高品質的服務，以贏得客 <br /> 戶 
                的認同、滿意、忠誠與口碑，進而與客戶建立場遠與互利的 
                關係。
              </div>
            </div>
            <div class="categoryFooter">
              <div class="categoryBody__title">面談問題參考</div>
              <div>
                如果你在電梯裡碰到一位大客戶，你想了解某一件產品，<br /> 你 
                的任務是想辦法在電梯達到目的樓層前，把產品推銷給  <br /> 他。
                再30秒鐘內，必須要清楚表達你的想法，還要讓客戶認同你 
                的產品，你會如何做？
              </div>
              <div class="categoryFooter__pagination">
                <div class="categoryFooter__prev">&lt;&nbsp;</div>
                <div>2 / 8</div>
                <div class="categoryFooter__next">&nbsp;&gt;</div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div class="modal__section model__section--consequtive">
          <div class="modal__sectionTitle">分析與劣勢建議</div>
          <div class="inputWrapper boxWrapper">
            <div class="modal__pp">
              文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊
文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊
文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊

文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊文字區塊
            </div>
          </div>
        </div>
      </div>
      <div class="modal__body" v-show="modalView === 1">
        <div class="modal__section modal__largeBanner">
          <div class="modal__radarGraph">
            <canvas id="radar" width="150" height="150"></canvas>
          </div>
          <div class="modal__radarGraphDesc">
            <div class="modal__radarGraphDescTitle">優勢職能</div>
            <div class="modal__radarGraphDescBody">
              <div class="categoryTitle">
                <div class="catrgoryTitleText">創新思維</div>
                <div class="categoryProgBar categoryProgBar--success"></div>
                <div class="categoryNumber">90</div>
              </div>
              <div class="categoryTitle">
                <div class="catrgoryTitleText">解決方案</div>
                <div class="categoryProgBar categoryProgBar--success"></div>
                <div class="categoryNumber">90</div>
              </div>
              <div class="categoryTitle">
                <div class="catrgoryTitleText">邏輯分析</div>
                <div class="categoryProgBar categoryProgBar--success"></div>
                <div class="categoryNumber">90</div>
              </div>
            </div>
            <div class="modal__radarGraphDescTitle modal__radarGraphDescTitle--consequtive">劣勢職能</div>
            <div class="modal__radarGraphDescBody">
              <div class="categoryTitle">
                <div class="catrgoryTitleText">關係建立</div>
                <div class="categoryProgBar categoryProgBar--success"></div>
                <div class="categoryNumber">90</div>
              </div>
              <div class="categoryTitle">
                <div class="catrgoryTitleText">客戶導向</div>
                <div class="categoryProgBar categoryProgBar--success"></div>
                <div class="categoryNumber">90</div>
              </div>
              <div class="categoryTitle">
                <div class="catrgoryTitleText">溝通表達</div>
                <div class="categoryProgBar categoryProgBar--success"></div>
                <div class="categoryNumber">90</div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal__section model__section--consequtive">
          <div class="modal__sectionTitle">數據內容</div>
          <div class="inputWrapper">
             <table class="simpleTable simpleTable--small">
                <thead class="simpleTable__header">
                  <tr>
                    <th class="simpleTable__headerCell">職能</th>
                    <th class="simpleTable__headerCell">個人分數</th>
                    <th class="simpleTable__headerCell">
                      <div class="simpleTable__headerCellData">
                        <div>圖表呈現</div>
                        <div class="simpleTable__headerCellDataBar">1</div>
                        <div class="simpleTable__headerCellDataBar">2</div>
                        <div class="simpleTable__headerCellDataBar">3</div>
                        <div class="simpleTable__headerCellDataBar">4</div>
                        <div class="simpleTable__headerCellDataBar">5</div>
                      </div>                     
                    </th>
                    <th class="simpleTable__headerCell">職能說明</th>
                  </tr>
                </thead>
                <div class="simpleTable__divider"></div>
                <tbody class="simpleTable__body">
                  <tr class="simpleTable__row simpleTable__row--odd">
                    <td class="simpleTable__col">創意思維</td>
                    <td class="simpleTable__col">3</td>
                    <td class="simpleTable__col">
                      <div class="categoryProgBar categoryProgBar--long categoryProgBar--success"></div>
                    </td>
                    <td class="simpleTable__col">定義</td>
                  </tr>
                  <tr class="simpleTable__row simpleTable__row--odd">
                    <td class="simpleTable__col">邏輯分析</td>
                    <td class="simpleTable__col">3</td>
                    <td class="simpleTable__col">
                      <div class="categoryProgBar categoryProgBar--long categoryProgBar--success"></div>
                    </td>
                    <td class="simpleTable__col">定義</td>
                  </tr>
                  <tr class="simpleTable__row simpleTable__row--odd">
                    <td class="simpleTable__col">邏輯分析</td>
                    <td class="simpleTable__col">3</td>
                    <td class="simpleTable__col">
                      <div class="categoryProgBar categoryProgBar--long categoryProgBar--success"></div>
                    </td>
                    <td class="simpleTable__col">定義</td>
                  </tr>
                  <tr class="simpleTable__row simpleTable__row--odd">
                    <td class="simpleTable__col">邏輯分析</td>
                    <td class="simpleTable__col">3</td>
                    <td class="simpleTable__col">
                      <div class="categoryProgBar categoryProgBar--long categoryProgBar--success"></div>
                    </td>
                    <td class="simpleTable__col">定義</td>
                  </tr>
                  <tr class="simpleTable__row simpleTable__row--odd">
                    <td class="simpleTable__col">邏輯分析</td>
                    <td class="simpleTable__col">3</td>
                    <td class="simpleTable__col">
                      <div class="categoryProgBar categoryProgBar--long categoryProgBar--success"></div>
                    </td>
                    <td class="simpleTable__col">定義</td>
                  </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="modal__footer">
        <div class="modal__footerToolbar">
          <div class="btn btn--wide btn--lassoOutlined btn--rounded" @click="toggleViewReport = false">確定</div>
        </div>
      </div>
    </div>
    <div class="mask" v-show="toggleAddNewPersonnelModal || toggleSendInviteModal || toggleSendReportModal || toggleBasicDetailModal || toggleViewReport"></div>
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
        toggleViewReport: true,
        toggleBasicDetailEdit: false,
        modalView: 0,
        hoverTooltip: false
      }
    },
    methods: {
      drawChart() {
        const chart = new CanvasJS.Chart("graph", 
        {
          animationEnabled: true,
          data: [{
            type: "doughnut",
            startAngle: 60,
            innerRadius: 55,
            dataPoints: [
              { y: 67, label: "", color: "#6d9053" },
              { y: 28, label: "", color: "#f5b537" },
              { y: 10, label: "", color: "#bc5d5d" },
              { y: 10, label: "", color: "#eee" }
            ]
          }]
        });
        chart.render()
        return true
      },
      drawRadarChart() {
        const ctx = document.querySelector('#radar')
        const options = {
          legend: {
            display: false,
            boxWidth: 0
          },
          scale: {
            angleLines: {
                display: false
            },
            ticks: {
              beginAtZero: true,
              min: 0,
              max: 100,
              stepSize: 25
            },
            pointLabels: {
              fontSize: 15
            }
          },
          layout: {
            padding: {
              left: 0,
              right: 80,
              top: 0,
              bottom: 0
            }
          }
        }
        const data = {
          labels: [
            "創新思維",
            "邏輯分析",
            "溝通表達",
            "解決方案",
            "關係建立",
            "客戶導向"
          ],
          datasets: [{
            label: "",
            backgroundColor: "rgba(200,0,0,0.2)",
            data: [65, 75, 70, 80, 60, 80],
            pointRadius: 6,
            borderWidth: 1
          }]
        }
        const myRadarChart = new Chart(ctx, {
          type: 'radar',
          data,
          options
        });
      },
      handleRowClick() {
        this.toggleBasicDetailModal = true
      },
      handleOpenReport() {},
      async handleSendReport() {},
      async handleSendInvitationMultiple() {
        if(this.checked.length > 0) {
          this.toggleSendInviteModal = true
        }
      },
      async handleSendInvitation() {},
      async handleUpdatePage(type) {
        if(type === 1) {
          this.pageData.currentPage += 1
          await this.sendGetTableDataRequest()
        } else if(type === -1 && this.pageData.currentPage !== 1) {
          this.pageData.currentPage -=1
          await this.sendGetTableDataRequest()
        }
      },
      handleCheck(e, index) {
        if(e.target.checked) {
          this.checked = [...this.checked, index]
        } else {
          this.checked = this.checked.filter(item => item !== index)
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
          $axios.post('/', requestBody)
        } catch(e) {

        }
      }
    },
    async created() {},
    mounted() {
      this.drawChart()
      this.drawRadarChart()
    }
}
</script>

<style scoped lang="scss">
.toolbar {
  display: flex;
  align-items: center;
  margin-bottom: 34px;
  &__btn {
    margin-right: 8px;
  }
  &__tip {
    margin-left: auto;
  }
  &__search {
    margin-left: 17px;
  }
}
.search {
  display: flex;
  border: none;
  border-radius: 3px;
  background-color: #fff;
  &__input {
    background-color: #fff;
    padding: 11px 10px;
    border-right: 1px solid #dddddd;
    font-size: 14px;
    &:focus {
      outline: 1px solid #dddddd;
    }
  }
  &__btn {
    display: flex;
    align-items: center;
    padding: 7px;
    cursor: pointer;
  }
  &__btnIcon {
    width: 30px;
    height: 30px;
    background-color: #fff;
    background-image: url(/search@3x.png);
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }
}
.tip {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #282828;
  font-size: 12px;
  &__icon {
    width: 20px;
    height: 20px;
    background-image: url(/description@3x.png);
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }
  &__text {
    margin-left: 1px;
  }
}
.btn {
  padding: 10px 22px;
  font-size: 14px;
  cursor: pointer;
  border: 1px solid transparent;
  &--rounded {
    border-radius: 3px;
  }
  &--wide {
    padding-left: 32px;
    padding-right: 32px;
  }
  &--wide2x {
    padding-left: 62px;
    padding-right: 62px;
  }
  &--primary {
    color: #282828;
    background-color: #fff;
  }
  &--lasso {
    background-color: #e1a236;
    color: #fff;
  }
  &--lassoOutlined {
    background-color: #fff;
    color: #e1a236;
    border: 1px solid #e1a236;
  }
  &--disabled {
    color: #959595;
    background-color: #eaeaea;
    cursor: not-allowed;
  }
}
.table {
  width: 100%;
  &__header {
    background-color: #f4f8f9;
    color: #959595;
    font-size: 14px;
    padding: 0 28px;
    margin-bottom: 8px;
  }
  &__headerCell {
    padding: 0 28px;
    text-align: left;
  }
  &__divider {
    height: 8px;
    width: 100%;
    background-color: #f4f8f9;
  }
  &__row {
    border-radius: 3px;
    background-color: #fff;
    font-size: 12px;
    &--selected {
      border: 1px solid #e1a236;
    }
    &--selectable {
      cursor: pointer;
    }
  }
  &__cell {
    padding: 26px 28px;
    text-align: left;
    margin-bottom: 4px;
  }
  &__cellCircle {
    text-align: center;
  }
  &__footer {
    display: flex;
    margin-top: 15px;
  }
  &__pagination {
    display: flex;
    align-items: center;
    margin-left: auto;
    font-size: 14px;
  }
  &__paginationBtnbox {
    display: flex;
  }
  &__paginationBtn {
    margin: 0 7px;
    cursor: pointer;
    &::before {
      width: 14px;
      height: 14px;
      content: '';
      display: block;
      background-color: #fff;
      border-top: 7px solid transparent;
      border-right: 7px solid transparent;
      border-bottom: 7px solid transparent;
    }
    &--next {
      &::before {
        border-left: 7px solid #282828;
      }
    }
    &--prev {
      &::before {
        border-right: 7px solid #282828;
      }
    }
    &--disabledNext {
      cursor: not-allowed;
      &::before {
        border-left: 7px solid #b8b8b8;
      }
    }
    &--disabledPrev {
      cursor: not-allowed;
      &::before {
        border-right: 7px solid #b8b8b8;
      }
    }
  }
  &__toolbar {
    display: flex;
  }
}
.tableBtn {
  display: flex;
  align-items: center;
  margin-right: 42px;
  color: #282828;
  background-color: #fff;
  font-size: 12px;
  cursor: pointer;
  &__icon {
    width: 20px;
    height: 20px;
    background-color: #fff;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    margin-right: 1px;
  }
  &--iconSent {
    background-image: url(/icon_sent@3x.png);
  }
  &--iconInvite {
    background-image: url(/iocn_invite@3x.png);
  }
}
.circle {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #000;
  border: 1px solid #000;
  &--red {
    background-color: #dc6863;
    border: 1px solid #dc6863;
  }
  &--green {
    background-color: #dc6863;
    border: 1px solid #dc6863;
  }
  &--yellow {
    background-color: #febd0d;
    border: 1px solid #febd0d;
  }
  &--white {
    background-color: #fff;
    border: 1px solid #eee;
  }
}
.mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  z-index: 2;
  background-color: rgba(0,0,0,.37);
}
.modal {
  position: absolute;
  top: 0;
  z-index: 3;
  min-width: 600px;
  border-radius: 3px;
  background-color: #fff;
  &--wide {
    min-width: 1100px;
  }
  &--center {
    left: 50%;
    transform: translate(-50%, 5%);
  }
  &--right {
    right: 15px;
    max-width: 594px;
    min-height: 100vh;
  }
  &__banner {
    display: flex;
    margin: 0 -25px;
    padding: 20px 22px;
    background-color: rgba(149, 149, 149, .1);
    margin-bottom: 24px;
  }
  &__bannerIcon {
    width: 20px;
    height: 20px;
    background-image: url(/description@3x.png);
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    cursor: pointer;
  }
  &__bannerText {
    margin-left: 8px;
    font-size: 12px;
  }
  &__boxHeaderTitle {
    font-size: 14px;
    margin-bottom: 8px;
    background-color: #fff;
    text-align: left;
  }
  &__box {
    width: 130px;
    &--consequtive {
      margin-left: 16px;
    }
  }
  &__boxTitle {
    text-align: center;
    font-size: 12px;
    background-color: #eaeaea;
    padding: 7px 30px;
    border: 1px solid #eaeaea;
  }
  &__boxContent {
    background-color: #fff;
    text-align: center;
    font-size: 12px;
    padding: 7px 30px;
    border: 1px solid #eaeaea;
  }
  &__boxContentHighlight {
    font-size: 25px;
    &--success {
      color: #6d9053;
    }
    &--danger {
      color: #bc5d5d;
    }
    &--warning {
      color: #f5b537;
    }
  }
  &__title {
    display: flex;
    align-items: center;
    background-color: #e1a236;
    padding: 17px 16px;
    color: #fff;
    &--right {
      background-color: #fff;
      // padding-top: 0;
    }
  }
  &__titleText {
    font-size: 22px;
    &--focused {
      color: #fff;
    }
    &--blurred {
      color: rgba(255,255,255, .4);
    }
    > span {
      cursor: pointer;
    }
  }
  &__times {
    cursor: pointer;
    margin-left: auto;
    width: 21px;
    height: 21px;
    background-color: #e1a236;
    background-image: url(/close@3x.png);
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    &--right {
      background-color: #fff;
      background-image: url(/close_y@3x.png);
    }
  }
  &__body {
    padding: 19px 25px;
    max-height: 70vh;
    overflow: auto;
  }
  &__bodyTitle {
    margin-left: -4px;
    font-size: 16px;
    margin-bottom: 16px;
  }
  &__section {
    padding-bottom: 28px;
    margin-bottom: 26px;
    border-bottom: 1px solid #efefef;
  }
  &__sectionTitle {
    position: relative;
    display: flex;
    align-items: flex-end;
    font-size: 16px;
    color: #282828;
    margin-bottom: 18px;
    &:before {
      content: '';
      display: block;
      width: 2px;
      height: 15px;
      position: absolute;
      left: -7px;
      top: 6px;
      background-color: #e1a236;
    }
  }
  &__sectionSubtitle {
    margin-bottom: 8px;
    font-size: 14px;
    &--consequtive {
      margin-top: 43px;
    }
  }
  &__sectionTitleSubText {
    display: flex;
    align-items: center;
    margin-left: auto;
    color: #282828;
    font-size: 12px;
    &:hover {
      color: #e1a236;
    }
    &--clickable {
      cursor: pointer;
    }
  }
  &__sectionTitleSubTextIcon {
    width: 20px;
    height: 20px;
    background-image: url(/pen@3x.png);
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    cursor: pointer;
    &:hover {
    }
  }
  &__footer {
    display: flex;
    align-items: center;
    padding: 27px 25px;
  }
  &__footerToolbar {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  &__footerToolbarBtn {
    &--consequtive {
      margin-left: 16px;
    }
  }
  &__pp {
    font-size: 12px;
  }
  &__graph {
    position: relative;
    width: 550px;
    display: flex;
    align-items: center;
    padding-left: 10px;
  }
  &__graphDesc {
    margin-left: 20px;
  }
  &__graphDescTitle {
    font-size: 14px;
    font-weight: bold;
    &--success {
      color: #6d9053;
    }
    &--danger {
      color: #bc5d5d;
    }
    &--warning {
      color: #f5b537;
    }
  }
  &__graphDescBody {
    margin-top: 7px;
    font-size: 12px;
  }
  &__graphNumber {
    position: absolute;
    top: 50%;
    left: 19%;
    z-index: 10;
    transform: translate(0%, -50%);
    color: #6d9053;
    font-size: 28px;
    font-weight: bold;
    &--success {
      color: #6d9053;
    }
    &--danger {
      color: #bc5d5d;
    }
    &--warning {
      color: #f5b537;
    }
  }
  &__largeBanner {
    display: flex;
    padding: 36px 120px;
  }
  &__radarGraph {
    flex: 0 0 50%;
  }
  &__radarGraphDesc {
    flex: 0 0 50%;
  }
  &__radarGraphDescTitle {
    margin-bottom: 4px;
    &--consequtive {
      margin-top: 40px;
    }
  }
  &__radarGraphDescBody {
    margin: 0 -16px;
  }
}
.boxWrapper {
  display: flex;
}
.inputWrapper {
  &__row {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
  }
}
.divideWrapper {
  display: flex;
}
.boxDivider {
  margin-top: 43px;
}
.categoryDivider {
  display: flex;
  flex-wrap: wrap;
}
.input {
  flex: 0 0 50%;
  padding: 0 15px;
  &--block {
    flex: 0 0 100%;
  }
  &__label {
    font-size: 14px;
    &--required {
        &::before {
        content: '*';
        color: #e1a236;
      }
    }
    &--checkbox {
      margin-left: 9px;
    }
  }
  &__input {
    margin-bottom: 16px;
  }
  &__inputBox {
    width: 100%;
    font-size: 12px;
    border: 1px solid #c7c7c7;
    border-radius: 3px;
    padding: 6px 8px;
    margin-top: 4px;
    &:focus {
      outline: 1px solid #eee;
    }
  }
  &__checkbox {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  &__multipleInputsBox {
    display: flex;
    align-items: center;
  }
  &__multipleInputs {
    &--consequtive {
      flex: 0 0 40%;
      margin-left: 23px;
    }
  }
}
.list {
  width: 100%;
  &__listitem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 9px 0;
    margin: 0 16px;
    border-bottom: 1px solid #b8b8b8;
    &--last {
      border-bottom: 1px solid transparent;
    }
  }
  &__icon {
    width: 18px;
    height: 18px;
    // background-color: #000;
    background-image: url(/icon_earth@3x.png);
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    cursor: pointer;
  }
}
.simpleTable {
  width: 100%;
  text-align: left;
  font-weight: 300;
  &--small {
    font-size: 14px;
  }
  &__headerCell {
    padding: 0 16px;
    font-weight: 400;
  }
  &__headerCellData {
    display: flex;
    align-items: center;
  }
  &__headerCellDataBar {
    margin-left: 40px;
  }
  &__divider {
    height: 12px;
    width: 100%;
    background-color: transparent;
  }
  &__row {
    &--odd {
      background-color: rgba(244, 248, 249, .6);
    }
    &--even {
      background-color: #f4f8f9;
    }
  }
  &__col {
    padding: 12px 16px;
  }
}
.tooltip {
  position: absolute;
  left: -46px;
  z-index: 2;
  display: flex;
  width: 306px;
  height: 40px;
  background-image: url(/tips_description@3x.png);
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 14px;
  cursor: initial;
  &__parent {
    position: relative;
  }
  &__data {
    display: flex;
    align-items: center;
    margin-top: 4px;
    &--consequtive {
      margin-left: 10px;
    }
  }
  &__dataCircle {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #fff;
    &--danger {
      background: #dc6863;
    }
    &--warning {
      background: #febd0d;
    }
  }
  &__dataIcon {
    width: 16px;
    height: 16px;
    background-image: url(/icon_paper_a@3x.png);
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }
  &__dataText {
    margin-left: 1px;
    color: #fff;
    font-size: 12px;
    font-weight: 100;
  }
}
.categoryBox {
  width: 330px;
  border: 1px solid #f4f4f4;
  &--consequtive {
    margin-left: 12px;
  }
}
.categoryTitle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 340px;
  padding: 10px 12px;
  font-size: 12px;
}
.categoryProgBar {
  width: 217px;
  height: 8px;
  margin-left: 12px;
  border-radius: 10px;
  &--long {
    width: 290px;
  }
  &--success {
    background-color: #6d9053;
  }
  &--warning {
    background-color: #f5b537;
  }
  &--danger {
    background: #bc5d5d;
  }
}
.categoryNumber {
  margin-left: 12px;
}
.categoryFooter,
.categoryBody {
  font-size: 12px;
  padding: 10px 12px;
  &__title {
    margin-bottom: 4px;
  }
}
.categoryFooter {
  display: flex;
  flex-direction: column;
  &__pagination {
    margin-left: auto;
    display: flex;
  }
  &__prev {
    cursor: pointer;
    margin-right: 4px;
  }
  &__next {
    cursor: pointer;
    margin-left: 4px;
  }
}
</style>