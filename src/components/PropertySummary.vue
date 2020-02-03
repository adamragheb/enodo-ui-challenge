<template>
  <div class="left-side prop-sum">
    <div class="image">
      <img
        src="https://maps.googleapis.com/maps/api/streetview?size=400x200&pitch=10&fov=180&location=320%20N%20Canal%20St,%20Chicago,%20IL%2060606&key=AIzaSyApsGVNO-Ms2sIJM4PtmwC5VfeutsZSExo"
      />
      <!-- Name: {{property.name}} -->
      <div class="prop-info">
        <span class="prop-adderss prop-str">{{ property.address }}</span>
        <!-- street, city, zip code -->
        <div class="unit_address">
          <span class="prop-adderss prop-unit"
            >{{
              property.numberUnits ? property.numberUnits : "--"
            }}
            Units</span
          >
          <span class="prop-adderss prop-type"
            >Type:
            {{ property.propetyType ? property.propetyType : "--" }}</span
          >
          <span class="prop-adderss prop-year"
            >Year: {{ property.yearBuild ? property.yearBuild : "--" }}</span
          >
        </div>
        <span class="prop-address prop-avm"
          >&#36;{{ property.avm ? property.avm : "--" }} AVM</span
        >
      </div>
    </div>
    <LateralNav :options="propertySections" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LateralNav from './LateralNav.vue';

@Component({
  components: {
    LateralNav
  }
})
export default class NavBar extends Vue {
  @Prop()
  private property!: object;

  private propertySections: object[] = [
    { name: 'Comparables', selected: false },
    { name: 'Operating Expenses', selected: true },
    { name: 'Rent roll / Unit Mix', selected: false },
    { name: 'Amenities', selected: false },
    { name: 'Market', selected: false }
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.left-side {
  order: 1;
  flex-basis: 20%;
  max-width: 300px;
  justify-self: flex-start;
  margin-right: 1rem;
  margin-bottom: 1rem;
  overflow: hidden;
  text-align: left;
  .image {
    margin-bottom: 0.5rem;
    img {
      margin-bottom: 0.5rem;
      width: 100%;
      min-height: 175px;
      object-fit: cover;
      object-position: top center;
    }
    .prop-info {
      padding: 0 1rem;
      line-height: 1em;
      .prop-str {
        font-weight: 700;
      }
      .unit_address {
        margin-top: 0.75rem;
      }
      .prop-avm {
        display: block;
        margin-top: 0.75rem;
        font-weight: 700;
        color: #79ac48;
      }
    }
  }
}
</style>
