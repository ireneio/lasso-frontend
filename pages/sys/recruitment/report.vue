<template>
  <div class="modal--fullScreen">
    <div class="modal__title">
      <div class="modal__titleText"> 
        <span @click="modalView = 0" :class="{ 'modal__titleText--focused': modalView === 0, 'modal__titleText--blurred': modalView === 1 }">
          新增人員</span>&nbsp;&nbsp;|&nbsp;&nbsp;
        <span @click="modalView = 1" :class="{ 'modal__titleText--focused': modalView === 1, 'modal__titleText--blurred': modalView === 0 }">
          完整數據
        </span>
      </div>
    </div>
    <div class="modal__body modal__body--fullScreen" v-show="modalView === 0">
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
    <div class="modal__body modal__body--fullScreen" v-show="modalView === 1">
      <div class="modal__section modal__largeBanner">
        <div class="modal__radarGraph">
          <canvas id="radar"></canvas>
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
</template>

<script>
export default {
  data() {
    return {
      modalView: 0
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
    }
  },
  mounted() {
    this.drawChart()
    this.drawRadarChart()
  }
}
</script>
