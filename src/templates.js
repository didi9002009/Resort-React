rcc
import React, { Component } from 'react'

export default class FileName extends Component {
  render() {
    return <div>$2</div>
  }
}
rafc
import React from 'react'

const $1 = () => {
  return <div>$0</div>
}

export default $1

rfce
import React from 'react'

function $1() {
  return <div>$0</div>
}

export default $1

rce
import React, { Component } from 'react'

export class FileName extends Component {
  render() {
    return <div>$2</div>
  }
}

export default $1

rcep
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class FileName extends Component {
  static propTypes = {}

  render() {
    return <div>$2</div>
  }
}

export default $1
rpc
import React, { PureComponent } from 'react'

export default class FileName extends PureComponent {
  render() {
    return <div>$2</div>
  }
}
rpcp
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class FileName extends PureComponent {
  static propTypes = {}

  render() {
    return <div>$2</div>
  }
}

rpce
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export class FileName extends PureComponent {
  static propTypes = {}

  render() {
    return <div>$2</div>
  }
}

export default FileName

rccp
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FileName extends Component {
  static propTypes = {
    $2: $3
  }

  render() {
    return <div>$4</div>
  }
}

rfcp
import React from 'react'
import PropTypes from 'prop-types'

function $1(props) {
  return <div>$0</div>
}

$1.propTypes = {}

export default $1

rfc
import React from 'react'

export default function $1() {
  return <div>$0</div>
}


rafcp
import React from 'react'
import PropTypes from 'prop-types'

const $1 = props => {
  return <div>$0</div>
}

$1.propTypes = {}

export default $1

rafce
import React from 'react'

const $1 = () => {
  return <div>$0</div>
}

export default $1
rmc
import React, { memo } from 'react'

export default memo(function $1() {
  return <div>$0</div>
})
rmcp
import React, { memo } from 'react'
import PropTypes from 'prop-types'

const $1 = memo(function $1(props) {
  return <div>$0</div>
})

$1.propTypes = {}

export default $1
rcredux
import React, { Component } from 'react'
import { connect } from 'react-redux'

export class FileName extends Component {
  render() {
    return <div>$4</div>
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FileName)
rcreduxp
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class FileName extends Component {
  static propTypes = {
    $2: $3
  }

  render() {
    return <div>$4</div>
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(FileName)
reduxmap
const mapStateToProps = state => ({})

const mapDispatchToProps = {}