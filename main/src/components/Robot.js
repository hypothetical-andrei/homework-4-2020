function Robot (props) {
  let {item} = this.props
  return (
    <div>
    Hello, my name is {item.name}. I am a {item.type} and weigh {item.mass}
    </div>
  )
}

export default Robot
