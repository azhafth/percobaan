import React ,{ Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
        super (props)
        this.state = {
            name:'Azha'
        }
        console.log('LifecycleB consturctor')
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount () {
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate shouldComponentUpdate')
        return true
      }
    
      getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
      }
    
      componentDidUpdate (){
        console.log('LifecycleB componentDiUpdate')
      }
    render(){
        console.log('LifecycleB render')
        return (
            <div>Lifecycle B </div>
        )
    }
}
export default LifecycleB