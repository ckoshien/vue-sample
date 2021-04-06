<template>
  <div class="home">
    <div v-if="setupDone">
      <b-tabs content-class="mt-3">
        <b-tab title="打率" active>
          <vue-good-table
            :columns="columns"
            :rows="result.averageTop10"
            :sort-options="{
              enabled: true,
              initialSortBy: { field: 'average', type: 'desc' },
            }"
          >
          </vue-good-table>
        </b-tab>
        <b-tab title="打点">
          <vue-good-table
            :columns="columns"
            :rows="result.rbiTop10"
            :sort-options="{
              enabled: true,
              initialSortBy: { field: 'rbi', type: 'desc' },
            }"
          ></vue-good-table>
        </b-tab>
        <b-tab title="安打数">
          <vue-good-table
            :columns="columns"
            :rows="result.hitTop10"
            :sort-options="{
              enabled: true,
              initialSortBy: { field: 'hit', type: 'desc' },
            }"
          ></vue-good-table>
        </b-tab>
        <b-tab title="全打者">
          <vue-good-table
            :columns="columns"
            :rows="result.battingResultList"
            :sort-options="{
              enabled: true,
              initialSortBy: { field: 'average', type: 'desc' },
            }"
          ></vue-good-table>
        </b-tab>
        <b-tab title="全投手">
          <vue-good-table
            :columns="pColumns"
            :rows="result.pitchingResultList"
            :sort-options="{
              enabled: true,
              initialSortBy: { field: 'era', type: 'asc' },
            }"
          ></vue-good-table>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import { ResultModel } from "@/models/ResultModel";
import { columns, pColumns } from "@/models/table_columns";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    "vue-good-table": require("vue-good-table").VueGoodTable,
  },
})
export default class Home extends Vue {
  setupDone = false;
  columns!: any[];
  pColumns!: any[];
  result!: {};
  mounted() {
    console.log();
    this.getData();
  }
  async getData() {
    const response = await fetch(
      "https://jcbl-score.com/api/v2/league/cap_baseball/season/14"
    );
    const result = await response.json();
    this.setupDone = true;
    this.columns = columns;
    this.pColumns = pColumns;
    this.result = result;
    console.log(this.result);
  }
}
</script>
