<script>
import { defineComponent, h } from 'vue'

import { Line } from 'vue-chartjs'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  Chart as ChartJS,
  Tooltip,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
} from 'chart.js'

ChartJS.register(
  Tooltip,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  ChartDataLabels
)

export default defineComponent({
  name: 'LineChart',
  components: {
    Line
  },
  props: {
    values: {
      required: true,
      type: Array
    },
    periods: {
      required: true,
      type: Array
    },
    chartId: {
      type: String,
      default: 'line-chart'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 335
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const chartData = {
      labels: props.periods,
      datasets: [
        {
          cubicInterpolationMode: 'monotone',
          label: 'Цена',
          backgroundColor: '#f87979',
          data: props.values,
          borderColor: '#CBB04F',
          borderWidth: 2,
          pointBackgroundColor: '#CBB04F',
          pointHoverBackgroundColor: '#CBB04F',
          pointRadius: 4,
          pointBorderWidth: 0,
          pointHoverRadius: 8,
        }
      ]
    }

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 30,
          right: 30,
          top: 20,
          bottom: 20
        }
      },
      scales: {
        y: {
          display: false,
        },
        x: {
         ticks: {
            display: false,
          }
        }
      },
      plugins: {
        tooltip: {
          displayColors: false,
          intersect: false
        },
        datalabels: {
          color: '#000',
          align: 'start',
          anchor: 'left',
          font: {
            size: 16,
            weight: 700
          }
        }
      },
    }

    return () =>
      h('div',
        [
          h(Line, {
            class: 'tw-border-b-2 tw-border-gray900',
            chartData,
            chartOptions,
            chartId: props.chartId,
            width: props.width,
            height: props.height,
            cssClasses: props.cssClasses,
            styles: props.styles,
            plugins: props.plugins
          }),
          h('div', { class: 'tw-flex tw-justify-between tw-mt-3 tw-mb-4 tw-text-[#757575]' },
            [ h('p', props.periods[0]), h('p', props.periods[props.periods.length - 1]) ]
          )
        ]
      )
  }
})
</script>

<style>

</style>
