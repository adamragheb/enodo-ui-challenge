<template>
  <div class="prop-opExpense">
    <div class="prop-opExpense_title">Operating Expenses</div>
    <ChartPie
      v-if="loaded"
      :height="300"
      :chartData="chartData"
      :chartOptions="chartOptions"
    ></ChartPie>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ChartPie from './ChartPie.vue';

@Component({
  components: {
    ChartPie
  }
})
export default class NavBar extends Vue {
  private loaded = false;

  private chartData = {
    datasets: [
      {
        data: [20, 30, 50, 10, 60, 80],
        backgroundColor: [
          '#B2DFDB',
          '#80CBC4',
          '#4DB6AC',
          '#26A69A',
          '#009688',
          '#009680'
        ]
      }
    ],
    labels: [
      'Salaries & Personnel',
      'Repairs & Maintenance',
      'Contract Services',
      'Marketing & Advertising',
      'Administrative',
      'Utilities'
    ]
  };
  private chartOptions: object = {
    responsive: true,
    maintainAspectRatio: false
  };

  private mounted() {
    setTimeout(() => {
      this.loaded = true;
    }, 500);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$blue-gray: #2c3e50;
.prop-opExpense {
  :nth-child(2) {
    padding-top: 0.5rem;
  }
  border-radius: 0.25rem;
  order: 3;
  padding: 1rem;
  margin-bottom: 1rem;
  flex-basis: calc(40% - 1rem);
  height: fit-content;
  .prop-opExpense_title {
    text-align: left;
    padding: 0 1rem 1rem;
    font-weight: 700;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: calc(100% + 2rem);
      left: -1rem;
      bottom: 0;
      display: block;
      border-top: 1px solid $blue-gray;
    }
  }
}
</style>
