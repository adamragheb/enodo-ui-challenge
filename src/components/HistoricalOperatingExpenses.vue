<template>
  <div class="prop-history">
    <div class="prop-history_title">Historical Operating Expenses</div>
    <table>
      <tr>
        <th></th>
        <th v-for="header in headers" :key="header">{{ header }}</th>
      </tr>
      <tr v-for="(row, i) in items" :key="i">
        <td class="td-name">{{ row.name }}</td>
        <td class="results" v-for="(value, x) in row.values" :key="x">
          {{ value }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {
  @Prop()
  private headers!: string[];

  @Prop()
  private items!: object[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$blue-gray: #2c3e50;
.prop-history {
  border-radius: 0.25rem;
  order: 4;
  padding: 1rem;
  flex-basis: calc(80% - 2rem);
  position: relative;
  right: -316px;
  top: -148px;
  margin-bottom: 50px;
  .prop-history_title {
    margin-bottom: 1.5rem;
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
  tr {
    th {
      text-align: right;
      padding-right: 2rem;
      padding-left: 2rem;
    }
    border-bottom: 1px solid lighten($blue-gray, 55%);
    > * {
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
    }
    .td-name {
      text-align: left;
      min-width: 400px;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
    .results {
      text-align: right;
      padding-right: 2rem;
      padding-left: 2rem;
    }
  }
}
</style>
