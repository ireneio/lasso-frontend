<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <h2 class="mb-4">LASSO AI / 招募測評管理</h2>
          <v-card outlined>
            <v-toolbar flat>
              <v-btn color="primary">
                <v-icon>mdi-plus</v-icon> 新增人選
              </v-btn>
              <v-btn color="primary" class="ml-4">
                <v-icon>mdi-plus</v-icon> 批次匯入
              </v-btn>
              <v-btn
                color="primary"
                class="ml-4"
                :disabled="!selected.length"
                @click="handleToggleModal({ type: 'block' })"
              >
                <v-icon>mdi-plus</v-icon> 測評邀請
              </v-btn>
              <v-btn
                color="primary"
                class="ml-4"
                :disabled="!selected.length"
                @click="handleToggleModal({ type: 'block' })"
              >
                <v-icon>mdi-plus</v-icon> 寄送報告
              </v-btn>
              <v-spacer></v-spacer>
              <v-text-field
                flat
                solo-inverted
                hide-details
                prepend-inner-icon="mdi-magnify"
                label="搜尋人選"
                class="hidden-sm-and-down"
              ></v-text-field>
            </v-toolbar>
            <v-card-text>
              <v-data-table
                v-model="selected"
                :headers="headers"
                :items="items"
                :single-select="false"
                item-key="name"
                show-select
                class="elevation-1"
              >
                <template #item.aiExam>
                  <v-chip
                    :color="!selected.length ? 'primary' : 'default'"
                    dark
                    :style="
                      selected.length ? 'cursor: not-allowed' : 'cursor:pointer'
                    "
                    @click="handleToggleModal({ type: 'inline' })"
                  >
                    {{ '測評邀請' }}
                  </v-chip>
                </template>
                <template #item.mayoExam>
                  <v-chip
                    :color="!selected.length ? 'primary' : 'default'"
                    dark
                    :style="
                      selected.length ? 'cursor: not-allowed' : 'cursor:pointer'
                    "
                    @click="handleToggleModal({ type: 'inline' })"
                  >
                    {{ '測評邀請' }}
                  </v-chip>
                </template>
                <template #item.ddiExam>
                  <v-chip
                    :color="!selected.length ? 'primary' : 'default'"
                    dark
                    :style="
                      selected.length ? 'cursor: not-allowed' : 'cursor:pointer'
                    "
                    @click="handleToggleModal({ type: 'inline' })"
                  >
                    {{ '測評邀請' }}
                  </v-chip>
                </template>
                <template #item.tools>
                  <v-chip
                    :color="!selected.length ? 'primary' : 'default'"
                    dark
                    :style="
                      selected.length ? 'cursor: not-allowed' : 'cursor:pointer'
                    "
                    @click="handleToggleModal({ type: 'inline' })"
                  >
                    {{ '寄送報告' }}
                  </v-chip>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog
      v-model="toggleModal"
      width="800px"
      scrollable
      persistent
      retain-focus
    >
      <v-card>
        <v-card-title class="primary white--text">
          寄送測評邀請/報告
        </v-card-title>
        <v-card-text class="mt-4">
          <v-card outlined>
            <v-card-text> Placeholder Text </v-card-text>
          </v-card>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="default"
            class="ml-lg-4"
            @click="toggleModal = false"
            text
            large
          >
            關閉
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'

@Component({
  layout: 'default'
  // middleware: 'auth'
})
export default class SysIndex extends Vue {
  private headers: Array<any> = [
    { text: '姓名', value: 'name', align: 'start', sortable: true },
    { text: '信箱', value: 'email', align: 'start', sortable: true },
    { text: '部門', value: 'dept', align: 'start', sortable: true },
    { text: '應徵職缺', value: 'position', align: 'start', sortable: true },
    { text: '學歷', value: 'edu', align: 'start', sortable: true },
    { text: 'AI 測評', value: 'aiExam', align: 'start', sortable: false },
    { text: 'MAYO 測評', value: 'mayoExam', align: 'start', sortable: false },
    { text: 'DDI 測評', value: 'ddiExam', align: 'start', sortable: false },
    { text: '功能', value: 'tools', align: 'start', sortable: false }
  ]

  private items: Array<any> = [
    {
      name: 'Keiko',
      email: 'keiko@gmail.com',
      dept: 'Research & Development',
      position: 'RD',
      edu: 'Better than yours'
    },
    {
      name: 'Keiko1',
      email: 'keiko@gmail.com',
      dept: 'Research & Development',
      position: 'RD',
      edu: 'Better than yours'
    },
    {
      name: 'Keiko2',
      email: 'keiko@gmail.com',
      dept: 'Research & Development',
      position: 'RD',
      edu: 'Better than yours'
    },
    {
      name: 'Keiko3',
      email: 'keiko@gmail.com',
      dept: 'Research & Development',
      position: 'RD',
      edu: 'Better than yours'
    },
    {
      name: 'Keiko4',
      email: 'keiko@gmail.com',
      dept: 'Research & Development',
      position: 'RD',
      edu: 'Better than yours'
    },
    {
      name: 'Keiko5',
      email: 'keiko@gmail.com',
      dept: 'Research & Development',
      position: 'RD',
      edu: 'Better than yours'
    },
    {
      name: 'Keiko6',
      email: 'keiko@gmail.com',
      dept: 'Research & Development',
      position: 'RD',
      edu: 'Better than yours'
    },
    {
      name: 'Keiko7',
      email: 'keiko@gmail.com',
      dept: 'Research & Development',
      position: 'RD',
      edu: 'Better than yours'
    },
    {
      name: 'Keiko8',
      email: 'keiko@gmail.com',
      dept: 'Research & Development',
      position: 'RD',
      edu: 'Better than yours'
    },
    {
      name: 'Keiko9',
      email: 'keiko@gmail.com',
      dept: 'Research & Development',
      position: 'RD',
      edu: 'Better than yours'
    },
    {
      name: 'Keiko10',
      email: 'keiko@gmail.com',
      dept: 'Research & Development',
      position: 'RD',
      edu: 'Better than yours'
    }
  ]

  private selected: Array<any> = []

  private toggleModal: boolean = false

  private handleToggleModal({ type }: any): void {
    if (type && type === 'inline') {
      if (!this.selected.length) {
        this.toggleModal = true
      }
    } else if (type && type === 'block') {
      if (this.selected.length) {
        this.toggleModal = true
      }
    }
  }
}
</script>
