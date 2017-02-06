import {
  React,
  Link,
  mixin
} from '$lib/mix'

const aboutView = ({}) => {
  return (
    <div>
      <h2>about</h2>
      <Link key={'home'} to={'/'}>Back to Home</Link>
    </div>
  )
}

export default mixin(aboutView)