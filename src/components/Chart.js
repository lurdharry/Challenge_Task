import React from 'react'
import { Text, View, Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import * as d3 from 'd3'
import Svg, { Line, Circle, Path, G, Rect } from 'react-native-svg'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

const GRAPH_MARGIN = 20
const SVGHeight = 120
const SVGWidth = deviceWidth
const graphHeight = SVGHeight - 2 * GRAPH_MARGIN
const graphWidth = SVGWidth
// X scale point
const xDomain = data.map(item => item.label)
const xRange = [0, graphWidth]
const x = d3
  .scalePoint()
  .domain(xDomain)
  .range(xRange)
// .padding(1)

// Y scale linear
const yDomain = [0, d3.max(data, d => d.value)]
const yRange = [graphHeight, 0]
const y = d3
  .scaleLinear()
  .domain(yDomain)
  .range(yRange)

var area = d3
  .area()
  .x(function (d) {
    return x(d.label)
  })
  .y0(y(0))
  .y1(function (d) {
    return y(d.value)
  })
  .curve(d3.curveMonotoneX)

const Chart =(props)=>{
    return (
        <Svg width={deviceWidth} height={EStyleSheet.value('150')}>
          <Path d={area(data)} stroke='#2857ed' fill='#2857ed' strokeWidth={1} />
          {renderDots(props.data)}
        </Svg>
    )
  }

 const renderDots = (data)=>{
    return (
      <G>
        {data.map((item, index) => {
          return (
            <G>
              <Circle
                cx={x(item.label)}
                cy={y(item.value)}
                r={4.5}
                stroke='white'
                fill='#1536dc'
                strokeWidth={2}
              />
              <Line
                stroke='rgba(255,255,255,0.4)'
                strokeWidth={4}
                x1={x(item.label)}
                y1={200}
                x2={x(item.label)}
                y2={y(item.value) + 3}
              />
            </G>
          )
        })}
      </G>
    )
  }

export default Chart;

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
