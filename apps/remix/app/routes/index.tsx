import { Button } from '@turbospace/react-library'
import { add } from '@turbospace/ts-library'

export default function Index() {
  return (
    <div>
      <p>{add(1, 2)}</p>
      <Button />
    </div>
  )
}
