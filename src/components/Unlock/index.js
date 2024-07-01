import {useState} from 'react'

import {Cont, Image, Head, Button} from './styledComponents'

const Unlock = () => {
  const [keys, setKeys] = useState(false)

  const image = keys
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  const text = keys ? ' Your device is Unlocked' : 'Your device is Locked'

  const butt = keys ? 'Lock' : 'Unlock'
  const alttext = keys ? 'Unlock' : 'Lock'
  const onButtonClick = () => setKeys(prevStatus => !prevStatus)

  return (
    <Cont>
      <Image src={image} alt={alttext} />
      <Head>{text}</Head>
      <Button type="button" onClick={onButtonClick}>
        {butt}
      </Button>
    </Cont>
  )
}

export default Unlock
