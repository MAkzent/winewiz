import Vue from 'vue'
import { Line } from 'vue-chartjs'

Vue.component('line-chart', {
  extends: Line,
  props: {
    data: { type: Object, default: () => {} },
    options: { type: Object, default: () => {} }
  },
  computed: {
    chartData() {
      return this.data
    }
  },
  watch: {
    data() {
      this._chart.destroy()
      this.renderLineChart()
    }
  },
  mounted() {
    this.renderLineChart()
  },
  methods: {
    renderLineChart() {
      this.renderChart(this.data, this.options)
    }
  }
})
